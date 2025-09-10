import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Circle,
  ChevronDown,
  Zap,
  Target,
  Code,
  Smartphone,
  RefreshCw,
  Bot,
  Megaphone,
  Gem,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavSeparator = () => <Circle className="w-1.5 h-1.5 text-neutral-300" />;

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

interface ServiceItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  popular?: boolean;
}

const services: ServiceItem[] = [
  {
    name: "Automatisation",
    href: "/services/automatisation",
    icon: <Zap className="w-4 h-4" />,
    description: "Workflows automatisés et intégrations intelligentes",
    popular: true,
  },
  {
    name: "Campagne Cross Canal",
    href: "/services/campagne-cross-canal",
    icon: <Target className="w-4 h-4" />,
    description: "Marketing intégré sur tous vos canaux",
  },
  {
    name: "WordPress Elementor",
    href: "/services/developpement-wordpress-elementor",
    icon: <Code className="w-4 h-4" />,
    description: "Sites web professionnels avec WordPress",
  },
  {
    name: "Développement Web & Mobile",
    href: "/services/developpement-web-et-mobile",
    icon: <Smartphone className="w-4 h-4" />,
    description: "Applications modernes et performantes",
  },
  {
    name: "Transformation Digitale",
    href: "/services/transformation-digitale",
    icon: <RefreshCw className="w-4 h-4" />,
    description: "Accompagnement dans votre transition digitale",
  },
  {
    name: "Intégration IA",
    href: "/services/integration-ia",
    icon: <Bot className="w-4 h-4" />,
    description: "Solutions d'intelligence artificielle sur mesure",
  },
  {
    name: "Campagne Publicitaire",
    href: "/services/campagne-publicitaire",
    icon: <Megaphone className="w-4 h-4" />,
    description: "Publicité performante sur toutes les plateformes",
  },
];

export const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="./images/go-free.png"
                  alt="Go Freelance"
                  className="h-10"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
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

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleAnchorClick("services")}
                  className="flex items-center gap-1 text-secondary hover:text-primary transition font-medium"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu - Horizontal Layout */}
                {isServicesOpen && (
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[720px] bg-white rounded-xl shadow-xl border border-neutral-100 py-6 z-50"
                  >
                    {/* Header */}
                    <div className="px-6 pb-4 border-b border-neutral-100">
                      <h3 className="text-lg font-bold text-secondary">
                        Nos Services
                      </h3>
                      <p className="text-sm text-neutral-500 mt-1">
                        Solutions digitales complètes pour votre croissance
                      </p>
                    </div>

                    {/* Services Grid - 3 columns */}
                    <div className="px-6 py-4">
                      <div className="grid grid-cols-3 gap-4">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={handleServiceClick}
                            className="relative flex flex-col items-start p-4 rounded-lg hover:bg-neutral-50 transition-colors group border border-transparent hover:border-neutral-200"
                          >
                            {/* Popular Badge */}
                            {service.popular && (
                              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                                Populaire
                              </div>
                            )}

                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3">
                              {service.icon}
                            </div>

                            <h4 className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                              {service.name}
                            </h4>

                            <p className="text-xs text-neutral-500 leading-relaxed">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Enterprise Section */}
                    <div className="px-6 pt-4 border-t border-neutral-100">
                      <Link
                        to="/services/solution-enterprise"
                        onClick={handleServiceClick}
                        className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                            <Gem className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold">
                              Solution Enterprise
                            </h4>
                            <p className="text-sm opacity-90">
                              Solutions sur mesure pour grandes entreprises
                            </p>
                          </div>
                        </div>
                        <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

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
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-6 py-2.5 rounded-md hover:bg-primary-dark transition font-medium"
              >
                Prendre rendez-vous
              </Link>
            </div>

            {/* Mobile Menu Button */}
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
                className="block text-secondary hover:text-primary transition font-medium py-2"
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

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-secondary hover:text-primary transition font-medium py-2"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 py-2 text-sm text-neutral-600 hover:text-primary transition-colors relative"
                      >
                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
                          {service.icon}
                        </div>
                        {service.name}
                        {service.popular && (
                          <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-medium ml-auto">
                            Populaire
                          </span>
                        )}
                      </Link>
                    ))}
                    <Link
                      to="/services/solution-enterprise"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 py-2 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg px-3 font-medium mt-3"
                    >
                      <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                        <Gem className="w-4 h-4" />
                      </div>
                      Solution Enterprise
                    </Link>
                  </div>
                )}
              </div>

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
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition font-medium mt-4 block text-center"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
