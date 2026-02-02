"use client";

import CertificateCard from "@/components/ui/CertificateCard";
import { useCertificates } from "@/lib/hooks/useCertificates";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "../loading";

export default function AchievementsPage() {
  const { certificates, loading, error } = useCertificates();
  const [filteredCertificates, setFilteredCertificates] = useState(certificates);

  useEffect(() => {
    setFilteredCertificates(certificates);
  }, [certificates]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = certificates.filter(
      (cert) =>
        cert.name.toLowerCase().includes(searchTerm) ||
        cert.issuer.toLowerCase().includes(searchTerm) ||
        cert.issueDate.toLowerCase().includes(searchTerm)
    );
    setFilteredCertificates(filtered);
  };

  if (loading)
    return (
      <Loading />
    );

  if (error)
    return (
      <div className="text-red-500 py-10 text-center font-medium">{error}</div>
    );

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
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold py-3">Achievements</h2>
        <p className="text-gray-400">
          A curated display of certifications and badges that illustrate my
          journey of growth, learning, and achievement.
        </p>
      </div>

      <hr className="w-full border-t-1 border-dashed border-gray-700 my-6" />

      {/* Certificates */}
      {certificates.length === 0 ? (
        <p className="text-gray-400">No certificates found.</p>
      ) : (
        <div className="w-full">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
            <h4 className="text-gray-400">Total: {certificates.length}</h4>
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                onChange={handleSearch}
                placeholder="Search..."
                className="w-full p-2 pl-10 rounded bg-[#1E2233] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCertificates.map((cert) => (
              <CertificateCard
                key={cert.credentialUrl}
                title={cert.name}
                issuer={cert.issuer}
                date={cert.issueDate}
                certUrl={cert.credentialUrl}
                imageUrl={cert.imageUrl}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}