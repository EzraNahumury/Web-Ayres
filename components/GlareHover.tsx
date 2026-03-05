'use client';

import React, { useRef, useEffect, useCallback } from 'react';

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
  autoInterval?: number;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  width = '500px',
  height = '500px',
  background = '#000',
  borderRadius = '10px',
  borderColor = '#333',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {},
  autoInterval = 0,
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const overlayRef = useRef<HTMLDivElement | null>(null);

  const animateIn = useCallback(() => {
    const el = overlayRef.current;
    if (!el) return;
    // Reset posisi tanpa animasi
    el.style.transition = 'none';
    el.style.backgroundPosition = '-150% -150%';
    // Force reflow agar reset ter-apply sebelum animasi mulai
    void el.offsetHeight;
    // Mulai animasi sweep
    el.style.transition = `background-position ${transitionDuration}ms ease`;
    el.style.backgroundPosition = '150% 150%';
  }, [transitionDuration]);

  const animateOut = useCallback(() => {
    const el = overlayRef.current;
    if (!el) return;
    if (playOnce) {
      el.style.transition = 'none';
      el.style.backgroundPosition = '-150% -150%';
    } else {
      el.style.transition = `background-position ${transitionDuration}ms ease`;
      el.style.backgroundPosition = '-150% -150%';
    }
  }, [playOnce, transitionDuration]);

  useEffect(() => {
    if (!autoInterval) return;
    const run = () => {
      animateIn();
      setTimeout(animateOut, transitionDuration + 300);
    };
    const initTimer = setTimeout(run, 300);
    const id = setInterval(run, autoInterval);
    return () => {
      clearTimeout(initTimer);
      clearInterval(id);
    };
  }, [animateIn, animateOut, autoInterval, transitionDuration]);

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 20,
    pointerEvents: 'none',
    background: `linear-gradient(
      ${glareAngle}deg,
      transparent 20%,
      ${rgba} 50%,
      transparent 80%
    )`,
    backgroundSize: `${glareSize}% ${glareSize}%`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-150% -150%',
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
        display: 'grid',
        placeItems: 'center',
        ...style,
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      {children}
      <div ref={overlayRef} style={overlayStyle} />
    </div>
  );
};

export default GlareHover;
