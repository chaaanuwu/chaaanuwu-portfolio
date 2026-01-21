"use client";

import { useEffect, useState } from "react";

export function useSources() {
    const [source, setSource] = useState<any[]>([]);
    const [srcLoading, setSrcLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSource() {
            try {
                const res = await fetch("/api/src");
                const data = await res.json();
                setSrcLoading(false);
                setSource(data);
            } catch (err: any) {
                console.error("Error fetching source: ", err);
                setErr(err.message || "Failed to fetch source");
            }
        }

        fetchSource();

    }, []);

    return { source, srcLoading, err };
}