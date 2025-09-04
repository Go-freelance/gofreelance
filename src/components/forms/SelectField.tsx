/**
 * Composant de select avec icône réutilisable
 */

import {  forwardRef } from "react";
import { LucideIcon } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  icon: LucideIcon;
  placeholder?: string;
  options: SelectOption[];
  error?: boolean;
  className?: string;
}

export const SelectField = forwardRef<
  HTMLSelectElement,
  SelectFieldProps & React.SelectHTMLAttributes<HTMLSelectElement>
>(
  (
    { icon: Icon, placeholder, options, error, className = "", ...props },
    ref
  ) => {
    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon
            className={`w-5 h-5 ${error ? "text-red-400" : "text-neutral-400"}`}
          />
        </div>
        <select
          ref={ref}
          className={`w-full bg-neutral-50 border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 appearance-none transition-colors ${
            error
              ? "border-red-300 focus:ring-red-500/50 focus:border-red-500"
              : "border-neutral-200 focus:ring-primary/50 focus:border-primary"
          } ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className={`w-5 h-5 ${error ? "text-red-400" : "text-neutral-400"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  }
);
