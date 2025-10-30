import React from "react";
import { ArrowRight } from "lucide-react";
import { useAppointment } from "../contexts/AppointmentContext";

export const CallToAction: React.FC = () => {
  const { openAppointmentForm } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointmentForm();
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-primary">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Prêt à accélérer votre croissance ?
        </h2>
        <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto">
          Discutons de vos objectifs et découvrez comment nous pouvons vous
          aider à les atteindre.
        </p>
        <button
          className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg hover:bg-neutral-100 transition flex items-center gap-2 mx-auto font-medium"
          onClick={handleOpenAppointment}
        >
          Démarrer votre projet
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
