"use client";

import React from "react";

const Contact = () => {
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

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div data-aos="fade-up" data-aos-delay="200">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full px-4 py-2.5 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 focus:outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="mt-6" data-aos="fade-up" data-aos-delay="300">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
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
                className="px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]"
              >
                Send Message
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
                href="mailto:a.s.vignesh.work@gmail.com"
                className="text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 underline transition-colors"
              >
                a.s.vignesh.work@gmail.com
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
    </section>
  );
};

export default Contact;
