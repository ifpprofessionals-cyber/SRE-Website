import React, { useState, useRef, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Video,
  Download,
  Dumbbell
} from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSlideTab, setActiveSlideTab] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  const previewSlides = [
    {
      title: "Biomechanics & Kinesiology Lab",
      caption: "Real-time force vector tracking, moment arms, and kinetic chain assessments.",
      tag: "Lab Practicum",
      stats: { metric: "Moment Arm", value: "32.4 cm", status: "Optimal Load" },
      color: "from-[#ef3838] to-[#2575dc]"
    },
    {
      title: "Clinical Exercise Physiology",
      caption: "Metabolic expenditure diagnostics, VO2 Max calibration & fuel partitioning.",
      tag: "Clinical Science",
      stats: { metric: "VO2 Sub-Max", value: "54.2 mL/kg", status: "Aerobic Zone" },
      color: "from-[#2575dc] to-indigo-400"
    },
    {
      title: "Elite Olympic Strength Coaching",
      caption: "Velocity-based training (VBT), barbell displacement curves & rate of force.",
      tag: "Athletic Performance",
      stats: { metric: "Mean Velocity", value: "0.82 m/s", status: "Speed-Strength" },
      color: "from-rose-500 to-[#2575dc]"
    }
  ];

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (!isAutoSlide) return;
    const interval = setInterval(() => {
      setActiveSlideTab((prev) => (prev + 1) % previewSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoSlide, previewSlides.length]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = parseFloat(e.target.value);
    if (videoRef.current && !isNaN(target)) {
      videoRef.current.currentTime = target;
      setCurrentTime(target);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Geometric Atmospheric Glow Rings */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/15 blur-[140px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-blue-600/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3D Floating Institutional Pill */}
        <AnimateOnScroll animation="fly-in-down" delay={50} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel-3d text-blue-300 text-xs sm:text-sm font-semibold shadow-3d-floating transform hover:-translate-y-1 transition-transform">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="font-extrabold text-white tracking-wide">2026 Academic Admissions Open:</span>
            <span className="text-slate-300">Pan-India Biomechanics Practicum Batches</span>
            <span className="text-[#ef3838] font-bold text-sm">→</span>
          </div>
        </AnimateOnScroll>

        {/* 3D Isometric Headline & Bio-mechanics Theme */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <AnimateOnScroll animation="zoom-in" delay={120}>
            <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-widest font-black text-slate-400">
              <Dumbbell className="w-4 h-4 text-[#ef3838]" />
              Kinesiology • Exercise Physiology • Athletic Conditioning
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] font-heading drop-shadow-xl">
              Elevating Fitness Coaching into an{' '}
              <span className="bg-gradient-to-r from-[#ef3838] via-rose-400 to-[#2575dc] bg-clip-text text-transparent">
                Exact Science
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fly-in-up" delay={200}>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal drop-shadow-md">
              SRE Fitness Academy is India’s premier fitness sciences institution. We train and certify evidence-based personal trainers, sports nutritionists, and high-performance strength coaches through university-grade kinesiology and clinical lab practicums.
            </p>
          </AnimateOnScroll>

          {/* 3D Tactile Buttons */}
          <AnimateOnScroll animation="fly-in-up" delay={280}>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <a
                href="#courses"
                className="btn-3d-red px-8 py-4 rounded-2xl font-black text-sm sm:text-base text-white flex items-center gap-2.5 tracking-wide"
              >
                <GraduationCap className="w-5 h-5 text-white" />
                <span>Explore Academic Programs</span>
              </a>
              
              <a
                href="#verify-trainer"
                className="btn-3d-blue px-7 py-4 rounded-2xl font-bold text-sm sm:text-base text-white flex items-center gap-2.5 tracking-wide"
              >
                <ShieldCheck className="w-5 h-5 text-white" />
                <span>Verify Coach Credential</span>
              </a>

              <a
                href="#resources"
                className="px-6 py-4 rounded-2xl font-bold text-sm sm:text-base glass-panel-3d transition-all flex items-center gap-2 transform hover:-translate-y-1"
              >
                <Download className="w-4 h-4 text-[#ef3838]" />
                <span>Free Science Tools</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* =========================================================================
            3D SPATIAL SLIDE ANIMATION & LIVE VIDEO STAGE (Card3D Physics Tilt)
           ========================================================================= */}
        <AnimateOnScroll animation="zoom-in" delay={150} className="mt-6 mb-16 relative">
          <Card3D glowColor="dual" intensity={8} depth={24} className="rounded-3xl p-1 bg-gradient-to-b from-[#2575dc]/50 via-slate-700/30 to-[#ef3838]/50 shadow-3d-floating">
            
            <div className="rounded-[22px] bg-[#090e1c] border border-slate-700/80 overflow-hidden relative">
              
              {/* Header Bar of Video Showcase Stage */}
              <div className="bg-[#050811]/90 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-wrap justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-blue-500 inline-block shadow-sm"></span>
                  </div>
                  <div className="h-4 w-px bg-slate-700 mx-1"></div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-slate-200 tracking-wider">
                      3D HUD TELEMETRY • LIVE PRACTICUM STAGE
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-red-950 text-red-300 border border-red-800/80 px-3 py-1 rounded-full shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    Demo Video Active
                  </span>
                </div>
              </div>

              {/* Main Video Display Canvas with Dynamic 3D HUD Overlays */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.35/1] min-h-[360px] sm:min-h-[460px] bg-black flex flex-col justify-between overflow-hidden">
                
                <video
                  ref={videoRef}
                  src="/videos/demo-slide.mp4"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                  loop
                  muted={isMuted}
                  autoPlay
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleTimeUpdate}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-[#060a14]/35 to-[#060a14]/70 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#060a14]/85 via-transparent to-[#060a14]/85 pointer-events-none"></div>

                {/* Top Slide Animation Banner with 3D Depth */}
                <div className="relative z-10 p-5 sm:p-8 flex justify-between items-start">
                  <div className="animate-fadeIn transition-all duration-500 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest font-black text-blue-300 bg-blue-950/95 px-3 py-1 rounded-md border border-blue-500/50 backdrop-blur-md shadow-md">
                        Slide Sequence #{activeSlideTab + 1}: {previewSlides[activeSlideTab].tag}
                      </span>
                      <span className="text-[10px] font-bold text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700 backdrop-blur-md">
                        Auto-Transition
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-3 font-heading drop-shadow-lg">
                      {previewSlides[activeSlideTab].title}
                    </h3>
                    
                    <p className="text-slate-200 text-xs sm:text-sm mt-1.5 leading-relaxed drop-shadow-md">
                      {previewSlides[activeSlideTab].caption}
                    </p>
                  </div>

                  {/* 3D Telemetry HUD Pill */}
                  <div className="hidden sm:block text-right">
                    <div className="glass-panel-3d p-3.5 rounded-2xl shadow-xl">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        {previewSlides[activeSlideTab].stats.metric}
                      </span>
                      <span className="text-2xl font-black text-white font-mono block mt-0.5">
                        {previewSlides[activeSlideTab].stats.value}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full inline-block mt-1">
                        ● {previewSlides[activeSlideTab].stats.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Scrubber & Video Controls */}
                <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-black via-black/85 to-transparent">
                  <div className="flex items-center gap-3 mb-2.5">
                    <input
                      type="range"
                      min="0"
                      max={duration || 100}
                      step="0.1"
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-[#ef3838]"
                    />
                    <div className="text-[11px] font-mono text-slate-300 shrink-0">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white transition-all shadow-md active:scale-95"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                      </button>

                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white transition-all shadow-md active:scale-95"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={() => {
                          if (videoRef.current) videoRef.current.currentTime = 0;
                        }}
                        className="p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white transition-all shadow-md active:scale-95"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Scene Selectors */}
                    <div className="flex items-center gap-1.5 overflow-x-auto">
                      {previewSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveSlideTab(idx);
                            setIsAutoSlide(false);
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                            activeSlideTab === idx
                              ? 'bg-gradient-to-r from-[#ef3838] to-[#2575dc] text-white shadow-md'
                              : 'bg-slate-800/60 text-slate-400 hover:text-white'
                          }`}
                        >
                          Slide {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </Card3D>
        </AnimateOnScroll>

        {/* 4 Interactive 3D Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimateOnScroll animation="swipe-in-left" delay={50}>
            <Card3D glowColor="blue" intensity={12} depth={18} className="p-6 rounded-3xl glass-panel-3d shadow-xl h-full">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-blue-500/15 text-[#2575dc] border border-blue-500/30">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white font-heading">15,000+</div>
                  <div className="text-xs text-slate-300 font-semibold mt-0.5">Certified Alumni Worldwide</div>
                </div>
              </div>
            </Card3D>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fly-in-up" delay={150}>
            <Card3D glowColor="red" intensity={12} depth={18} className="p-6 rounded-3xl glass-panel-3d shadow-xl h-full">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-red-500/15 text-[#ef3838] border border-red-500/30">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white font-heading">98.4%</div>
                  <div className="text-xs text-slate-300 font-semibold mt-0.5">Industry Placement Rate</div>
                </div>
              </div>
            </Card3D>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fly-in-up" delay={250}>
            <Card3D glowColor="blue" intensity={12} depth={18} className="p-6 rounded-3xl glass-panel-3d shadow-xl h-full">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-blue-500/15 text-[#2575dc] border border-blue-500/30">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white font-heading">160+ Hrs</div>
                  <div className="text-xs text-slate-300 font-semibold mt-0.5">Biomechanics Floor Practicum</div>
                </div>
              </div>
            </Card3D>
          </AnimateOnScroll>

          <AnimateOnScroll animation="swipe-in-right" delay={350}>
            <Card3D glowColor="red" intensity={12} depth={18} className="p-6 rounded-3xl glass-panel-3d shadow-xl h-full">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-red-500/15 text-[#ef3838] border border-red-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white font-heading">ISO & REPs</div>
                  <div className="text-xs text-slate-300 font-semibold mt-0.5">Global Reciprocity Aligned</div>
                </div>
              </div>
            </Card3D>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};
