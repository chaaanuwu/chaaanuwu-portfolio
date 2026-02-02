"use client";

import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useLayout } from "@/context/LayoutContext";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const { setNoSidebarMargin } = useLayout();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Disable margin as soon as this renders
  useEffect(() => {
    setNoSidebarMargin(true);
    return () => setNoSidebarMargin(false); // restore after leaving
  }, [setNoSidebarMargin]);

  return (
    <div className="h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{ backgroundColor: '#0A0F1C' }}>

        {/* Animated glowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large blue orb - top left */}
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
              top: '-10%',
              left: '-5%',
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />

          {/* Medium indigo orb - top right */}
          <div
            className="absolute w-80 h-80 rounded-full blur-3xl opacity-25"
            style={{
              background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
              top: '10%',
              right: '-5%',
              animation: 'pulse 5s ease-in-out infinite 1s'
            }}
          />

          {/* Large indigo orb - bottom right */}
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
              bottom: '-10%',
              right: '5%',
              animation: 'pulse 6s ease-in-out infinite 2s'
            }}
          />

          {/* Small blue orb - bottom left */}
          <div
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
              bottom: '20%',
              left: '10%',
              animation: 'pulse 5s ease-in-out infinite 1.5s'
            }}
          />

          {/* Center accent orb */}
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-15"
            style={{
              background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'pulse 7s ease-in-out infinite'
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-2xl w-full text-center">

          {/* 404 Number with animation */}
          <div
            className="relative mb-8 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-30px)'
            }}
          >
            <h1
              className="text-9xl font-bold tracking-tight relative"
              style={{
                color: '#FFFFFF',
                textShadow: '0 0 80px rgba(59, 130, 246, 0.6), 0 0 40px rgba(99, 102, 241, 0.4)'
              }}
            >
              404
            </h1>

            {/* Animated glowing ring around 404 */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                animation: 'rotate 20s linear infinite'
              }}
            >
              <div
                className="w-80 h-80 rounded-full"
                style={{
                  border: '2px solid rgba(59, 130, 246, 0.2)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(99, 102, 241, 0.2)'
                }}
              />
            </div>

            {/* Glowing underline */}
            <div
              className="h-1 w-48 mx-auto mt-4 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #3B82F6, #6366F1, transparent)',
                animation: 'shimmer 2s infinite',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }}
            />
          </div>

          {/* Error message */}
          <div
            className="transition-all duration-1000 delay-200 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Page Not Found
            </h2>
            <p
              className="text-lg mb-8 max-w-md mx-auto"
              style={{ color: '#9CA3AF' }}
            >
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </div>

          {/* Action buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: '#3B82F6',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(37, 99, 235, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3B82F6';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
              }}
            >
              <ArrowLeft size={20} />
              Go Back
            </button>

            <button
              onClick={() => window.location.href = '/'}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '2px solid #6366F1',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6366F1';
                e.currentTarget.style.borderColor = '#6366F1';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(99, 102, 241, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#6366F1';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.2)';
              }}
            >
              <Home size={20} />
              Home Page
            </button>
          </div>

          {/* Search suggestion */}
          {/* <div
            className="mt-12 transition-all duration-1000 delay-400 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: '#121826',
                border: '1px solid #374151',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.1)'
              }}
            >
              <Search size={16} style={{ color: '#9CA3AF' }} />
              <span style={{ color: '#9CA3AF', fontSize: '14px' }}>
                Try searching for what you need
              </span>
            </div>
          </div> */}

          {/* Floating glowing particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 3 === 0 ? '12px' : '8px',
                  height: i % 3 === 0 ? '12px' : '8px',
                  backgroundColor: i % 2 === 0 ? '#3B82F6' : '#6366F1',
                  opacity: 0.4,
                  boxShadow: i % 2 === 0
                    ? '0 0 20px rgba(59, 130, 246, 0.8)'
                    : '0 0 20px rgba(99, 102, 241, 0.8)',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* CSS animations */}
        <style jsx>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      </div>
  );
}