import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Brands } from "./components/Brands";
import { Services } from "./components/Services";
import { KeyFigures } from "./components/KeyFigures";
import { Work } from "./components/Work";
import { Footer } from "./components/Footer";
import {
  ArrowRight,
  BarChart2,
  Code2,
  Lightbulb,
  Users,
  Target,
  Rocket,
  LineChart,
  Layout,
  MessageSquare,
  Share2,
  Award,
  CheckCircle,
  ArrowUpRight,
  Euro,
  Clock,
  Zap,
  ShieldCheck,
  Sparkles,
  Gem,
  Linkedin,
  Twitter,
  Instagram,
  Circle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Brands />
      <Services />
      <KeyFigures />
      <Work />
      <Footer />
    </div>
  );
}

function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition group">
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-secondary">{title}</h3>
      <p className="text-text">{description}</p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  price,
  duration,
  popular,
}) {
  return (
    <div
      className={`bg-white p-8 rounded-2xl transition relative ${
        popular ? "shadow-xl scale-105" : "shadow-sm hover:shadow-lg"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Plus populaire
        </div>
      )}
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-secondary">{title}</h3>
      <p className="text-text mb-6">{description}</p>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-text">À partir de</span>
          <span className="text-4xl font-bold text-secondary">{price}€</span>
          <span className="text-sm text-text">/mois</span>
        </div>
        <div className="flex items-center gap-2 mt-2 text-sm text-text">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-text">
            <CheckCircle className="w-5 h-5 text-primary" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full ${
          popular ? "bg-primary text-white" : "bg-neutral-100 text-secondary"
        } px-6 py-3 rounded-full hover:bg-primary hover:text-white transition font-medium flex items-center justify-center gap-2`}
      >
        Commander maintenant
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function KeyFigure({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold mb-2 gradient-text">{number}</div>
      <div className="text-text font-medium">{label}</div>
    </div>
  );
}

function WorkCard({ image, title, client, tags }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-2xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-300 mb-4">{client}</p>
      {tags && (
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-secondary-light rounded-full text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
