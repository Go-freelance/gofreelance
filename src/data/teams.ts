export interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  avatar: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Gracy Omokoso",
    role: "Role",
    specialty: "Stratégie & Conseil",
    avatar: "./images/gracy.png",
  },
  {
    id: 2,
    name: "Noel Kayembe",
    role: "Role",
    specialty: "Acquisition & Conversion",
    avatar: "./images/noel.jpg",
  },
  {
    id: 3,
    name: "Mariame Lisongo",
    role: "Role",
    specialty: "Web & E-commerce",
    avatar: "./images/mariam.jpg",
  },

  {
    id: 4,
    name: "Mirja Mayuku",
    role: "Role",
    specialty: "Stratégie & Conseil",
    avatar: "./images/Mirja.jpg",
  }
];
