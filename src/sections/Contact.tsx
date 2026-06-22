"use client";

import { CheckCircle, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="w-full max-w-3xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            Get in Touch
          </h2>
          <hr className="w-[60px] border-b-4 mx-auto my-4 border-custom-textblue" />
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact info pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <a
            href="mailto:asvicki2002@gmail.com"
            className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-md transition-all text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            <Mail className="w-4 h-4 text-sky-500" />
            asvicki2002@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/a-s-vignesh/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            linkedin.com/in/a-s-vignesh
          </a>

          <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Clock className="w-4 h-4 text-green-500" />
            Replies within 48h
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to opportunities
          </div>
        </div>

        {/* Form card */}
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 md:p-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="What's this about?"
                className="px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or just say hi..."
                className="px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.subject || !formData.message || loading}
              className="flex items-center justify-center gap-2 w-full py-3 bg-sky-500 hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {loading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 max-w-md w-full shadow-xl text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
              Message Sent!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Thanks for reaching out. I&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
