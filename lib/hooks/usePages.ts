"use client";

import { useState, useEffect } from "react";

export function usePages() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPages() {
      try {
        const res = await fetch("/api/pages");
        const data = await res.json();
        setPages(
          data.map((c: String) => ({
            ...c,
          }))
        );
      } catch (err: any) {
        console.error("Error fetching pages:", err);
        setError(err.message || "Failed to fetch pages");
      } finally {
        setLoading(false);
      }
    }

    fetchPages();
  }, []);

  return { pages, loading, error };
}