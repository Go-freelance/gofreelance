import React from "react";
import { ArrowUpRight } from "lucide-react";
import { WorkCardProps } from "../types/common";

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
  const works = [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      title: "Transformation Digitale",
      client: "TechCorp",
      tags: ["Stratégie", "UX Design"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800",
      title: "Refonte E-commerce",
      client: "FashionBrand",
      tags: ["E-commerce", "UI Design"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800",
      title: "Stratégie Social Media",
      client: "FoodCo",
      tags: ["Social Media", "Content"],
    },
  ];

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
