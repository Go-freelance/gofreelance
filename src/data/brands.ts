interface Brand {
  id: string;
  name: string;
  description: string;
  url: string;
  backgroundColor?: string;
  color?: string;
  accentColor: string;
  logo?: string;
  tags?: string[];
}

export const brands: Brand[] = [
  {
    id: "streameex",
    name: "Streameex",
    description: "Plateforme de live streaming pour les créateurs de contenu",
    url: "https://streameex.com",
    accentColor: "#2b0e6a",
    color: "#cc057b",
    logo: "/images/brands/nnnn.png",
    tags: ["Streaming", "Contenu"],
  },
  {
    id: "streameex-studio",
    name: "Streameex Studio",
    description: "Studio professionnel pour l'enregistrement de podcasts",
    url: "https://podcast.streameex.com",
    color: "#cc057b",
    accentColor: "white",
    logo: "/images/brands/studio-logo.png",
    tags: ["Podcast", "Studio"],
  },
  {
    id: "inteficiel",
    name: "Inteficiel",
    description: "Solution IA tout-en-un pour les entreprises",
    url: "https://inteficiel.com",
    accentColor: "white",
    color: "#9c66ff",
    logo: "/images/brands/inteficiel-logo.png",
    tags: ["IA", "Business"],
  },
  {
    id: "fanframe",
    name: "Fanframe",
    description: "Décoration photo personnalisée de haute qualité",
    url: "https://fanframe.co",
    accentColor: "black",
    color: "#00cbbf",
    logo: "/images/brands/fanframe-logo.png",
    tags: ["Décoration", "Photo"],
  },
  {
    id: "gofreelance-jobs",
    name: "Go freelance | Jobs",
    description: "Plateforme de mise en relation freelances et entreprises",
    url: "https://jobs.gofreelancerdc.com",
    accentColor: "white",
    color: "#CC057B",
    logo: "/images/brands/go-jobs-logo.png",
    tags: ["Emploi", "Freelance"],
  },
  {
    id: "hmsmarts",
    name: "HMsmarts",
    description: "Plateforme d'apprentissage en ligne (MOOC)",
    url: "https://hmsmarts.com",
    accentColor: "#ca203b",
    color: "#ca203b",
    logo: "/images/brands/hmsmart.png",
    tags: ["Éducation", "E-learning"],
  },
  {
    id: "mbs",
    name: "Micro Business School",
    description: "Programme de formation pour les compétences professionnelles",
    url: "https://mbschool.site",
    accentColor: "#333333",
    logo: "/images/brands/mbs-logo.png",
    tags: ["Formation", "Business"],
  },
];
