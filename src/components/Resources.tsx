import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Calculator, 
  Download, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Scale,
  HeartPulse,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { FREE_RESOURCES } from '../data/resourcesData';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

export const Resources: React.FC = () => {
  // Tab for Interactive Tools: '1rm' | 'bmr' | 'heart-rate' | 'ffmi'
  const [activeTool, setActiveTool] = useState<'1rm' | 'bmr' | 'heart-rate' | 'ffmi'>('1rm');

  // Tool 1: 1RM Calculator State
  const [weight, setWeight] = useState<number>(100);
  const [reps, setReps] = useState<number>(5);
  const epley1RM = Math.round(weight * (1 + reps / 30));
  const brzycki1RM = Math.round(weight * (36 / (37 - reps)));

  // Tool 2: BMR & TDEE Calculator State
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [bodyWeight, setBodyWeight] = useState<number>(75);
  const [heightCm, setHeightCm] = useState<number>(175);
  const [age, setAge] = useState<number>(26);
  const [activityFactor, setActivityFactor] = useState<number>(1.55); // Moderate exercise

  // Mifflin-St Jeor formula
  const bmr = Math.round(
    gender === 'male'
      ? 10 * bodyWeight + 6.25 * heightCm - 5 * age + 5
      : 10 * bodyWeight + 6.25 * heightCm - 5 * age - 161
  );
  const tdee = Math.round(bmr * activityFactor);

  // Tool 3: Target Heart Rate Training Zones (Karvonen Formula)
  const [restingHr, setRestingHr] = useState<number>(65);
  const maxHr = Math.round(220 - age);
  const hrReserve = maxHr - restingHr;
  const aerobicZoneLow = Math.round(restingHr + hrReserve * 0.6);
  const aerobicZoneHigh = Math.round(restingHr + hrReserve * 0.75);
  const anaerobicZone = Math.round(restingHr + hrReserve * 0.85);

  // Tool 4: FFMI (Fat-Free Mass Index) & Natural Muscular Potential
  const [bodyFatPct, setBodyFatPct] = useState<number>(15);
  const leanMassKg = bodyWeight * (1 - bodyFatPct / 100);
  const heightM = heightCm / 100;
  const rawFfmi = leanMassKg / (heightM * heightM);
  // Normalized FFMI (for 1.8m baseline)
  const normalizedFfmi = (rawFfmi + 6.1 * (1.8 - heightM)).toFixed(1);

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are SRE Fitness Academy certifications recognized internationally?",
      a: "Yes. Our curriculum is aligned with global occupational standards (including REPs/EREPS Level 4 equivalency) and NSCA/ACSM evidence-based guidelines. SRE graduates work across leading fitness clubs, sports academies, and private performance clinics worldwide."
    },
    {
      q: "What is the duration of the Certified Personal Trainer (CPT) program?",
      a: "The CPT Program runs for 4 months (160 academic hours). It consists of interactive biomechanics theory lectures combined with intensive weekend practical floor laboratories at our certified testing hubs."
    },
    {
      q: "Do you offer placement assistance upon graduation?",
      a: "SRE maintains active recruitment partnerships with over 150+ premier fitness chains, strength studios, luxury hospitality groups, and sports franchises. Alumni with First Class grades receive guaranteed interview shortlists."
    },
    {
      q: "What happens if a student fails the practical lab examination?",
      a: "Students who do not achieve the 75% practical benchmark are entitled to attend remedial lab mentorship workshops and retake the practical examination in the subsequent batch cycle without paying full course tuition."
    },
    {
      q: "Can working professionals join the hybrid weekend batch?",
      a: "Yes! 65% of our students are working professionals. We offer Saturday-Sunday weekend lab sessions along with recorded high-definition lecture archives accessible 24/7 via the SRE Learning Portal."
    }
  ];

  const handleDownload = (res: typeof FREE_RESOURCES[0]) => {
    // If it's an external link (http/https), open directly
    if (res.fileUrl.startsWith('http://') || res.fileUrl.startsWith('https://')) {
      window.open(res.fileUrl, '_blank');
      return;
    }

    // Trigger direct local download or download placeholder
    const link = document.createElement('a');
    link.href = res.fileUrl;
    link.download = res.title.replace(/[^a-zA-Z0-9]/g, '_') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resources" className="py-24 bg-[#070b16]/35 backdrop-blur-[1px] relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#ef3838]" />
            Academic Repository & Diagnostic Tools
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Evidence-Based Resources & Tools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Instant diagnostic coaching calculators, sports science whitepapers, assessment checklists, and admission guidance for clients and fitness practitioners.
          </p>
        </AnimateOnScroll>

        {/* 2-Column: Free Resources Downloads (Left) & Interactive Diagnostic Tools Suite (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          
          {/* Free Resources & Whitepapers (Left 7 cols) */}
          <AnimateOnScroll animation="swipe-in-left" delay={100} className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2575dc]" />
                Free Academic Whitepapers & Tools
              </h3>
              <span className="text-xs text-blue-400 font-semibold">Direct 1-Click Download</span>
            </div>

            {FREE_RESOURCES.map((paper) => (
              <Card3D
                key={paper.id}
                glowColor="blue"
                intensity={8}
                depth={16}
                className="p-6 rounded-3xl glass-panel-3d shadow-lg"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <span className="text-[11px] font-black text-blue-300 bg-blue-950/90 px-3 py-1 rounded-full border border-blue-800/80">
                    {paper.category}
                  </span>
                  <div className="text-xs text-slate-300 flex items-center gap-3 font-medium">
                    <span>{paper.pages}</span>
                    <span>•</span>
                    <span>{paper.fileSize || 'PDF'}</span>
                    <span>•</span>
                    <span>{paper.downloads}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {paper.title}
                </h4>
                
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {paper.desc}
                </p>

                <div className="mt-4 pt-3.5 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">By {paper.author}</span>
                  <button
                    onClick={() => handleDownload(paper)}
                    className="btn-3d-red px-4 py-2 rounded-xl text-xs font-black text-white flex items-center gap-1.5 shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Resource</span>
                  </button>
                </div>
              </Card3D>
            ))}
          </AnimateOnScroll>

          {/* Diagnostic Calculations Suite (Right 5 cols) */}
          <AnimateOnScroll animation="swipe-in-right" delay={150} className="lg:col-span-5">
            <Card3D glowColor="dual" intensity={10} depth={22} className="sticky top-28 rounded-3xl glass-panel-3d p-7 shadow-3d-floating">
              
              {/* Tool Selection Tabs */}
              <div className="flex items-center gap-1.5 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-800 mb-6 overflow-x-auto shadow-inner">
                <button
                  onClick={() => setActiveTool('1rm')}
                  className={`flex-1 min-w-[70px] py-2 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    activeTool === '1rm'
                      ? 'btn-3d-red text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>1RM</span>
                </button>
                <button
                  onClick={() => setActiveTool('bmr')}
                  className={`flex-1 min-w-[85px] py-2 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    activeTool === 'bmr'
                      ? 'btn-3d-blue text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>BMR/TDEE</span>
                </button>
                <button
                  onClick={() => setActiveTool('heart-rate')}
                  className={`flex-1 min-w-[90px] py-2 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    activeTool === 'heart-rate'
                      ? 'btn-3d-red text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>HR Zones</span>
                </button>
                <button
                  onClick={() => setActiveTool('ffmi')}
                  className={`flex-1 min-w-[70px] py-2 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    activeTool === 'ffmi'
                      ? 'btn-3d-blue text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>FFMI</span>
                </button>
              </div>

              {/* TOOL 1: 1RM Calculator */}
              {activeTool === '1rm' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                    <Calculator className="w-5 h-5 text-[#ef3838]" />
                    <div>
                      <h4 className="text-base font-bold text-white font-heading">Coaches’ 1RM Calculator</h4>
                      <p className="text-[11px] text-slate-400">Epley & Brzycki Biomechanical Estimation</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                      <span>Lifted Load (kg)</span>
                      <span className="font-bold text-[#ef3838]">{weight} kg</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="250"
                      step="2.5"
                      value={weight}
                      onChange={(e) => setWeight(parseFloat(e.target.value))}
                      className="w-full accent-[#ef3838] h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                      <span>Repetitions Completed (Reps)</span>
                      <span className="font-bold text-[#2575dc]">{reps} reps</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      step="1"
                      value={reps}
                      onChange={(e) => setReps(parseInt(e.target.value))}
                      className="w-full accent-[#2575dc] h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Computed Output Box */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-500/40">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Estimated 1-Rep Maximum:
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl font-black text-white font-heading">{epley1RM} kg</span>
                      <span className="text-xs text-blue-400 font-medium">(Epley)</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800/80 flex justify-between">
                      <span>Brzycki Formula:</span>
                      <span className="font-semibold text-slate-200">{brzycki1RM} kg</span>
                    </div>
                  </div>

                  {/* Training Load Percentages */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">90% (Power)</div>
                      <div className="font-bold text-[#ef3838] text-xs">{Math.round(epley1RM * 0.9)} kg</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">80% (Hypertrophy)</div>
                      <div className="font-bold text-[#2575dc] text-xs">{Math.round(epley1RM * 0.8)} kg</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">70% (Endurance)</div>
                      <div className="font-bold text-slate-300 text-xs">{Math.round(epley1RM * 0.7)} kg</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL 2: BMR & TDEE Metabolic Calculator */}
              {activeTool === 'bmr' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                    <Flame className="w-5 h-5 text-amber-400" />
                    <div>
                      <h4 className="text-base font-bold text-white font-heading">Metabolic Rate & TDEE</h4>
                      <p className="text-[11px] text-slate-400">Mifflin-St Jeor Clinical Equation</p>
                    </div>
                  </div>

                  {/* Gender Selector */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setGender('male')}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-semibold border ${
                        gender === 'male'
                          ? 'bg-blue-950/80 border-blue-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      Male (+5)
                    </button>
                    <button
                      onClick={() => setGender('female')}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-semibold border ${
                        gender === 'female'
                          ? 'bg-pink-950/80 border-pink-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      Female (-161)
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Weight (kg)</label>
                      <input
                        type="number"
                        value={bodyWeight}
                        onChange={(e) => setBodyWeight(parseFloat(e.target.value) || 0)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Height (cm)</label>
                      <input
                        type="number"
                        value={heightCm}
                        onChange={(e) => setHeightCm(parseFloat(e.target.value) || 0)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Age (yrs)</label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Daily Activity Level</label>
                    <select
                      value={activityFactor}
                      onChange={(e) => setActivityFactor(parseFloat(e.target.value))}
                      className="w-full px-2.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                    >
                      <option value="1.2">Sedentary (Desk Job, little exercise)</option>
                      <option value="1.375">Light Activity (1-3 days/wk training)</option>
                      <option value="1.55">Moderate Activity (3-5 days/wk training)</option>
                      <option value="1.725">Heavy Training (6-7 days/wk intense)</option>
                      <option value="1.9">Athlete / Two-a-day Workouts</option>
                    </select>
                  </div>

                  {/* BMR & TDEE Result */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-amber-500/40 grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Basal Metabolic Rate</div>
                      <div className="text-xl font-black text-white mt-0.5">{bmr} kcal/day</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-amber-400 uppercase font-semibold">Maintenance (TDEE)</div>
                      <div className="text-xl font-black text-amber-400 mt-0.5">{tdee} kcal/day</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL 3: Heart Rate Zones (Karvonen) */}
              {activeTool === 'heart-rate' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                    <HeartPulse className="w-5 h-5 text-[#ef3838]" />
                    <div>
                      <h4 className="text-base font-bold text-white font-heading">Target Heart Rate Zones</h4>
                      <p className="text-[11px] text-slate-400">Karvonen Heart Rate Reserve Formula</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Age (Years)</label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Resting Heart Rate (BPM)</label>
                      <input
                        type="number"
                        value={restingHr}
                        onChange={(e) => setRestingHr(parseInt(e.target.value) || 0)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-1 text-xs">
                    <div className="p-3 rounded-xl bg-slate-950 border border-blue-500/30 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-blue-400">Zone 2 Aerobic Base (60-75%)</div>
                        <div className="text-[11px] text-slate-400">Mitochondrial density & fat oxidation</div>
                      </div>
                      <span className="font-mono font-bold text-white text-sm">
                        {aerobicZoneLow} - {aerobicZoneHigh} BPM
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-red-500/30 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-[#ef3838]">Zone 4 Anaerobic Threshold (85%+)</div>
                        <div className="text-[11px] text-slate-400">Lactate clearance & VO2 peak</div>
                      </div>
                      <span className="font-mono font-bold text-[#ef3838] text-sm">
                        {anaerobicZone}+ BPM
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-500 text-center pt-1">
                      Estimated Max Heart Rate: <strong className="text-slate-300">{maxHr} BPM</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL 4: FFMI (Fat-Free Mass Index) */}
              {activeTool === 'ffmi' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                    <Scale className="w-5 h-5 text-emerald-400" />
                    <div>
                      <h4 className="text-base font-bold text-white font-heading">Fat-Free Mass Index (FFMI)</h4>
                      <p className="text-[11px] text-slate-400">Natural Genetic Muscular Potential Matrix</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Bodyweight (kg)</label>
                      <input
                        type="number"
                        value={bodyWeight}
                        onChange={(e) => setBodyWeight(parseFloat(e.target.value) || 0)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Body Fat %</label>
                      <input
                        type="number"
                        value={bodyFatPct}
                        onChange={(e) => setBodyFatPct(parseFloat(e.target.value) || 0)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                  </div>

                  {/* FFMI Result */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/40">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Normalized FFMI Score</div>
                        <div className="text-2xl font-black text-emerald-400 font-heading mt-0.5">{normalizedFfmi}</div>
                      </div>
                      <div className="text-right text-xs">
                        <span className="text-slate-400 block text-[10px]">Lean Mass</span>
                        <span className="font-bold text-white">{leanMassKg.toFixed(1)} kg</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                      {parseFloat(normalizedFfmi) < 19 && "Average untrained physique baseline."}
                      {parseFloat(normalizedFfmi) >= 19 && parseFloat(normalizedFfmi) < 22 && "Above average naturally athletic physique."}
                      {parseFloat(normalizedFfmi) >= 22 && parseFloat(normalizedFfmi) < 25 && "Excellent muscularity — top 1-2% natural limit tier."}
                      {parseFloat(normalizedFfmi) >= 25 && "Elite upper boundary of drug-free genetic human potential."}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Clinical Grade Equations
                </span>
                <span className="font-medium">Taught in SRE CSCS & CPT</span>
              </div>
            </Card3D>
          </AnimateOnScroll>

        </div>

        {/* Academic FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fly-in-up" className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-blue-400 text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#ef3838]" />
              Frequently Asked Questions
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Admissions, Accreditations & Examination FAQs
            </h3>
          </AnimateOnScroll>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <AnimateOnScroll key={idx} animation="fly-in-up" delay={idx * 60}>
                  <div className="rounded-2xl bg-slate-900/60 border border-slate-800/90 overflow-hidden transition-colors">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-800/40 transition-colors"
                    >
                      <span className="font-bold text-white text-sm sm:text-base font-heading">
                        {faq.q}
                      </span>
                      <span className="p-1 rounded-lg bg-slate-800 text-slate-300 shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#ef3838]" /> : <ChevronDown className="w-4 h-4 text-[#2575dc]" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
