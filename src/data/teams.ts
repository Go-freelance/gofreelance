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
    role: "Stratégiste Digital",
    specialty: "Stratégie & Conseil",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Noel Kayembe",
    role: "Growth Marketer",
    specialty: "Acquisition & Conversion",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Mariame Lisongo",
    role: "Designer UX/UI",
    specialty: "Web & E-commerce",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
];
