import type React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-secondary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
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
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/gof_rdc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary transition"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.facebook.com/gofreelancerdc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary transition"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/automatisation"
                  className="text-neutral-300 hover:text-primary transition flex items-center gap-2"
                >
                  Automatisation
                  <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-medium">
                    Populaire
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/campagne-cross-canal"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Campagne Cross Canal
                </Link>
              </li>
              <li>
                <Link
                  to="/services/developpement-wordpress-elementor"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  WordPress Elementor
                </Link>
              </li>
              <li>
                <Link
                  to="/services/developpement-web-et-mobile"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Développement Web & Mobile
                </Link>
              </li>
              <li>
                <Link
                  to="/services/transformation-digitale"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Transformation Digitale
                </Link>
              </li>
            </ul>
          </div>

          {/* More Services & Enterprise */}
          <div>
            <h4 className="font-bold mb-4">Solutions Avancées</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/integration-ia"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Intégration IA
                </Link>
              </li>
              <li>
                <Link
                  to="/services/campagne-publicitaire"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  Campagne Publicitaire
                </Link>
              </li>
              <li>
                <Link
                  to="/services/solution-enterprise"
                  className="text-neutral-300 hover:text-primary transition flex items-center gap-2"
                >
                  Solution Enterprise
                  <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs px-2 py-0.5 rounded-full font-medium">
                    Premium
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-neutral-400 text-sm">Email</p>
                <a
                  href="mailto:contact@gofreelance.com"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  contact@gofreelance.com
                </a>
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Téléphone</p>
                <a
                  href="tel:+243990776509"
                  className="text-neutral-300 hover:text-primary transition"
                >
                  +243 990 776 509
                </a>
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Adresse</p>
                <p className="text-neutral-300">RDC, Kinshasa/Gombe</p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition font-medium text-sm"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-300 text-sm">
              © {year} Go Freelance. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/privatepolicy"
                className="text-neutral-300 hover:text-primary transition"
              >
                Politique de confidentialité
              </Link>
              <Link
                to="/cgu"
                className="text-neutral-300 hover:text-primary transition"
              >
                Conditions générales d'utilisation
              </Link>
              <Link
                to="/cgv"
                className="text-neutral-300 hover:text-primary transition"
              >
                Conditions générales de vente
              </Link>
              <Link
                to="/politique-protection-donnees"
                className="text-neutral-300 hover:text-primary transition"
              >
                Politique de protection des données
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
