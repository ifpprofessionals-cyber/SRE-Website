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
      name: "Skill India (NSDC Partner Ecosystem)",
      type: "National Government Skill Standard",
      accreditationId: "NSDC-TR-8820",
      description: "Curriculum benchmarked to National Skills Qualifications Framework (NSQF) Level 4 & Level 5 Fitness Trainer standards.",
      badge: "Govt. Recognized",
      badgeColor: "text-[#ef3838] border-red-500/40 bg-red-950/40"
    },
    {
      name: "International Registry of Exercise Professionals (EREPS/iREPS Pathway)",
      type: "Global Reciprocity Recognition",
      accreditationId: "EREPS-EQF-L4-COMPLIANT",
      description: "Direct academic pathways allowing SRE alumni to apply for portable international trainer registers across Europe, UAE, and APAC.",
      badge: "Global Equivalency",
      badgeColor: "text-[#2575dc] border-blue-500/40 bg-blue-950/40"
    },
    {
      name: "ISO 9001:2015 Quality Management Systems",
      type: "International Standards Organization",
      accreditationId: "ISO-QMS-2023-99411",
      description: "Formally certified assessment protocols, double-blind viva moderation, and practical laboratory safety quality assurance.",
      badge: "ISO Certified",
      badgeColor: "text-emerald-400 border-emerald-500/40 bg-emerald-950/40"
    },
    {
      name: "Sports Nutrition Society Academic Alliance",
      type: "Clinical Sports Science Body",
      accreditationId: "SNSA-INST-MEM-552",
      description: "Curriculum audited to comply with evidence-based sports ergogenics, anti-doping (WADA/NADA), and medical nutrition protocols.",
      badge: "Clinical Science",
      badgeColor: "text-amber-400 border-amber-500/40 bg-amber-950/40"
    }
  ];

  const partnerGyms = [
    {
      name: "Gold's Gym India",
      locations: "140+ Branches Pan-India",
      partnership: "Official Practical Lab & Internship Facility",
      logoText: "GOLD'S GYM",
      highlight: "Tier-1 Partner"
    },
    {
      name: "Cult.fit / Curefit Health Hubs",
      locations: "250+ Fitness Centres",
      partnership: "Preferred Practical Assessment Host",
      logoText: "cult.fit",
      highlight: "High Tech Labs"
    },
    {
      name: "Anytime Fitness",
      locations: "110+ Express Clubs",
      partnership: "Biomechanics Clinical Floor Partner",
      logoText: "ANYTIME FITNESS",
      highlight: "24/7 Access Hubs"
    },
    {
      name: "Snap Fitness",
      locations: "75+ Clubs Across India",
      partnership: "Strength & Conditioning Practicum Hub",
      logoText: "SNAP FITNESS",
      highlight: "Performance partner"
    },
    {
      name: "Talwalkars Better Value Fitness",
      locations: "90+ Regional Centers",
      partnership: "Clinical Rehabilitation Internship Hub",
      logoText: "TALWALKARS",
      highlight: "Regional Veteran"
    },
    {
      name: "Fitness First / Ozone Luxury Gyms",
      locations: "Metro Flagship Clubs",
      partnership: "Executive Personal Training Residency",
      logoText: "FITNESS FIRST",
      highlight: "Luxury Tier"
    }
  ];

  const recruiters = [
    {
      company: "Cult.fit (Curefit Healthcare)",
      rolesHired: "Master S&C Coach, Personal Trainer L4",
      annualOpenings: "60+ Placements / Year",
      avgPackage: "₹4.8L - ₹9.2L CTC",
      verifiedPartner: true
    },
    {
      company: "Gold's Gym Network",
      rolesHired: "Floor Trainer, Biomechanics Specialist, General Manager",
      annualOpenings: "85+ Placements / Year",
      avgPackage: "₹3.8L - ₹7.5L CTC",
      verifiedPartner: true
    },
    {
      company: "F45 Training Studios",
      rolesHired: "Functional Group Head Coach, HIIT Specialist",
      annualOpenings: "35+ Placements / Year",
      avgPackage: "₹4.5L - ₹8.0L CTC",
      verifiedPartner: true
    },
    {
      company: "The Oberoi & Taj Luxury Spas & Wellness",
      rolesHired: "Resident Wellness Consultant, Private Fitness Butler",
      annualOpenings: "20+ Placements / Year",
      avgPackage: "₹6.0L - ₹11.5L CTC",
      verifiedPartner: true
    },
    {
      company: "National & State Sports Academies",
      rolesHired: "Assistant Strength & Conditioning Coach, Rehab Tech",
      annualOpenings: "25+ Placements / Year",
      avgPackage: "₹5.5L - ₹10.0L CTC",
      verifiedPartner: true
    },
    {
      company: "Equinox & Dubai Fitness Chains (Overseas)",
      rolesHired: "International CPT Specialist, Performance Coach",
      annualOpenings: "15+ Global Placements / Year",
      avgPackage: "AED 9,000 - 16,000 / Mo",
      verifiedPartner: true
    }
  ];

  return (
    <section id="credibility" className="py-24 relative border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-3d text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
            <Award className="w-4 h-4 text-[#ef3838]" />
            Institutional Trust & Network
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading drop-shadow-md">
            Institutional Credibility
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Our reputation is built on audited government and international accreditations, premier training infrastructure partnerships, and direct hiring pipelines.
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
              <span>2. Partner Gyms</span>
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
              <span>3. Our Recruiters</span>
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
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                        {item.accreditationId}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white font-heading">{item.name}</h4>
                    <p className="text-xs text-blue-400 font-bold mt-1.5">{item.type}</p>
                    
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4 font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Audited & Compliant 2024-2026
                    </span>
                    <span className="text-blue-400 font-bold flex items-center gap-1">
                      Charter Verified <ExternalLink className="w-3.5 h-3.5" />
                    </span>
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
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                SRE students undergo mandatory practical biomechanics floor hours across <strong>650+ partnered premier gyms and fitness studios</strong> across India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerGyms.map((gym, idx) => (
                <AnimateOnScroll key={idx} animation="zoom-in" delay={idx * 70}>
                  <Card3D glowColor="blue" intensity={12} depth={20} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-md">
                          {gym.logoText.slice(0, 4)}
                        </div>
                        <span className="text-[11px] font-black text-red-300 bg-red-950/80 border border-red-800/60 px-3 py-1 rounded-full shadow-sm">
                          {gym.highlight}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                        {gym.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1 font-medium">
                        <Globe2 className="w-3.5 h-3.5 text-slate-500" />
                        {gym.locations}
                      </p>

                      <div className="mt-4 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 font-medium shadow-inner">
                        {gym.partnership}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Active Practicum MOU
                      </span>
                      <span className="text-slate-400 font-mono">Pan-India Lab</span>
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
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                100% of our Distinction-grade graduates receive guaranteed interview referrals through the <strong>SRE Institutional Placement Cell</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recruiters.map((recruiter, idx) => (
                <AnimateOnScroll key={idx} animation="fly-in-up" delay={idx * 70}>
                  <Card3D glowColor="red" intensity={12} depth={20} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-black text-blue-300 bg-blue-950/90 border border-blue-800/80 px-3 py-1 rounded-full">
                          {recruiter.annualOpenings}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Authorized
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white font-heading mt-1">{recruiter.company}</h4>
                      
                      <div className="mt-4 space-y-2.5">
                        <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs shadow-inner">
                          <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Roles Frequently Hired</span>
                          <span className="text-slate-200 font-semibold">{recruiter.rolesHired}</span>
                        </div>
                        <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs flex justify-between items-center shadow-inner">
                          <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Compensation Range</span>
                          <span className="text-[#ef3838] font-black font-mono text-sm">{recruiter.avgPackage}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-800/80 text-center">
                      <a
                        href="#contact"
                        className="text-xs text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-1"
                      >
                        Inquire Placement Cell <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </Card3D>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
