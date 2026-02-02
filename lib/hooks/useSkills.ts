"use client";

import { useState, useEffect } from "react";

export function useSkills() {
  const [skills, setSkills] = useState<any[]>([]);
  const [skillsLoading, setskillsLoading] = useState(true);
  const [skillsError, setskillsError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch("/api/skills");
        const data = await res.json();
        setSkills(
          data.map((c: String) => ({
            ...c,
          }))
        );
      } catch (err: any) {
        console.error("Error fetching skills:", err);
        setskillsError(err.message || "Failed to fetch skills");
      } finally {
        setskillsLoading(false);
      }
    }

    fetchSkills();
  }, []);

  return { skills, skillsLoading, skillsError };
}