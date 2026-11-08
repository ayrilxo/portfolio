type TagProps = {
  children: React.ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-surface px-2.5 py-1 text-[13px] text-muted transition-colors duration-200 hover:border-accent/40 hover:text-ink">
      {children}
    </span>
  );
}
