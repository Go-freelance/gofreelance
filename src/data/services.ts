import React from "react";
import {
  Zap,
  Target,
  WorkflowIcon as Wordpress,
  Smartphone,
  RefreshCw,
  Bot,
  Megaphone,
} from "lucide-react";
import type { ServiceCardProps } from "../types/common";

export const services: ServiceCardProps[] = [
  {
    icon: React.createElement(Zap, { className: "w-6 h-6" }),
    title: "Automatisation",
    description:
      "Optimisez vos processus avec des solutions d'automatisation intelligentes.",
    features: [
      "Workflows automatisés",
      "Intégration CRM",
      "Email marketing automation",
      "Lead nurturing",
      "Reporting automatique",
    ],
    popular: true,
  },
  {
    icon: React.createElement(Target, { className: "w-6 h-6" }),
    title: "Campagne Cross Canal",
    description:
      "Stratégies marketing intégrées sur tous vos canaux de communication.",
    features: [
      "Stratégie omnicanale",
      "Social Media Management",
      "Email & SMS marketing",
      "Publicité display",
      "Retargeting avancé",
    ],
    popular: false,
  },
  {
    icon: React.createElement(Wordpress, { className: "w-6 h-6" }),
    title: "Développement WordPress Elementor",
    description:
      "Sites web professionnels avec WordPress et Elementor pour une gestion facile.",
    features: [
      "Design responsive",
      "Interface Elementor",
      "Optimisation SEO",
      "E-commerce WooCommerce",
      "Formation incluse",
    ],
    popular: false,
  },
  {
    icon: React.createElement(Smartphone, { className: "w-6 h-6" }),
    title: "Développement Web et Mobile",
    description:
      "Applications web et mobiles sur mesure avec les dernières technologies.",
    features: [
      "Applications React/Vue.js",
      "Apps mobiles natives",
      "Progressive Web Apps",
      "API & Backend",
      "Maintenance continue",
    ],
    popular: false,
  },
  {
    icon: React.createElement(RefreshCw, { className: "w-6 h-6" }),
    title: "Transformation Digitale",
    description:
      "Accompagnement complet dans votre transition vers le digital.",
    features: [
      "Audit digital complet",
      "Stratégie de transformation",
      "Formation des équipes",
      "Change management",
      "Suivi des performances",
    ],
    popular: false,
  },
  {
    icon: React.createElement(Bot, { className: "w-6 h-6" }),
    title: "Intégration IA",
    description:
      "Intégrez l'intelligence artificielle dans vos processus métier.",
    features: [
      "Chatbots intelligents",
      "Analyse prédictive",
      "Automatisation IA",
      "Machine Learning",
      "Solutions personnalisées",
    ],
    popular: false,
  },
  {
    icon: React.createElement(Megaphone, { className: "w-6 h-6" }),
    title: "Campagne Publicitaire",
    description:
      "Campagnes publicitaires performantes sur tous les canaux digitaux.",
    features: [
      "Google Ads & Facebook Ads",
      "LinkedIn & TikTok Ads",
      "Stratégie créative",
      "Optimisation ROI",
      "Reporting détaillé",
    ],
    popular: false,
  },
];
