export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface WorkCardProps {
  id: number;
  image: string;
  title: string;
  client: string;
  tags?: string[];
  category?: string;
  description?: string;
  year?: string;
}

export interface KeyFigureProps {
  number: string;
  label: string;
}

export interface Partner {
  id: number;
  image: string;
  name: string;
}
