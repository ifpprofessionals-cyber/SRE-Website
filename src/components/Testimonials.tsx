import React, { useState } from 'react';
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

interface Testimonial {
  id: string;
  name: string;
  role: string;
  workplace: string;
  salaryGrowth: string;
  courseTaken: string;
  yearGraduated: string;
  quote: string;
  avatar: string;
  rating: number;
  highlightBadge: string;
  storyDetails: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Aditya Ranade',
      role: 'Head of Strength & Conditioning',
      workplace: 'Cult.fit Elite Center, Mumbai',
      salaryGrowth: '+180% Salary Hike',
      courseTaken: 'CPT Level-4 & CSCS Pathway',
      yearGraduated: 'Batch of 2023',
      quote: 'Before SRE, I only knew what typical gym trainers preach. SRE taught me how to read MRI reports, evaluate joint moment arms, and build periodized programs athletes actually thrive on.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      highlightBadge: 'Promoted to Head Coach',
      storyDetails: 'Transitioned from freelance trainer to managing a 12-coach floor team within 14 months of graduation.'
    },
    {
      id: '2',
      name: 'Priyanka Sen',
      role: 'Founder & Clinical Exercise Specialist',
      workplace: 'Kinesis Rehab & Performance Studio, Bengaluru',
      salaryGrowth: 'Launched Independent Studio',
      courseTaken: 'Medical Fitness & Sports Nutrition',
      yearGraduated: 'Batch of 2022',
      quote: 'Doctors in my area refer their post-orthopedic surgery patients directly to my studio. That level of medical trust only came from SRE’s double-blind practical lab standards.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      highlightBadge: 'Studio Entrepreneur',
      storyDetails: 'Now mentors 40+ active chronic rehab and athletic return-to-play clients monthly.'
    },
    {
      id: '3',
      name: 'Varun Nair',
      role: 'Master Personal Trainer',
      workplace: "Gold's Gym Flagship, Pune",
      salaryGrowth: '₹8.5 Lakhs Annual CTC',
      courseTaken: 'Advanced CPT & Functional Biomechanics',
      yearGraduated: 'Batch of 2024',
      quote: 'During my hiring interview at Gold’s, the General Manager verified my SRE certificate on the live portal right in front of me. I was hired on the spot as a Tier-1 Master Trainer.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      highlightBadge: 'Top Tier Coach',
      storyDetails: 'Placed directly through SRE Placement Cell with 100% attendance honors.'
    },
    {
      id: '4',
      name: 'Farhan Qureshi',
      role: 'High Performance Coach',
      workplace: 'Dubai Police Sports Club (UAE)',
      salaryGrowth: 'AED 12,000 / Month',
      courseTaken: 'CSCS S&C & Advanced Ergogenics',
      yearGraduated: 'Batch of 2023',
      quote: 'SRE’s EREPS international equivalence made my UAE fitness visa and occupational licensing seamless. The depth of anatomy learned at SRE exceeded many international courses.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      highlightBadge: 'International Career',
      storyDetails: 'Now coaches tactical athletes and competitive Olympic weightlifters in the Middle East.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#070b16]/35 backdrop-blur-[1px] relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#ef3838]" />
            Alumni Outcomes & Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Proven Career Transformations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            From tier-1 gym head coaches and clinic founders to international sports directors — see where SRE credentials take our alumni.
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
                      Verified
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

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-slate-400 font-medium ml-1.5">5.0 Star</span>
                  </div>

                  <div className="pt-2 w-full">
                    <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs">
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Career Metric</div>
                      <div className="font-bold text-emerald-400 font-heading text-sm mt-0.5">
                        {active.salaryGrowth}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{active.courseTaken}</div>
                    </div>
                  </div>
                </div>

                {/* Right: Narrative & Outcome Details (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-[#ef3838]" />
                    {active.highlightBadge} • {active.yearGraduated}
                  </div>

                  <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed italic">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Alumni Journey: </strong>
                      {active.storyDetails}
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <div className="text-xs text-slate-400">
                      Story <span className="font-bold text-white">{currentIndex + 1}</span> of {testimonials.length}
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

        {/* 4 Mini Cards Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
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
                  <p className="text-[10px] text-slate-400 truncate max-w-[140px]">{item.workplace}</p>
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[10px]">
                <span className="text-[#ef3838] font-bold">{item.salaryGrowth}</span>
                <span className="text-slate-500">{item.yearGraduated}</span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
