import { ArrowRight } from "@/components/ui/Icons";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  withArrow?: boolean;
};

const base =
  "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-200 ease-out-soft hover:-translate-y-px active:translate-y-0 active:scale-[0.98]";

const variants = {
  primary: "bg-ink text-white shadow-sm shadow-ink/10 hover:bg-ink-soft",
  secondary: "border border-line bg-surface text-ink hover:border-line-strong hover:bg-subtle",
};

// A link that looks like a button. Used for the main actions on the page.
export default function Button({ href, children, variant = "primary", withArrow = false }: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
