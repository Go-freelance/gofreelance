import type React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { ContactForm } from "./contact/ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-100 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Vous avez des questions ou souhaitez discuter d'un projet ? Notre
            équipe est là pour vous aider.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 gradient-text">
                  Informations de contact
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary mb-1">
                        Adresse
                      </h3>
                      <p className="text-text/80">
                        Avenue Colonel Monjiba 372, Silikin Village,
                        Kinshasa/Gombe
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary mb-1">Email</h3>
                      <a
                        href="mailto:contact@gofreelance.com"
                        className="text-primary hover:underline"
                      >
                        contact@gofreelance.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary mb-1">
                        Téléphone
                      </h3>
                      <a
                        href="tel:+243990776509"
                        className="text-text/80 hover:text-primary"
                      >
                        +243 990 776 509
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-secondary mb-1">
                        Horaires
                      </h3>
                      <p className="text-text/80">Lundi - Vendredi: 8h - 17h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h3 className="font-medium text-secondary mb-3">
                    Suivez-nous
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/company/go-freelancerdc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://twitter.com/gof_rdc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="https://www.facebook.com/gofreelancerdc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com/gofreelancerdc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
