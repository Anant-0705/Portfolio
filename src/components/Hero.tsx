import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const bg = document.querySelector('.hero-bg-text') as HTMLElement;
      if (bg) {
        const xPct = (e.clientX / window.innerWidth - 0.5) * 20;
        const yPct = (e.clientY / window.innerHeight - 0.5) * 10;
        bg.style.transform = `translate(calc(-50% + ${xPct}px), calc(-50% + ${yPct}px))`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-end px-6 pb-12 md:px-12 md:pb-16 relative overflow-hidden">
      {/* Neon Portrait Image Wrapper for Mobile Opacity Control */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 md:opacity-100 flex justify-end items-end overflow-hidden md:overflow-visible">
        <img 
          src="/me in neon.png" 
          alt="Neon Portrait" 
          className="w-auto h-[55vh] md:h-[85vh] object-contain mix-blend-screen opacity-0 animate-[fadeUp_1.2s_0.8s_forwards] translate-x-[15%] md:translate-x-0"
        />
      </div>
      
      <div className="hero-bg-text absolute top-1/2 left-1/2 font-display text-[clamp(120px,22vw,320px)] tracking-[-0.03em] text-transparent hero-bg-text-stroke whitespace-nowrap pointer-events-none select-none -translate-x-1/2 -translate-y-1/2 z-0">
        ANANT
      </div>

      <div className="font-mono text-[0.72rem] tracking-[0.22em] text-accent uppercase mb-6 opacity-0 animate-[fadeUp_0.8s_0.3s_forwards] relative z-10">
        ⬡ Full Stack Developer · Available for work
      </div>

      <h1 className="font-display text-[clamp(64px,13vw,180px)] leading-[0.9] tracking-[-0.02em] mb-12 opacity-0 animate-[fadeUp_0.9s_0.5s_forwards] relative z-10">
        I BUILD<br />
        THINGS<br />
        <span className="text-accent">FOR THE WEB.</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 opacity-0 animate-[fadeUp_0.8s_0.8s_forwards] z-10 relative">
        <p className="max-w-[420px] text-[0.95rem] leading-[1.7] text-white/60 font-light">
          I build scalable microservices, AI-integrated platforms, and performance-obsessed interfaces.
          Engineering robust full-stack applications that feel as good as they perform.
        </p>
        <a href="#projects" className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-white/40 no-underline transition-colors hover:text-white shrink-0">
          <span className="w-12 h-px bg-accent origin-left animate-[lineGrow_1s_1.2s_both]"></span>
          View Work
        </a>
      </div>

      <p className="max-w-[760px] mt-10 text-[0.95rem] leading-[1.8] text-white/60 font-light opacity-0 animate-[fadeUp_0.8s_1s_forwards] relative z-10">
        Hey - I am <strong className="text-white font-medium">Anant Singhal</strong>, a full stack developer and AI enthusiast pursuing my B.Tech in CSE (Artificial Intelligence). I enjoy building scalable microservices, full-stack SaaS platforms, and event-driven architectures that solve real-world problems.
      </p>
    </section>
  );
};

export default Hero;
