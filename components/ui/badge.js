import { cn } from "../../lib/utils";

export function Badge({ className, variant = "default", children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2",
        {
          "bg-surface-hover text-primary border border-border": variant === "default",
          "bg-accent/10 text-accent border border-accent/20": variant === "accent",
          "bg-transparent text-secondary border border-border hover:bg-surface-hover": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
