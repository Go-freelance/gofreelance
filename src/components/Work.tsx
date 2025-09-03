import React, { useState, useRef } from "react";
import { ArrowUpRight, ExternalLink, Calendar } from "lucide-react";
import type { WorkCardProps } from "../types/common";
import { works } from "../data/work";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

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
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Animation variants for the card
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow:
          "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
      }}
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
    </motion.div>
  );
};

export const Work: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterTabsRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef(null);
  const viewAllButtonRef = useRef(null);

  // Animation controls
  const headerControls = useAnimation();
  const filterTabsControls = useAnimation();
  const viewAllButtonControls = useAnimation();
  const gridControls = useAnimation();

  // InView hooks
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isFilterTabsInView = useInView(filterTabsRef, {
    once: true,
    amount: 0.3,
  });
  const isViewAllButtonInView = useInView(viewAllButtonRef, {
    once: true,
    amount: 0.3,
  });
  const isGridInView = useInView(projectsGridRef, { once: true, amount: 0.1 });

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

  // Animation variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const headerItemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const filterTabsVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const filterTabVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  // Trigger animations when elements come into view
  React.useEffect(() => {
    if (isHeaderInView) {
      headerControls.start("visible");
    }
  }, [isHeaderInView, headerControls]);

  React.useEffect(() => {
    if (isFilterTabsInView) {
      filterTabsControls.start("visible");
    }
  }, [isFilterTabsInView, filterTabsControls]);

  React.useEffect(() => {
    if (isViewAllButtonInView) {
      viewAllButtonControls.start("visible");
    }
  }, [isViewAllButtonInView, viewAllButtonControls]);

  React.useEffect(() => {
    if (isGridInView) {
      gridControls.start("visible");
    }
  }, [isGridInView, gridControls]);

  // Re-animate grid when filter changes
  React.useEffect(() => {
    gridControls.start("visible");
  }, [filter, gridControls]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 px-4 bg-secondary text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerControls}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16"
        >
          <motion.div variants={headerItemVariants}>
            <h2 className="text-4xl font-bold mb-4">Projets récents</h2>
            <p className="text-neutral-300 text-lg max-w-2xl">
              Découvrez comment nous aidons nos clients à atteindre leurs
              objectifs digitaux avec des solutions innovantes et sur mesure.
            </p>
          </motion.div>
          <motion.button
            ref={viewAllButtonRef}
            variants={buttonVariants}
            initial="hidden"
            animate={viewAllButtonControls}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            Voir tous les projets
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          ref={filterTabsRef}
          variants={filterTabsVariants}
          initial="hidden"
          animate={filterTabsControls}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              variants={filterTabVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === category.key
                  ? "bg-primary text-white"
                  : "bg-white/10 text-neutral-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={projectsGridRef}
          variants={gridVariants}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                },
              }}
            >
              <WorkCard {...work} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
