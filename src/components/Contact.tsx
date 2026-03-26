import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-6 py-20 pb-20 md:px-12 md:py-32 md:pb-20 border-t border-white/[0.08] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(80px,18vw,260px)] text-transparent contact-bg-stroke whitespace-nowrap pointer-events-none">
        HELLO
      </div>
      
      <p className="reveal font-mono text-[0.75rem] tracking-[0.15em] text-subtle uppercase mb-16 relative z-10">
        Let's work together
      </p>
      
      <h2 className="reveal font-display text-[clamp(48px,9vw,120px)] leading-[0.95] tracking-[-0.02em] mb-6 relative z-10">
        GOT A PROJECT<br />IN <em className="italic not-italic text-accent">MIND?</em>
      </h2>
      
      <div className="reveal flex justify-center gap-3 md:gap-6 flex-wrap relative z-10 mt-12">
        <a 
          href="mailto:anantsinghal2134@gmail.com" 
          className="inline-flex items-center gap-3 px-8 py-4 border border-accent rounded-full font-mono text-[0.72rem] tracking-[0.15em] uppercase no-underline bg-accent text-black transition-all duration-300 hover:bg-transparent hover:text-white"
        >
          ✉ Send an Email
        </a>
        <a 
          href="https://linkedin.com/in/anant-singhal01" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 rounded-full font-mono text-[0.72rem] tracking-[0.15em] uppercase text-white transition-all duration-300 hover:bg-accent hover:border-accent hover:text-black"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/Anant-0705" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 rounded-full font-mono text-[0.72rem] tracking-[0.15em] uppercase text-white transition-all duration-300 hover:bg-accent hover:border-accent hover:text-black"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
