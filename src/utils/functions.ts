/**
 * Utility function to generate service slugs for navigation
 * Matches existing routes based on service titles
 */
export const getServiceSlug = (title: string): string => {
  const map: Record<string, string> = {
    "Campagne Cross Canal": "campagne-cross-canal",
    "Campagne Publicitaire": "campagne-publicitaire",
    Automatisation: "automatisation",
    "Design de Marque": "design-marque",
    "Création Graphique": "creation-graphique",
    "Branding, PR & E-réputation": "branding",
    "Développement WordPress Elementor": "developpement-wordpress-elementor",
    "Développement Web et Mobile": "developpement-web-et-mobile",
    "Transformation Digitale": "transformation-digitale",
    "Intégration IA": "integration-ia",
    "Upskills des équipes": "upskills-equipes",
    "Programmes de Formation (long & court)": "programmes-formation",
  };
  return (
    map[title] ||
    title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
  );
};
