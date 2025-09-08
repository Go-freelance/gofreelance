import type React from "react";
import { User, Mail, Phone, MessageSquare, Briefcase } from "lucide-react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { services } from "../../data/services";
import { FormField } from "../forms/FormField";
import { InputField } from "../forms/InputField";
import { SelectField } from "../forms/SelectField";
import { TextareaField } from "../forms/TextareaField";
import type { CompleteAppointmentFormData } from "../../hooks/useAppointmentForm";

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
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <FormField label="Nom" error={errors?.lastName} required>
          <InputField
            type="text"
            placeholder="Votre nom"
            icon={User}
            error={!!errors?.lastName}
            className="py-3 pl-10 pr-4"
            {...register("lastName")}
          />
        </FormField>

        <FormField label="Prénom" error={errors?.firstName} required>
          <InputField
            type="text"
            placeholder="Votre prénom"
            icon={User}
            error={!!errors?.firstName}
            className="py-3 pl-10 pr-4"
            {...register("firstName")}
          />
        </FormField>

        <FormField label="Email" error={errors?.email} required>
          <InputField
            type="email"
            placeholder="votre@email.com"
            icon={Mail}
            error={!!errors?.email}
            className="py-3 pl-10 pr-4"
            {...register("email")}
          />
        </FormField>

        <FormField label="Téléphone" error={errors?.phone} required>
          <InputField
            type="tel"
            placeholder="0123456789"
            icon={Phone}
            error={!!errors?.phone}
            className="py-3 pl-10 pr-4"
            {...register("phone")}
          />
        </FormField>

        <FormField
          label="Service"
          error={errors?.service}
          required
          className="md:col-span-2"
        >
          <SelectField
            placeholder="Sélectionnez un service"
            options={serviceOptions}
            icon={Briefcase}
            error={!!errors?.service}
            className="py-3 pl-10 pr-4"
            {...register("service")}
          />
        </FormField>
      </div>

      <FormField
        label="Message (optionnel)"
        error={errors?.message}
        className="w-full"
      >
        <TextareaField
          placeholder="Ajoutez plus de détails sur votre projet..."
          rows={4}
          icon={MessageSquare}
          error={!!errors?.message}
          className="py-3 pl-10 pr-4 min-h-[100px] resize-none"
          {...register("message")}
        />
      </FormField>
    </div>
  );
};
