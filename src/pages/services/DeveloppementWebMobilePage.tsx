import {
  Smartphone,
  CheckCircle,
  ArrowRight,
  Clock,
  Code,
  Monitor,
  Zap,
  Shield,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function DeveloppementWebMobilePage() {
  const { openAppointment } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointment("Développement Web & Mobile");
  };

  const processSteps = [
    {
      step: 1,
      title: "Analyse & Conception",
      description: "Étude des besoins et architecture technique",
      duration: "1-2 semaines",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Design & Prototypage",
      description: "Création des maquettes et prototypes interactifs",
      duration: "2 semaines",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Développement",
      description: "Codage de l'application web et mobile",
      duration: "4-8 semaines",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Tests & Déploiement",
      description: "Tests complets et mise en production",
      duration: "1-2 semaines",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const technologies = [
    "Applications React/Vue.js/Angular",
    "Apps mobiles natives (iOS/Android)",
    "Progressive Web Apps (PWA)",
    "API REST et GraphQL",
    "Backend Node.js/Python/PHP",
    "Bases de données optimisées",
    "Sécurité avancée",
    "Maintenance et support continu",
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
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-primary font-medium">
                  Technologies Modernes
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Développement{" "}
                <span className="excellence-gradient">Web & Mobile</span>
              </h1>

              <p className="text-xl text-text mb-8 leading-relaxed">
                Applications web et mobiles sur mesure avec les dernières
                technologies. Solutions scalables, performantes et sécurisées
                pour votre business.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">
                    Technologies modernes
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Sécurité avancée</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">
                    Performance optimale
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleOpenAppointment}
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg"
                >
                  Développer mon app
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleOpenAppointment}
                  className="bg-white text-secondary border border-neutral-200 px-8 py-4 rounded-full text-lg hover:bg-neutral-50 transition font-medium"
                >
                  Portfolio technique
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                alt="Développement Web Mobile"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">99.9%</p>
                  <p className="text-sm text-text">Uptime garanti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Technologies & Services
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Stack technique moderne pour des applications performantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text">{tech}</span>
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
              Processus de développement
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Méthodologie agile pour des projets réussis
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
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à développer votre application ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transformez votre idée en application performante avec notre
            expertise technique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleOpenAppointment}
              className="bg-white text-primary px-8 py-4 rounded-full text-lg hover:bg-neutral-100 transition flex items-center gap-2 font-medium"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleOpenAppointment}
              className="bg-transparent border border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white/10 transition font-medium"
            >
              Portfolio technique
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
