import {
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  BarChart,
  Target,
  Lightbulb,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function TransformationDigitalePage() {
  const { openAppointment } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointment("Transformation Digitale");
  };

  const processSteps = [
    {
      step: 1,
      title: "Audit Digital",
      description: "Évaluation complète de votre maturité digitale",
      duration: "2 semaines",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Stratégie de Transformation",
      description: "Définition de la roadmap et des priorités",
      duration: "2 semaines",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Implémentation",
      description: "Déploiement des solutions et formation",
      duration: "3-6 mois",
      icon: <RefreshCw className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Accompagnement",
      description: "Suivi et optimisation continue",
      duration: "En continu",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const services = [
    "Audit digital complet (360°)",
    "Stratégie de transformation personnalisée",
    "Formation et accompagnement des équipes",
    "Change management et conduite du changement",
    "Digitalisation des processus métier",
    "Mise en place d'outils collaboratifs",
    "Optimisation de l'expérience client",
    "Suivi des KPIs et ROI",
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
                  <RefreshCw className="w-6 h-6" />
                </div>
                <span className="text-primary font-medium">
                  Innovation & Changement
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Transformation{" "}
                <span className="excellence-gradient">Digitale</span>
              </h1>

              <p className="text-xl text-text mb-8 leading-relaxed">
                Accompagnement complet dans votre transition vers le digital.
                Modernisez vos processus, formez vos équipes et accélérez votre
                croissance.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">
                    Innovation continue
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Formation incluse</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <BarChart className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">ROI mesurable</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleOpenAppointment}
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg"
                >
                  Transformer maintenant
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleOpenAppointment}
                  className="bg-white text-secondary border border-neutral-200 px-8 py-4 rounded-full text-lg hover:bg-neutral-50 transition font-medium"
                >
                  Audit gratuit
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Transformation Digitale"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">85%</p>
                  <p className="text-sm text-text">Productivité améliorée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Services de transformation
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Un accompagnement complet pour réussir votre transformation
              digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text">{service}</span>
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
              Notre approche
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Méthodologie éprouvée pour une transformation réussie
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
            Prêt pour votre transformation digitale ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Modernisez votre entreprise et prenez une longueur d'avance sur vos
            concurrents.
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
              Audit gratuit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
