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

export const ContactForm: FC = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    error,
    isSubmitting,
    isSuccess,
  } = useContactForm();

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
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Nom complet
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-neutral-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Téléphone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="w-5 h-5 text-neutral-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="+243 000 000 000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Sujet
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="w-5 h-5 text-neutral-400" />
                </div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Demande de devis">Demande de devis</option>
                  <option value="Stratégie & Conseil">
                    Stratégie & Conseil
                  </option>
                  <option value="Growth Marketing">Growth Marketing</option>
                  <option value="Web & E-commerce">Web & E-commerce</option>
                  <option value="Solution Enterprise">
                    Solution Enterprise
                  </option>
                  <option value="Autre">Autre</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-neutral-400"
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
              <label className="block text-sm font-medium text-text mb-2">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                  <MessageSquare className="w-5 h-5 text-neutral-400" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>
            </div>
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
