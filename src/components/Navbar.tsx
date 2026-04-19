import React, { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub Activity', href: '#activity' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[110] flex justify-between items-center px-5 py-4 md:px-12 md:py-6 backdrop-blur-md bg-black/45 md:bg-transparent md:backdrop-blur-0 md:mix-blend-diff border-b border-white/10 md:border-none">
        <a href="#home" className="font-display text-[1.2rem] md:text-[1.4rem] tracking-[0.15em] text-white no-underline">AS</a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden w-10 h-10 inline-flex flex-col items-center justify-center gap-1.5 border border-white/20 rounded text-white"
        >
          <span className={`block h-[1.5px] w-5 bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`}></span>
          <span className={`block h-[1.5px] w-5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-[1.5px] w-5 bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}></span>
        </button>

        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="font-mono text-[0.7rem] tracking-[0.18em] text-white uppercase opacity-60 transition-opacity duration-200 hover:opacity-100">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`md:hidden fixed top-[73px] left-0 right-0 z-[105] bg-[#05070a]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <ul className="list-none px-5 py-4 space-y-3">
          {navItems.map((item) => (
            <li key={`mobile-${item.href}`}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block py-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-white/85 no-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
