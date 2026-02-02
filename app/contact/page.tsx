"use client";

import ContactCard from '@/components/ui/ContactCard';
import React from 'react';
import { useContacts } from "@/lib/hooks/useContacts";
import ContactMessage from '@/components/ContactMessage';
import { motion } from 'framer-motion';
import Loading from '../loading';

const ContactPage = () => {
  const { contacts, loading, error } = useContacts();

  // Show a loader until contacts are fully fetched
  if (loading) {
    return <Loading />;
  }

  // Show error if fetch failed
  if (error) {
    return <p className="text-red-500">Failed to load contacts</p>;
  }

  // Show message if no contacts
  if (contacts.length === 0) {
    return <p>No Contact Methods found</p>;
  }

  // ✅ Only render the main page after contacts are ready
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30, scale: 1, filter: "blur(3px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Page Header */}
      <div className="mb-4">
        <h2 className="text-4xl font-bold py-3">Contact</h2>
        <p className="text-gray-400">
          Get in touch with me through various platforms. Whether you have a question, want to collaborate, or just want to say hello, I'm always open to connecting!
        </p>
      </div>

      <hr className="w-full border-t-1 border-dashed border-gray-700 my-6" />

      {/* Contact Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            platform={contact.platform}
            title={contact.title}
            subtitle={contact.subtitle}
            url={contact.url}
            path={contact.path}
            bgColor={contact.bgColor}
          />
        ))}
      </div>

      <hr className="w-full border-gray-700 my-8" />

      {/* Direct Message Section */}
      <ContactMessage />
    </motion.div>
  );
};

export default ContactPage;