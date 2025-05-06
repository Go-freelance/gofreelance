import { Circle } from "lucide-react";

const NavSeparator = () => <Circle className="w-1.5 h-1.5 text-neutral-300" />;

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://gofreelancerdc.com/wp-content/uploads/2020/02/logo_gof_new.png"
              alt="Go Freelance"
              className="h-12"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              className="text-secondary hover:text-primary transition font-medium"
            >
              Accueil
            </a>
            <NavSeparator />
            <a
              href="#"
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
              href="#"
              className="text-secondary hover:text-primary transition font-medium"
            >
              Réalisations
            </a>
            <NavSeparator />
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition font-medium">
              Contact
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
            <a
              href="#"
              className="block text-secondary hover:text-primary transition font-medium py-2"
            >
              Accueil
            </a>
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
            <a
              href="#"
              className="block text-secondary hover:text-primary transition font-medium py-2"
            >
              Blog
            </a>
            <button className="w-full bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition font-medium mt-4">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
