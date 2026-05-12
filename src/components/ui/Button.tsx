import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-md",
      secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-md",
      accent: "bg-accent text-white hover:bg-accent/90 shadow-md",
      outline: "border-2 border-primary text-primary hover:bg-primary/5",
      ghost: "hover:bg-muted text-foreground",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm font-medium",
      md: "px-6 py-3 text-base font-medium",
      lg: "px-10 py-4 text-lg font-bold tracking-wide",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
