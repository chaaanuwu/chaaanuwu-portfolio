"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type CertificateCardProps = {
  title: string;
  issuer: string;
  date: string;
  certUrl: string;
  imageUrl: string;
};

function formatMonthYear(dateStr: string): string {
  const parts = dateStr.split("/");
  if (parts.length === 3) {
    const [day, month, year] = parts.map(Number);
    const parsed = new Date(year, month - 1, day);
    return parsed.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }
  return dateStr;
}

export default function CertificateCard({
  title,
  issuer,
  date,
  certUrl,
  imageUrl,
}: CertificateCardProps) {
  const formattedDate = formatMonthYear(date);

  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
      <div className="relative h-36 group">
        <Link href={certUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageUrl}
            alt={`Certificate for ${title}`}
            fill
            className="rounded-t-lg object-cover"
            sizes="(max-width: 640px) 100vw, 14rem"
            priority
            draggable={false}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/80 rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:cursor-pointer duration-300">
            <span className="text-white text-sm flex items-center gap-1">
              View Credential <ArrowRight />
            </span>
          </div>
        </Link>
      </div>

      <div
        className="p-4 bg-gray-900 text-white relative overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setPos({ x: `${x}%`, y: `${y}%` });
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ["--x" as any]: pos.x,
          ["--y" as any]: pos.y,
        }}
      >
        {/* Hover glow */}
        {hover && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 120px at var(--x) var(--y), rgba(27,2,163,0.5), transparent 80%)`,
            }}
          />
        )}

        <h1 className="text-lg font-semibold mb-1 truncate">{title}</h1>
        <p className="text-sm text-gray-300 mb-2 truncate">{issuer}</p>
        <div className="text-gray-400 text-xs">
          <p>Issued on</p>
          <p className="font-medium text-white">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}