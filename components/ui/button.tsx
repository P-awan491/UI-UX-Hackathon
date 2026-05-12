import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-[var(--brand)] text-white shadow-lg shadow-emerald-900/10 hover:bg-[var(--brand-strong)] hover:-translate-y-0.5 focus-visible:outline-[var(--brand)]",
  secondary:
    "border border-[var(--line)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--brand)] hover:text-[var(--brand-strong)]",
  ghost:
    "text-[var(--foreground)] hover:bg-black/5 dark:hover:bg-white/10",
  light:
    "bg-white text-[#0b5d50] shadow-lg shadow-emerald-900/10 hover:-translate-y-0.5 hover:bg-[#fff8e8]"
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick
}: ButtonProps) {
  const base = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
