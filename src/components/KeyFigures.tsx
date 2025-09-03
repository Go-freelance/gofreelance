import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { KeyFigureProps } from "../types/common";

const KeyFigure: React.FC<KeyFigureProps> = ({ number, label }) => (
  <motion.div // Use motion.div for Framer Motion animations
    className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm" // Base styling, remove old hover classes
    whileHover={{
      scale: 1.05, // Slightly enlarge the card on hover
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Add a more prominent shadow on hover
    }}
    transition={{ duration: 0.2 }} // Smooth transition for the hover effect
  >
    <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">{number}</p>
    <p className="text-sm sm:text-base text-text font-medium">{label}</p>
  </motion.div>
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
        {/* Section Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos Chiffres Clés
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez l'impact de notre travail et les résultats concrets que
            nous avons obtenus pour nos clients.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {figures.map((figure, index) => (
            <KeyFigure key={index} {...figure} />
          ))}
        </div>
      </div>
    </section>
  );
};
