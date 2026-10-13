export interface VerifiedTrainer {
  id: string;
  name: string;
  credential: string;
  certificateNo: string;
  issueDate: string;
  validThrough: string;
  status: 'ACTIVE VERIFIED' | 'RENEWAL DUE' | 'UNDER AUDIT';
  specializations: string[];
  location: string;
  grade: string;
  avatar: string;
  practicumHours: number;
}

// Fallback seed data in case Google Sheets is offline or not configured yet
export const FALLBACK_TRAINERS: VerifiedTrainer[] = [
  {
    id: 'SRE-2024-1082',
    name: 'Vikramaditya Roy',
    credential: 'Certified Personal Trainer (CPT Level-4) & Biomechanics Specialist',
    certificateNo: 'SRE-CPT-2024-001082',
    issueDate: '15 March 2024',
    validThrough: '14 March 2027',
    status: 'ACTIVE VERIFIED',
    specializations: ['Functional Biomechanics', 'Hypertrophy Periodization', 'Injury Prevention'],
    location: 'Mumbai, Maharashtra',
    grade: 'Distinction (94.2%)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    practicumHours: 160
  },
  {
    id: 'SRE-2023-7741',
    name: 'Dr. Ananya Sen, PT',
    credential: 'Medical Fitness Specialist & Advanced Sports Nutritionist',
    certificateNo: 'SRE-MFS-2023-007741',
    issueDate: '08 November 2023',
    validThrough: '07 November 2026',
    status: 'ACTIVE VERIFIED',
    specializations: ['Cardiopulmonary Rehab', 'Type-2 Diabetes Management', 'Performance Nutrition'],
    location: 'Bengaluru, Karnataka',
    grade: 'Honors (97.8%)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    practicumHours: 200
  },
  {
    id: 'SRE-2024-4419',
    name: 'Rohan Deshmukh',
    credential: 'Master Strength & Conditioning Coach (CSCS Aligned)',
    certificateNo: 'SRE-SCC-2024-004419',
    issueDate: '22 July 2024',
    validThrough: '21 July 2027',
    status: 'ACTIVE VERIFIED',
    specializations: ['Olympic Weightlifting', 'Velocity-Based Training', 'Youth LTAD'],
    location: 'Pune, Maharashtra',
    grade: 'Distinction (92.5%)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    practicumHours: 180
  },
  {
    id: 'SRE-2022-9902',
    name: 'Pooja Kashyap',
    credential: 'Advanced Diploma in Sports Nutrition & Ergogenics',
    certificateNo: 'SRE-ASN-2022-009902',
    issueDate: '10 January 2023',
    validThrough: '09 January 2026',
    status: 'ACTIVE VERIFIED',
    specializations: ['Macronutrient Periodization', 'Endurance Fueling', 'Ergogenic Supplements'],
    location: 'New Delhi, NCR',
    grade: 'First Class (89.0%)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    practicumHours: 120
  },
  {
    id: 'SRE-2024-8855',
    name: 'Arjun Nambiar',
    credential: 'Certified Personal Trainer & Functional Movement Screen Pro',
    certificateNo: 'SRE-CPT-2024-008855',
    issueDate: '02 June 2024',
    validThrough: '01 June 2027',
    status: 'ACTIVE VERIFIED',
    specializations: ['Corrective Exercise', 'Kettlebell Athletics', 'Senior Sarcopenia Mitigation'],
    location: 'Kochi, Kerala',
    grade: 'Distinction (91.4%)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    practicumHours: 160
  }
];

// Paste your Google Sheet published CSV URL here to enable 1-click live syncing!
// Example: https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv
export const GOOGLE_SHEET_CSV_URL = '';

/**
 * Lightweight CSV parser for parsing Google Sheet rows without heavy external libraries
 */
export function parseGoogleSheetCSV(csvText: string): VerifiedTrainer[] {
  const lines = csvText.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length <= 1) return [];

  // Parse header
  const headers = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase());
  const trainers: VerifiedTrainer[] = [];

  for (let i = 1; i < lines.length; i++) {
    const row = parseCSVLine(lines[i]);
    if (row.length === 0 || !row[0]) continue;

    const rowObj: Record<string, string> = {};
    headers.forEach((header, index) => {
      rowObj[header] = row[index] || '';
    });

    const trainer: VerifiedTrainer = {
      id: rowObj['id'] || rowObj['trainer id'] || `SRE-GEN-${i}`,
      name: rowObj['name'] || rowObj['trainer name'] || rowObj['full name'] || 'Certified Graduate',
      credential: rowObj['credential'] || rowObj['course'] || 'Certified Personal Trainer (CPT - L4)',
      certificateNo: rowObj['certificateno'] || rowObj['certificate no'] || rowObj['cert no'] || `SRE-CERT-${i}`,
      issueDate: rowObj['issuedate'] || rowObj['issue date'] || 'Verified',
      validThrough: rowObj['validthrough'] || rowObj['valid through'] || rowObj['expiry'] || 'Active',
      status: (rowObj['status']?.toUpperCase() === 'UNDER AUDIT' ? 'UNDER AUDIT' :
               rowObj['status']?.toUpperCase() === 'RENEWAL DUE' ? 'RENEWAL DUE' : 'ACTIVE VERIFIED'),
      specializations: (rowObj['specializations'] || rowObj['specialization'] || 'General Fitness, Biomechanics')
        .split(/[,|;]/)
        .map(s => s.trim())
        .filter(Boolean),
      location: rowObj['location'] || rowObj['city'] || 'India',
      grade: rowObj['grade'] || 'Pass',
      avatar: rowObj['avatar'] || rowObj['photo'] || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      practicumHours: parseInt(rowObj['practicumhours'] || rowObj['practical hours'] || '160', 10) || 160
    };

    trainers.push(trainer);
  }

  return trainers;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}
