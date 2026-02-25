"use client";

import { CheckCircle } from "lucide-react";
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
    finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="mt-8">
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="container mx-auto max-w-4xl bg-custom-blue shadow-custom-dark dark:bg-custom-darkblue dark:shadow-custom-light rounded-lg p-8 md:p-12 overflow-hidden">
          {/* Header Section */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
              I’d love to hear from you! Fill out the form below, and I’ll get
              back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div data-aos="fade-up" data-aos-delay="200">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2 block w-full px-4 py-2.5 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 focus:outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div data-aos="fade-up" data-aos-delay="200">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  value={formData.email}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-2 block w-full px-4 py-2.5 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 focus:outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mt-6" data-aos="fade-up" data-aos-delay="300">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="Subject"
                value={formData.subject}
                required
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="mt-2 block w-full px-4 py-2.5 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 focus:outline-none transition-all"
                placeholder="Enter the subject of your message"
              />
            </div>

            {/* Message Input */}
            <div className="mt-6" data-aos="fade-up" data-aos-delay="300">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                name="Message"
                value={formData.message}
                required
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="mt-2 block w-full px-4 py-2.5 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 focus:outline-none transition-all"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div
              className="mt-8 text-center"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <button
                type="submit"
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.subject ||
                  loading
                }
                className="px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div
            className="mt-10 text-center text-gray-600 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p className="mb-3">
              Or reach out directly via email:{" "}
              <a
                href="mailto:asvicki2002@gmail.com"
                className="text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 underline transition-colors"
              >
                asvicki2002@gmail.com
              </a>
            </p>
            <p>
              Or connect with me on{" "}
              <a
                href="https://linkedin.com/in/A-S-Vignesh"
                className="text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 underline transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 max-w-md w-full shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle
                  size={32}
                  className="text-green-600 dark:text-green-400"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Thanks for contacting. I’ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] mt-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
