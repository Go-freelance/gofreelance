import { Circle } from "lucide-react";
import { useState } from "react";
import { AppointmentForm } from "./AppointmentForm";
import { Link } from "react-router-dom";

const NavSeparator = () => <Circle className="w-1.5 h-1.5 text-neutral-300" />;

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const handleShowForm = () => {
    setShowAppointmentForm(true);
    setIsMenuOpen(false); // Ferme le menu mobile si ouvert
  };

  const handleCloseForm = () => {
    setShowAppointmentForm(false);
  };

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="https://gofreelancerdc.com/wp-content/uploads/2020/02/logo_gof_new.png"
                  alt="Go Freelance"
                  className="h-9"
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/#"
                className="text-secondary hover:text-primary transition font-medium"
              >
                Accueil
              </Link>
              <NavSeparator />
              <a
                href="#about"
                className="text-secondary hover:text-primary transition font-medium"
              >
                À propos
              </a>
              <NavSeparator />
              <a
                href="#services"
                className="text-secondary hover:text-primary transition font-medium"
              >
                Services
              </a>
              <NavSeparator />
              <a
                href="#work"
                className="text-secondary hover:text-primary transition font-medium"
              >
                Réalisations
              </a>
              <NavSeparator />
              <Link
                to="/contact"
                className="text-secondary hover:text-primary transition font-medium"
              >
                Contact
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={handleShowForm}
                className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition font-medium"
              >
                Prendre rendez-vous
              </button>
            </div>
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-secondary mb-1.5"></div>
              <div className="w-6 h-0.5 bg-secondary mb-1.5"></div>
              <div className="w-6 h-0.5 bg-secondary"></div>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b">
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link
                to="/#"
                className="text-secondary hover:text-primary transition font-medium py-2"
              >
                Accueil
              </Link>
              <a
                href="#"
                className="block text-secondary hover:text-primary transition font-medium py-2"
              >
                À propos
              </a>
              <a
                href="#services"
                className="block text-secondary hover:text-primary transition font-medium py-2"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-secondary hover:text-primary transition font-medium py-2"
              >
                Réalisations
              </a>

              <Link
                to="/contact"
                className="block text-secondary hover:text-primary transition font-medium py-2"
              >
                Contact
              </Link>

              <button
                onClick={handleShowForm}
                className="w-full bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition font-medium mt-4"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        )}
      </nav>
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <AppointmentForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </>
  );
};
