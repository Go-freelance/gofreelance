/**
 * Composant de champ de formulaire réutilisable
 */

import { FC, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface FormFieldProps {
  label: string;
  error?: FieldError;
  children: ReactNode;
  required?: boolean;
  className?: string;
}

export const FormField: FC<FormFieldProps> = ({
  label,
  error,
  children,
  required = false,
  className = "",
}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-text mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
};
