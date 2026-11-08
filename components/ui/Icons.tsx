type IconProps = {
  className?: string;
};

const base = {
  "aria-hidden": true,
  focusable: false,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 16 16",
} as const;

export function ArrowRight({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 11l6-6M6 5h5v5" />
    </svg>
  );
}

export function ArrowUp({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 13V3M4 7l4-4 4 4" />
    </svg>
  );
}

export function Copy({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
      <path d="M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" />
    </svg>
  );
}

export function Check({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  );
}

export function Mail({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
      <path d="M2.5 4.5L8 8.5l5.5-4" />
    </svg>
  );
}

export function GitHub({ className = "size-4" }: IconProps) {
  return (
    <svg aria-hidden focusable={false} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function LinkedIn({ className = "size-4" }: IconProps) {
  return (
    <svg aria-hidden focusable={false} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M0 1.15C0 .52.52 0 1.18 0h13.64C15.48 0 16 .52 16 1.15v13.7c0 .63-.52 1.15-1.18 1.15H1.18C.52 16 0 15.48 0 14.85V1.15Zm4.94 12.24V6.17H2.54v7.22h2.4ZM3.74 5.18c.84 0 1.36-.55 1.36-1.25-.02-.71-.52-1.25-1.34-1.25-.82 0-1.36.54-1.36 1.25 0 .7.52 1.25 1.33 1.25h.01Zm4.91 8.21V9.36c0-.22.02-.43.08-.59.17-.43.57-.88 1.23-.88.87 0 1.22.66 1.22 1.63v3.87h2.4V9.25c0-2.22-1.18-3.25-2.76-3.25-1.27 0-1.85.7-2.17 1.2v.02h-.02l.02-.02V6.17h-2.4c.03.68 0 7.22 0 7.22h2.4Z" />
    </svg>
  );
}

// Picks the icon for a social link by its label.
export function SocialIcon({ label, className }: { label: string } & IconProps) {
  if (label === "GitHub") return <GitHub className={className} />;
  if (label === "LinkedIn") return <LinkedIn className={className} />;
  return <ArrowUpRight className={className} />;
}
