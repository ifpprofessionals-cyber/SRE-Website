export interface ResourceItem {
  id: string;
  title: string;
  category: 'Kinesiology Journal' | 'Nutrition Whitepaper' | 'Clinical Rehabilitation' | 'High Performance' | 'Coaching Blueprint' | 'Client Assessment';
  pages: string;
  downloads: string;
  author: string;
  desc: string;
  fileUrl: string; // Direct download link or public path like "/resources/my-guide.pdf"
  fileSize?: string;
}

// Master list of resources. You can add new items or remove items right here!
// Each item will automatically show on the website with a direct one-click download.
export const FREE_RESOURCES: ResourceItem[] = [
  {
    id: 'res-squat-biomechanics',
    title: 'Biomechanical Analysis of Lumbar Shear in Deep vs. Parallel Squats',
    category: 'Kinesiology Journal',
    pages: '18 Pages PDF',
    downloads: '12,400+ Downloads',
    author: 'Dr. Rajiv Vardhan, Ph.D.',
    desc: 'Comprehensive electromyographic and moment-arm examination comparing tibiofemoral compressive loads and spinal safety across diverse femur lengths.',
    fileUrl: '/resources/squat-biomechanics-whitepaper.pdf',
    fileSize: '3.4 MB'
  },
  {
    id: 'res-protein-kinetics',
    title: 'Optimal Protein Kinetics & Leucine Saturation for Hypertrophy',
    category: 'Nutrition Whitepaper',
    pages: '14 Pages PDF',
    downloads: '9,850+ Downloads',
    author: 'SRE Department of Sports Nutrition',
    desc: 'Examining muscle protein synthesis (MPS) triggers, refractory periods, and dietary distribution strategies for drug-free strength athletes.',
    fileUrl: '/resources/protein-kinetics-nutrition.pdf',
    fileSize: '2.1 MB'
  },
  {
    id: 'res-t2d-prescription',
    title: 'Exercise Prescription Guidelines for Type-2 Diabetes & Metabolic Syndrome',
    category: 'Clinical Rehabilitation',
    pages: '22 Pages PDF',
    downloads: '7,310+ Downloads',
    author: 'Dr. Rohan Mehta, MBBS',
    desc: 'Glut-4 transporter translocation via resistance training, hypoglycemia warning signs, and interdisciplinary referral frameworks.',
    fileUrl: '/resources/diabetes-exercise-prescription.pdf',
    fileSize: '4.2 MB'
  },
  {
    id: 'res-vbt-periodization',
    title: 'Velocity-Based Training (VBT) vs. Percentage-Based Periodization',
    category: 'High Performance',
    pages: '16 Pages PDF',
    downloads: '11,200+ Downloads',
    author: 'Maithili Kulkarni, CSCS',
    desc: 'Measuring mean concentric velocity via linear position transducers to calibrate daily readiness and eliminate systemic neural fatigue.',
    fileUrl: '/resources/vbt-periodization-guide.pdf',
    fileSize: '2.8 MB'
  },
  {
    id: 'res-client-parq',
    title: 'Client Comprehensive Health Screen & PAR-Q+ Assessment Protocol',
    category: 'Client Assessment',
    pages: '8 Pages PDF + Excel Template',
    downloads: '15,600+ Downloads',
    author: 'SRE Practicum Board',
    desc: 'Legal liability release, cardiovascular risk stratification matrix, orthopedic range of motion checklist, and postural assessment intake template.',
    fileUrl: '/resources/client-intake-parq-template.pdf',
    fileSize: '1.5 MB'
  },
  {
    id: 'res-periodization-template',
    title: '16-Week Undulating Periodization & Volume Load Tracker',
    category: 'Coaching Blueprint',
    pages: 'Interactive Spreadsheet',
    downloads: '18,900+ Downloads',
    author: 'SRE S&C Practical Lab',
    desc: 'Automated tonnage calculator, RPE (Rating of Perceived Exertion) load regulator, and meso-cycle deload progression framework.',
    fileUrl: '/resources/16-week-periodization-tracker.xlsx',
    fileSize: '850 KB'
  }
];
