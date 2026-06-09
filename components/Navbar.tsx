'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href;
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'neo-raised backdrop-blur-sm'
            : 'bg-surface'
          }`}
        style={{
          boxShadow: scrolled
            ? '-6px -6px 12px rgba(255,255,255,0.03), 6px 6px 12px rgba(0,0,0,0.5)'
            : 'none',
        }}
      >
        <div className="flex justify-between items-center h-20 px-6 md:px-16 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-on-surface tracking-tight hover:text-primary transition-colors duration-300"
          >
            Nirmal Manvar
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${isActive(link.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Resume Button */}
          <a
            href="/Nirmal_Manvar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block neo-raised text-primary font-semibold text-sm px-6 py-2 rounded-xl neo-button transition-all duration-300 hover:text-tertiary"
          >
            Resume
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden neo-raised p-2 rounded-xl neo-button text-on-surface-variant"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm mobile-menu-overlay ${mobileOpen ? 'open' : ''
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-surface-container-low mobile-menu-panel ${mobileOpen ? 'open' : ''
          }`}
        style={{
          boxShadow: '-8px 0 24px rgba(0,0,0,0.5)',
        }}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${isActive(link.href)
                    ? 'text-primary neo-inset'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href="/Nirmal_Manvar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center neo-raised text-primary font-semibold px-6 py-3 rounded-xl neo-button"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
