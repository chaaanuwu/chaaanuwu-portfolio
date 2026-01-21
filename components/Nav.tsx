"use client";

import { useSources } from "@/lib/hooks/useSources";
import { ArrowUpRight, Award, House, Laptop, Phone, Menu, X, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { source, srcLoading, err } = useSources();

  const navItems = [
    { label: "Home", id: "home", icon: <House size={18} />, href: "/" },
    { label: "About", id: "about", icon: <UserRound size={18} />, href: "/about" },
    { label: "Achievements", id: "achievements", icon: <Award size={18} />, href: "/achievements" },
    { label: "Projects", id: "projects", icon: <Laptop size={18} />, href: "/projects" },
    { label: "Contact", id: "contact", icon: <Phone size={18} />, href: "/contact" },
  ];

  const activeTab =
    navItems.find((item) => {
      if (item.href === "/") return pathname === "/";
      if (item.href === "/projects") return pathname.startsWith("/projects");
      return pathname === item.href;
    })?.id || "home";


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div>
      {/* Mobile Header with Hamburger */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#121826] shadow-lg sticky top-0 left-0 w-full z-50 ">
        <h2 className="text-lg font-semibold">Chanuka Senevirathne</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-72 bg-[#121826] shadow-lg p-6 flex flex-col items-center text-[var(--color-text)] fixed top-0 left-0 h-screen z-40 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block overflow-y-auto`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center my-8">
          <Image
            src="/dp.jpg"
            alt="Profile Picture"
            width={120}
            height={120}
            priority
            draggable={false}
            className="rounded-full border-4 border-indigo-500 shadow-md transition-transform duration-200 hover:scale-105"
          />
          <div className="mt-4 flex flex-row items-center justify-center space-x-2">
            <h2 className="text-lg font-semibold text-center tracking-wide">
              Chanuka Senevirathne
            </h2>
            <svg viewBox="0 0 100 100" className="w-4 h-4" aria-hidden="true">
              <circle cx="50" cy="50" r="45" fill="#3B82F6" />
              <path
                d="M30,50 L45,65 L70,35"
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="mt-1 flex items-center space-x-1 text-gray-500 cursor-pointer hover:text-gray-400">
            {Array.isArray(source) && (
              <a
                href={source.find((s: any) => s.title === "Resume")?.srcUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <h4 className="text-sm">Resume</h4>
                <ArrowUpRight size={12} />
              </a>
            )}
          </div>

        </div>

        <hr className="w-full border-gray-700 mb-6" />

        {/* Navigation */}
        <nav className="flex flex-col space-y-2 w-full">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href || "#"}
              onClick={() => setIsOpen(false)} // close mobile nav
              className={`group w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${activeTab === item.id
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:bg-indigo-500/40 hover:text-white hover:scale-105 transition-all duration-300"
                }`}
            >
              <span className="transform transition-transform duration-1000 hover:-rotate-12">
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}