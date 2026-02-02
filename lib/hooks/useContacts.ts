"use client";

import { useState, useEffect } from "react";

export function useContacts() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch("/api/contacts");
        const data = await res.json();
        setContacts(
          data.map((c: any) => ({
            ...c,
          }))
        );
      } catch (err: any) {
        console.error("Error fetching contacts:", err);
        setError(err.message || "Failed to fetch contacts");
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, []);

  return { contacts, loading, error };
}