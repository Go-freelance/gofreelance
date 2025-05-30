import React from "react";
import { Check } from "lucide-react";

interface SuccessStepProps {
  message: string;
}

const SuccessStep: React.FC<SuccessStepProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-12 text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
        <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2 sm:mb-3">
        Formulaire soumis avec succès !
      </h3>
      <p className="text-text mb-4 sm:mb-6 max-w-md text-sm sm:text-base px-2">
        {message}
      </p>
    </div>
  );
};

export default SuccessStep;
