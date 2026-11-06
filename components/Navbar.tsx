"use client";

// "use client" is required to use useState for the mobile menu.
import { useState } from "react";
import { navLinks, profile } from "@/data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-page">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" onClick={closeMenu} className="font-medium">
          {profile.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="link text-muted hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-10 w-10 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`absolute left-2 h-0.5 w-6 bg-ink transition duration-300 ${
              isOpen ? "top-5 rotate-45" : "top-3.5"
            }`}
          />
          <span
            className={`absolute left-2 h-0.5 w-6 bg-ink transition duration-300 ${
              isOpen ? "top-5 -rotate-45" : "top-6"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu: covers the screen below the bar */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 bg-page px-6 pt-8 transition duration-300 md:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={closeMenu} className="text-3xl">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
