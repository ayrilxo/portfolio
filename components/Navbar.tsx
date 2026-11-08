"use client";

// "use client" is required to use useState for the mobile menu.
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const showBar = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        showBar ? "border-line bg-page/95" : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" onClick={closeMenu} className="group flex items-center gap-2.5 font-semibold tracking-tight">
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-lg bg-ink font-mono text-[11px] font-medium text-white transition-transform duration-300 ease-out-soft group-hover:rotate-[-6deg]"
          >
            {profile.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </span>
          {profile.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 text-sm md:flex">
          {navLinks.map((link) => {
            const isActive = link.id === activeId;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-3.5 py-1.5 transition-colors duration-200 ${
                    isActive ? "bg-subtle text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden h-9 items-center rounded-full bg-ink px-4 text-sm font-medium text-white transition duration-200 hover:-translate-y-px hover:bg-ink-soft md:inline-flex"
        >
          Email me
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative size-10 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`absolute left-2 h-0.5 w-6 rounded bg-ink transition duration-300 ease-out-soft ${
              isOpen ? "top-5 rotate-45" : "top-3.5"
            }`}
          />
          <span
            className={`absolute left-2 h-0.5 w-6 rounded bg-ink transition duration-300 ease-out-soft ${
              isOpen ? "top-5 -rotate-45" : "top-6"
            }`}
          />
        </button>
      </nav>

      {/* Scroll progress line */}
      <div aria-hidden className="scroll-progress absolute inset-x-0 -bottom-px h-px bg-accent" />

      {/* Mobile menu: covers the screen below the bar */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 bg-page px-6 pt-6 transition duration-300 ease-out-soft md:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-3 opacity-0"
        }`}
      >
        <ul className="divide-y divide-line border-y border-line">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                className="flex items-baseline justify-between py-4 text-2xl font-semibold tracking-tight"
              >
                {link.label}
                <span className="font-mono text-xs font-normal text-faint">{String(i + 1).padStart(2, "0")}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          onClick={closeMenu}
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-ink text-sm font-medium text-white"
        >
          Email me
        </a>
      </div>
    </header>
  );
}
