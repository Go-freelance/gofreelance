"use client";

import type React from "react";
import { useState } from "react";
import { ArrowUpRight, ExternalLink, Calendar } from "lucide-react";
import type { WorkCardProps } from "../types/common";
import { works } from "../data/work";

const WorkCard: React.FC<WorkCardProps> = ({
  image,
  title,
  client,
  tags,
  category,
  // description,
  year,
}) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white text-secondary text-xs font-medium rounded-full shadow-sm">
            {category}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-2 py-1 bg-white/90 text-secondary text-xs rounded-full">
            <Calendar className="w-3 h-3" />
            {year}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors">
              <ExternalLink className="w-5 h-5 text-secondary" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-primary font-medium text-sm mb-2">{client}</p>
          {/* <p className="text-text text-sm leading-relaxed">{description}</p> */}
        </div>

        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary text-neutral-50 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const Work: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: "Tous les projets" },
    { key: "Digital Strategy", label: "Stratégie Digitale" },
    { key: "Marketing", label: "Marketing" },
    { key: "Software Development", label: "Développement" },
    { key: "Brand Design", label: "Branding" },
    { key: "Social Media", label: "Social Media" },
    { key: "Content Creation", label: "Création de contenu" },
  ];

  const filteredWorks =
    filter === "all" ? works : works.filter((work) => work.category === filter);

  return (
    <section id="work" className="py-24 px-4 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Projets récents</h2>
            <p className="text-neutral-300 text-lg max-w-2xl">
              Découvrez comment nous aidons nos clients à atteindre leurs
              objectifs digitaux avec des solutions innovantes et sur mesure.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium">
            Voir tous les projets
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === category.key
                  ? "bg-primary text-white"
                  : "bg-white/10 text-neutral-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};
