import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Building2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract';
  salary: string;
  minGradeRequired: string;
  verifiedPartner: boolean;
  postedDate: string;
  tags: string[];
}

export const JobBoardTeaser: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string>('All');

  const jobs: JobPosting[] = [
    {
      id: 'job-1',
      title: 'Master Strength & Conditioning Coach',
      company: 'Cult.fit Elite Studio',
      location: 'Bandra West, Mumbai',
      type: 'Full-Time',
      salary: '₹6.5L - ₹9.0L PA',
      minGradeRequired: 'SRE CSCS Track / First Class',
      verifiedPartner: true,
      postedDate: '2 Days Ago',
      tags: ['S&C', 'Full-Time', 'Olympic Lifts']
    },
    {
      id: 'job-2',
      title: 'Senior Biomechanics Floor Specialist',
      company: "Gold's Gym Flagship",
      location: 'Koramangala, Bengaluru',
      type: 'Full-Time',
      salary: '₹5.5L - ₹7.5L PA',
      minGradeRequired: 'SRE CPT Level-4',
      verifiedPartner: true,
      postedDate: 'Just Now',
      tags: ['CPT', 'Biomechanics', 'Client Rehab']
    },
    {
      id: 'job-3',
      title: 'Sports Nutritionist & Ergogenics Consultant',
      company: 'Peak Athletic Clinic',
      location: 'Gurugram, Delhi NCR',
      type: 'Full-Time',
      salary: '₹4.8L - ₹7.2L PA',
      minGradeRequired: 'SRE Sports Nutrition Diploma',
      verifiedPartner: true,
      postedDate: '3 Days Ago',
      tags: ['Nutrition', 'Consulting']
    },
    {
      id: 'job-4',
      title: 'International Fitness Specialist (UAE Pathway)',
      company: 'Fitness First Middle East',
      location: 'Dubai Marina, UAE',
      type: 'Full-Time',
      salary: 'AED 10,000 - 15,000 / Mo',
      minGradeRequired: 'EREPS L4 Equivalence',
      verifiedPartner: true,
      postedDate: '1 Week Ago',
      tags: ['Overseas', 'CPT', 'Luxury Tier']
    }
  ];

  const filteredJobs = filterTag === 'All' 
    ? jobs 
    : jobs.filter(j => j.tags.includes(filterTag));

  return (
    <section id="job-board" className="py-24 bg-[#070b16]/35 backdrop-blur-[1px] relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#ef3838]" />
            Exclusive Alumni Placement Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Live Placement Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Leading fitness chains and sports clubs post openings reserved exclusively for certified SRE graduates. Verified alumni enjoy direct interview shortlisting.
          </p>
        </AnimateOnScroll>

        {/* Filter Pills */}
        <div className="flex justify-center mb-8 gap-2 flex-wrap">
          {['All', 'CPT', 'S&C', 'Nutrition', 'Overseas'].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                filterTag === tag
                  ? 'bg-gradient-to-r from-[#ef3838] to-[#2575dc] text-white border-transparent shadow-md'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
          {filteredJobs.map((job, idx) => (
            <AnimateOnScroll key={job.id} animation="fly-in-up" delay={idx * 70}>
              <Card3D glowColor={idx % 2 === 0 ? 'red' : 'blue'} intensity={10} depth={20} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-blue-400 shadow-sm">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-medium">{job.company}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full shrink-0 flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-3 h-3" /> Exclusive
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">Location</span>
                      <span className="text-slate-300 font-medium flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#ef3838]" /> {job.location}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">Offered Compensation</span>
                      <span className="text-emerald-400 font-bold font-mono mt-0.5 block">{job.salary}</span>
                    </div>
                  </div>

                  <div className="mt-3 text-[11px] text-slate-400">
                    Eligibility: <strong className="text-slate-200">{job.minGradeRequired}</strong>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Posted {job.postedDate}
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    Apply via Placement Cell <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </Card3D>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Placement Guarantee Banner with Card3D */}
        <div className="max-w-4xl mx-auto">
          <Card3D glowColor="dual" intensity={8} depth={16} className="p-6 sm:p-8 rounded-3xl glass-panel-3d shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full text-center md:text-left">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-[11px] font-black uppercase tracking-wider mb-2">
                  <Building2 className="w-3.5 h-3.5 text-[#ef3838]" />
                  Corporate Recruitment Partnership
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white font-heading leading-tight">
                  Looking to Hire Certified SRE Alumni for Your Gym?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                  Post verified vacancies directly to our alumni registry of 15,000+ certified personal trainers and high-performance coaches nationwide.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="#contact"
                  className="btn-3d-red inline-flex items-center justify-center px-7 py-4 rounded-2xl text-xs sm:text-sm font-black text-white tracking-wide shadow-xl whitespace-nowrap"
                >
                  Register as Hiring Partner
                </a>
              </div>
            </div>
          </Card3D>
        </div>

      </div>
    </section>
  );
};
