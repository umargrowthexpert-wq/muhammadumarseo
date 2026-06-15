import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline";
  className?: string;
};

const variants: Record<string, string> = {
  primary: "bg-lime text-dark hover:bg-lime-dark",
  dark: "bg-dark text-lime hover:bg-dark/90",
  outline: "bg-transparent text-dark border border-dark/20 hover:bg-dark/5",
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
