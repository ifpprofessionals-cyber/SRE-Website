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
      title: "Evidence-Based Fitness Education",
      description: "Understand the scientific principles behind exercise, training adaptation, recovery, and performance. Learn to question unsupported claims and make informed decisions using credible evidence."
    },
    {
      icon: <Dna className="w-7 h-7 text-[#2575dc]" />,
      title: "Individualized Training Principles",
      description: "Explore how anatomy, movement patterns, training history, goals, and individual differences influence exercise selection and program design."
    },
    {
      icon: <Activity className="w-7 h-7 text-[#ef3838]" />,
      title: "Safe and Responsible Coaching",
      description: "Learn the importance of exercise safety, appropriate progressions, informed coaching decisions, and professional boundaries, including when to refer clients to qualified healthcare practitioners."
    },
    {
      icon: <Building2 className="w-7 h-7 text-[#2575dc]" />,
      title: "Practical Skills & Application",
      description: "Connect theoretical knowledge with practical fitness scenarios. Develop a stronger understanding of exercise technique, movement assessment, training methods, and coaching communication."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Rajiv Vardhan",
      role: "FITNESS SCIENCE & EDUCATION",
      qualification: "Ph.D., Exercise Physiology",
      description: "Supports learners in developing a strong understanding of exercise science, training principles, and evidence-informed fitness practice.",
      badgeColor: "text-[#ef3838]",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Maithili Kulkarni",
      role: "STRENGTH & CONDITIONING",
      qualification: "CSCS | Strength & Conditioning Coach",
      description: "Helps learners understand strength development, exercise programming, movement quality, and the principles of athletic performance.",
      badgeColor: "text-[#2575dc]",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dr. Rohan Mehta",
      role: "EXERCISE PHYSIOLOGY & PERFORMANCE",
      qualification: "MBBS, Sports & Exercise Medicine",
      description: "Contributes knowledge of human physiology, physical adaptation, and the relationship between training, recovery, and performance.",
      badgeColor: "text-[#ef3838]",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const campusFeatures = [
    "Exercise Biomechanics & Movement Analysis",
    "Strength Training & Performance Principles",
    "Exercise Physiology & Energy Systems",
    "Fitness Assessment & Body Composition Fundamentals",
    "Applied Human Anatomy & Kinesiology",
    "Practical Learning & Professional Development"
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
            Bridging Exercise Science with Real-World Fitness Practice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            SRE Fitness Academy is dedicated to advancing fitness education through scientific understanding, practical learning, and professional development. We help aspiring and practicing fitness professionals build the knowledge, critical thinking, and coaching skills needed to apply exercise science responsibly.
          </p>
        </AnimateOnScroll>

        {/* 2-Column Institutional Narrative with 3D Popout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <AnimateOnScroll animation="swipe-in-left" delay={100} className="space-y-6">
            <div className="inline-block p-3 rounded-2xl glass-panel-3d border border-slate-700/80 text-[#ef3838] shadow-lg">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Why Fitness Professionals Choose SRE Fitness Academy
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              The fitness industry requires more than practical experience alone. Effective professionals need a strong understanding of human movement, exercise physiology, training methodology, and the principles that guide safe and effective coaching.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              At SRE Fitness Academy, we focus on connecting scientific knowledge with practical application. Our learning approach encourages students to think critically, understand individual differences, and develop the skills needed to make informed training decisions.
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
                    <h4 className="font-black text-white text-base font-heading">SRE LEARNING FRAMEWORK</h4>
                    <p className="text-xs text-slate-400">Science-Based Fitness Education</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-slate-900 text-blue-300 px-3.5 py-1.5 rounded-full border border-slate-700 shadow-sm">
                  COURSE INFORMATION
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex justify-between items-center shadow-inner">
                  <div>
                    <div className="text-sm font-bold text-white">Structured Curriculum</div>
                    <div className="text-xs text-slate-400">Evidence-informed syllabus aligned with fitness science</div>
                  </div>
                  <span className="text-xs font-black text-[#2575dc] uppercase tracking-wider">PROGRAM-BASED</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex justify-between items-center shadow-inner">
                  <div>
                    <div className="text-sm font-bold text-white">Practical Learning</div>
                    <div className="text-xs text-slate-400">Hands-on application and coaching methodology</div>
                  </div>
                  <span className="text-xs font-black text-[#ef3838] uppercase tracking-wider">AS PER COURSE</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex justify-between items-center shadow-inner">
                  <div>
                    <div className="text-sm font-bold text-white">Learning Assessment</div>
                    <div className="text-xs text-slate-400">Comprehensive evaluation of knowledge and skills</div>
                  </div>
                  <span className="text-xs font-black text-[#2575dc] uppercase tracking-wider">COURSE REQUIREMENTS</span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-slate-400 leading-relaxed">
                Our educational approach emphasizes scientific understanding, practical application, and the continuous development of professional knowledge.
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
            <p className="text-sm text-slate-400 mt-2">Four principles that guide our approach to science-led fitness education.</p>
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
              MEET OUR EDUCATORS
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading">
              Learn from Experienced Fitness & Sports Science Educators
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl mx-auto">
              Discover the people who contribute to fitness education through scientific knowledge, practical experience, and a commitment to helping learners grow as informed professionals.
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
                      <div className="text-xs font-semibold text-blue-400 mt-1">{member.qualification}</div>
                      <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-normal">{member.description}</p>
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
