import React from "react";
import { brands } from "../data/brands";

export const Brands: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: brand.backgroundColor }}
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {brand.name}
              </h3>
              <p className="text-white/90">{brand.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
