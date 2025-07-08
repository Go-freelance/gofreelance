import { Circle } from "lucide-react";
import { useState } from "react";
import { AppointmentForm } from "./AppointmentForm";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowForm = () => {
    setShowAppointmentForm(true);
    setIsMenuOpen(false); // Ferme le menu mobile si ouvert
  };

  const handleCloseForm = () => {
    setShowAppointmentForm(false);
  };

  const handleAnchorClick = (anchor: string) => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="./images/go-free.png"
                  alt="Go Freelance"
                  className="h-9"
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/"
                className="text-secondary hover:text-primary transition font-medium"
              >
                Accueil
              </Link>
              <NavSeparator />
              <button
                onClick={() => handleAnchorClick("about")}
                className="text-secondary hover:text-primary transition font-medium"
              >
                À propos
              </button>
              <NavSeparator />
              <button
                onClick={() => handleAnchorClick("services")}
                className="text-secondary hover:text-primary transition font-medium"
              >
                Services
              </button>
              <NavSeparator />
              <button
                onClick={() => handleAnchorClick("work")}
                className="text-secondary hover:text-primary transition font-medium"
              >
                Réalisations
              </button>
              <NavSeparator />
              <Link
                to="/contact"
                className="text-secondary hover:text-primary transition font-medium"
              >
                Contact
              </Link>
              <NavSeparator />
              {/* <Link
                to="/third-party"
                className="text-secondary hover:text-primary transition font-medium"
              >
                Gestion des Tiers
              </Link> */}
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
                to="/"
                className="text-secondary hover:text-primary transition font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <button
                onClick={() => handleAnchorClick("about")}
                className="block text-left text-secondary hover:text-primary transition font-medium py-2"
              >
                À propos
              </button>
              <button
                onClick={() => handleAnchorClick("services")}
                className="block text-left text-secondary hover:text-primary transition font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => handleAnchorClick("work")}
                className="block text-left text-secondary hover:text-primary transition font-medium py-2"
              >
                Réalisations
              </button>
              <Link
                to="/contact"
                className="block text-secondary hover:text-primary transition font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/third-party"
                className="block text-secondary hover:text-primary transition font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gestion des Tiers
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
