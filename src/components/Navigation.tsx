import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Circle, ChevronDown, Gem, Menu, X, ChevronRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { expertises } from "../data/services";
import { useAppointment } from "../contexts/AppointmentContext";
import { getServiceSlug } from "../utils/functions";

const NavSeparator = () => <Circle className="w-1.5 h-1.5 text-neutral-300" />;

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<
    string | null
  >(null);
  const { openAppointmentForm } = useAppointment();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

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

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const toggleMobileCategory = (categoryId: string) => {
    setActiveMobileCategory(
      activeMobileCategory === categoryId ? null : categoryId,
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="/images/go-free.png"
                  alt="Go Freelance"
                  className="h-10 w-auto object-contain hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                to="/"
                className="text-secondary hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Accueil
              </Link>
              <NavSeparator />
              <button
                onClick={() => handleAnchorClick("about")}
                className="text-secondary hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                À propos
              </button>
              <NavSeparator />

              {/* Services Dropdown */}
              <div className="relative group" ref={dropdownRef}>
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors font-medium text-sm lg:text-base"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                {isServicesOpen && (
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[900px] bg-white rounded-xl shadow-2xl border border-neutral-100 overflow-hidden z-[60] animation-fade-in-up"
                  >
                    <div className="p-8 grid grid-cols-3 gap-8 bg-white relative">
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

                      {expertises.map((expertise) => (
                        <div key={expertise.id} className="space-y-4">
                          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                            <span className="text-primary">
                              {expertise.icon}
                            </span>
                            <h3 className="font-bold text-secondary text-sm uppercase tracking-wider">
                              {expertise.title}
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {expertise.services.map((service) => (
                              <li key={service.title}>
                                <Link
                                  to={`/services/${getServiceSlug(service.title)}`}
                                  onClick={handleServiceClick}
                                  className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                                    {/* Ideally rename icon to make it cleaner or use smaller icons */}
                                    {service.icon ? (
                                      // Clone element to adjust size if needed, or rely on provided size
                                      service.icon
                                    ) : (
                                      <Circle className="w-2 h-2" />
                                    )}
                                  </div>
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors line-clamp-1">
                                    {service.title}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Enterprise / Footer Link */}
                    <div className="bg-gray-50 px-8 py-4 flex justify-between items-center border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Gem className="w-4 h-4 text-primary" />
                        <span>Besoin d'une solution sur-mesure ?</span>
                      </div>
                      <Link
                        to="/services/solution-enterprise"
                        onClick={handleServiceClick}
                        className="text-sm font-bold text-primary hover:text-primary-dark flex items-center gap-1 transition-colors"
                      >
                        Découvrir l'offre Entreprise{" "}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavSeparator />
              <Link
                to="/contact"
                className="text-secondary hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <button 
                onClick={() => openAppointmentForm()}
                className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-all shadow-md hover:shadow-lg font-bold text-sm transform hover:-translate-y-0.5"
              >
                Prendre rendez-vous
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-6 pb-24">
            <Link
              to="/"
              className="block text-xl font-bold text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <div className="border-b border-gray-100" />

            <button
              onClick={() => handleAnchorClick("about")}
              className="block w-full text-left text-xl font-bold text-secondary hover:text-primary"
            >
              À propos
            </button>
            <div className="border-b border-gray-100" />

            <div className="space-y-4">
              <span className="block text-xl font-bold text-secondary">
                Nos Services
              </span>
              <div className="space-y-2 pl-2">
                {expertises.map((expertise) => (
                  <div
                    key={expertise.id}
                    className="border-b border-gray-50 last:border-0 pb-2"
                  >
                    <button
                      onClick={() => toggleMobileCategory(expertise.id)}
                      className="flex items-center justify-between w-full py-2 text-left font-semibold text-gray-800"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-primary">{expertise.icon}</span>
                        {expertise.title}
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${activeMobileCategory === expertise.id ? "rotate-180" : ""}`}
                      />
                    </button>

                    {activeMobileCategory === expertise.id && (
                      <div className="mt-2 ml-9 space-y-3 border-l-2 border-primary/10 pl-4 py-2 bg-gray-50/50 rounded-r-lg">
                        {expertise.services.map((service) => (
                          <Link
                            key={service.title}
                            to={`/services/${getServiceSlug(service.title)}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-600 hover:text-primary text-sm font-medium py-1"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile Enterprise Link */}
                <Link
                  to="/services/solution-enterprise"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 mt-4 text-primary font-bold"
                >
                  <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                    <Gem className="w-4 h-4" />
                  </div>
                  Solution Enterprise
                </Link>
              </div>
            </div>

            <div className="border-b border-gray-100" />

            <Link
              to="/contact"
              className="block text-xl font-bold text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-6">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-primary text-white text-center text-lg font-bold px-6 py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
