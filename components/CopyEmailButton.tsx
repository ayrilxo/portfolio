"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "@/components/ui/Icons";

type CopyEmailButtonProps = {
  email: string;
};

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      window.location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    // Switch the label back after 2 seconds.
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink transition duration-200 hover:-translate-y-px hover:border-line-strong hover:bg-subtle active:translate-y-0 active:scale-[0.98]"
    >
      {copied ? <Check className="size-4 text-live" /> : <Copy />}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
