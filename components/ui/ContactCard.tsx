"use client";

import { useState } from "react";

type ContactCardProps = {
  platform: string;
  title: string;
  subtitle: string;
  url: string;
  path: string;
  bgColor: string;
};

export default function ContactCard({
  platform,
  title,
  subtitle,
  url,
  path,
  bgColor,
}: ContactCardProps) {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`contact-card relative p-5 md:p-6 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out
    transform animate-slideUp
    ${platform.toLowerCase() === "email" ? "md:col-span-2" : "col-span-1"}`}
      style={{
        backgroundImage: (() => {
          const colors = bgColor.match(/#([0-9A-Fa-f]{6})/g);
          return colors ? `linear-gradient(to bottom right, ${colors.join(", ")})` : undefined;
        })(),
        ["--x" as any]: pos.x,
        ["--y" as any]: pos.y,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x: `${x}%`, y: `${y}%` });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Hover glow */}
      {hover && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{
            background: `radial-gradient(circle 540px at var(--x) var(--y), rgba(255,255,254,0.1), transparent 80%)`,
          }}
        />
      )}

      {/* Background Logo */}
      <div className="logo-background absolute top-1/2 -right-4 transform -translate-y-1/2 opacity-20 z-10 pointer-events-none">
        <svg
          className="w-32 h-32 md:w-36 md:h-36"
          viewBox="0 0 24 24"
          fill="rgba(255, 255, 255, 0.3)"
        >
          <path d={path} />
        </svg>
      </div>

      {/* Card Content */}
      <div className="card-content relative z-20 flex flex-col md:flex-row justify-between items-center">
        <div className="card-text mb-3 md:mb-0 text-center md:text-left">
          <h3 className="text-white text-xl md:text-2xl mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-white text-opacity-80 text-base mb-3 md:mb-4">
            {subtitle}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button inline-flex items-center gap-2 bg-white/15 backdrop-blur-lg border border-white/20 text-white py-2 px-5 rounded-xl text-base transition-all duration-300 ease-in-out hover:bg-white/25 hover:translate-x-1"
          >
            Go to {platform}
            <span className="transition-transform duration-300 ease-in-out">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}