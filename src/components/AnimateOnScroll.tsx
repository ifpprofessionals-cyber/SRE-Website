import React, { useEffect, useRef, useState } from 'react';

export type AnimationType = 
  | 'fade-in'
  | 'fly-in-up'
  | 'fly-in-down'
  | 'swipe-in-left'
  | 'swipe-in-right'
  | 'zoom-in'
  | 'scale-in';

export type OutAnimationType = 
  | 'fade-out'
  | 'fly-out-up'
  | 'fly-out-down'
  | 'swipe-out-left'
  | 'swipe-out-right'
  | 'zoom-out';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  outAnimation?: OutAnimationType;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  className?: string;
  repeat?: boolean; // Re-animate when scrolling in and out
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fly-in-up',
  outAnimation = 'fly-out-down',
  delay = 0,
  duration = 750,
  threshold = 0.12,
  className = '',
  repeat = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        } else {
          if (repeat) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -40px 0px' // slightly before bottom of screen
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, repeat]);

  // Determine initial / out-of-screen style
  const getHiddenStyleClass = () => {
    if (!isVisible && hasAnimated && outAnimation) {
      switch (outAnimation) {
        case 'fade-out': return 'opacity-0';
        case 'fly-out-up': return 'opacity-0 -translate-y-12';
        case 'fly-out-down': return 'opacity-0 translate-y-12';
        case 'swipe-out-left': return 'opacity-0 -translate-x-14';
        case 'swipe-out-right': return 'opacity-0 translate-x-14';
        case 'zoom-out': return 'opacity-0 scale-90';
      }
    }

    // Default hidden classes based on in-animation
    switch (animation) {
      case 'fade-in':
        return 'opacity-0';
      case 'fly-in-up':
        return 'opacity-0 translate-y-14';
      case 'fly-in-down':
        return 'opacity-0 -translate-y-14';
      case 'swipe-in-left':
        return 'opacity-0 -translate-x-16';
      case 'swipe-in-right':
        return 'opacity-0 translate-x-16';
      case 'zoom-in':
      case 'scale-in':
        return 'opacity-0 scale-90';
      default:
        return 'opacity-0 translate-y-12';
    }
  };

  const visibleClass = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth Apple-like spring ease
      }}
      className={`transition-all will-change-transform ${
        isVisible ? visibleClass : getHiddenStyleClass()
      } ${className}`}
    >
      {children}
    </div>
  );
};
