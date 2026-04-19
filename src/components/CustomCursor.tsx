import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const updateState = () => {
      setIsEnabled(mediaQuery.matches);
    };

    updateState();
    mediaQuery.addEventListener('change', updateState);

    return () => {
      mediaQuery.removeEventListener('change', updateState);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');

    if (!cursor || !ring) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const mx = e.clientX;
      const my = e.clientY;
      cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      ring.style.transform = `translate(${mx - 18}px, ${my - 18}px)`;
    };

    const handleMouseEnter = () => {
      ring.style.width = '56px'; 
      ring.style.height = '56px';
      ring.style.borderColor = 'rgba(200,255,0,0.8)';
    };

    const handleMouseLeave = () => {
      ring.style.width = '36px'; 
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(200,255,0,0.4)';
    };

    const handlePointerOver = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button')) {
        handleMouseEnter();
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button')) {
        handleMouseLeave();
      }
    };

    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <div 
        id="cursor" 
        className="w-[10px] h-[10px] bg-accent rounded-full fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out mix-blend-diff"
      ></div>
      <div 
        id="cursorRing" 
        className="w-[36px] h-[36px] border border-[rgba(200,255,0,0.4)] rounded-full fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
      ></div>
    </>
  );
};

export default CustomCursor;
