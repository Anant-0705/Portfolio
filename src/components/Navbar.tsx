import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 py-5 md:px-12 md:py-6 mix-blend-diff">
      <a href="#hero" className="font-display text-[1.4rem] tracking-[0.15em] text-white no-underline">AS</a>
      <ul className="flex gap-[0.8rem] md:gap-10 list-none">
        <li>
          <a href="#projects" className="font-mono text-[0.7rem] tracking-[0.18em] text-white uppercase opacity-60 transition-opacity duration-200 hover:opacity-100">Work</a>
        </li>
        <li>
          <a href="#about" className="font-mono text-[0.7rem] tracking-[0.18em] text-white uppercase opacity-60 transition-opacity duration-200 hover:opacity-100">About</a>
        </li>
        <li>
          <a href="#contact" className="font-mono text-[0.7rem] tracking-[0.18em] text-white uppercase opacity-60 transition-opacity duration-200 hover:opacity-100">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
