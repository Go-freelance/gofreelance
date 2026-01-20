import React, { useRef } from "react";
import { ExternalLink, ArrowRight, Globe } from "lucide-react";
import { brands } from "../data/brands";
import { motion, useInView } from "framer-motion";

export const Brands: React.FC = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 uppercase px-3 rounded-full bg-secondary/5 text-secondary font-semibold text-sm mb-6">
            Notre Écosystème
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Des marques <span className="gradient-text">innovantes</span>
          </h2>
          <p className="text-xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            Découvrez les solutions que nous avons développées pour répondre aux défis du marché digital.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.a
              key={brand.id}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 overflow-hidden flex flex-col h-full"
            >
              {/* Hover Gradient Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ backgroundColor: brand.color || brand.accentColor }}
              />

              {/* Header: Logo & External Link */}
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div 
                  className="w-40 h-16 rounded-2xl flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-105"
                  style={{ color: brand.color }}
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Globe className="w-8 h-8" />
                  )}
                </div>
                <div 
                  className="p-2 rounded-full bg-neutral-50 text-neutral-400 group-hover:text-white group-hover:bg-secondary transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-text/70 leading-relaxed mb-6">
                  {brand.description}
                </p>
              </div>

              {/* Footer: Tags & Action */}
              <div className="relative z-10 pt-6 border-t border-neutral-100 mt-auto flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {brand.tags?.slice(0, 2).map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-secondary group-hover:gap-3 transition-all">
                  Visiter
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
