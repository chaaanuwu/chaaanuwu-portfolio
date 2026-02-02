import React from 'react';

export default function SiteLoader() {

  return (
    <div className="z-50 h-screen w-screen fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Signature text with handwritten effect */}
        <div className="relative">
          <svg width="400" height="120" viewBox="0 0 400 120" className="filter drop-shadow-2xl">
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="url(#textGradient)"
              filter="url(#glow)"
              style={{
                fontFamily: 'Brush Script MT, cursive',
                fontSize: '72px',
                fontWeight: 'bold',
                fontStyle: 'italic'
              }}
            >
              chaaanuwu
            </text>
            
            {/* Underline stroke animation */}
            <path
              d="M 50 85 Q 200 95 350 85"
              stroke="url(#textGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              filter="url(#glow)"
              strokeDasharray="300"
              strokeDashoffset="300"
              style={{
                animation: 'drawLine 2s ease-out forwards',
                animationDelay: '0.5s'
              }}
            />
          </svg>
          
          <style>{`
            @keyframes drawLine {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </div>

        {/* Spinning dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-400 rounded-full shadow-lg"
              style={{
                animation: `bounce 1.4s infinite ease-in-out`,
                animationDelay: `${i * 0.16}s`,
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'
              }}
            ></div>
          ))}
        </div>

        <style>{`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
              opacity: 0.5;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
}