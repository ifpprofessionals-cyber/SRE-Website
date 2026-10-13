import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const ParallaxBackground: React.FC = () => {
  const { theme } = useTheme();
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      
      setScrollProgress(progress);
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      if (video.duration && !isNaN(video.duration)) {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }

        rafIdRef.current = requestAnimationFrame(() => {
          const targetTime = progress * video.duration;
          if (Math.abs(video.currentTime - targetTime) > 0.02) {
            video.currentTime = targetTime;
          }

          const scrollDelta = Math.abs(scrollY - lastScrollYRef.current);
          if (scrollDelta > 2 && video.paused) {
            video.play().catch(() => {});
          }
          lastScrollYRef.current = scrollY;
        });
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
        if (video && !video.paused) {
          video.pause();
        }
      }, 140);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  const translateY = scrollProgress * 260;
  const rotateX = Math.sin(scrollProgress * Math.PI) * 5;
  const scale = 1.08 + scrollProgress * 0.05;

  return (
    <div 
      aria-hidden="true"
      style={{ perspective: '1600px' }}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full h-full select-none transition-colors duration-500"
    >
      {/* 3D Tilted Spatial Video Plane */}
      <div
        className="absolute -top-[15%] left-0 w-full h-[135%] will-change-transform transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, -${translateY}px, 0) scale(${scale}) rotateX(${rotateX}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <video
          ref={videoRef}
          src="/videos/demo-slide.mp4"
          muted
          playsInline
          preload="auto"
          className={`w-full h-full object-cover object-center filter transition-all duration-300 ${
            theme === 'dark'
              ? isScrolling
                ? 'opacity-85 brightness-105 contrast-125 saturate-135'
                : 'opacity-70 brightness-100 contrast-120 saturate-130'
              : isScrolling
                ? 'opacity-65 brightness-95 contrast-135 saturate-125'
                : 'opacity-55 brightness-90 contrast-130 saturate-120'
          }`}
        />

        {/* Dynamic Scanline & Kinetic Hex Grid for Fitness & Science Education */}
        <div 
          className={`absolute inset-0 pointer-events-none mix-blend-overlay ${
            theme === 'dark' ? 'opacity-25' : 'opacity-15'
          }`}
          style={{
            backgroundImage: `radial-gradient(rgba(37, 117, 220, 0.3) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Floating 3D Geometric Depth Rings (Isometric Depth Cues) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] border border-blue-500/20 rounded-full pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(-50%, ${scrollProgress * 140}px, -100px) rotateX(65deg) rotateZ(${scrollProgress * 90}deg)`,
          transformStyle: 'preserve-3d',
        }}
      />
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[950px] border border-dashed border-red-500/20 rounded-full pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(-50%, ${scrollProgress * 200}px, -200px) rotateX(65deg) rotateZ(-${scrollProgress * 60}deg)`,
          transformStyle: 'preserve-3d',
        }}
      />

      {/* Dual Dynamic Bicolor Volumetric Lighting (Red & Royal Blue) */}
      <div 
        className={`absolute top-1/4 -left-32 w-[42rem] h-[42rem] rounded-full blur-[170px] will-change-transform transition-opacity duration-500 ${
          theme === 'dark' ? 'bg-red-600/25' : 'bg-red-500/15'
        }`}
        style={{ transform: `translate3d(0, ${scrollProgress * 240}px, 0)` }}
      />
      <div 
        className={`absolute top-2/3 -right-32 w-[42rem] h-[42rem] rounded-full blur-[180px] will-change-transform transition-opacity duration-500 ${
          theme === 'dark' ? 'bg-blue-600/28' : 'bg-blue-500/18'
        }`}
        style={{ transform: `translate3d(0, -${scrollProgress * 260}px, 0)` }}
      />

      {/* Vignette Depth Finish - Balanced so video is clearly visible while keeping text legible */}
      {theme === 'dark' ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a14]/50 via-[#060a14]/20 to-[#060a14]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(6,10,20,0.65)_100%)] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/40 via-white/20 to-slate-100/50 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(226,232,240,0.55)_100%)] pointer-events-none" />
        </>
      )}
    </div>
  );
};
