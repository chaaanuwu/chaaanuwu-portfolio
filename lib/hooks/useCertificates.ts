"use client";

import { useState, useEffect } from "react";

export function useCertificates() {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const res = await fetch("/api/certificates");
        const data = await res.json();
        setCertificates(
          data.map((c: any) => ({
            ...c,
            issueDate: new Date(c.issueDate).toLocaleDateString(),
          }))
        );
      } catch (err: any) {
        console.error("Error fetching certificates:", err);
        setError(err.message || "Failed to fetch certificates");
      } finally {
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  return { certificates, loading, error };
}