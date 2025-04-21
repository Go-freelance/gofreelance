import React from "react";
import { CheckCircle, Euro, Clock } from "lucide-react";
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
    <div
      className={`bg-white p-8 rounded-xl relative ${
        popular ? "ring-2 ring-primary" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Populaire
        </div>
      )}
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-text mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-text">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 mb-2">
        <Euro className="w-5 h-5 text-primary" />
        <span className="text-2xl font-bold">{price}€</span>
        <span className="text-text">/projet</span>
      </div>
      <div className="flex items-center gap-2 text-text">
        <Clock className="w-4 h-4" />
        <span>{duration}</span>
      </div>
    </div>
  );
};
