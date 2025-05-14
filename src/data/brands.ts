interface Brand {
  id: string
  name: string
  description: string
  url: string
  backgroundColor?: string
  accentColor: string
  logo?: string
  tags?: string[]
}

export const brands: Brand[] = [
  {
    id: "streameex",
    name: "Streameex",
    description: "Plateforme de live streaming pour les créateurs de contenu",
    url: "https://streameex.com",
    accentColor: "#e6007e",
    logo: "/images/brands/streameex-logo.png",
    tags: ["Streaming", "Contenu"],
  },
  {
    id: "streameex-studio",
    name: "Streameex Studio",
    description: "Studio professionnel pour l'enregistrement de podcasts",
    url: "https://podcast.streameex.com",
    accentColor: "#e6007e",
    logo: "/images/brands/studio-logo.png",
    tags: ["Podcast", "Studio"],
  },
  {
    id: "inteficiel",
    name: "Inteficiel",
    description: "Solution IA tout-en-un pour les entreprises",
    url: "https://inteficiel.com",
    accentColor: "#9c66ff",
    logo: "/images/brands/inteficiel-logo.png",
    tags: ["IA", "Business"],
  },
  {
    id: "fanframe",
    name: "Fanframe",
    description: "Décoration photo personnalisée de haute qualité",
    url: "https://fanframe.co",
    accentColor: "#00cbbf",
    logo: "/images/brands/fanframe-logo.png",
    tags: ["Décoration", "Photo"],
  },
  {
    id: "gofreelance-jobs",
    name: "Go freelance | Jobs",
    description: "Plateforme de mise en relation freelances et entreprises",
    url: "https://jobs.gofreelancerdc.com",
    accentColor: "#CC057B",
    logo: "/images/brands/go-jobs-logo.png",
    tags: ["Emploi", "Freelance"],
  },
  {
    id: "hmsmarts",
    name: "HMsmarts",
    description: "Plateforme d'apprentissage en ligne (MOOC)",
    url: "https://hmsmarts.com",
    accentColor: "#ca203b",
    logo: "/images/brands/hmsmart-logo.png",
    tags: ["Éducation", "E-learning"],
  },
  {
    id: "mbs",
    name: "Modern Business School",
    description: "Programme de formation pour les compétences professionnelles",
    url: "https://mbschool.site",
    accentColor: "#333333",
    logo: "/images/brands/mbs-logo.png",
    tags: ["Formation", "Business"],
  },
]
