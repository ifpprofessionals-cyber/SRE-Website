import React, { useRef, useState } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'red' | 'blue' | 'dual' | 'none';
  intensity?: number;
  depth?: number;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  glowColor = 'dual',
  intensity = 15,
  depth = 30
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -intensity;
    const rY = ((x - centerX) / centerX) * intensity;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  const getGlowBorder = () => {
    switch (glowColor) {
      case 'red':
        return isHovered ? 'shadow-[0_20px_45px_-10px_rgba(239,56,56,0.35)] border-red-500/50' : '';
      case 'blue':
        return isHovered ? 'shadow-[0_20px_45px_-10px_rgba(37,117,220,0.35)] border-blue-500/50' : '';
      case 'dual':
        return isHovered ? 'shadow-[0_20px_50px_-10px_rgba(37,117,220,0.25),0_0_30px_rgba(239,56,56,0.18)] border-slate-700/80' : '';
      default:
        return '';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
      }}
      className="relative will-change-transform rounded-3xl"
    >
      <div
        style={{
          transform: isHovered 
            ? `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(${depth}px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={`relative overflow-hidden transition-shadow duration-300 rounded-3xl ${getGlowBorder()}`}
      >
        {/* Dynamic Specular 3D Glare Reflection */}
        <div
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.18), transparent 70%)`,
            opacity: glarePos.opacity,
            transition: 'opacity 0.3s ease',
          }}
          className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay rounded-3xl"
        />

        {/* Card Content with 3D child layering */}
        <div 
          style={{ transform: 'translateZ(20px)' }} 
          className={`relative z-10 ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
