import React, { useEffect } from 'react';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    
    if (!cursor || !ring) return;

    let mx = 0, my = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX; 
      my = e.clientY;
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

    document.addEventListener('mousemove', handleMouseMove);
    
    // Using event delegation for hover elements so it works with React router / dynamic content
    const setupInteractions = () => {
      const interactables = document.querySelectorAll('a, button');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return () => {
        interactables.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    // Give react time to render DOM
    setTimeout(setupInteractions, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
