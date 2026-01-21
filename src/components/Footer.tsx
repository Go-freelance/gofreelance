import type React from "react";
import { Linkedin, Twitter, Facebook, Gem, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppointment } from "../contexts/AppointmentContext";
import { expertises } from "../data/services";
import { getServiceSlug } from "../utils/functions";

export const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  const { openAppointmentForm } = useAppointment();

  // Pick some key services to display in the footer columns
  // First column: Marketing & Branding
  const col1Services = [
    ...(expertises.find((e) => e.id === "marketing")?.services || []),
    ...(expertises.find((e) => e.id === "branding")?.services || []),
  ].slice(0, 6); // Limit to 6

  // Second column: Web, Consulting, Training
  const col2Services = [
    ...(expertises.find((e) => e.id === "web")?.services || []),
    ...(expertises.find((e) => e.id === "consulting")?.services || []),
    ...(expertises.find((e) => e.id === "training")?.services || []),
  ].slice(0, 6);

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 px-4 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Social */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img
                src="./images/logo.png"
                alt="Go Freelance"
                className="w-48 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Nous accompagnons les entreprises ambitieuses dans leur croissance
              digitale grâce à des stratégies innovantes et durables.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/go-freelancerdc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/gof_rdc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.facebook.com/gofreelancerdc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Services Col 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              Marketing & Branding
            </h4>
            <ul className="space-y-3">
              {col1Services.map((service) => (
                <li key={service.title}>
                  <Link
                    to={`/services/${getServiceSlug(service.title)}`}
                    className="text-neutral-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              Tech & Consulting
            </h4>
            <ul className="space-y-3">
              {col2Services.map((service) => (
                <li key={service.title}>
                  <Link
                    to={`/services/${getServiceSlug(service.title)}`}
                    className="text-neutral-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:contact@gofreelance.com"
                className="block p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors border border-neutral-800 hover:border-neutral-700"
              >
                <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-1">
                  Email
                </p>
                <p className="text-neutral-200 text-sm">
                  contact@gofreelance.com
                </p>
              </a>
              <a
                href="tel:+243990776509"
                className="block p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors border border-neutral-800 hover:border-neutral-700"
              >
                <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-1">
                  Téléphone
                </p>
                <p className="text-neutral-200 text-sm">+243 990 776 509</p>
              </a>
            </div>

            <button
              onClick={() => openAppointmentForm()}
              className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition font-bold text-sm shadow-lg shadow-primary/20"
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>

        {/* Enterprise Banner */}
        <div className="border-t border-neutral-800 pt-8 pb-8 mb-8">
          <Link
            to="/services/solution-enterprise"
            className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-900 p-8 border border-neutral-800 hover:border-primary/30 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors"></div>
            <div className="flex md:items-center justify-between flex-col md:flex-row gap-4 relative z-10">
              <div>
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-primary" />
                  Solution Enterprise
                </h4>
                <p className="text-neutral-400 text-sm max-w-lg">
                  Des solutions sur mesure pour les grandes organisations.
                  Découvrez notre offre exclusive.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:translate-x-1 transition-transform">
                Découvrir <ChevronRight className="w-5 h-5" />
              </span>
            </div>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {year} Go Freelance. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/privatepolicy"
              className="hover:text-primary transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              to="/politique-protection-donnees"
              className="hover:text-primary transition-colors"
            >
              Données
            </Link>
            <Link to="/cgu" className="hover:text-primary transition-colors">
              CGU
            </Link>
            <Link to="/cgv" className="hover:text-primary transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
