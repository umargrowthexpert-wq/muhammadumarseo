import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "lime" | "dark" | "outline";
  className?: string;
};

const variants: Record<string, string> = {
  lime: "bg-lime text-dark",
  dark: "bg-dark text-lime",
  outline: "bg-transparent text-dark border border-dark/15",
};

export default function Badge({ children, variant = "outline", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
