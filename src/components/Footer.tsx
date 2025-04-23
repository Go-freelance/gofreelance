import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
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
                href="#"
                className="text-neutral-300 hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-primary transition"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-primary transition"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Stratégie & Conseil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Création & Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Marketing Digital
                </a>
              </li>
              <li>
                <a
                  href="#"
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
                  href="#"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Carrières
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-neutral-300 mb-2">hello@gofreelance.com</p>
            <p className="text-neutral-300 mb-4">+33 1 23 45 67 89</p>
            <p className="text-neutral-300">Paris, France</p>
          </div>
        </div>
        <div className="border-t border-neutral-700 mt-12 pt-8 text-neutral-300 text-sm">
          <p>© 2024 Go Freelance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
