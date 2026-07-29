import { cn } from "../../lib/utils";

export function Button({ className, variant = "primary", size = "md", children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        {
          "bg-primary text-background hover:bg-primary/90": variant === "primary",
          "bg-surface border border-border text-primary hover:bg-surface-hover": variant === "secondary",
          "bg-transparent text-secondary hover:text-primary hover:bg-surface-hover": variant === "ghost",
          "bg-accent text-white hover:bg-accent/90": variant === "accent",
          
          "h-8 px-3 text-xs": size === "sm",
          "h-10 px-4 py-2 text-sm": size === "md",
          "h-12 px-6 py-3 text-base": size === "lg",
          "h-10 w-10": size === "icon",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
