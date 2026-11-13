import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  CheckCircle2, 
  Compass, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Sparkles,
  Layers
} from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

interface TourStation {
  id: string;
  tabLabel: string;
  badgeLabel: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  specs: string;
  image: string;
  relevantCourses: string;
  hotspots: { title: string; desc: string; top: string; left: string }[];
}

export const VirtualTour: React.FC = () => {
  const stations: TourStation[] = [
    {
      id: 'motion-lab',
      tabLabel: 'Biomechanics & Movement Analysis',
      badgeLabel: 'PRACTICAL LAB 01 • BIOMECHANICS & MOVEMENT',
      title: 'Understanding Human Movement & Exercise Technique',
      category: 'Biomechanics & Movement Analysis',
      description: 'Discover how joint mechanics, muscle actions, movement patterns, and external forces influence exercise technique and physical performance. Learn how biomechanical principles can help fitness professionals assess movement, understand loading strategies, and make informed exercise-programming decisions.',
      features: [
        'Functional Anatomy & Joint Mechanics Analysis',
        'Kinetic Chains & Movement Pattern Optimization',
        'Resistance Training Biomechanics & Lever Systems',
        'Video Motion Observation & Technique Breakdown'
      ],
      specs: 'Focus: Movement Mechanics & Exercise Form',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
      relevantCourses: 'Personal Training (CPT) & Biomechanics',
      hotspots: [
        { title: 'Joint Mechanics', desc: 'Analyzing joint angles, moment arms, and force vectors during movement', top: '25%', left: '30%' },
        { title: 'Movement Patterns', desc: 'Assessing kinetic chains, posture, and multi-joint coordination', top: '70%', left: '55%' },
        { title: 'Exercise Technique', desc: 'Applying biomechanical principles to optimize exercise form and safety', top: '35%', left: '75%' }
      ]
    },
    {
      id: 'olympic-hall',
      tabLabel: 'Strength & Conditioning',
      badgeLabel: 'PRACTICAL LAB 02 • STRENGTH & CONDITIONING',
      title: 'Strength Training & Athletic Performance',
      category: 'Strength & Conditioning',
      description: 'Explore the principles behind effective strength training, power development, and athletic preparation. Understand exercise selection, loading, technique, progressive overload, and recovery, and learn how these factors contribute to structured training programs for different fitness and performance goals.',
      features: [
        'Olympic & Power Lifts Coaching Protocols',
        'Strength, Velocity & Plyometric Progressions',
        'Training Variables & Progressive Overload Architecture',
        'Fatigue Management & Workload Periodization'
      ],
      specs: 'Focus: Power, Strength & Progressive Overload',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      relevantCourses: 'Strength & Conditioning & CPT',
      hotspots: [
        { title: 'Exercise Setup', desc: 'Establishing optimal positioning, stance, and mechanical alignment', top: '65%', left: '35%' },
        { title: 'Loading Principles', desc: 'Managing resistance, velocity, and progressive overload strategies', top: '45%', left: '70%' }
      ]
    },
    {
      id: 'metabolic-cart',
      tabLabel: 'Exercise Physiology',
      badgeLabel: 'PRACTICAL LAB 03 • EXERCISE PHYSIOLOGY',
      title: 'Exercise Physiology & Cardiovascular Fitness',
      category: 'Exercise Physiology',
      description: 'Understand how the cardiovascular, respiratory, and muscular systems respond to physical activity. Explore aerobic and anaerobic energy systems, exercise intensity, fatigue, recovery, and the physiological principles that guide fitness assessment and training-program design.',
      features: [
        'Cardiovascular & Respiratory Dynamics During Exercise',
        'Aerobic vs Anaerobic Threshold Testing Concepts',
        'Heart Rate Zone Calibrations & Karvonen Formulas',
        'Metabolic Conditioning & Active Recovery Design'
      ],
      specs: 'Focus: Cardiorespiratory Testing & Energy Systems',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      relevantCourses: 'Sports Nutrition & Personal Training',
      hotspots: [
        { title: 'Cardiovascular Response', desc: 'Understanding heart rate, breathing dynamics, and physiological effort', top: '30%', left: '48%' },
        { title: 'Energy Systems', desc: 'Exploring aerobic and anaerobic pathways and fatigue management', top: '60%', left: '25%' }
      ]
    },
    {
      id: 'body-comp',
      tabLabel: 'Body Composition & Assessment',
      badgeLabel: 'PRACTICAL LAB 04 • ANTHROPOMETRIC ASSESSMENT',
      title: 'Body Composition & Anthropometric Assessment',
      category: 'Body Composition & Assessment',
      description: 'Learn how anthropometric measurements and body-composition methods can contribute to fitness assessment and progress monitoring. Explore the principles, appropriate use, and limitations of common assessment techniques while understanding why measurements should always be interpreted in context.',
      features: [
        'Skinfold Caliper & Multi-Site Anthropometric Measurement',
        'Bioelectrical Impedance & Lean Mass Tracking',
        'Measurement Reliability, Calibration & Client Baselines',
        'Translating Metrics into Actionable Fitness Roadmaps'
      ],
      specs: 'Focus: Anthropometric Screening & Progress Tracking',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
      relevantCourses: 'CPT, Sports Nutrition & Client Screening',
      hotspots: [
        { title: 'Measurement Methods', desc: 'Understanding body composition assessment principles and protocols', top: '50%', left: '60%' }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stations.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, stations.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stations.length) % stations.length);
  };

  const currentStation = stations[currentIndex];

  return (
    <section id="virtual-tour" className="py-24 bg-[#070b16]/40 backdrop-blur-[1px] relative border-t border-slate-800/60 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#ef3838]" />
            PRACTICAL LEARNING EXPERIENCE • ANIMATED GALLERY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Inside SRE Practical Labs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore how exercise science connects with practical fitness training through our interactive practical lab gallery. Discover the stations dedicated to biomechanics, strength and conditioning, exercise physiology, and body composition.
          </p>
        </AnimateOnScroll>

        {/* Gallery Controls Header: Counter, Play/Pause, Next/Prev */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 px-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
              STATION <span className="text-white text-sm font-black">0{currentIndex + 1}</span> / 0{stations.length}
            </span>
            <div className="h-4 w-px bg-slate-800" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all"
              title={isPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span>Autoplay Active</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resume Gallery</span>
                </>
              )}
            </button>
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous station"
              className="p-2.5 rounded-xl glass-panel-3d text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next station"
              className="p-2.5 rounded-xl glass-panel-3d text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Animated Gallery Viewport with Card3D */}
        <Card3D glowColor="dual" intensity={6} depth={18} className="rounded-3xl glass-panel-3d overflow-hidden shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Visual Station Image with Hotspots (7 Cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] bg-slate-950 overflow-hidden group">
              <img
                key={currentStation.id}
                src={currentStation.image}
                alt={currentStation.title}
                className="w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:scale-105 animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Hotspots */}
              {currentStation.hotspots.map((spot, i) => (
                <div
                  key={i}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group/spot"
                  style={{ top: spot.top, left: spot.left }}
                >
                  <div className="relative">
                    <span className="flex h-6 w-6 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-[#ef3838] text-white text-[11px] font-bold items-center justify-center shadow-lg cursor-pointer">
                        {i + 1}
                      </span>
                    </span>

                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 p-2.5 rounded-xl bg-slate-900/95 border border-slate-700 text-white text-xs shadow-2xl opacity-0 group-hover/spot:opacity-100 transition-opacity pointer-events-none z-30">
                      <div className="font-bold text-blue-400">{spot.title}</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">{spot.desc}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Bottom Specs Pill */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-between items-center gap-2 text-xs text-slate-300 bg-slate-950/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-800/80">
                <span className="flex items-center gap-1.5 font-medium text-white">
                  <MapPin className="w-3.5 h-3.5 text-[#ef3838] shrink-0" />
                  {currentStation.specs}
                </span>
                <span className="text-[11px] text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Interactive Lab Station
                </span>
              </div>
            </div>

            {/* Technical Specs & Content (5 Cols) */}
            <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-6 bg-slate-900/40">
              <div>
                <span className="text-[11px] font-bold text-[#ef3838] uppercase tracking-wider block mb-2">
                  {currentStation.badgeLabel}
                </span>
                <h3 className="text-2xl font-black text-white font-heading leading-tight">
                  {currentStation.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 font-normal">
                  {currentStation.description}
                </p>

                {/* Key Learning Areas */}
                <div className="mt-6 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    KEY PRACTICAL LAB COMPETENCIES:
                  </h4>
                  {currentStation.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  Relevant Courses: <strong className="text-white block sm:inline">{currentStation.relevantCourses}</strong>
                </div>
                <a
                  href="#contact"
                  className="btn-3d-red px-4 py-2 rounded-xl text-xs font-bold text-white whitespace-nowrap shadow-md shrink-0"
                >
                  Inquire Practical Batch
                </a>
              </div>
            </div>

          </div>
        </Card3D>

        {/* Interactive Thumbnail Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {stations.map((st, idx) => (
            <button
              key={st.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlaying(false);
              }}
              className={`p-3 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 ${
                currentIndex === idx
                  ? 'bg-slate-900 border-red-500/70 shadow-lg shadow-red-500/10 scale-[1.02]'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={st.image}
                alt={st.tabLabel}
                className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-700"
              />
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono font-bold text-red-400 uppercase">0{idx + 1} Station</div>
                <div className="text-xs font-bold text-white truncate">{st.tabLabel}</div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
