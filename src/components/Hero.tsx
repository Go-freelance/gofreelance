import React from "react";
import { ArrowRight, Award } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              We make <span className="excellence-gradient">Excellence</span>.
            </h1>
            <p className="text-xl text-text mb-12">
              Accélérez vos résultats business grâce à des stratégies digitales
              data-driven
            </p>
            <a
              href="#services"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium w-fit"
            >
              Découvrir nos services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80"
              alt="Digital Strategy"
              className="rounded-2xl shadow-xl animate-float"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-text">Certifié</p>
                  <p className="font-bold text-secondary">Meta Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
