import React from 'react';
import { 
  Building2, 
  Microscope, 
  Target, 
  BookMarked, 
  Dna, 
  Activity, 
  Award,
  CheckCircle,
  Users
} from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Microscope className="w-7 h-7 text-[#ef3838]" />,
      title: "Scientific Empiricism Over Bro-Science",
      description: "Every movement cue, nutrition guideline, and periodization scheme taught at SRE is substantiated by peer-reviewed kinesiology and exercise physiology research, rejecting anecdotal gym hearsay."
    },
    {
      icon: <Dna className="w-7 h-7 text-[#2575dc]" />,
      title: "Individual Anthropometry & Biomechanics",
      description: "Human skeletons differ across femur lengths, hip socket depths, and ribcage structures. We train coaches to customize lifts to client anatomy rather than forcing rigid, injury-prone archetypes."
    },
    {
      icon: <Activity className="w-7 h-7 text-[#ef3838]" />,
      title: "Clinical Scope & Medical Collaboration",
      description: "We instill disciplined ethical boundaries, teaching coaches when to optimize performance and when to refer to orthopedic surgeons, physical therapists, and registered dietitians."
    },
    {
      icon: <Building2 className="w-7 h-7 text-[#2575dc]" />,
      title: "Rigorous Practical Lab Examination",
      description: "Graduation requires passing blind client simulation examinations, live spot-testing on human biomechanical faults, and stringent CPR/AED life support assessments."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Rajiv Vardhan, Ph.D.",
      role: "DEAN OF KINESIOLOGY & ACADEMIC DIRECTOR",
      creds: "Ex-National Sports Institute Advisor | 22+ Years in Exercise Physiology",
      badgeColor: "text-[#ef3838]",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Maithili Kulkarni, CSCS*D",
      role: "HEAD OF STRENGTH & CONDITIONING PRACTICAL LABS",
      creds: "International Weightlifting Federation Certified | 14+ Years Coaching",
      badgeColor: "text-[#2575dc]",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dr. Rohan Mehta, MBBS, DNB",
      role: "CHAIRPERSON, SPORTS MEDICINE & REHABILITATION",
      creds: "Clinical Sports Physician | Specialist in Spine & Musculoskeletal Rehab",
      badgeColor: "text-[#ef3838]",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const campusFeatures = [
    "Dedicated 3D Motion Vector & Kinetic Analysis Lab",
    "Olympic Lifting Platforms with Eleiko Precision Calibrated Plates",
    "Metabolic Cart for VO2 Max & Gas Exchange Testing",
    "DEXA & Hydrostatic Equivalent Body Composition Suites",
    "High-Density Cadaveric & Anatomy Virtual Holographic Simulators",
    "Pan-India Practical Examination Centres across 8 Metros"
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 overflow-hidden">
      {/* 3D Depth Backdrop Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-3d text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
            <BookMarked className="w-4 h-4 text-[#ef3838]" />
            Institutional Pedigree & Charter
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading drop-shadow-md">
            Bridging Academic Science & Modern Fitness Practice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Founded with the explicit mandate to elevate fitness instruction into an accredited, medical-grade discipline. We empower future coaches with verifiable scientific literacy, clinical safety, and leadership stature.
          </p>
        </AnimateOnScroll>

        {/* 2-Column Institutional Narrative with 3D Popout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <AnimateOnScroll animation="swipe-in-left" delay={100} className="space-y-6">
            <div className="inline-block p-3 rounded-2xl glass-panel-3d border border-slate-700/80 text-[#ef3838] shadow-lg">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Why Premier Fitness Clubs & Sports Teams Hire SRE Alumni
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              The fitness industry has long been plagued by unregulated certifications, weekend workshops, and unverified coaching claims. SRE Fitness Academy was established to set an uncompromising gold standard.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Our graduates do not simply count repetitions; they assess neuromuscular activation patterns, calculate joint shear forces, audit metabolic fuel utilization, and build individualized periodized plans that withstand scientific scrutiny.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {campusFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${i % 2 === 0 ? 'text-[#ef3838]' : 'text-[#2575dc]'}`} />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Academic Stats Box with 3D Card Physics Tilt */}
          <AnimateOnScroll animation="swipe-in-right" delay={150}>
            <Card3D glowColor="dual" intensity={12} depth={22} className="rounded-3xl glass-panel-3d p-8 shadow-3d-floating relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-[#2575dc] shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-base font-heading">ACADEMIC CHARTER</h4>
                    <p className="text-xs text-slate-400">Sports Science & Biomechanics Institute</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-slate-900 text-blue-300 px-3.5 py-1.5 rounded-full border border-slate-700 shadow-sm">
                  Reg No. SRE-EDU-2016
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex justify-between items-center shadow-inner">
                  <div>
                    <div className="text-sm font-bold text-white">Curriculum Review Cycle</div>
                    <div className="text-xs text-slate-400">Audited annually against ACSM, NSCA & ISSN guidelines</div>
                  </div>
                  <span className="text-xs font-black text-[#2575dc] uppercase tracking-wider">Continuous</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex justify-between items-center shadow-inner">
                  <div>
                    <div className="text-sm font-bold text-white">Minimum Practical Requirement</div>
                    <div className="text-xs text-slate-400">Mandatory physical biomechanics floor lab hours</div>
                  </div>
                  <span className="text-xs font-black text-[#ef3838] uppercase tracking-wider">160+ Hours</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex justify-between items-center shadow-inner">
                  <div>
                    <div className="text-sm font-bold text-white">Examination Passing Benchmark</div>
                    <div className="text-xs text-slate-400">Rigorous double-blind theoretical + practical viva</div>
                  </div>
                  <span className="text-xs font-black text-[#2575dc] uppercase tracking-wider">75% Minimum</span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-slate-400 italic">
                “Producing practitioners whose knowledge stands resilient under clinical peer review.”
              </div>
            </Card3D>
          </AnimateOnScroll>
        </div>

        {/* 4 Pillars Grid with 3D Elevate */}
        <div className="mb-24">
          <AnimateOnScroll animation="fly-in-up" className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading">
              Our 4 Pillars of Pedagogical Excellence
            </h3>
            <p className="text-sm text-slate-400 mt-2">The four bedrock principles governing every SRE certification</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <AnimateOnScroll key={idx} animation="zoom-in" delay={idx * 100}>
                <Card3D glowColor={idx % 2 === 0 ? 'red' : 'blue'} intensity={14} depth={20} className="p-7 rounded-3xl glass-panel-3d h-full shadow-lg">
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 w-fit mb-5 shadow-md">
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2.5 font-heading">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{pillar.description}</p>
                </Card3D>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* The Team / Academic Faculty in 3D Spotlight */}
        <div id="team" className="pt-4">
          <AnimateOnScroll animation="fly-in-up" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-3d text-blue-300 text-xs font-bold mb-3 shadow-sm">
              <Users className="w-4 h-4 text-[#ef3838]" />
              The Team • Academic Advisory Board
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading">
              Mentored by Sports Scientists & Medical Practitioners
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl mx-auto">
              Learn directly from doctors, published sports researchers, and master strength coaches who define the academic standard at SRE.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <AnimateOnScroll key={i} animation="fly-in-up" delay={i * 120}>
                <Card3D glowColor={i % 2 === 0 ? 'red' : 'blue'} intensity={10} depth={24} className="rounded-3xl glass-panel-3d overflow-hidden h-full flex flex-col shadow-2xl group">
                  <div className="h-72 w-full overflow-hidden relative bg-slate-950">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-[#090f1d]/30 to-transparent"></div>
                  </div>
                  <div className="p-7 relative -mt-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className={`text-[11px] font-black ${member.badgeColor} tracking-widest uppercase block mb-1.5`}>
                        {member.role}
                      </span>
                      <h4 className="text-xl font-black text-white font-heading">{member.name}</h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed font-medium">{member.creds}</p>
                    </div>
                  </div>
                </Card3D>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
