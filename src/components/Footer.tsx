import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-secondary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="./images/logo.png" alt="Logo" className="w-60 mb-4" />
            <p className="text-neutral-300 mb-4">
              Votre partenaire pour une croissance digitale durable et
              mesurable.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/go-freelancerdc"
                target="_blank"
                className="text-neutral-300 hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/gof_rdc"
                target="_blank"
                className="text-neutral-300 hover:text-primary transition"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.facebook.com/gofreelancerdc"
                target="_blank"
                className="text-neutral-300 hover:text-primary transition"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Stratégie & Conseil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Création & Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Marketing Digital
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Analyse & Data
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Prendre rendez-vous
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-neutral-300 mb-2">contact@gofreelance.com</p>
            <p className="text-neutral-300 mb-4">+243 990 776 509</p>
            <p className="text-neutral-300">RDC, Kinshasa/Gombe</p>
          </div>
        </div>
        <div className="border-t border-neutral-700 mt-12 pt-8 text-neutral-300 text-sm">
          <p>© {year} Go Freelance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
