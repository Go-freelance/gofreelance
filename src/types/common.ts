export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  popular?: boolean;
}

export interface WorkCardProps {
  image: string;
  title: string;
  client: string;
  tags: string[];
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
