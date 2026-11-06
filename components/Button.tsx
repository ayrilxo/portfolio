type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary: "bg-surface text-ink hover:bg-surface-dark",
};

// A link that looks like a button. Used for the main actions on the page.
export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}
