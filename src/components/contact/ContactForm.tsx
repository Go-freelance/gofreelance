import { FC } from "react";
import {
  Mail,
  Phone,
  Send,
  User,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import { FormField } from "../forms/FormField";
import { InputField } from "../forms/InputField";
import { SelectField } from "../forms/SelectField";
import { TextareaField } from "../forms/TextareaField";
import { CONTACT_SUBJECTS } from "../../types/contact";

export const ContactForm: FC = () => {
  const { form, onSubmit, error, isSubmitting, isSuccess } = useContactForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  // Options pour le select des sujets
  const subjectOptions = CONTACT_SUBJECTS.map((subject) => ({
    value: subject,
    label: subject,
  }));

  return (
    <>
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Send className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-secondary mb-2">
            Message envoyé !
          </h3>
          <p className="text-text mb-4">
            Merci de nous avoir contactés. Nous vous répondrons dans les plus
            brefs délais.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FormField label="Prénom" error={errors.firstName} required>
              <InputField
                type="text"
                placeholder="Votre prénom"
                icon={User}
                error={!!errors.firstName}
                {...register("firstName")}
              />
            </FormField>

            <FormField label="Nom" error={errors.lastName} required>
              <InputField
                type="text"
                placeholder="Votre nom"
                icon={User}
                error={!!errors.lastName}
                {...register("lastName")}
              />
            </FormField>

            <FormField label="Email" error={errors.email} required>
              <InputField
                type="email"
                placeholder="votre@email.com"
                icon={Mail}
                error={!!errors.email}
                {...register("email")}
              />
            </FormField>

            <FormField label="Téléphone" error={errors.phone}>
              <InputField
                type="tel"
                placeholder="+243 000 000 000"
                icon={Phone}
                error={!!errors.phone}
                {...register("phone")}
              />
            </FormField>

            <FormField label="Sujet" error={errors.subject} required>
              <SelectField
                placeholder="Sélectionnez un sujet"
                options={subjectOptions}
                icon={Briefcase}
                error={!!errors.subject}
                {...register("subject")}
              />
            </FormField>

            <FormField
              label="Message"
              error={errors.message}
              required
              className="md:col-span-2"
            >
              <TextareaField
                placeholder="Comment pouvons-nous vous aider ?"
                rows={6}
                icon={MessageSquare}
                error={!!errors.message}
                {...register("message")}
              />
            </FormField>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-dark transition flex items-center gap-2 font-medium ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            {!isSubmitting && <Send className="w-5 h-5" />}
          </button>
        </form>
      )}
    </>
  );
};
