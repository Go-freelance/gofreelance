import React from "react";
import { KeyFigureProps } from "../types/common";

const KeyFigure: React.FC<KeyFigureProps> = ({ number, label }) => (
  <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">{number}</p>
    <p className="text-sm sm:text-base text-text font-medium">{label}</p>
  </div>
);

export const KeyFigures: React.FC = () => {
  const figures = [
    { number: "150+", label: "Clients satisfaits" },
    { number: "450%", label: "ROI moyen" },
    { number: "1000+", label: "Campagnes gérées" },
    { number: "25+", label: "Experts passionnés" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {figures.map((figure, index) => (
            <KeyFigure key={index} {...figure} />
          ))}
        </div>
      </div>
    </section>
  );
};
