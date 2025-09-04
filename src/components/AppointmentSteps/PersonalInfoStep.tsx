import React from "react";
import { User, Mail, Phone, MessageSquare, Briefcase } from "lucide-react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { services } from "../../data/services";
import { FormField } from "../forms/FormField";
import { InputField } from "../forms/InputField";
import { SelectField } from "../forms/SelectField";
import { TextareaField } from "../forms/TextareaField";
import { CompleteAppointmentFormData } from "../../hooks/useAppointmentForm";

interface PersonalInfoStepProps {
  register: UseFormRegister<CompleteAppointmentFormData>;
  errors: FieldErrors<CompleteAppointmentFormData>;
}

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  register,
  errors,
}) => {
  // Options pour le select des services
  const serviceOptions = [
    ...services.map((service) => ({
      value: service.title,
      label: service.title,
    })),
    { value: "Solution Enterprise", label: "Solution Enterprise" },
    { value: "Autre", label: "Autre" },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        <FormField label="Nom" error={errors?.lastName} required>
          <InputField
            type="text"
            placeholder="Votre nom"
            icon={User}
            error={!!errors?.lastName}
            className="text-sm sm:text-base md:text-base lg:text-base py-2.5 sm:py-3 md:py-3 pl-9 sm:pl-10 md:pl-11 pr-3 sm:pr-4"
            {...register("lastName")}
          />
        </FormField>

        <FormField label="Prénom" error={errors?.firstName} required>
          <InputField
            type="text"
            placeholder="Votre prénom"
            icon={User}
            error={!!errors?.firstName}
            className="text-sm sm:text-base md:text-base lg:text-base py-2.5 sm:py-3 md:py-3 pl-9 sm:pl-10 md:pl-11 pr-3 sm:pr-4"
            {...register("firstName")}
          />
        </FormField>

        <FormField label="Email" error={errors?.email} required>
          <InputField
            type="email"
            placeholder="votre@email.com"
            icon={Mail}
            error={!!errors?.email}
            className="text-sm sm:text-base md:text-base lg:text-base py-2.5 sm:py-3 md:py-3 pl-9 sm:pl-10 md:pl-11 pr-3 sm:pr-4"
            {...register("email")}
          />
        </FormField>

        <FormField label="Téléphone" error={errors?.phone} required>
          <InputField
            type="tel"
            placeholder="0123456789"
            icon={Phone}
            error={!!errors?.phone}
            className="text-sm sm:text-base md:text-base lg:text-base py-2.5 sm:py-3 md:py-3 pl-9 sm:pl-10 md:pl-11 pr-3 sm:pr-4"
            {...register("phone")}
          />
        </FormField>

        <FormField
          label="Service"
          error={errors?.service}
          required
          className="sm:col-span-1 md:col-span-2 lg:col-span-1"
        >
          <SelectField
            placeholder="Sélectionnez un service"
            options={serviceOptions}
            icon={Briefcase}
            error={!!errors?.service}
            className="text-sm sm:text-base md:text-base lg:text-base py-2.5 sm:py-3 md:py-3 pl-9 sm:pl-10 md:pl-11 pr-3 sm:pr-4"
            {...register("service")}
          />
        </FormField>

        <div className="hidden lg:block md:hidden"></div>
      </div>
      <div className="mt-6 sm:mt-6 md:mt-8">
        <FormField
          label="Message (optionnel)"
          error={errors?.message}
          className="w-full"
        >
          <TextareaField
            placeholder="Ajoutez plus de détails sur votre projet..."
            rows={3}
            icon={MessageSquare}
            error={!!errors?.message}
            className="text-sm sm:text-base md:text-base lg:text-base py-2.5 sm:py-3 md:py-3 pl-9 sm:pl-10 md:pl-11 pr-3 sm:pr-4 min-h-[80px] sm:min-h-[90px] md:min-h-[100px]"
            {...register("message")}
          />
        </FormField>
      </div>
    </div>
  );
};
