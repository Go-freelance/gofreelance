import React from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import type { FormData } from "../../hooks/useAppointmentForm";
import { services } from "../../data/services";

interface PersonalInfoStepProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
      <div>
        <label className="block text-xs sm:text-sm font-medium text-text mb-1 sm:mb-2">
          Nom complet
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2 sm:py-3 pl-8 sm:pl-10 pr-3 sm:pr-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-text mb-1 sm:mb-2">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2 sm:py-3 pl-8 sm:pl-10 pr-3 sm:pr-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-text mb-1 sm:mb-2">
          Téléphone
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2 sm:py-3 pl-8 sm:pl-10 pr-3 sm:pr-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="+243 000 000 000"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-text mb-1 sm:mb-2">
          Service
        </label>
        <div className="relative">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none"
          >
            <option value="">Sélectionnez un service</option>
            {services.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Solution Enterprise">Solution Enterprise</option>
            <option value="Autre">Autre</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400"
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
      </div>

      <div className="md:col-span-2">
        <label className="block text-xs sm:text-sm font-medium text-text mb-1 sm:mb-2">
          Message (optionnel)
        </label>
        <div className="relative">
          <div className="absolute top-2 sm:top-3 left-0 pl-2 sm:pl-3 flex items-start pointer-events-none">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2 sm:py-3 pl-8 sm:pl-10 pr-3 sm:pr-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="Ajoutez plus de détails sur votre projet..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};
