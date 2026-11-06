"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    // Switch the label back after 2 seconds.
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-lg bg-inverse-ink px-5 py-3 font-medium text-inverse transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
    >
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
