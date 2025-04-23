import React from "react";
import { ArrowRight } from "lucide-react";

export const CallToAction: React.FC = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Prêt à accélérer votre croissance ?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discutons de vos objectifs et découvrez comment nous pouvons vous
          aider à les atteindre.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-full text-lg hover:bg-neutral-100 transition flex items-center gap-2 mx-auto font-medium">
          Démarrer votre projet
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
