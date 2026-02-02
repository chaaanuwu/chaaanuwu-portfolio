'use client';

import { useEffect, useState } from 'react';
import NextTopLoader from 'nextjs-toploader';
import HeaderWrapper from '@/components/HeaderWrapper';
import Hero from '@/components/Hero';
import { usePathname } from 'next/navigation';
import { useLayout } from "@/context/LayoutContext";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showHero, setShowHero] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const { noSidebarMargin } = useLayout();

  // Hydration guard
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const shouldShowHero = pathname === '/';

  return (
    <div className="relative min-h-screen bg-[var(--color-background)] text-white overflow-hidden">
      <NextTopLoader color="#6366F1" height={3} showSpinner={false} />

      {/* --- Main Layout --- */}
      <div
        className={`flex flex-col md:flex-row min-h-screen transition-opacity duration-700 ${showHero && shouldShowHero ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <HeaderWrapper />
        <main
          className={`min-h-screen relative min-w-0 ${noSidebarMargin ? "flex-1 p-0 m-0" : "flex-1 p-6 md:px-20 md:ml-72"
            }`}
        >
          {children}
        </main>

      </div>

      {/* --- Hero Overlay --- */}
      {shouldShowHero && (
        <Hero
          onEnter={() => setShowHero(false)}
          hidden={!showHero}
        />
      )}

      {/* --- Toast Notifications --- */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

