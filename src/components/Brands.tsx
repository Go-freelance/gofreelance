import type React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { brands } from "../data/brands";

export const Brands: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Notre Écosystème
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Découvrez les marques innovantes que nous avons développées pour
            répondre aux besoins du marché digital
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl transition-all duration-300 hover:scale-105 bg-neutral-200 border border-neutral-100 hover:border-neutral-200 hover:shadow-lg overflow-hidden"
            >
              {/* Brand Logo */}
              <div
                className={`h-30 flex items-center justify-center p-6 relative`}
                style={{backgroundColor: brand.accentColor}}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-8 object-contain transition-transform group-hover:scale-110"
                />
              </div>

              {/* Brand Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: brand.color || "#333333" }}
                  >
                    {brand.name}
                  </h3>
                  <span className="text-neutral-300 group-hover:text-primary transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
                <p className="text-text/80 mb-4">{brand.description}</p>

                {/* Tags */}
                {brand.tags && (
                  <div className="flex flex-wrap gap-2">
                    {brand.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full text-white"
                        style={{
                          backgroundColor: brand.color || "#333333",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="px-6 py-3 border-t border-neutral-100 flex justify-between items-center">
                <span
                  className="text-sm font-medium transition-colors duration-300"
                  style={{ color: brand.color || "#333333" }}
                >
                  Découvrir
                </span>
                <ArrowRight
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  style={{ color: brand.color || "#333333" }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
