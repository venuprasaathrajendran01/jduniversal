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
export function filterProjectsByYear(projects: ProjectItem[], year: number | 'All'): ProjectItem[] {
  if (year === 'All') return projects;
  return projects.filter(p => p.year === year);
}

export function filterProjectsByType(projects: ProjectItem[], type: string | 'All'): ProjectItem[] {
  if (type === 'All') return projects;
  return projects.filter(p => p.type === type);
}

export function filterServicesByCategory(services: ServiceItem[], category: string | 'All'): ServiceItem[] {
  if (category === 'All') return services;
  return services.filter(s => s.category === category);
}

export function filterGalleryByCategory(items: GalleryItem[], category: string | 'All'): GalleryItem[] {
  if (category === 'All') return items;
  return items.filter(item => item.category === category);
}

export function calculateExperienceYears(foundedYear = 2021, currentYear = new Date().getFullYear()): number {
  return Math.max(1, currentYear - foundedYear);
}

export function validateInquiryForm(data: InquiryFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors['fullName'] = 'Please enter your full name (minimum 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors['email'] = 'Please enter a valid email address.';
  }

  // Malaysian / international phone validator (minimum 8 digits)
  const cleanPhone = (data.phone || '').replace(/[^0-9]/g, '');
  if (!cleanPhone || cleanPhone.length < 8) {
    errors['phone'] = 'Please enter a valid phone number (at least 8 digits).';
  }

  if (!data.serviceCategory || data.serviceCategory.trim() === '') {
    errors['serviceCategory'] = 'Please select a service or project category.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors['message'] = 'Please provide details about your event or project (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

export function formatWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
