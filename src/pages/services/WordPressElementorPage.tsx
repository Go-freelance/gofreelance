import {
  CheckCircle,
  ArrowRight,
  Clock,
  Palette,
  Code,
  Smartphone,
  Search,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function WordPressElementorPage() {
  const { openAppointment } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointment("WordPress Elementor");
  };

  const processSteps = [
    {
      step: 1,
      title: "Conception & Design",
      description: "Création de maquettes et choix du design",
      duration: "1 semaine",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Développement",
      description: "Intégration WordPress avec Elementor",
      duration: "2-3 semaines",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Optimisation",
      description: "SEO, performance et responsive design",
      duration: "1 semaine",
      icon: <Search className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Formation & Livraison",
      description: "Formation à l'utilisation et mise en ligne",
      duration: "3 jours",
      icon: <Smartphone className="w-6 h-6" />,
    },
  ];

  const features = [
    "Design responsive et moderne",
    "Interface Elementor intuitive",
    "Optimisation SEO avancée",
    "E-commerce WooCommerce",
    "Sécurité renforcée",
    "Performance optimisée",
    "Formation complète incluse",
    "Maintenance 6 mois",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-100 via-white to-primary/5 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <span className="text-primary font-medium">CMS Populaire</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                WordPress <span className="excellence-gradient">Elementor</span>
              </h1>

              <p className="text-xl text-text mb-8 leading-relaxed">
                Créez un site web professionnel avec WordPress et Elementor. Une
                solution flexible, facile à gérer et optimisée pour votre
                business.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Palette className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Design sur mesure</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">100% Responsive</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">3-4 semaines</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleOpenAppointment}
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg"
                >
                  Créer mon site
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleOpenAppointment}
                  className="bg-white text-secondary border border-neutral-200 px-8 py-4 rounded-full text-lg hover:bg-neutral-50 transition font-medium"
                >
                  Voir des exemples
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"
                alt="WordPress Elementor"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">40%</p>
                  <p className="text-sm text-text">Du web mondial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Fonctionnalités incluses
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour un site web professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Processus de création
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              De l'idée à la mise en ligne, nous vous accompagnons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">
                    {step.title}
                  </h3>
                  <p className="text-text mb-4">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à créer votre site WordPress ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bénéficiez de la puissance de WordPress et de la simplicité
            d'Elementor pour votre présence web.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleOpenAppointment}
              className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleOpenAppointment}
              className="bg-transparent border border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white/10 transition font-medium"
            >
              Voir des exemples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
