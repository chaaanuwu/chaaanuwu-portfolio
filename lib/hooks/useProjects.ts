"use client";

import { useEffect, useState } from "react";

export function useProjects() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch("/api/projects");
                const data = await res.json();
                setProjects(data);
                setLoading(false);
            } catch (err: any) {
                console.error("Error fetching projects:", err);
                setError(err.message || "Failed to fetch projects");
            }
        }

        fetchProjects();

    }, []);

    return { projects, loading, error };
}