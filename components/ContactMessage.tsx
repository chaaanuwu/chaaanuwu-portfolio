"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function ContactMessage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    emailjs
      .sendForm(serviceId, templateId, e.currentTarget, userId)
      .then(() => {
        toast.success("Got it! I’ll get back to you soon 😊");
        resetForm();
      })
      .catch(() => {
        toast.error("Error sending message. Please try again later.");
      });
  };

  return (
    <div className="w-full">
      <h3 className="text-xl text-gray-100 mb-8">
        Or send me a direct message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Name */}
          <div className="relative w-full">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder=" "
              required
              className="peer w-full border border-gray-300 dark:border-gray-600 rounded-lg px-5 pt-6 pb-2 text-base bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
            />
            <label
              htmlFor="name"
              className="absolute left-5 top-2 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--color-primary)]"
            >
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder=" "
              required
              className="peer w-full border border-gray-300 dark:border-gray-600 rounded-lg px-5 pt-6 pb-2 text-base bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
            />
            <label
              htmlFor="email"
              className="absolute left-5 top-2 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--color-primary)]"
            >
              Email
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="relative w-full">
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder=" "
            required
            className="peer w-full border border-gray-300 dark:border-gray-600 rounded-lg px-5 pt-6 pb-2 text-base bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
          />
          <label
            htmlFor="message"
            className="absolute left-5 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-[var(--color-primary)]"
          >
            Message
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg text-lg 
            bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] 
            text-white shadow-lg hover:opacity-75 active:scale-[0.99] 
            transition-transform"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}