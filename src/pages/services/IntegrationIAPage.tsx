import {
  Bot,
  CheckCircle,
  ArrowRight,
  Clock,
  Brain,
  Zap,
  BarChart,
  Shield,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function IntegrationIAPage() {
  const { openAppointmentForm } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointmentForm("Intégration IA");
  };

  const processSteps = [
    {
      step: 1,
      title: "Analyse des besoins",
      description: "Identification des cas d'usage et opportunités IA",
      duration: "1 semaine",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Conception de la solution",
      description: "Architecture et choix des technologies IA",
      duration: "2 semaines",
      icon: <Bot className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Développement & Intégration",
      description: "Implémentation et intégration dans vos systèmes",
      duration: "4-8 semaines",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Formation & Optimisation",
      description: "Formation des équipes et amélioration continue",
      duration: "En continu",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  const solutions = [
    "Chatbots intelligents et assistants virtuels",
    "Analyse prédictive et machine learning",
    "Automatisation intelligente des processus",
    "Reconnaissance vocale et traitement du langage",
    "Vision par ordinateur et analyse d'images",
    "Recommandations personnalisées",
    "Détection d'anomalies et fraudes",
    "Solutions IA sur mesure",
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
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-primary font-medium">
                  Intelligence Artificielle
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Intégration <span className="excellence-gradient">IA</span>
              </h1>

              <p className="text-xl text-text mb-8 leading-relaxed">
                Intégrez l'intelligence artificielle dans vos processus métier.
                Automatisez, prédisez et optimisez avec des solutions IA sur
                mesure.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">IA sur mesure</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">
                    Données sécurisées
                  </span>
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
                  className="bg-primary text-white px-8 py-4 rounded-md text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg"
                >
                  Intégrer l'IA
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleOpenAppointment}
                  className="bg-white text-secondary border border-neutral-200 px-8 py-4 rounded-md  text-lg hover:bg-neutral-50 transition font-medium"
                >
                  Cas d'usage IA
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                alt="Intelligence Artificielle"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">90%</p>
                  <p className="text-sm text-text">Précision moyenne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Solutions IA disponibles
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Des technologies d'intelligence artificielle adaptées à vos
              besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text">{solution}</span>
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
              Processus d'intégration
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Méthodologie structurée pour une intégration IA réussie
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
            Prêt à intégrer l'IA dans votre business ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez comment l'intelligence artificielle peut transformer vos
            processus et booster votre productivité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleOpenAppointment}
              className="bg-white text-primary px-8 py-4 rounded-md text-lg hover:bg-neutral-100 transition flex items-center gap-2 font-medium"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleOpenAppointment}
              className="bg-transparent border border-white text-white px-8 py-4 rounded-md text-lg hover:bg-white/10 transition font-medium"
            >
              Cas d'usage IA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
