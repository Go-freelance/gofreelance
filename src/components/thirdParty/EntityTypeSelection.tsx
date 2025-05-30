import React from "react";
import { EntityType } from "../../types/thirdParty";

interface EntityTypeSelectionProps {
  onSelect: (type: EntityType) => void;
}

const EntityTypeSelection: React.FC<EntityTypeSelectionProps> = ({
  onSelect,
}) => {
  const entityTypes = [
    {
      type: "Company" as EntityType,
      title: "Société",
      description: "Entité commerciale standard",
      icon: "🏢",
    },
    {
      type: "Individual" as EntityType,
      title: "Particulier",
      description: "Indépendant ou freelance",
      icon: "👤",
    },
    {
      type: "Government" as EntityType,
      title: "Gouvernement",
      description: "Organisation du secteur public",
      icon: "🏛️",
    },
    {
      type: "LargeAccount" as EntityType,
      title: "Grand Compte",
      description: "Grande entreprise ou corporation",
      icon: "🏭",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Type d'Entité</h2>
        <p className="mt-2 text-base text-gray-600">
          Sélectionnez le type d'entité qui décrit le mieux le fournisseur ou le
          tiers
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {entityTypes.map((entity) => (
          <button
            key={entity.type}
            onClick={() => onSelect(entity.type)}
            className="relative flex items-center p-6 border-2 rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <div className="flex items-center justify-center w-14 h-14 text-3xl bg-gray-50 rounded-xl">
              {entity.icon}
            </div>
            <div className="ml-5 text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                {entity.title}
              </h3>
              <p className="mt-1 text-base text-gray-600">
                {entity.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EntityTypeSelection;
