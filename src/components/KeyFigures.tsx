import React from "react";
import { KeyFigureProps } from "../types/common";

const KeyFigure: React.FC<KeyFigureProps> = ({ number, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-primary mb-2">{number}</p>
    <p className="text-text">{label}</p>
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
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {figures.map((figure, index) => (
            <KeyFigure key={index} {...figure} />
          ))}
        </div>
      </div>
    </section>
  );
};
