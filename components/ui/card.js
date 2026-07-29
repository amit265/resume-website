import { cn } from "../../lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface text-primary shadow-surface",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlassCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl glass-panel text-primary shadow-surface",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
