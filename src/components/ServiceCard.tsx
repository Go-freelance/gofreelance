import type React from "react";
import { CheckCircle, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceCardProps } from "../types/common";
import { useAppointment } from "../contexts/AppointmentContext";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  popular = false,
}) => {
  const { openAppointment } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointment(title);
  };

  // Generate URL slug from title
  const getServiceSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/&/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  return (
    <>
      <div
        className={`bg-white p-6 rounded-2xl transition relative h-full flex flex-col ${
          popular
            ? "shadow-xl scale-105 border-2 border-primary/20"
            : "shadow-sm hover:shadow-lg"
        }`}
      >
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Plus populaire
          </div>
        )}

        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>

        <h3 className="text-lg font-bold mb-3 text-secondary">{title}</h3>
        <p className="text-text mb-4 text-sm leading-relaxed">{description}</p>

        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-text text-sm"
            >
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3">
          <Link
            to={`/services/${getServiceSlug(title)}`}
            className="w-full bg-neutral-100 text-secondary px-4 py-2.5 rounded-full hover:bg-neutral-200 transition font-medium flex items-center justify-center gap-2 text-sm"
          >
            <Eye className="w-4 h-4" />
            En savoir plus
          </Link>

          <button
            onClick={handleOpenAppointment}
            className={`w-full ${
              popular ? "bg-primary text-white" : "bg-primary text-white"
            } px-4 py-2.5 rounded-full hover:bg-primary-dark transition font-medium flex items-center justify-center gap-2 text-sm`}
          >
            Demander un devis
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
