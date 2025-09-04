/**
 * Composant de textarea avec icône réutilisable
 */

import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

interface TextareaFieldProps {
  icon: LucideIcon;
  placeholder?: string;
  rows?: number;
  error?: boolean;
  className?: string;
}

export const TextareaField = forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(
  (
    { icon: Icon, placeholder, rows = 6, error, className = "", ...props },
    ref
  ) => {
    return (
      <div className="relative">
        <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
          <Icon
            className={`w-5 h-5 ${error ? "text-red-400" : "text-neutral-400"}`}
          />
        </div>
        <textarea
          ref={ref}
          rows={rows}
          placeholder={placeholder}
          className={`w-full bg-neutral-50 border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 transition-colors resize-vertical ${
            error
              ? "border-red-300 focus:ring-red-500/50 focus:border-red-500"
              : "border-neutral-200 focus:ring-primary/50 focus:border-primary"
          } ${className}`}
          {...props}
        />
      </div>
    );
  }
);
