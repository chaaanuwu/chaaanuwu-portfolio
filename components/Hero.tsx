"use client";

import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useContacts } from '@/lib/hooks/useContacts';
import { useSources } from '@/lib/hooks/useSources';
import SiteLoader from './SiteLoader';
import Link from 'next/link';

interface HeroProps {
  onEnter: () => void;
  hidden?: boolean;
}

export default function Hero({ onEnter, hidden }: HeroProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [animate, setAnimate] = React.useState(false);

  const { contacts, loading } = useContacts();
  
  const hasLoadedOnce = React.useRef(false);

  React.useEffect(() => {
    if (!loading) {
      hasLoadedOnce.current = true;
    }
  }, [loading]);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      onEnter();
    }, 500);
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hasLoadedOnce.current && (loading)) {
    return <SiteLoader />;
  }

  return (
    <section
      id="hero-section"
      className={`absolute top-0 left-0 right-0 z-50 h-screen bg-[#0A0F1C] flex items-center justify-center transition-all duration-500 ease-in-out
        ${animate || hidden ? "translate-y-[-100vh] opacity-100 pointer-events-none" : "translate-y-0 opacity-100"}
      `}
    >
      <div className="h-screen z-50 flex items-center justify-center overflow-hidden absolute top-0 left-0 right-0">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              backgroundColor: '#3B82F6',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              backgroundColor: '#6366F1',
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              `linear-gradient(#374151 1px, transparent 1px),
               linear-gradient(90deg, #374151 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center space-y-8">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-full blur-md opacity-75 animate-pulse"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #6366F1)' }}
            />
            <div className="relative w-32 h-32 rounded-full border-4 overflow-hidden"
              style={{ borderColor: '#121826' }}>
              <img
                src="/hero.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border animate-pulse"
            style={{ borderColor: '#6366F1', backgroundColor: 'rgba(99,102,241,0.1)' }}
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-gray-400">Learning Through Building</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-bold">
            Chanuka Senevirathne
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg,#3B82F6,#6366F1)' }}>
              Creative Developer
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting seamless and engaging digital experiences.
          </p>

          {/* CTA */}
          <button
            onClick={handleClick}
            className="px-8 py-4 rounded-lg bg-blue-500 text-white font-semibold hover:scale-105 transition"
          >
            View My Work <ArrowRight className="inline ml-2" />
          </button>

          {/* Socials */}
          <div className="flex gap-5 justify-center pt-4">
            {contacts.map((contact, i) => {
              const platform = ["Email", "LinkedIn", "Github"];
              const Icon = [Mail, Linkedin, Github][platform.indexOf(contact.platform)];
              if (!Icon) return null;
              return (
                <Link href={contact.url} key={contact.platform || i}>
                  <div
                    className="group flex items-center justify-center w-12 h-12 rounded-full
                     border border-gray-700 bg-[rgba(18,24,38,0.6)]
                     transition-all duration-300
                     hover:scale-110 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Icon
                      className="w-6 h-6 text-gray-400 transition-colors duration-300
                       group-hover:text-blue-500"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
