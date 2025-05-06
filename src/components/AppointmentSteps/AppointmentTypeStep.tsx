import React from "react";
import { Building, Video, MapPin, Check } from "lucide-react";
import { AppointmentType, FormData } from "../../hooks/useAppointmentForm";

interface AppointmentTypeStepProps {
  formData: FormData;
  handleAppointmentTypeChange: (type: AppointmentType) => void;
}

export const AppointmentTypeStep: React.FC<AppointmentTypeStepProps> = ({
  formData,
  handleAppointmentTypeChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
      <div
        className={`p-3 sm:p-6 rounded-xl border-2 cursor-pointer transition-all ${
          formData.appointmentType === "in-person"
            ? "border-primary bg-primary/5"
            : "border-neutral-200 hover:border-primary/30"
        }`}
        onClick={() => handleAppointmentTypeChange("in-person")}
      >
        <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
              formData.appointmentType === "in-person"
                ? "bg-primary text-white"
                : "bg-neutral-100 text-neutral-500"
            }`}
          >
            <Building className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg">En présentiel</h3>
            <p className="text-neutral-500 text-xs sm:text-sm">
              Rendez-vous dans nos bureaux
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-neutral-600 text-xs sm:text-sm">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
          <span>RDC, Kinshasa/Gombe</span>
        </div>
      </div>

      <div
        className={`p-3 sm:p-6 rounded-xl border-2 cursor-pointer transition-all ${
          formData.appointmentType === "online"
            ? "border-primary bg-primary/5"
            : "border-neutral-200 hover:border-primary/30"
        }`}
        onClick={() => handleAppointmentTypeChange("online")}
      >
        <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
              formData.appointmentType === "online"
                ? "bg-primary text-white"
                : "bg-neutral-100 text-neutral-500"
            }`}
          >
            <Video className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg">En ligne</h3>
            <p className="text-neutral-500 text-xs sm:text-sm">
              Rendez-vous via Google Meet
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-neutral-600 text-xs sm:text-sm">
          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
          <span>Lien envoyé par email après confirmation</span>
        </div>
      </div>
    </div>
  );
};
