import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjectsByYear,
  filterProjectsByType,
  filterServicesByCategory,
  filterGalleryByCategory,
  calculateExperienceYears,
  validateInquiryForm,
  formatWhatsAppUrl
} from './data-helpers.ts';
import type {
  ProjectItem,
  ServiceItem,
  GalleryItem,
  InquiryFormData
} from './data-helpers.ts';

const mockProjects: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Gajakesari',
    year: 2022,
    type: 'Music Video',
    role: 'Director',
    castAndCrew: '',
    featuredArtists: ['Darkkey'],
    youtubeUrl: '',
    youtubeId: '',
    accentColor: '#F5C518',
    summary: ''
  },
  {
    id: 'p2',
    title: 'Paravattum Emmozhi',
    year: 2022,
    type: 'Lyrical Video',
    role: 'Producer',
    castAndCrew: '',
    featuredArtists: ['MC-Jey'],
    youtubeUrl: '',
    youtubeId: '',
    accentColor: '#FFB033',
    summary: ''
  },
  {
    id: 'p3',
    title: 'Navitan II',
    year: 2023,
    type: 'Music Video',
    role: 'Director',
    castAndCrew: '',
    featuredArtists: ['Vikadakavi'],
    youtubeUrl: '',
    youtubeId: '',
    accentColor: '#0E2F5F',
    summary: ''
  }
];

const mockServices: ServiceItem[] = [
  {
    id: 's1',
    title: 'Dinner & Wedding',
    tagline: 'Tag',
    category: 'Events',
    icon: 'favorite',
    description: '',
    deliverables: [],
    idealFor: ''
  },
  {
    id: 's2',
    title: 'Video Production',
    tagline: 'Tag',
    category: 'Production',
    icon: 'videocam',
    description: '',
    deliverables: [],
    idealFor: ''
  },
  {
    id: 's3',
    title: 'Brand Activation',
    tagline: 'Tag',
    category: 'Digital',
    icon: 'campaign',
    description: '',
    deliverables: [],
    idealFor: ''
  }
];

test('filterProjectsByYear correctly filters by exact year and returns all when All', () => {
  const result2022 = filterProjectsByYear(mockProjects, 2022);
  assert.equal(result2022.length, 2);
  assert.equal(result2022[0].title, 'Gajakesari');

  const result2023 = filterProjectsByYear(mockProjects, 2023);
  assert.equal(result2023.length, 1);
  assert.equal(result2023[0].title, 'Navitan II');

  const resultAll = filterProjectsByYear(mockProjects, 'All');
  assert.equal(resultAll.length, 3);
});

test('filterProjectsByType correctly filters by Music Video or Lyrical Video', () => {
  const musicVideos = filterProjectsByType(mockProjects, 'Music Video');
  assert.equal(musicVideos.length, 2);

  const lyricalVideos = filterProjectsByType(mockProjects, 'Lyrical Video');
  assert.equal(lyricalVideos.length, 1);
  assert.equal(lyricalVideos[0].title, 'Paravattum Emmozhi');
});

test('filterServicesByCategory filters by category properly', () => {
  const eventServices = filterServicesByCategory(mockServices, 'Events');
  assert.equal(eventServices.length, 1);
  assert.equal(eventServices[0].id, 's1');

  const allServices = filterServicesByCategory(mockServices, 'All');
  assert.equal(allServices.length, 3);
});

test('filterGalleryByCategory filters items properly', () => {
  const mockGallery: GalleryItem[] = [
    { id: 'g1', title: 'Wedding Stage', category: 'Weddings', imageUrl: '', caption: '' },
    { id: 'g2', title: 'Editorial Shoot', category: 'Modeling Shoots', imageUrl: '', caption: '' }
  ];

  const weddings = filterGalleryByCategory(mockGallery, 'Weddings');
  assert.equal(weddings.length, 1);
  assert.equal(weddings[0].id, 'g1');

  const all = filterGalleryByCategory(mockGallery, 'All');
  assert.equal(all.length, 2);
});

test('calculateExperienceYears computes correct span from 2021', () => {
  const exp = calculateExperienceYears(2021, 2026);
  assert.equal(exp, 5);
});

test('validateInquiryForm validates inputs and rejects incomplete forms', () => {
  const invalidForm: InquiryFormData = {
    fullName: '',
    email: 'bad-email',
    phone: '123',
    serviceCategory: '',
    message: 'hi'
  };

  const validation = validateInquiryForm(invalidForm);
  assert.equal(validation.valid, false);
  assert.ok(validation.errors.fullName);
  assert.ok(validation.errors.email);
  assert.ok(validation.errors.phone);
  assert.ok(validation.errors.serviceCategory);
  assert.ok(validation.errors.message);

  const validForm: InquiryFormData = {
    fullName: 'Praveen Raj',
    email: 'praveen@example.com',
    phone: '0176482460',
    serviceCategory: 'Dinner & Wedding',
    eventDate: '2026-11-20',
    estimatedBudget: 'RM 25,000 - RM 50,000',
    message: 'We are looking for full-stage decor and sound lighting in Melaka.'
  };

  const validResult = validateInquiryForm(validForm);
  assert.equal(validResult.valid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('formatWhatsAppUrl properly formats phone and message parameter', () => {
  const url = formatWhatsAppUrl('+6017-6482460', 'Hello JD Universal');
  assert.equal(url, 'https://wa.me/60176482460?text=Hello%20JD%20Universal');
});
