import React, { useState, useEffect } from 'react';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  TrendingUp, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

// Published CSV URL for Tab 4: Alumni & Reviews
export const ALUMNI_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT917BT4WdBz-xtQCNg2Tu4_SQqVv6w0KFFSzg3A-R2yYtPIzG-t4JoOqjwr9kl3TKFD8lOCAr0S0iS/pub?gid=740143553&single=true&output=csv';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  workplace: string;
  outcome: string;
  communityBatch: string;
  quote: string;
  avatar: string;
  highlightBadge: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Personal Training Alumni',
      role: 'Personal Fitness Training',
      workplace: 'Professional Fitness Industry',
      outcome: 'Developing Client Coaching Skills',
      communityBatch: 'Alumni Community',
      quote: 'A strong foundation in fitness science helps you look beyond exercises and understand the principles behind effective training. Continuous learning and practical application are essential to becoming a more informed fitness professional.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      highlightBadge: 'SRE Alumni Spotlight'
    },
    {
      id: '2',
      name: 'Strength & Conditioning Alumni',
      role: 'Performance Training',
      workplace: 'Professional Fitness Industry',
      outcome: 'Applying Training Principles',
      communityBatch: 'Alumni Community',
      quote: 'Understanding exercise programming, movement quality, and physical adaptation gives you the confidence to guide athletes and clients effectively across different training environments.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      highlightBadge: 'SRE Alumni Spotlight'
    },
    {
      id: '3',
      name: 'Fitness Coaching Alumni',
      role: 'Fitness & Exercise Coaching',
      workplace: 'Professional Fitness Industry',
      outcome: 'Building Professional Experience',
      communityBatch: 'Alumni Community',
      quote: 'Learning how to assess movement, communicate clearly with clients, and structure evidence-informed training sessions is the cornerstone of sustainable fitness coaching.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      highlightBadge: 'SRE Alumni Spotlight'
    },
    {
      id: '4',
      name: 'Sports Performance Alumni',
      role: 'Athletic Development',
      workplace: 'Professional Fitness Industry',
      outcome: 'Continuing Professional Growth',
      communityBatch: 'Alumni Community',
      quote: 'Connecting scientific concepts with practical application empowers coaches to adapt to individual client needs while maintaining safe, evidence-informed coaching boundaries.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      highlightBadge: 'SRE Alumni Spotlight'
    }
  ];

  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(testimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync Tab 4: Alumni & Reviews live from Google Sheets
  useEffect(() => {
    if (!ALUMNI_SHEET_CSV_URL) return;

    fetch(ALUMNI_SHEET_CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch alumni CSV');
        return res.text();
      })
      .then((csvText) => {
        const parsed = parseAlumniCSV(csvText);
        if (parsed.length > 0) {
          setTestimonialsList(parsed);
          setCurrentIndex(0);
        }
      })
      .catch((err) => {
        console.warn('Using default alumni testimonials:', err);
      });
  }, []);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonialsList.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonialsList.length - 1 ? 0 : prevIdx + 1));
  };

  const active = testimonialsList[currentIndex] || testimonialsList[0];

  return (
    <section id="testimonials" className="py-24 bg-[#070b16]/35 backdrop-blur-[1px] relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#ef3838]" />
            ALUMNI JOURNEYS & PROFESSIONAL GROWTH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Building Careers in Fitness & Sports Science
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Every fitness career begins with a commitment to learning and growth. Explore how knowledge, practical skills, and continued professional development can help learners pursue opportunities across personal training, strength and conditioning, sports performance, and the wider fitness industry.
          </p>
        </AnimateOnScroll>

        {/* Featured Testimonial Spotlight Card */}
        <div className="max-w-5xl mx-auto mb-14">
          <AnimateOnScroll animation="zoom-in" delay={100}>
            <Card3D glowColor="dual" intensity={10} depth={25} className="rounded-3xl glass-panel-3d p-8 sm:p-12 shadow-3d-floating relative overflow-hidden">
              {/* Giant Background Quote Watermark */}
              <Quote className="absolute -top-4 -right-4 w-48 h-48 text-slate-800/20 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left: Avatar & Badges (4 cols) */}
                <div className="lg:col-span-4 flex flex-col items-center text-center sm:text-left sm:items-start space-y-4">
                  <div className="relative">
                    <img
                      src={active.avatar}
                      alt={active.name}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-2 border-blue-500/40 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#ef3838] to-[#2575dc] text-white shadow-md">
                      ALUMNI PROFILE
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white font-heading">{active.name}</h3>
                    <p className="text-xs font-semibold text-[#ef3838] mt-0.5">{active.role}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-500" />
                      {active.workplace}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs text-slate-300 font-semibold">Alumni Story</span>
                  </div>

                  <div className="pt-2 w-full">
                    <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs">
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">CAREER DEVELOPMENT</div>
                      <div className="font-bold text-emerald-400 font-heading text-sm mt-0.5">
                        Professional Growth
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                        Building knowledge, skills, and industry experience
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Narrative & Outcome Details (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-[#ef3838]" />
                    {active.highlightBadge} • {active.communityBatch}
                  </div>

                  <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed italic">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Alumni Journey: </strong>
                      Every professional journey is different. Build your knowledge, strengthen your practical skills, and continue developing towards your career goals.
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <div className="text-xs text-slate-400">
                      Alumni Spotlight <span className="font-bold text-white">{currentIndex + 1}</span> of {testimonials.length}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prev}
                        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-all active:scale-95"
                        aria-label="Previous Testimonial"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={next}
                        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-all active:scale-95"
                        aria-label="Next Testimonial"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </AnimateOnScroll>
        </div>

        {/* Mini Cards Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {testimonialsList.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                currentIndex === idx
                  ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-950/30'
                  : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-xl object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-xs font-bold text-white font-heading">{item.name}</h4>
                  <p className="text-[10px] text-slate-400 truncate max-w-[140px]">{item.role}</p>
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[10px]">
                <span className="text-[#ef3838] font-bold truncate max-w-[120px]">{item.outcome}</span>
                <span className="text-slate-500 shrink-0">{item.communityBatch}</span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

function parseAlumniCSV(csvText: string): Testimonial[] {
  const lines = csvText.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length <= 1) return [];

  const headers = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase());
  const list: Testimonial[] = [];

  for (let i = 1; i < lines.length; i++) {
    const row = parseCSVLine(lines[i]);
    if (row.length === 0 || !row[0]) continue;

    const rowObj: Record<string, string> = {};
    headers.forEach((header, index) => {
      rowObj[header] = row[index] || '';
    });

    const name = rowObj['full name'] || rowObj['name'] || '';
    const quote = rowObj['testimonial quote'] || rowObj['quote'] || '';
    if (!name && !quote) continue;

    const defaultAvatar = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80';
    const photoUrl = rowObj['photo url'] || rowObj['photo'] || '';

    list.push({
      id: `alumni-${i}`,
      name: name || 'SRE Certified Professional',
      role: rowObj['certification'] || rowObj['role'] || 'Certified Personal Trainer',
      workplace: rowObj['current workplace'] || rowObj['workplace'] || 'Fitness Industry',
      outcome: rowObj['current workplace'] || 'Professional Fitness Coach',
      communityBatch: rowObj['year'] ? `Batch ${rowObj['year']}` : 'Alumni Community',
      quote: quote || 'High quality practical biomechanics and science-backed fitness training.',
      avatar: photoUrl && photoUrl.startsWith('http') ? photoUrl : defaultAvatar,
      highlightBadge: 'SRE Alumni Spotlight'
    });
  }

  return list;
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
