import React from "react";
import { EntityType } from "../../types/thirdParty";

interface EntityTypeSelectionProps {
  onSelect: (type: EntityType) => void;
  selectedType?: EntityType;
}

const EntityTypeSelection: React.FC<EntityTypeSelectionProps> = ({
  onSelect,
  selectedType,
}) => {
  const entityTypes: {
    type: EntityType;
    label: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      type: "SOCIETE",
      label: "Société",
      description: "Entreprise, société commerciale ou organisation",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      type: "PARTICULIER",
      label: "Particulier",
      description: "Personne physique ou individu",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      type: "ADMINISTRATION",
      label: "Administration",
      description: "Institution publique ou gouvernementale",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Type d'Entité</h2>
        <p className="mt-2 text-base text-gray-600">
          Veuillez sélectionner le type d'entité que vous souhaitez créer
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entityTypes.map((entityType) => (
          <button
            key={entityType.type}
            onClick={() => onSelect(entityType.type)}
            className={`relative flex flex-col items-center p-6 bg-white border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              selectedType === entityType.type
                ? "border-primary bg-primary-50 shadow-lg"
                : "border-gray-200 hover:border-gray-300 hover:shadow-md"
            }`}
          >
            <div className="text-primary mb-4">{entityType.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {entityType.label}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {entityType.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EntityTypeSelection;
