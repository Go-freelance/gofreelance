import React from "react";
import { ArrowUpRight } from "lucide-react";
import { WorkCardProps } from "../types/common";
import { works } from "../data/work";

const WorkCard: React.FC<WorkCardProps> = ({ image, title, client, tags }) => (
  <div className="group cursor-pointer bg-secondary-dark/30 p-4 rounded-2xl hover:bg-secondary-dark/50 transition-all duration-300">
    <div className="overflow-hidden rounded-xl mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition duration-500"
      />
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
    <p className="text-neutral-300 text-sm sm:text-base mb-3">{client}</p>
    {tags && (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-secondary-light/50 rounded-full text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

export const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-secondary text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Projets récents
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl">
              Découvrez nos dernières réalisations et notre expertise en
              développement web
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary hover:text-primary-dark transition px-4 py-2 rounded-lg hover:bg-primary/10">
            Voir tous les projets
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};
