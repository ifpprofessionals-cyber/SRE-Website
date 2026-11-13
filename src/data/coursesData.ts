export interface Course {
  id: string;
  title: string;
  category: 'personal-training' | 'nutrition' | 'strength' | 'special-populations';
  categoryLabel: string;
  badge: string;
  duration: string;
  mode: string;
  assessment: string;
  description: string;
  syllabus: string[];
  prerequisites?: string;
  outcomes?: string[];
  price?: string;
  emi?: string;
  popular?: boolean;
  status: 'active' | 'coming-soon';
  languages?: string[];
  batchStatus?: string;
}

export const COURSES_DATA: Course[] = [
  {
    id: 'cpt-course',
    title: 'Certified Personal Trainer (CPT)',
    category: 'personal-training',
    categoryLabel: 'PERSONAL TRAINING',
    badge: 'ACTIVE ADMISSIONS • 4 LANGUAGES',
    status: 'active',
    languages: ['English', 'Hindi (हिंदी)', 'Marathi (मराठी)', 'Hinglish'],
    batchStatus: 'Live Admissions Open',
    duration: '4 Months (Theory + Practical Labs)',
    mode: 'Hybrid (Classroom Labs + Online)',
    assessment: 'Practical Floor Assessment & Theory Exam',
    description: 'Build a strong foundation in personal training, exercise science, and client coaching. Available across 4 languages: English, Hindi, Marathi, and Hinglish. Learn how anatomy, exercise physiology, fitness assessment, and training principles inform safe and effective exercise programming.',
    syllabus: [
      'Functional Anatomy & Exercise Physiology',
      'Fitness Assessment & Goal Setting',
      'Resistance Training & Exercise Technique',
      'Training Program Design & Progression',
      'Client Communication & Professional Practice'
    ],
    prerequisites: 'Open to aspiring and practicing fitness professionals (No prior degree required)',
    outcomes: [
      'Foundational exercise science and biomechanics literacy',
      'Safe exercise progression and programming principles',
      'Client assessment and coaching communication skills',
      'Study materials & lectures accessible in English, Hindi, Marathi, or Hinglish'
    ],
    price: 'Flexible Installment Options',
    emi: 'Token fee + 3-5 installments over 3-4 months',
    popular: true
  },
  {
    id: 'sports-nutrition',
    title: 'Sports Nutrition & Performance',
    category: 'nutrition',
    categoryLabel: 'SPORTS NUTRITION',
    badge: 'COMING SOON',
    status: 'coming-soon',
    batchStatus: 'Pre-Registrations Open',
    duration: 'Refer to upcoming course schedule',
    mode: 'Interactive Online Masterclasses',
    assessment: 'Case Studies & Nutritional Planning Project',
    description: 'Understand how nutrition supports training, recovery, and physical performance. Explore energy balance, macronutrients, hydration, nutrient timing, and evidence-informed sports nutrition principles for active individuals and athletes.',
    syllabus: [
      'Energy Balance & Energy Requirements',
      'Macronutrients & Micronutrients',
      'Hydration & Electrolyte Balance',
      'Nutrition for Training & Recovery',
      'Sports Supplements: Evidence & Safety'
    ],
    prerequisites: 'Basic fitness knowledge or science background recommended',
    outcomes: [
      'Evidence-based nutritional principles for active individuals',
      'Nutrient timing and hydration strategies for exercise performance',
      'Critical evaluation of dietary claims and sports supplements'
    ],
    price: 'Launching Soon',
    emi: 'Pre-register for early batch access',
    popular: false
  },
  {
    id: 'strength-conditioning',
    title: 'Strength & Conditioning Specialist',
    category: 'strength',
    categoryLabel: 'STRENGTH & CONDITIONING',
    badge: 'COMING SOON',
    status: 'coming-soon',
    batchStatus: 'Pre-Registrations Open',
    duration: 'Refer to upcoming course schedule',
    mode: 'Practical Performance Hubs + Online Modules',
    assessment: 'Athletic Periodization & Movement Testing',
    description: 'Learn to develop structured training programs that build strength, power, muscular endurance, and physical preparedness. Understand how training variables, exercise selection, progression, and recovery contribute to performance development.',
    syllabus: [
      'Principles of Strength & Conditioning',
      'Resistance Training Methods',
      'Power Development & Plyometric Training',
      'Program Design & Periodization',
      'Recovery, Monitoring & Performance Assessment'
    ],
    prerequisites: 'CPT qualification or foundational background in fitness coaching',
    outcomes: [
      'Evidence-informed athletic periodization and loading schemes',
      'Power, plyometric, and speed progression methodology',
      'Athlete monitoring and workload management principles'
    ],
    price: 'Launching Soon',
    emi: 'Pre-register for early batch access',
    popular: false
  },
  {
    id: 'corrective-exercise',
    title: 'Corrective Exercise & Movement Fundamentals',
    category: 'special-populations',
    categoryLabel: 'CORRECTIVE EXERCISE',
    badge: 'COMING SOON',
    status: 'coming-soon',
    batchStatus: 'Pre-Registrations Open',
    duration: 'Refer to upcoming course schedule',
    mode: 'Practical Movement Labs + Clinical Case Studies',
    assessment: 'Movement Screen & Corrective Strategy Exam',
    description: 'Develop a deeper understanding of movement quality, mobility, exercise technique, and common movement limitations. Learn how to adapt exercise selection and training progressions within the scope of fitness practice.',
    syllabus: [
      'Functional Anatomy & Movement Patterns',
      'Mobility, Stability & Motor Control',
      'Movement Observation & Exercise Technique',
      'Exercise Modification & Regression',
      'Scope of Practice, Safety & Referral'
    ],
    prerequisites: 'Valid fitness trainer credential or coaching experience',
    outcomes: [
      'Movement observation and technique optimization',
      'Individualized exercise regression and modification strategies',
      'Clear boundaries regarding professional scope and clinical referral'
    ],
    price: 'Launching Soon',
    emi: 'Pre-register for early batch access',
    popular: false
  },
  {
    id: 'applied-biomechanics',
    title: 'Applied Biomechanics for Fitness Professionals',
    category: 'personal-training',
    categoryLabel: 'EXERCISE BIOMECHANICS',
    badge: 'COMING SOON',
    status: 'coming-soon',
    batchStatus: 'Pre-Registrations Open',
    duration: 'Refer to upcoming course schedule',
    mode: 'Lab-Based Interactive Analytics',
    assessment: 'Biomechanical Lift Breakdown Project',
    description: 'Explore how joints, muscles, external forces, and movement patterns interact during exercise. Apply biomechanical principles to understand exercise technique, movement efficiency, loading strategies, and training adaptations.',
    syllabus: [
      'Fundamentals of Human Biomechanics',
      'Joint Mechanics & Movement Analysis',
      'Resistance Training Biomechanics',
      'Exercise Technique & Loading Variables',
      'Practical Applications in Program Design'
    ],
    prerequisites: 'Open to fitness professionals and enthusiasts',
    outcomes: [
      'Deconstruction of joint forces and anatomical lever systems',
      'Customization of compound lifts to individual bone morphology',
      'Application of physics and kinesiology to exercise prescription'
    ],
    price: 'Launching Soon',
    emi: 'Pre-register for early batch access',
    popular: false
  },
  {
    id: 'youth-athletic-development',
    title: 'Youth & Long-Term Athletic Development',
    category: 'strength',
    categoryLabel: 'ATHLETIC DEVELOPMENT',
    badge: 'COMING SOON',
    status: 'coming-soon',
    batchStatus: 'Pre-Registrations Open',
    duration: 'Refer to upcoming course schedule',
    mode: 'Youth Coaching Workshops + Online Modules',
    assessment: 'Age-Appropriate Curriculum Planning',
    description: 'Understand how physical preparation can be planned around growth, maturation, training experience, and sport-specific demands. Explore age-appropriate training principles that support movement skills, physical literacy, and long-term athletic development.',
    syllabus: [
      'Growth, Maturation & Physical Development',
      'Fundamental Movement Skills',
      'Youth Strength & Conditioning Principles',
      'Training Progression & Workload Management',
      'Long-Term Athlete Development Planning'
    ],
    prerequisites: 'Open to coaches, physical education educators, and trainers',
    outcomes: [
      'Understanding growth and maturation stages in young athletes',
      'Design of age-appropriate movement literacy and conditioning programs',
      'Injury risk mitigation and workload management for youth sports'
    ],
    price: 'Launching Soon',
    emi: 'Pre-register for early batch access',
    popular: false
  }
];
