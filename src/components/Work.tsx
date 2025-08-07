import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ExternalLink, Calendar } from "lucide-react";
import type { WorkCardProps } from "../types/common";
import { works } from "../data/work";
import { gsap } from "gsap";

const WorkCard: React.FC<WorkCardProps> = ({
  image,
  title,
  client,
  tags,
  category,
  // description, // Keep commented as in original
  year,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      // ScrollTrigger for individual card entrance
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // GSAP hover animations for work cards
      cardRef.current.addEventListener("mouseenter", () => {
        gsap.to(cardRef.current, {
          y: -8,
          scale: 1.03,
          boxShadow:
            "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power1.out",
          overwrite: true,
        });
      });
      cardRef.current.addEventListener("mouseleave", () => {
        gsap.to(cardRef.current, {
          y: 0,
          scale: 1,
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power1.out",
          overwrite: true,
        });
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-xl overflow-hidden shadow-sm transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
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
  const sectionRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterTabsRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef(null);
  const viewAllButtonRef = useRef(null);

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

  useEffect(() => {
    // ScrollTrigger for section header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // ScrollTrigger for filter tabs
    if (filterTabsRef.current) {
      gsap.fromTo(
        filterTabsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: filterTabsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // ScrollTrigger for view all projects button
    gsap.fromTo(
      viewAllButtonRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: viewAllButtonRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 px-4 bg-secondary text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Projets récents</h2>
            <p className="text-neutral-300 text-lg max-w-2xl">
              Découvrez comment nous aidons nos clients à atteindre leurs
              objectifs digitaux avec des solutions innovantes et sur mesure.
            </p>
          </div>
          <button
            ref={viewAllButtonRef}
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            Voir tous les projets
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div ref={filterTabsRef} className="flex flex-wrap gap-2 mb-12">
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
        <div
          ref={projectsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};
