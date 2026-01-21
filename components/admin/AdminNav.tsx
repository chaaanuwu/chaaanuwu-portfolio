// components/AdminNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Award,
  Laptop,
  Newspaper,
  Code2,
  Settings,
  ChartBarIcon,
  Phone,
} from "lucide-react";

const AdminNav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", id: "dashboard", href: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Achievements", id: "achievements", href: "/admin/achievements", icon: <Award size={18} /> },
    { label: "Projects", id: "projects", href: "/admin/projects", icon: <Laptop size={18} /> },
    { label: "Blog Posts", id: "blog", href: "/admin/blog", icon: <Newspaper size={18} /> },
    { label: "Skills", id: "skills", href: "/admin/skills", icon: <Code2 size={18} /> },
    { label: "Contacts", id: "contacts", href: "/admin/contact", icon: <Phone size={18} /> },
  ];

  return (
    <aside className="flex flex-col bg-[#121826] w-64 min-h-screen overflow-y-auto fixed top-0 left-0">
      {/* Sidebar Header */}
      <div className="flex items-center gap-3 p-6">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
          <ChartBarIcon className="text-white w-6 h-6" />
        </div>
        <h1 className="text-white text-xl font-bold">Portfolio CMS</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 px-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
              pathname === item.href
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Settings at the bottom */}
      <div className="mt-auto p-2">
        <Link
          href="/admin/settings"
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
        >
          <Settings size={18} />
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default AdminNav;