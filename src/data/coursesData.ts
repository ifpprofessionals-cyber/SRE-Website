export interface Course {
  id: string;
  title: string;
  category: 'personal-training' | 'nutrition' | 'strength' | 'special-populations';
  badge: string;
  duration: string;
  mode: string;
  level: string;
  credits: string;
  description: string;
  syllabus: string[];
  prerequisites: string;
  outcomes: string[];
  price: string;
  emi: string;
  popular?: boolean;
}

export const COURSES_DATA: Course[] = [
  {
    id: 'cpt-pro',
    title: 'Certified Personal Trainer (CPT - Level 4)',
    category: 'personal-training',
    badge: 'Gold Standard Certification',
    duration: '4 Months (160 Hours)',
    mode: 'Hybrid (Classroom Labs + Online)',
    level: 'Foundational to Advanced',
    credits: '16 Academic CEUs',
    description: 'The industry-benchmark credential designed to master human kinesiology, functional movement screening, periodization, and client coaching psychology.',
    syllabus: [
      'Functional Anatomy & Musculoskeletal Biomechanics',
      'Cardiorespiratory & Energy Metabolism Systems',
      'Movement Assessment (Overhead Squat, FMS, Postural Deviations)',
      'Resistance Training Programming & Periodization',
      'Injury Prevention & Corrective Exercise Strategies',
      'Client Consultation, Goal Setting & Business Psychology'
    ],
    prerequisites: 'High School Diploma (10+2) or equivalent',
    outcomes: [
      'International REPs / EREPs Level 4 equivalence',
      '100% placement support across premier fitness chains',
      'CPR/AED practical emergency response certification'
    ],
    price: '₹34,999',
    emi: '₹2,916/month (0% EMI)',
    popular: true
  },
  {
    id: 'sports-nutrition',
    title: 'Advanced Diploma in Sports Nutrition & Ergogenics',
    category: 'nutrition',
    badge: 'Clinical & Performance',
    duration: '3 Months (90 Hours)',
    mode: 'Interactive Online Live + Case Studies',
    level: 'Advanced Specialist',
    credits: '12 Academic CEUs',
    description: 'Master clinical macronutrient partitioning, micronutrient biochemistry, athlete hydration, body composition analysis, and safe ergogenic supplementation.',
    syllabus: [
      'Digestive Biochemistry & Nutrient Bioavailability',
      'Energy Expenditure Modeling (TDEE, BMR, TEF calculations)',
      'Macronutrient Timing for Hypertrophy & Fat Loss',
      'Endurance vs. Strength Athletic Diet Protocols',
      'Ergogenic Aids, Supplements & Anti-Doping Regulations (WADA)',
      'Clinical Case Studies (Metabolic Health, PCOS, Thyroid)'
    ],
    prerequisites: 'Foundational fitness certification or science background',
    outcomes: [
      'Authorized to formulate periodized nutrition plans',
      'Practical dietary software training included',
      'Official Sports Nutritionist Credential'
    ],
    price: '₹28,500',
    emi: '₹2,375/month',
    popular: false
  },
  {
    id: 'cscs-prep',
    title: 'Master Strength & Conditioning Specialist (CSCS Track)',
    category: 'strength',
    badge: 'Elite Athletic Coaching',
    duration: '5 Months (200 Hours)',
    mode: 'Intensive Lab Practical + Live Coaching',
    level: 'Elite Professional',
    credits: '20 Academic CEUs',
    description: 'Developed for coaches training competitive athletes. Covers Olympic weightlifting variations, plyometric progressions, velocity-based training, and team periodization.',
    syllabus: [
      'Olympic Weightlifting Mechanics (Snatch, Clean & Jerk progressions)',
      'Force-Velocity Profiling & Velocity-Based Training (VBT)',
      'Speed, Agility & Quickness (SAQ) Drills for Team Sports',
      'Energy System Development & High-Intensity Conditioning',
      'Return-to-Play Protocols & Load Monitoring Systems',
      'Block & Undulating Periodization for Peak Performance'
    ],
    prerequisites: 'CPT certification or degree in Physical Education / Sports Science',
    outcomes: [
      'Preparation for global CSCS / UKSCA examinations',
      'Hands-on barbell biomechanics laboratory experience',
      'Direct pathway to high-performance sports academies'
    ],
    price: '₹42,000',
    emi: '₹3,500/month',
    popular: true
  },
  {
    id: 'special-populations',
    title: 'Medical Fitness & Special Populations Specialist',
    category: 'special-populations',
    badge: 'Clinical Exercise Science',
    duration: '3 Months (80 Hours)',
    mode: 'Hybrid (Clinical Case Audits + Online)',
    level: 'Specialist Level',
    credits: '10 Academic CEUs',
    description: 'Bridge the gap between healthcare and gym floor. Learn exercise prescription for clients with hypertension, diabetes, arthritis, post-rehab conditions, and aging adults.',
    syllabus: [
      'Pathophysiology of Metabolic & Cardiovascular Diseases',
      'Exercise Modifications for Type 2 Diabetes & Hypertension',
      'Spinal Rehabilitation: Herniations, Spondylolisthesis & Sciatica',
      'Geriatric Fitness: Sarcopenia, Bone Density & Fall Prevention',
      'Pre-natal and Post-natal Exercise Safety Guidelines',
      'Medical Referral Networking & Interdisciplinary Communication'
    ],
    prerequisites: 'Valid CPT / Physical Therapist / Kinesiology credential',
    outcomes: [
      'Certification as Medical Exercise Specialist',
      'Hospital & Physiotherapy clinic referral partnerships',
      'Master clinical contraindications and safety boundaries'
    ],
    price: '₹26,000',
    emi: '₹2,166/month',
    popular: false
  },
  {
    id: 'biomechanics-kinesiology',
    title: 'Functional Biomechanics & Corrective Exercise Specialist',
    category: 'personal-training',
    badge: 'Movement Analytics',
    duration: '2.5 Months (70 Hours)',
    mode: 'Practical Lab Workshops + Video Analysis',
    level: 'Intermediate to Advanced',
    credits: '8 Academic CEUs',
    description: 'Deconstruct joint moment arms, torque, line of resistance, and anatomical lever systems to correct muscle imbalances and eliminate training pain.',
    syllabus: [
      'Vector Mechanics, Moment Arms & Torque Calculations',
      'Gait Analysis & Kinetic Chain Fault Detection',
      'Shoulder Impingement & Scapulohumeral Rhythm Restoration',
      'Hip Impingement, Pelvic Tilt & Lumbar-Pelvic Stability',
      'Customizing Exercises to Individual Bone Morphology',
      'Corrective Cueing & Neuromuscular Re-education'
    ],
    prerequisites: 'Basic fitness knowledge or CPT',
    outcomes: [
      'Master individual anthropometric exercise adjustments',
      'Eliminate client joint discomfort during compound lifts',
      'Verified Corrective Movement Specialist Badge'
    ],
    price: '₹22,500',
    emi: '₹1,875/month',
    popular: false
  },
  {
    id: 'youth-athletic',
    title: 'Youth & Long-Term Athletic Development (LTAD)',
    category: 'strength',
    badge: 'Grassroots Performance',
    duration: '2 Months (50 Hours)',
    mode: 'Live Virtual Classroom',
    level: 'Specialist Level',
    credits: '6 Academic CEUs',
    description: 'Build robust movement foundations, neuromuscular control, speed, and injury resilience in young athletes aged 8 to 18 following LTAD frameworks.',
    syllabus: [
      'Pediatric Exercise Physiology & Growth Plate Safety',
      'Long-Term Athletic Development (LTAD) Stage Modeling',
      'Fundamental Movement Skills (Hop, Skip, Bound, Decelerate)',
      'Resistance Training Guidelines for Children and Adolescents',
      'Overuse Injury Prevention in Single-Sport Specialization',
      'Fun-Driven Engagement & Youth Motivation Psychology'
    ],
    prerequisites: 'Open to coaches, physical education teachers, and trainers',
    outcomes: [
      'Certified Youth Athletic Conditioning Coach',
      'School and sports academy coaching credentials',
      'Safe pediatric strength programming expertise'
    ],
    price: '₹18,000',
    emi: '₹1,500/month',
    popular: false
  }
];
