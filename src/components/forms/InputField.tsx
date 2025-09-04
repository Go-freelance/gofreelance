/**
 * Composant d'input avec icône réutilisable
 */

import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

interface InputFieldProps {
  type?: "text" | "email" | "tel";
  placeholder?: string;
  icon: LucideIcon;
  error?: boolean;
  className?: string;
}

export const InputField = forwardRef<
  HTMLInputElement,
  InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    { type = "text", placeholder, icon: Icon, error, className = "", ...props },
    ref
  ) => {
    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon
            className={`w-5 h-5 ${error ? "text-red-400" : "text-neutral-400"}`}
          />
        </div>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`w-full bg-neutral-50 border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 transition-colors ${
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
