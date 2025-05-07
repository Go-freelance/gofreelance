import React from "react";
import { ArrowUpRight } from "lucide-react";
import { WorkCardProps } from "../types/common";
import { works } from "../data/work";

const WorkCard: React.FC<WorkCardProps> = ({ image, title, client, tags }) => (
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

export const Work: React.FC = () => {
  return (
    <section className="section-padding bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Projets récents</h2>
            <p className="text-neutral-300">
              Découvrez nos dernières réalisations
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition">
            Voir tous les projets
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};
