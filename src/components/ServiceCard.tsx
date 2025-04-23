import React from "react";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";
import { ServiceCardProps } from "../types/common";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  price,
  duration,
  popular = false,
}) => {
  return (
<div className={`bg-white p-8 rounded-2xl transition relative ${popular ? 'shadow-xl scale-105' : 'shadow-sm hover:shadow-lg'}`}>
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
          <span className="text-4xl font-bold text-secondary">{price}$</span>
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

      <button className={`w-full ${popular ? 'bg-primary text-white' : 'bg-neutral-100 text-secondary'} px-6 py-3 rounded-full hover:bg-primary hover:text-white transition font-medium flex items-center justify-center gap-2`}>
        Commander maintenant
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
