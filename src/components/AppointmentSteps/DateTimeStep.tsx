import React from "react";
import { Calendar, Clock } from "lucide-react";
import type { FormData } from "../../hooks/useAppointmentForm";

interface DateTimeStepProps {
  formData: FormData;
  availableTimeSlots: string[];
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export const DateTimeStep: React.FC<DateTimeStepProps> = ({
  formData,
  availableTimeSlots,
  handleChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
      <div>
        <label className="block text-xs sm:text-sm font-medium text-text mb-1 sm:mb-2">
          Date
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
          </div>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2 sm:py-3 pl-8 sm:pl-10 pr-3 sm:pr-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-text mb-1 sm:mb-2">
          Heure
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
          </div>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            disabled={!formData.date || availableTimeSlots.length === 0}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2 sm:py-3 pl-8 sm:pl-10 pr-3 sm:pr-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:bg-neutral-100 disabled:text-neutral-400"
          >
            <option value="">
              {!formData.date
                ? "Sélectionnez d'abord une date"
                : availableTimeSlots.length === 0
                ? "Aucun créneau disponible"
                : "Choisir une heure"}
            </option>
            {availableTimeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {formData.date && availableTimeSlots.length === 0 && (
        <div className="md:col-span-2 p-3 sm:p-4 bg-amber-50 text-amber-700 rounded-lg text-xs sm:text-sm">
          Aucun créneau disponible pour cette date. Veuillez sélectionner une
          autre date.
        </div>
      )}
    </div>
  );
};
