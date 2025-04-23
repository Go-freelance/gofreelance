import React from "react";
import {
  Target,
  Rocket,
  Layout,
  Gem,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { WhyUs } from "./WhyUs";

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Nos Services
          </h2>
          <p className="text-xl text-text">
            Solutions sur mesure pour votre succès digital
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Target className="w-6 h-6" />}
            title="Stratégie & Conseil"
            description="Définissez votre vision digitale et atteignez vos objectifs avec un plan d'action précis."
            features={[
              "Audit digital complet",
              "Analyse concurrentielle",
              "Plan stratégique sur 12 mois",
              "KPIs et tableaux de bord",
              "4 sessions de consulting",
            ]}
            price="2 500"
            duration="2-3 semaines"
          />
          <ServiceCard
            icon={<Rocket className="w-6 h-6" />}
            title="Growth Marketing"
            description="Boostez votre acquisition et maximisez votre ROI avec nos stratégies data-driven."
            features={[
              "Stratégie d'acquisition",
              "Setup des campagnes",
              "Optimisation continue",
              "Reporting hebdomadaire",
              "Support dédié 7j/7",
            ]}
            price="1 500"
            duration="En continu"
            popular={true}
          />
          <ServiceCard
            icon={<Layout className="w-6 h-6" />}
            title="Web & E-commerce"
            description="Créez une présence en ligne impactante avec un site web optimisé pour la conversion."
            features={[
              "Design sur mesure",
              "Développement full-stack",
              "Optimisation SEO",
              "Analytics avancés",
              "Maintenance 6 mois",
            ]}
            price="5 000"
            duration="6-8 semaines"
          />
        </div>

        {/* Enterprise Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Gem className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">
                  Solution Enterprise
                </h3>
              </div>
              <p className="text-text mb-6 max-w-2xl">
                Besoin d'une solution personnalisée ? Nous créons des packages
                sur mesure pour les grandes entreprises avec des besoins
                spécifiques.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li className="flex items-center gap-2 text-text">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Support prioritaire 24/7
                </li>
                <li className="flex items-center gap-2 text-text">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Équipe dédiée
                </li>
                <li className="flex items-center gap-2 text-text">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Solutions personnalisées
                </li>
                <li className="flex items-center gap-2 text-text">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Intégration sur mesure
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-text mb-4">À partir de</p>
              <p className="text-4xl font-bold text-secondary mb-6">
                Sur devis
              </p>
              <button className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-secondary-dark transition flex items-center gap-2">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhyUs />
    </section>
  );
};
