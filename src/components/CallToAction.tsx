import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AppointmentForm } from "./AppointmentForm";

export const CallToAction: React.FC = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const OpenAppointmentForm = () => {
    setShowAppointmentForm(true);
  };

  const CloseAppointmentForm = () => {
    setShowAppointmentForm(false);
  };

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
        <button
          className="bg-white text-primary px-8 py-4 rounded-full text-lg hover:bg-neutral-100 transition flex items-center gap-2 mx-auto font-medium"
          onClick={OpenAppointmentForm}
        >
          Démarrer votre projet
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      {showAppointmentForm && (
        <AppointmentForm onClose={CloseAppointmentForm} />
      )}
    </section>
  );
};
