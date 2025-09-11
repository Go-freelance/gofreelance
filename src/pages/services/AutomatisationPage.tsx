import {
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Bot,
  BarChart,
  Workflow,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function AutomatisationPage() {
  const { openAppointment } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointment("Automatisation");
  };

  const handleOpenDemo = () => {
    openAppointment("Automatisation - Démo gratuite");
  };

  const processSteps = [
    {
      step: 1,
      title: "Audit des processus",
      description:
        "Analyse de vos workflows actuels et identification des opportunités",
      duration: "1 semaine",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Conception des workflows",
      description: "Design des processus automatisés personnalisés",
      duration: "2 semaines",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Implémentation",
      description: "Mise en place des solutions d'automatisation",
      duration: "2-3 semaines",
      icon: <Bot className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Optimisation",
      description: "Tests, ajustements et formation de vos équipes",
      duration: "1 semaine",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const features = [
    "Workflows automatisés sur mesure",
    "Intégration CRM complète",
    "Email marketing automation",
    "Lead scoring et nurturing",
    "Reporting automatique",
    "Notifications intelligentes",
    "Formation de votre équipe",
    "Support technique 3 mois",
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
                  <Zap className="w-6 h-6" />
                </div>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Plus populaire
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="excellence-gradient">Automatisation</span>{" "}
                Intelligente
              </h1>

              <p className="text-xl text-text mb-8 leading-relaxed">
                Optimisez vos processus métier avec des solutions
                d'automatisation sur mesure. Gagnez du temps, réduisez les
                erreurs et concentrez-vous sur l'essentiel.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">+70% productivité</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">ROI en 3 mois</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleOpenAppointment}
                  className="bg-primary text-white px-8 py-4 rounded-md text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg"
                >
                  Automatiser maintenant
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleOpenDemo}
                  className="bg-white text-secondary border border-neutral-200 px-8 py-4 rounded-md text-lg hover:bg-neutral-50 transition font-medium"
                >
                  Démo gratuite
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Automatisation"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">70%</p>
                  <p className="text-sm text-text">Temps économisé</p>
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
              Solutions d'automatisation
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Des outils puissants pour automatiser vos processus métier
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
              Notre approche
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Une méthodologie éprouvée pour automatiser efficacement
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
            Prêt à automatiser vos processus ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Libérez le potentiel de votre équipe avec nos solutions
            d'automatisation sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleOpenAppointment}
              className="bg-white text-primary px-8 py-4 rounded-md text-lg transition flex items-center gap-2 font-medium"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleOpenDemo}
              className="bg-transparent border border-white text-white px-8 py-4 rounded-md text-lg hover:bg-white/10 transition font-medium"
            >
              Démo gratuite
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
