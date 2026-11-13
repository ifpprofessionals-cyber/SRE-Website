import React, { useState } from 'react';
import { 
  Building, 
  Dumbbell, 
  Briefcase, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Award,
  Globe2
} from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

export const Credibility: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'affiliations' | 'partner-gyms' | 'recruiters'>('affiliations');

  const affiliations = [
    {
      name: "Fitness Education & Skill Development",
      category: "PROFESSIONAL EDUCATION",
      subtitle: "Building Industry-Relevant Competencies",
      description: "Develop foundational knowledge in exercise science, training methodology, fitness assessment, and professional coaching through structured learning designed to support your development in the fitness industry.",
      footer: "PROGRAM INFORMATION",
      linkText: "View Details",
      badgeColor: "text-[#ef3838] border-red-500/40 bg-red-950/40"
    },
    {
      name: "Professional Standards & Recognition",
      category: "INDUSTRY STANDARDS",
      subtitle: "Understanding Professional Credentials",
      description: "Explore the qualifications, competency requirements, and professional standards relevant to your chosen career pathway. Recognition and eligibility depend on the specific qualification and applicable organization.",
      footer: "RECOGNITION DETAILS",
      linkText: "Learn More",
      badgeColor: "text-[#2575dc] border-blue-500/40 bg-blue-950/40"
    },
    {
      name: "Quality in Fitness Education",
      category: "LEARNING QUALITY",
      subtitle: "A Structured Learning Experience",
      description: "Our educational approach emphasizes organized course content, clear learning objectives, practical understanding, and a commitment to continuous improvement.",
      footer: "EDUCATIONAL APPROACH",
      linkText: "Explore Our Approach",
      badgeColor: "text-emerald-400 border-emerald-500/40 bg-emerald-950/40"
    },
    {
      name: "Exercise Science & Sports Nutrition",
      category: "SCIENCE-BASED LEARNING",
      subtitle: "Knowledge for Informed Practice",
      description: "Build an understanding of exercise physiology, training adaptation, nutrition fundamentals, recovery, and performance while learning to apply evidence-informed principles responsibly.",
      footer: "CURRICULUM INFORMATION",
      linkText: "Explore Courses",
      badgeColor: "text-amber-400 border-amber-500/40 bg-amber-950/40"
    }
  ];

  const partnerGyms = [
    {
      name: "Gym & Fitness Centres",
      badge: "PRACTICAL EXPOSURE",
      subtitle: "Commercial Fitness Environments",
      description: "Understand gym operations, exercise instruction, member interaction, and the responsibilities involved in delivering a professional fitness experience.",
      footer: "PARTNERSHIP DETAILS",
      location: "Subject to Availability",
      logoText: "GYM"
    },
    {
      name: "Strength & Conditioning Facilities",
      badge: "PERFORMANCE LEARNING",
      subtitle: "Strength Training Environments",
      description: "Explore resistance training principles, exercise programming, performance development, and the practical application of strength and conditioning concepts.",
      footer: "OPPORTUNITY DETAILS",
      location: "Subject to Availability",
      logoText: "S&C"
    },
    {
      name: "Sports Training Academies",
      badge: "SPORTS PERFORMANCE",
      subtitle: "Athlete Development Environments",
      description: "Discover how structured training, physical preparation, movement quality, and performance principles contribute to athletic development.",
      footer: "OPPORTUNITY DETAILS",
      location: "Subject to Availability",
      logoText: "SPT"
    },
    {
      name: "Personal Training Studios",
      badge: "COACHING PRACTICE",
      subtitle: "Individualized Fitness Coaching",
      description: "Learn about client communication, exercise instruction, goal setting, training modifications, and the foundations of responsible personal training.",
      footer: "OPPORTUNITY DETAILS",
      location: "Subject to Availability",
      logoText: "PTS"
    },
    {
      name: "Wellness & Fitness Centres",
      badge: "WELLNESS LEARNING",
      subtitle: "General Fitness & Wellbeing",
      description: "Understand how fitness professionals contribute to exercise participation, healthy movement habits, and general physical wellbeing within their professional scope.",
      footer: "OPPORTUNITY DETAILS",
      location: "Subject to Availability",
      logoText: "WEL"
    },
    {
      name: "Independent Fitness Professionals",
      badge: "INDUSTRY NETWORK",
      subtitle: "Professional Coaching Practice",
      description: "Explore different fitness career pathways and understand the practical, communication, and professional skills needed to build a sustainable coaching career.",
      footer: "OPPORTUNITY DETAILS",
      location: "Subject to Availability",
      logoText: "PRO"
    }
  ];

  const recruiters = [
    {
      company: "Commercial Fitness Centres",
      badge: "CAREER PATHWAY",
      rolesHired: "Fitness Trainer, Personal Trainer, Gym Floor Trainer",
      avgPackage: "Varies by employer, location, experience, and qualifications",
      linkText: "Explore Career Pathways"
    },
    {
      company: "Strength & Conditioning Facilities",
      badge: "PERFORMANCE CAREERS",
      rolesHired: "Strength & Conditioning Coach, Performance Trainer, Assistant Coach",
      avgPackage: "Varies by employer, role, experience, and qualifications",
      linkText: "Explore Career Pathways"
    },
    {
      company: "Boutique Fitness Studios",
      badge: "SPECIALIST FITNESS",
      rolesHired: "Group Fitness Instructor, Functional Training Coach, Personal Trainer",
      avgPackage: "Varies by employer, location, experience, and qualifications",
      linkText: "Explore Career Pathways"
    },
    {
      company: "Wellness & Lifestyle Centres",
      badge: "WELLNESS CAREERS",
      rolesHired: "Fitness Consultant, Wellness Trainer, Personal Fitness Coach",
      avgPackage: "Varies by employer, role, experience, and qualifications",
      linkText: "Explore Career Pathways"
    },
    {
      company: "Sports Academies & Athletic Programs",
      badge: "SPORTS PERFORMANCE",
      rolesHired: "Assistant Strength Coach, Physical Preparation Coach, Fitness Trainer",
      avgPackage: "Varies by organization, role, experience, and qualifications",
      linkText: "Explore Career Pathways"
    },
    {
      company: "International Fitness Opportunities",
      badge: "GLOBAL CAREERS",
      rolesHired: "Fitness Trainer, Personal Trainer, Strength Coach, Performance Coach",
      avgPackage: "Depends on country, employer, role, eligibility, and local requirements",
      linkText: "Explore Career Pathways"
    }
  ];

  return (
    <section id="credibility" className="py-24 relative border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-3d text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
            <Award className="w-4 h-4 text-[#ef3838]" />
            CREDIBILITY • PROFESSIONAL NETWORK • CAREER DEVELOPMENT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading drop-shadow-md">
            Institutional Credibility
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore the educational standards, practical learning opportunities, and industry connections that support the SRE Fitness Academy learning experience. Discover our affiliations, training partners, and career-related opportunities as you build your future in fitness.
          </p>
        </AnimateOnScroll>

        {/* 3-Part 3D Navigation Tab Bar */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-2 rounded-3xl glass-panel-3d shadow-3d-floating max-w-full overflow-x-auto gap-2">
            <button
              onClick={() => setActiveTab('affiliations')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                activeTab === 'affiliations'
                  ? 'btn-3d-red text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>1. Affiliations</span>
            </button>
            <button
              onClick={() => setActiveTab('partner-gyms')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                activeTab === 'partner-gyms'
                  ? 'btn-3d-blue text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>2. Partner Gyms & Placements</span>
            </button>
            <button
              onClick={() => setActiveTab('recruiters')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                activeTab === 'recruiters'
                  ? 'btn-3d-red text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>3. Hiring Recruiters & Businesses</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Affiliations */}
        {activeTab === 'affiliations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 animate-fadeIn">
            {affiliations.map((item, idx) => (
              <AnimateOnScroll key={idx} animation="fly-in-up" delay={idx * 80}>
                <Card3D glowColor={idx % 2 === 0 ? 'red' : 'blue'} intensity={10} depth={20} className="p-8 rounded-3xl glass-panel-3d shadow-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className={`text-[11px] font-black px-3 py-1 rounded-full border shadow-sm ${item.badgeColor}`}>
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white font-heading">{item.name}</h4>
                    <p className="text-xs text-blue-400 font-bold mt-1.5">{item.subtitle}</p>
                    
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4 font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300 font-semibold tracking-wider text-[11px] uppercase">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      {item.footer}
                    </span>
                    <a href="#courses" className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 transition-colors">
                      {item.linkText} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Card3D>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {/* Tab 2: Partner Gyms */}
        {activeTab === 'partner-gyms' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-3xl glass-panel-3d text-center max-w-2xl mx-auto shadow-md">
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Explore practical learning and industry exposure opportunities that may help connect your fitness education with real-world training environments. Availability depends on the academy's active partnerships and individual program requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerGyms.map((gym, idx) => (
                <AnimateOnScroll key={idx} animation="zoom-in" delay={idx * 70}>
                  <Card3D glowColor="blue" intensity={12} depth={20} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-md">
                          {gym.logoText}
                        </div>
                        <span className="text-[11px] font-black text-red-300 bg-red-950/80 border border-red-800/60 px-3 py-1 rounded-full shadow-sm">
                          {gym.badge}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                        {gym.name}
                      </h4>
                      <p className="text-xs text-blue-400 font-bold mt-1">
                        {gym.subtitle}
                      </p>
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1 font-medium">
                        <Globe2 className="w-3.5 h-3.5 text-slate-500" />
                        {gym.location}
                      </p>

                      <div className="mt-4 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 font-medium shadow-inner leading-relaxed">
                        {gym.description}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400 font-bold uppercase tracking-wider text-[10px]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {gym.footer}
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">{gym.location}</span>
                    </div>
                  </Card3D>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Recruiters */}
        {activeTab === 'recruiters' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-3xl glass-panel-3d text-center max-w-2xl mx-auto shadow-md">
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Explore potential career pathways across fitness training, strength and conditioning, sports performance, and wellness. Opportunities depend on available vacancies, employer requirements, individual qualifications, and selection processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recruiters.map((recruiter, idx) => (
                <AnimateOnScroll key={idx} animation="fly-in-up" delay={idx * 70}>
                  <Card3D glowColor="red" intensity={12} depth={20} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-black text-blue-300 bg-blue-950/90 border border-blue-800/80 px-3 py-1 rounded-full">
                          {recruiter.badge}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Pathway
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white font-heading mt-1">{recruiter.company}</h4>
                      
                      <div className="mt-4 space-y-2.5">
                        <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs shadow-inner">
                          <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Roles Frequently Available</span>
                          <span className="text-slate-200 font-semibold">{recruiter.rolesHired}</span>
                        </div>
                        <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs flex flex-col gap-1 shadow-inner">
                          <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Compensation Range</span>
                          <span className="text-[#ef3838] font-bold text-xs">{recruiter.avgPackage}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-800/80 text-center">
                      <a
                        href="#courses"
                        className="text-xs text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-1"
                      >
                        {recruiter.linkText} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </Card3D>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Connect for Placement Banner */}
            <div className="mt-8 p-7 sm:p-9 rounded-3xl glass-panel-3d border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-red-950/30">
              <div className="max-w-2xl">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest bg-blue-950/90 px-3 py-1 rounded-lg border border-blue-800/80">
                  FOR GYMS, CLUBS & FITNESS EMPLOYERS
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white mt-3 font-heading">
                  Hire SRE Certified Fitness Professionals
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                  Are you a gym manager, health club owner, or athletic academy looking for qualified personal trainers, nutrition consultants, or strength coaches? SRE Fitness Academy partners directly with fitness businesses across India to connect them with assessed, certified talent.
                </p>
              </div>
              <a
                href="#contact"
                className="btn-3d-red px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-white whitespace-nowrap shadow-lg shrink-0"
              >
                Register as Hiring Partner
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
