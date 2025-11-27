"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import DOMPurify from "dompurify";

import Image from "next/image";
import { Trash2, X } from "lucide-react";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  options?: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chatMessages");
      if (saved) return JSON.parse(saved) as ChatMessage[];
    }
    return [
      {
        sender: "bot",
        text: `
      <p><strong>Hi! I'm Rani</strong> - Vignesh’s friendly AI guide 😊</p>
      <p>You can ask me anything about <strong>Vignesh A S</strong> - his skills, projects, experience, or portfolio.</p>
      <p>I'm here to help you explore his work!</p>
    `,
      },
    ];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chatMessages");
      if (saved) {
        setMessages(JSON.parse(saved) as ChatMessage[]);
      }
    }
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile && isOpen) {
      // Freeze page behind modal
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else if(isMobile) {
      // Restore scroll
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isOpen]);

  // useEffect(() => {
  //   const isMobile = window.innerWidth < 768; // Tailwind md breakpoint

  //   if (isMobile && isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen]);


  const messagesEndRef = useRef<HTMLDivElement | null>(null);

const renderHTML = (html: string) => {
  const clean = DOMPurify.sanitize(html, {
    ADD_ATTR: ["target", "rel", "class"], // allow class
  });

  const styled = clean.replace(
    /<a\b([^>]*)>/g,
    `<a$1 class="text-blue-500 underline hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">`
  );

  return <div dangerouslySetInnerHTML={{ __html: styled }} />;
};


  // Auto-scroll to bottom when messages change
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, scrollToBottom]);

  // Save to localStorage
  useEffect(() => {
    if (!isTyping && typeof window !== "undefined") {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [isTyping]);

  const sendMessageToAI = async (
    text: string,
    onUpdate: (fullText: string) => void
  ): Promise<string | undefined> => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.body) {
      console.error("Response body is null");
      return;
    }

    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await res.json();
      const msg = data.message || "Something went wrong.";
      onUpdate(`<p>${msg}</p>`);
      return msg;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      // Merge chunks safely
      buffer += chunk;

      // Live update the bot message
      onUpdate(buffer);
    }

    return buffer; // final clean full text
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    if (textareaRef.current) {
      textareaRef.current.style.height = "40px";
    }

    setUserInput("");
    setIsTyping(true);

    const botMessage: ChatMessage = { sender: "bot", text: "" };

    setMessages((prev) => [...prev, { sender: "user", text }, botMessage]);

    try {
      await sendMessageToAI(text, (fullText) => {
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated.length - 1;

          // IMPORTANT: REPLACE, DON'T APPEND
          updated[last].text = fullText;

          return updated;
        });
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: `
      <p><strong>Hi! I'm Rani</strong> - Vignesh’s friendly AI guide 😊</p>
      <p>You can ask me anything about <strong>Vignesh A S</strong> - his skills, projects, experience, or portfolio.</p>
      <p>I'm here to help you explore his work!</p>
    `,
      },
    ]);
    setUserInput("");
    localStorage.removeItem("chatMessages");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:scale-105 border border-gray-200 
            dark:border-gray-700 transition-transform ${
          isOpen ? "hidden md:block" : "block"
        }`}
        aria-label="Chat"
      >
        <Image
          className="w-12 h-12"
          width={48}
          height={48}
          src="/images/chatapp/chat-balloon.png"
          alt="Chat"
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:inset-auto md:static">
          <div
            className="bg-white dark:bg-gray-800 border border-gray-200 
            dark:border-gray-700 rounded-lg shadow-xl flex flex-col
            md:w-90 md:h-[80vh] md:absolute md:bottom-20 md:right-0
            w-full h-full"
          >
            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <Image
                src={"/images/chatapp/rani.png"}
                width={48}
                height={48}
                alt="Rani image"
                className="rounded-full"
              />
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Rani - Vignesh’s Friend
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={handleClearChat}
                  title="Clear chat"
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Trash2
                    size={18}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X size={18} className="text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.sender === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 ${
                      msg.sender === "bot"
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        : "bg-sky-500 text-white"
                    }`}
                  >
                    <div className="text-sm">{renderHTML(msg.text)}</div>
                  </div>
                </div>
              ))}
              {/* {isTyping && (
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )} */}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t dark:border-gray-700 flex items-center gap-2">
              <textarea
                ref={textareaRef}
                value={userInput}
                onChange={(e) => {
                  setUserInput(e.target.value);

                  // Auto-grow height logic
                  const el = e.target;
                  el.style.height = "auto";
                  el.style.height = Math.min(el.scrollHeight, 120) + "px"; // 120px ≈ 3 rows
                }}
                onKeyDown={(e) => {
                  if (isTyping) {
                    e.preventDefault(); // block typing while bot is responding
                    return;
                  }
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(userInput);
                  }
                }}
                placeholder="Ask Rani…"
                rows={1}
                className="
                  flex-1 resize-none p-2 rounded bg-gray-100 dark:bg-gray-700 
                  text-black dark:text-white outline-none
                  max-h-[120px] overflow-y-auto
                "
                style={{ height: "40px" }} // default height = 1 row
              />

              <button
                onClick={() => handleSendMessage(userInput)}
                disabled={isTyping || userInput.trim() === ""}
                className="
                p-2 px-4 bg-sky-500 text-white rounded 
                hover:bg-sky-600 transition disabled:opacity-50
              "
              >
                Send
              </button>
            </div>
            <div className="px-3 pb-2">
              <p className="text-black dark:text-white text-xs text-center">
                AI may make mistakes. please verify important details.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
