export interface VerifiedTrainer {
  id: string;
  name: string;
  credential: string;
  certificateNo: string;
  issueDate: string;
  validThrough: string;
  status: 'ACTIVE VERIFIED' | 'RENEWAL DUE' | 'UNDER AUDIT' | 'EXPIRED' | 'INACTIVE';
  specializations: string[];
  location?: string;
  grade?: string;
  avatar?: string;
  practicumHours?: number | string;
  additionalCredentials?: string;
}

// Fallback seed data in case Google Sheets is offline or not configured yet
export const FALLBACK_TRAINERS: VerifiedTrainer[] = [
  {
    id: 'SRE-2024-1082',
    name: 'Vikramaditya Roy',
    credential: 'Personal Training Certification',
    certificateNo: 'SRE-CPT-2024-001082',
    issueDate: '15 March 2024',
    validThrough: '14 March 2027',
    status: 'ACTIVE VERIFIED',
    specializations: ['Resistance Training', 'Exercise Programming', 'Fitness Assessment'],
    location: 'Mumbai, Maharashtra, India',
    grade: 'Passed',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    practicumHours: 'Completed',
    additionalCredentials: 'CPR / AED Certified'
  },
  {
    id: 'SRE-2023-7741',
    name: 'Ananya Sen',
    credential: 'Sports Nutrition Certification',
    certificateNo: 'SRE-SN-2023-007741',
    issueDate: '08 November 2023',
    validThrough: '07 November 2026',
    status: 'ACTIVE VERIFIED',
    specializations: ['Sports Nutrition', 'Energy Metabolism', 'Dietary Assessment'],
    location: 'Bengaluru, Karnataka, India',
    grade: 'Completed',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    practicumHours: 'Completed',
    additionalCredentials: 'Not Available'
  },
  {
    id: 'SRE-2024-4419',
    name: 'Rohan Deshmukh',
    credential: 'Strength & Conditioning Certification',
    certificateNo: 'SRE-SC-2024-004419',
    issueDate: '22 July 2024',
    validThrough: '21 July 2027',
    status: 'ACTIVE VERIFIED',
    specializations: ['Resistance Training', 'Power Development', 'Exercise Programming'],
    location: 'Pune, Maharashtra, India',
    grade: 'Passed',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    practicumHours: 'Completed',
    additionalCredentials: 'CPR / AED Certified'
  },
  {
    id: 'SRE-2022-9902',
    name: 'Pooja Kashyap',
    credential: 'Sports Nutrition Certification',
    certificateNo: 'SRE-SN-2022-009902',
    issueDate: '10 January 2022',
    validThrough: '09 January 2025',
    status: 'EXPIRED',
    specializations: ['Nutritional Planning', 'Hydration Strategies', 'Dietary Assessment'],
    location: 'New Delhi, NCR, India',
    grade: 'Completed',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    practicumHours: 'Completed',
    additionalCredentials: 'Not Available'
  }
];

// Published CSV URL for Tab 2: Verified Trainers
export const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT917BT4WdBz-xtQCNg2Tu4_SQqVv6w0KFFSzg3A-R2yYtPIzG-t4JoOqjwr9kl3TKFD8lOCAr0S0iS/pub?gid=1032916842&single=true&output=csv';

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

    // Skip empty row if name and certificate number are blank
    const trainerName = rowObj['full name'] || rowObj['name'] || rowObj['trainer name'] || '';
    const certNo = rowObj['certificate no'] || rowObj['certificateno'] || rowObj['cert no'] || '';
    if (!trainerName && !certNo) continue;

    const statusRaw = (rowObj['status'] || 'ACTIVE VERIFIED').toUpperCase();
    const status: VerifiedTrainer['status'] = 
      statusRaw.includes('EXPIRED') ? 'EXPIRED' :
      statusRaw.includes('INACTIVE') ? 'INACTIVE' :
      statusRaw.includes('AUDIT') ? 'UNDER AUDIT' :
      statusRaw.includes('RENEWAL') ? 'RENEWAL DUE' : 'ACTIVE VERIFIED';

    const rawSpecializations = rowObj['specializations'] || rowObj['specialization'] || rowObj['current workplace'] || 'Resistance Training, Fitness Assessment';
    const specializations = rawSpecializations
      .split(/[,|;]/)
      .map(s => s.trim())
      .filter(Boolean);

    const defaultAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
    const photoUrl = rowObj['photo'] || rowObj['photo url'] || rowObj['avatar'] || '';

    const trainer: VerifiedTrainer = {
      id: rowObj['trainer id'] || rowObj['id'] || `SRE-${1000 + i}`,
      name: trainerName || 'Verified Professional',
      credential: rowObj['certification'] || rowObj['credential'] || rowObj['course'] || 'Certified Personal Trainer (CPT)',
      certificateNo: certNo || `SRE-CERT-${i}`,
      issueDate: rowObj['issue date'] || rowObj['issuedate'] || 'Verified',
      validThrough: rowObj['valid through'] || rowObj['validthrough'] || rowObj['expiry'] || 'Active Credential',
      status: status,
      specializations: specializations.length > 0 ? specializations : ['Resistance Training', 'Fitness Assessment'],
      location: rowObj['location'] || rowObj['city'] || 'India',
      grade: rowObj['assessment status'] || rowObj['grade'] || 'Passed',
      avatar: photoUrl && photoUrl.startsWith('http') ? photoUrl : defaultAvatar,
      practicumHours: rowObj['practical requirement'] || rowObj['practicumhours'] || 'Completed',
      additionalCredentials: rowObj['additional certifications'] || rowObj['additional credentials'] || rowObj['additionalcredentials'] || rowObj['cpr'] || 'CPR / AED Certified'
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
