export type ServiceCategory = 'All' | 'Events' | 'Production' | 'Digital';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Events' | 'Production' | 'Digital';
  icon: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export type ProjectType = 'Music Video' | 'Lyrical Video' | 'International Project';

export interface ProjectItem {
  id: string;
  title: string;
  year: number;
  type: ProjectType;
  role: string;
  director?: string;
  musicDirector?: string;
  castAndCrew: string;
  featuredArtists: string[];
  youtubeUrl: string;
  youtubeId: string;
  accentColor: string;
  summary: string;
  international?: boolean;
  featured?: boolean;
}

export type GalleryCategory = 'All' | 'Weddings' | 'Stage & Backdrops' | 'Modeling Shoots' | 'Product Shoots' | 'Private Events';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Stage & Backdrops' | 'Modeling Shoots' | 'Product Shoots' | 'Private Events';
  imageUrl: string;
  caption: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
  // for product shoots with before/after reveal
  isComparison?: boolean;
  rawImageUrl?: string;
  finishedImageUrl?: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  eventDate?: string;
  estimatedBudget?: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}
