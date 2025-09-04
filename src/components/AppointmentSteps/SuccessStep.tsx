import React from "react";
import { Check, CalendarIcon } from "lucide-react";
import type { CompleteAppointmentFormData } from "../../hooks/useAppointmentForm";

interface SuccessStepProps {
  formData: CompleteAppointmentFormData;
}

export const SuccessStep: React.FC<SuccessStepProps> = ({ formData }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-12 text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
        <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2 sm:mb-3">
        Rendez-vous confirmé !
      </h3>
      <p className="text-text mb-4 sm:mb-6 max-w-md text-sm sm:text-base px-2">
        Nous avons bien reçu votre demande de rendez-vous. Vous recevrez bientôt
        un email de confirmation avec tous les détails.
      </p>
      <div className="flex items-center justify-center gap-2 text-primary text-sm sm:text-base">
        <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        <span className="font-medium">
          {formData.date ? (
            <>
              {new Date(formData.date).toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}{" "}
              à {formData.time || "Heure non définie"}
            </>
          ) : (
            "Date et heure à confirmer"
          )}
        </span>
      </div>
    </div>
  );
};
