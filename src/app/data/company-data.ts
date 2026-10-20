import { ServiceItem, ProjectItem, GalleryItem } from '../models/company.model';

export const COMPANY_INFO = {
  name: 'JD Universal SDN BHD',
  shortName: 'JD Universal',
  tagline: 'From Vision to Reality',
  logo: '/logo.png',
  foundedYear: 2021,
  founder: {
    name: 'Jayakumar Chandrasekaran',
    stageName: 'MC-Jey',
    role: 'Founder & CEO',
    title: 'Music Video Director | Music Video Producer',
    age: 40,
    bio: 'Jayakumar, known in the entertainment industry as MC-Jey, is a visionary creative director, producer, and entrepreneur. As the Founder and CEO of JD Universal SDN BHD, he has played a pivotal role in shaping contemporary music video production and cultural live experiences across Southeast Asia and South Asia by combining cutting-edge technical precision with authentic artistic storytelling.',
    expertise: [
      'Music Video Direction & Production',
      'Creative Content Development',
      'Artist Collaboration & Talent Development',
      'Leadership in Creative Entrepreneurship',
    ],
    achievements: [
      'Founded JD Universal SDN BHD, a premier Malaysian creative production agency.',
      'Directed and produced 10+ high-production music videos across diverse musical genres.',
      'Recognized by leading national broadcasters including Minnal FM and Raaga FM.',
      'Bridged international artist and composer collaborations across Malaysia, India, and Sri Lanka.'
    ]
  },
  contact: {
    address: 'B4, 08, Jln TSS 2, Kasturi Semabok, 75050 Melaka, Malaysia',
    phone: '017-6482460',
    phoneRaw: '+60176482460',
    email: 'contact@jduniversal.com.my',
    youtube: 'https://youtube.com/@jduniversal9602',
    whatsapp: 'https://wa.me/60176482460?text=Hi%20JD%20Universal,%20I%20would%20like%20to%20discuss%20an%20event%20or%20production%20project.',
  },
  stats: [
    { label: 'Operating Since', value: '2021', subtext: 'Established in Melaka' },
    { label: 'Releases & Projects', value: '10+', subtext: 'Music & Lyrical Videos' },
    { label: 'International Reach', value: '3', subtext: 'Malaysia · India · Sri Lanka' },
    { label: 'Radio Features', value: '2', subtext: 'Minnal FM · Raaga FM' },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'dinner-wedding',
    title: 'Dinner & Wedding',
    tagline: 'Unforgettable dining experiences and elegant weddings tailored to your vision.',
    category: 'Events',
    icon: 'favorite',
    description: 'We orchestrate bespoke grand weddings, private banquets, and milestone dinners with regal decor, custom lighting, seamless timeline coordination, and royal banquet management.',
    deliverables: ['Custom Theme Concepting', 'Floral & Mandap/Stage Design', 'Guest Flow Coordination', 'Master of Ceremonies & Run-Sheet'],
    idealFor: 'Couples, luxury wedding celebrations, anniversary banquets, and high-profile family dinners.'
  },
  {
    id: 'video-production',
    title: 'Video Production',
    tagline: 'Captivating video production that tells your story.',
    category: 'Production',
    icon: 'videocam',
    description: 'Full-scale cinematic production equipped with cinema cameras, master color grading, anamorphic lenses, crane work, and narrative direction from script to final DCP.',
    deliverables: ['Music Videos & Short Films', 'Commercial Brand Films', 'Multi-Cam Concert Recording', '4K/8K Post-Production & Color'],
    idealFor: 'Artists, record labels, corporate brands, and entertainment agencies.'
  },
  {
    id: 'brand-activation',
    title: 'Brand Activation',
    tagline: 'Elevate your brand with our activation strategies.',
    category: 'Digital',
    icon: 'campaign',
    description: 'Immersive on-ground consumer experiences, experiential pop-ups, and interactive product launches designed to spark organic virality and authentic social engagement.',
    deliverables: ['Experiential Booths', 'Influencer & Press Coordination', 'Sampling & Live Interaction', 'Metrics & Engagement Reporting'],
    idealFor: 'Consumer brands, retail launches, beverage companies, and tech products.'
  },
  {
    id: 'virtual-events',
    title: 'Virtual Events',
    tagline: 'Engaging virtual events that bring people together online.',
    category: 'Events',
    icon: 'devices',
    description: 'Broadcast-grade live streaming with ultra-low latency, custom branded virtual stages, live polling, remote speaker integration, and interactive attendee portals.',
    deliverables: ['Multi-Destination Live Streaming', 'Hybrid Stage Integration', 'Live Q&A and Chat Moderation', 'Cloud VOD Archive'],
    idealFor: 'Global conferences, product reveals, hybrid corporate townhalls, and webinars.'
  },
  {
    id: 'catering-management',
    title: 'Catering Management',
    tagline: 'Efficient catering management for flawless events.',
    category: 'Events',
    icon: 'restaurant',
    description: 'Curated culinary journeys featuring traditional authentic feasts, modern fusion menus, live live-cooking stations, and white-glove beverage service.',
    deliverables: ['Menu Engineering & Tastings', 'Dietary & Halal Compliance', 'Live Cooking Stations', 'Silver Service Waitstaff'],
    idealFor: 'Weddings, VIP galas, corporate annual dinners, and outdoor festivals.'
  },
  {
    id: 'trade-shows',
    title: 'Trade Shows & Expos',
    tagline: 'Maximize your impact at trade shows with our expert support.',
    category: 'Events',
    icon: 'storefront',
    description: 'End-to-end exhibition stand design, construction, audiovisual showcase systems, and crowd-drawing booth installations that convert passersby into qualified leads.',
    deliverables: ['Custom 3D Booth Architecture', 'Interactive LED Displays', 'Brochures & Digital Collateral', 'Lead Capture Systems'],
    idealFor: 'Industrial exhibitors, B2B enterprises, international trade delegations, and startups.'
  },
  {
    id: 'backdrop-stage',
    title: 'Backdrop & Stage Design',
    tagline: 'Create captivating backdrops for unforgettable moments.',
    category: 'Events',
    icon: 'theater_comedy',
    description: 'Custom bespoke stage builds featuring multi-tiered risers, curved LED backdrops, illuminated acrylic sculptures, and breathtaking floral installations.',
    deliverables: ['3D CAD Stage Visualizations', 'Curved Fine-Pitch LED Screens', 'Themed Sculptural Backdrops', 'Structural Rigging & Trussing'],
    idealFor: 'Concerts, award ceremonies, grand weddings, and cultural festivals.'
  },
  {
    id: 'sound-lighting',
    title: 'Sound & Lighting',
    tagline: 'Immerse your audience with exceptional sound and lighting.',
    category: 'Production',
    icon: 'lightbulb',
    description: 'State-of-the-art Line Array PA sound systems, moving beam heads, laser mapping, followspots, haze atmospheres, and certified sound engineers for crystal-clear acoustics.',
    deliverables: ['Line Array Acoustic Engineering', 'DMX Moving Head Light Shows', 'Laser & Atmospheric FX', 'Wireless Artist In-Ear Systems'],
    idealFor: 'Live concerts, dance showcases, DJ performances, and corporate galas.'
  },
  {
    id: 'entertainment',
    title: 'Live Entertainment',
    tagline: 'Unforgettable entertainment that leaves a lasting impression.',
    category: 'Events',
    icon: 'music_note',
    description: 'Exclusive access to premier regional singers, traditional & contemporary dance troupes, international DJs, celebrity hosts, and high-energy live bands.',
    deliverables: ['Talent Sourcing & Contracting', 'Choreographed Stage Shows', 'Celebrity Artist Booking', 'Emcees in English, Malay & Tamil'],
    idealFor: 'Corporate galas, wedding sangeet nights, college fests, and cultural celebrations.'
  },
  {
    id: 'venue-sourcing',
    title: 'Event Venue Sourcing',
    tagline: 'Discover the perfect event venue with our expert sourcing.',
    category: 'Events',
    icon: 'location_city',
    description: 'Securing premier ballrooms, historical heritage mansions, beachfront resorts, convention halls, and secret scenic spaces across Melaka, Kuala Lumpur, and beyond.',
    deliverables: ['Site Inspections & Capacity Audits', 'Negotiation & Contract Review', 'Logistics & Parking Planning', 'Municipal Permits & Licenses'],
    idealFor: 'Destination weddings, executive retreats, film shoots, and corporate banquets.'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Elevate your online presence with expert web development.',
    category: 'Digital',
    icon: 'code',
    description: 'Bespoke event landing pages, RSVP ticketing portals, artist portfolio platforms, and high-performance brand sites with stunning motion and mobile-first speed.',
    deliverables: ['Custom Responsive Web Applications', 'Ticketing & RSVP Integrations', 'Interactive Showreel Portfolios', 'Lightning SEO & Analytics'],
    idealFor: 'Event promoters, artists, record labels, and commercial businesses.'
  },
  {
    id: 'production-commercial',
    title: 'Production & Commercial',
    tagline: 'Top-tier production and commercial services for your brand.',
    category: 'Production',
    icon: 'movie_filter',
    description: 'High-concept television commercials, brand storytelling spots, social media micro-ads, and broadcast promotional campaigns with cinematic visual flair.',
    deliverables: ['Concept Pitch & Storyboarding', 'Talent Casting & Location Scouting', 'Voiceover & Custom Scoring', 'Multi-Platform Master Deliverables'],
    idealFor: 'Commercial brands, advertising agencies, e-commerce brands, and franchises.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Strategic digital marketing to expand your online presence.',
    category: 'Digital',
    icon: 'trending_up',
    description: 'Data-driven growth campaigns across Meta, TikTok, YouTube, and Google Ads, paired with music video release hype cycles and event ticket sales funnels.',
    deliverables: ['Paid Social Performance Campaigns', 'YouTube Music Release Strategy', 'Search & Geo-Targeted Ads', 'Conversion Funnel Optimization'],
    idealFor: 'Artists launching new music, ticketed events, retail brands, and SME growth.'
  },
  {
    id: 'advertisement',
    title: 'Advertisement & Media',
    tagline: 'Create impactful advertisements that captivate your target audience.',
    category: 'Digital',
    icon: 'ads_click',
    description: 'Omnichannel creative advertising combining eye-catching digital billboards, print & radio placements, cinema trailer pre-rolls, and high-conversion social assets.',
    deliverables: ['Digital Out-of-Home (DOOH) Banners', 'Radio Spot Production (Minnal/Raaga)', 'Cinema Ad Formatting', 'Creative Copywriting & Art Direction'],
    idealFor: 'Regional business campaigns, product launches, and brand awareness blitzes.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'gajakesari',
    title: 'Gajakesari',
    year: 2022,
    type: 'Music Video',
    international: true,
    featured: true,
    role: 'Music Video Production & Direction',
    director: 'Dino & MC Jey',
    musicDirector: 'Boy Radge',
    castAndCrew: 'Rapper MC Jey, Rapper JohnDaddyBro, Singed Harie Haran Gangga, Feat by Darkkey. VDR Entertainment & JD Universal.',
    featuredArtists: ['MC-Jey', 'JohnDaddyBro', 'Harie Haran Gangga', 'Darkkey'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'gajakesari',
    accentColor: '#F5C518',
    summary: 'A monumental international collaboration music video featuring legendary pioneer Darkkey and an explosive urban rap cadence with anthemic brass instrumentation.'
  },
  {
    id: 'navitan',
    title: 'Navitan',
    year: 2022,
    type: 'Music Video',
    featured: true,
    role: 'Production Management & Direction',
    director: 'Dino (Assistant Director MC Jey)',
    musicDirector: 'Shane Xtreme',
    castAndCrew: 'An Epic Poem of a Barber. Lyrics by Seeran Selvaraju & Harie Haran Gangga. Feat by Darkkey. SCii Studio & Dino Barber Shop.',
    featuredArtists: ['Shane Xtreme', 'Darkkey', 'MC-Jey', 'Harie Haran Gangga'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'navitan',
    accentColor: '#0F4C5C',
    summary: 'An acclaimed narrative music video telling the cinematic, emotional story of a humble barber with vintage grading, intense close-ups, and raw lyrical expression.'
  },
  {
    id: 'paravattum-emmozhi',
    title: 'Paravattum Emmozhi',
    year: 2022,
    type: 'Lyrical Video',
    role: 'Lyrical Video Production & Typography',
    director: 'MC Jey',
    musicDirector: 'Shane Xtreme',
    castAndCrew: 'Bharathiyar Kavithaigal Tribute. SCii Studio & JD Universal.',
    featuredArtists: ['MC-Jey', 'Shane Xtreme'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'paravattum',
    accentColor: '#FFB033',
    summary: 'A visually striking lyrical ode honoring classic Tamil literature and Bharathiyar poetry set to powerful modern urban soundscapes.'
  },
  {
    id: 'un-varugai',
    title: 'Un Varugai',
    year: 2023,
    type: 'Lyrical Video',
    role: 'Lyrical Video Production & Creative Concept',
    director: 'MC Jey',
    musicDirector: 'Raptown Productions',
    castAndCrew: 'Composed by Raptown Productions. Lyrics by MC Sentamizhzan. Singer Visha Sree.',
    featuredArtists: ['MC Sentamizhzan', 'Visha Sree', 'Raptown Productions'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'un-varugai',
    accentColor: '#E65100',
    summary: 'A soul-stirring romantic lyrical visual with golden sunset lighting, poignant typographic animations, and melodious female vocals.'
  },
  {
    id: 'navitan-2',
    title: 'Navitan II',
    year: 2023,
    type: 'Music Video',
    featured: true,
    role: 'Music Video Production',
    director: 'MC Jey',
    musicDirector: 'Shane Xtreme',
    castAndCrew: 'A Shane Xtreme Musical. Feat by Vikadakavi, Harie Haran Gangga, MC Jey, Dino, Kosi.',
    featuredArtists: ['Vikadakavi', 'Harie Haran Gangga', 'MC-Jey', 'Shane Xtreme'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'navitan-2',
    accentColor: '#0E2F5F',
    summary: 'The blockbuster sequel elevating the Barber saga to epic proportions, introducing Vikadakavi and stylized neo-noir action cinematography.'
  },
  {
    id: 'navitan-2-remix',
    title: 'Navitan II: Remix ReBorn',
    year: 2023,
    type: 'Music Video',
    role: 'Music Video Direction & Production',
    director: 'MC Jey',
    musicDirector: 'Semma Beatz',
    castAndCrew: 'Music by Semma Beatz. MC Jey, JohnDaddyBro, Harie Haran Gangga, Feat by Vikadakavi. Produced by Karthik Rama.',
    featuredArtists: ['Semma Beatz', 'Vikadakavi', 'MC-Jey', 'JohnDaddyBro'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'navitan-reborn',
    accentColor: '#F5C518',
    summary: 'A high-octane club remix visual featuring dazzling strobe sequences, intense bass drops, and sharp dance choreography.'
  },
  {
    id: 'hi-boss',
    title: 'Hi Boss',
    year: 2023,
    type: 'Lyrical Video',
    role: 'Production & Feat Artist',
    director: 'MC Jey',
    musicDirector: 'Semma Beatz',
    castAndCrew: 'Production #8. Composed by Semma Beatz. Lyrics & Vocal by MC Sentamizhzan. Feat by MC Jey. Dedicated to Suresh.',
    featuredArtists: ['MC-Jey', 'MC Sentamizhzan', 'Semma Beatz'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'hi-boss',
    accentColor: '#D32F2F',
    summary: 'A fierce tribute track with gritty typographic motion graphics, heavy percussion, and charismatic dual-language rap verses.'
  },
  {
    id: 'rugged-kadhali',
    title: 'Rugged Kadhali',
    year: 2024,
    type: 'Music Video',
    featured: true,
    role: 'Director & Executive Producer',
    director: 'MC Jey',
    musicDirector: 'Semma Beatz',
    castAndCrew: 'Music by Semma Beatz. Lyrics & Vocal by MC Sentamizhzan. Feat MC Jey, Visha Sree. Raptown Productions & JD Universal.',
    featuredArtists: ['MC-Jey', 'MC Sentamizhzan', 'Semma Beatz', 'Visha Sree'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'rugged-kadhali',
    accentColor: '#C2185B',
    summary: 'A raw, passionate romantic drama juxtaposing rugged street grit with tender visual aesthetics, shot on location with anamorphic framing.'
  },
  {
    id: 'tumpang-famous',
    title: 'Tumpang Famous',
    year: 2025,
    type: 'Music Video',
    featured: true,
    role: 'Music Video Direction & Co-Production',
    director: 'MC Jey',
    musicDirector: 'Music Kitchen (Prem & Sid)',
    castAndCrew: 'Produced with Music Kitchen. Feat Darkkey & MC Jey. JD Universal presentation.',
    featuredArtists: ['Darkkey', 'MC-Jey', 'Prem & Sid (Music Kitchen)'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'tumpang-famous',
    accentColor: '#FFB033',
    summary: 'A viral cultural sensation with tropical evening lighting, sports cars, and an infectious energetic chorus celebrating Malaysian musical roots.'
  },
  {
    id: 'gema-rentak-raya',
    title: 'Gema Rentak Raya',
    year: 2026,
    type: 'Lyrical Video',
    featured: true,
    role: 'Lyrical Direction & Executive Production',
    director: 'MC Jey',
    musicDirector: 'JD Music Ensemble',
    castAndCrew: 'Lyrics by MC Jey. Dropping on 18:03:2026 at 8 PM. A grand Raya festive anthem.',
    featuredArtists: ['MC-Jey', 'Festive Ensemble'],
    youtubeUrl: 'https://youtube.com/@jduniversal9602',
    youtubeId: 'gema-raya',
    accentColor: '#2E7D32',
    summary: 'An exuberant festive celebration video illuminating Kuala Lumpur and Melaka skylines with fireworks, traditional gamelan percussion, and warm family harmonies.'
  }
];

export const COMING_SOON_PROJECTS = [
  {
    id: 'navitan-3',
    codeName: 'Production #7',
    title: 'Navitan III: Rowthiram',
    status: 'In Active Post-Production',
    releaseYear: 2026,
    logline: 'The wrath awakens. The highly anticipated trilogy finale featuring unprecedented visual effects and cross-border music direction.',
    director: 'MC-Jey',
    musicDirector: 'Semma Beatz & Shane Xtreme',
    highlight: 'Will Be Back Soon 2026'
  },
  {
    id: 'production-6',
    codeName: 'Production #6',
    title: 'Title Look (Classified)',
    status: 'Teaser Drop Scheduled',
    releaseYear: 2026,
    logline: 'An all-new cinematic intellectual property uniting MC Jey and Shaninja under the hard-hitting sound design of Semma Beatz.',
    director: 'MC-Jey',
    musicDirector: 'Semma Beatz',
    highlight: 'Updated Soon · 2026 Release'
  }
];

export const ARTISTS_DATA = {
  malaysiaArtists: [
    { name: 'Magen', role: 'Vocalist & Performer', credit: 'Raaga FM host & celebrity talent' },
    { name: 'Vikadakavi', role: 'Iconic Actor & Rapper', credit: 'Navitan II marquee collaborator' },
    { name: 'Darkey', role: 'Reggae/Rock Pioneer', credit: 'Gajakesari & Tumpang Famous' },
    { name: 'Sheezay', role: 'Pioneering Tamil Rapper', credit: 'Industry collaborator' },
    { name: 'Shane Xtreme', role: 'Artist & Music Director', credit: 'Navitan series creator' }
  ],
  malaysiaMusicDirectors: [
    { name: 'Shane Xtreme', role: 'Composer & Producer', works: 'Navitan, Paravattum Emmozhi' },
    { name: 'Boy Radge', role: 'Legendary Sound Engineer', works: 'Gajakesari mastering & score' },
    { name: 'Navin Navigator', role: 'Music Producer', works: 'Commercial & event arrangements' },
    { name: 'Music Kitchen (Prem & Sid)', role: 'Production Duo', works: 'Tumpang Famous hitmakers' }
  ],
  radioPersonalities: [
    { name: 'VJ Uthaya', station: 'Raaga FM', note: 'Prime-time radio icon & event host' },
    { name: 'Magen', station: 'Raaga FM', note: 'Celebrated on-air host & performer' }
  ],
  indiaArtists: [
    { name: 'MC Sentamilthazan', role: 'Lyricist & Rapper', country: 'India', note: 'Un Varugai, Hi Boss, Rugged Kadhali' },
    { name: 'Semma Beatz (Semma Base)', role: 'Music Director', country: 'India', note: 'Hi Boss, Navitan II Reborn, Rugged Kadhali' }
  ],
  sriLankaArtists: [
    { name: 'Melvin Miranda', role: 'Music Director', country: 'Sri Lanka', note: 'International score arrangement' },
    { name: 'Jay DC', role: 'Recording Artist', country: 'Sri Lanka', note: 'Cross-border collaboration' },
    { name: 'Isuru', role: 'Music Director', country: 'Sri Lanka', note: 'Acoustic production & mixing' }
  ]
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'stage-royal-gold',
    title: 'Regal Gold Mandap & Stage',
    category: 'Stage & Backdrops',
    caption: 'Bespoke hand-crafted palace arch with warm golden ambient downlighting and intricate crest carvings.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'wide'
  },
  {
    id: 'wedding-fairytale',
    title: 'Fairytale Banquet & Stage Decor',
    category: 'Weddings',
    caption: '300-seat luxury wedding dining setup with illuminated crystal aisle and chandelier canopy in Melaka.',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'wide'
  },
  {
    id: 'model-traditional',
    title: 'Bridal Couture Portfolio',
    category: 'Modeling Shoots',
    caption: 'Studio editorial portrait showcasing traditional gold ornaments, silk saree detailing, and studio softbox lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'tall'
  },
  {
    id: 'model-fashion',
    title: 'Modern Western High-Fashion',
    category: 'Modeling Shoots',
    caption: 'Monochrome minimalist studio shoot with crisp rim lighting and high contrast styling.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'tall'
  },
  {
    id: 'stage-laser-concert',
    title: 'Live Stage Lighting & Rigging',
    category: 'Stage & Backdrops',
    caption: 'Dynamic concert trussing with 24 DMX moving beams and haze atmospheric immersion.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'wide'
  },
  {
    id: 'product-beverage-reveal',
    title: 'Artisan Tea & Beverage Line',
    category: 'Product Shoots',
    caption: 'Interactive comparison: Raw on-set capture vs final commercial color-graded studio packaging.',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80',
    isComparison: true,
    rawImageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80',
    finishedImageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'wide'
  },
  {
    id: 'private-vip-dinner',
    title: 'Exclusive VIP Gala Night',
    category: 'Private Events',
    caption: 'Intimate fine-dining table scape with custom laser-engraved menus and personalized floral centerpieces.',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'square'
  },
  {
    id: 'product-culinary-curry',
    title: 'Traditional Gourmet Food Packaging',
    category: 'Product Shoots',
    caption: 'High-speed food cinematography and commercial photography for regional culinary brands.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    isComparison: true,
    rawImageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
    finishedImageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    aspectRatio: 'wide'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Raptown Productions', type: 'Music Label & Production' },
  { name: 'VDR Entertainment', type: 'Film & Media House' },
  { name: 'SCii Studio', type: 'Creative Post-House' },
  { name: 'NBN', type: 'Northern Borneo Networks' },
  { name: 'EASI Kota Damansara', type: 'Commercial Retail Partner' }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover & Align',
    summary: 'We unpack your artistic narrative, event scope, venue constraints, and audience profile.',
    details: 'Initial creative brainstorm, moodboard exploration, script review, and feasibility assessment.'
  },
  {
    step: '02',
    title: 'Strategic Blueprint',
    summary: 'Precision 3D stage layouts, shooting schedule, talent casting, and technical budgeting.',
    details: 'Detailed technical riders, call sheets, lighting plots, and regulatory permit clearances.'
  },
  {
    step: '03',
    title: 'Cinematic Execution',
    summary: 'Masterful on-set direction or seamless live event management with zero room for error.',
    details: 'Multi-camera cinema rigs, live line-array acoustics, talent direction, and instant playback.'
  },
  {
    step: '04',
    title: 'Master Delivery',
    summary: 'Flawless 4K color grade, Dolby Atmos mastering, broadcast packaging, and client applause.',
    details: 'DCP export, social media teaser cuts, press distribution, and post-event analytics.'
  }
];
