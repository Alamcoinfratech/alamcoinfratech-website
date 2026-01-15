"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "capacity", href: "#capacity" },
  { name: "services", href: "#services" },
  { name: "clients", href: "#clients" },
  { name: "contact", href: "#contact" },
];

// ✅ Reusable Tailwind classes (no visual change)
const desktopLinkClass =
  "relative text-gray-200 hover:text-orange-300 transition-colors duration-300 " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 " +
  "after:bg-orange-300 hover:after:w-full after:transition-all after:duration-300";

const mobileLinkClass =
  "block text-gray-200 hover:text-orange-400 transition-colors duration-300";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md text-gray-100 shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/company-logo.png"
            alt="Alamco Infratech Logo"
            className="h-12 w-auto"
          />
          <div className="text-lg md:text-2xl font-semibold text-orange-300">
            Almaco Infratech Private Limited
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={desktopLinkClass}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-900 text-gray-100 shadow px-4 py-3 space-y-2 transition-colors">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
