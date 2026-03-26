import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-8 md:px-12 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <span className="font-mono text-[0.62rem] tracking-[0.12em] text-subtle uppercase">
        © {new Date().getFullYear()} Anant Singhal. All rights reserved.
      </span>
      <span className="font-mono text-[0.62rem] tracking-[0.12em] text-subtle uppercase flex items-center gap-4">
        <span>Full Stack Developer · India</span>
      </span>
    </footer>
  );
};

export default Footer;
