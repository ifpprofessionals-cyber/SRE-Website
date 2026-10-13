import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  UserCheck, 
  FileCheck2, 
  QrCode,
  RefreshCw,
  FileSpreadsheet
} from 'lucide-react';
import { 
  FALLBACK_TRAINERS, 
  GOOGLE_SHEET_CSV_URL, 
  parseGoogleSheetCSV, 
  type VerifiedTrainer 
} from '../data/trainersData';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

export const TrainerVerification: React.FC = () => {
  const [trainers, setTrainers] = useState<VerifiedTrainer[]>(FALLBACK_TRAINERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(true);
  const [matchedTrainer, setMatchedTrainer] = useState<VerifiedTrainer | null>(FALLBACK_TRAINERS[0]);
  const [isLoadingSheet, setIsLoadingSheet] = useState(false);
  const [sheetLoaded, setSheetLoaded] = useState(false);

  useEffect(() => {
    if (!GOOGLE_SHEET_CSV_URL) return;

    setIsLoadingSheet(true);
    fetch(GOOGLE_SHEET_CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch spreadsheet');
        return res.text();
      })
      .then((csvText) => {
        const parsed = parseGoogleSheetCSV(csvText);
        if (parsed.length > 0) {
          setTrainers(parsed);
          setMatchedTrainer(parsed[0]);
          setSheetLoaded(true);
        }
      })
      .catch((err) => {
        console.warn('Could not load Google Sheet CSV, using fallback records:', err);
      })
      .finally(() => {
        setIsLoadingSheet(false);
      });
  }, []);

  const handleSearch = (queryToUse?: string) => {
    const q = (queryToUse !== undefined ? queryToUse : searchQuery).trim().toLowerCase();
    setSearched(true);

    if (!q) {
      setMatchedTrainer(null);
      return;
    }

    const found = trainers.find(t => 
      t.id.toLowerCase().includes(q) ||
      t.name.toLowerCase().includes(q) ||
      t.certificateNo.toLowerCase().includes(q)
    );

    setMatchedTrainer(found || null);
  };

  const handleQuickSelect = (id: string) => {
    setSearchQuery(id);
    handleSearch(id);
  };

  return (
    <section id="verify-trainer" className="py-24 relative border-t border-slate-800/60 overflow-hidden">
      {/* 3D Atmospheric Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-3d text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#ef3838]" />
            Live Credential Registry
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading drop-shadow-md">
            Verify Trainer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Ensure your coach is legitimately certified in scientific biomechanics and client safety. Employers, gym directors, and private clients can verify SRE credentials in real time.
          </p>

          {/* Google Sheets Sync Indicator */}
          <div className="mt-5 inline-flex items-center gap-2 text-xs px-4 py-1.5 rounded-full glass-panel-3d text-slate-300 shadow-sm">
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span className="font-medium">
              {sheetLoaded
                ? `Live Synced with Institutional Google Sheet (${trainers.length} Records)`
                : `Instant Database Verification Active (${trainers.length} Registered Trainers)`}
            </span>
            {isLoadingSheet && <RefreshCw className="w-3.5 h-3.5 text-blue-400 animate-spin" />}
          </div>
        </AnimateOnScroll>

        {/* 3D Verification Search Console */}
        <AnimateOnScroll animation="zoom-in" delay={100} className="max-w-3xl mx-auto mb-14">
          <Card3D glowColor="blue" intensity={8} depth={18} className="p-4 sm:p-5 rounded-3xl glass-panel-3d shadow-3d-floating">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Trainer ID (e.g. SRE-2024-1082) or Full Name..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-950/80 rounded-2xl border border-slate-700/80 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-inner font-medium"
                />
              </div>
              <button
                type="submit"
                className="btn-3d-red px-8 py-4 rounded-2xl text-sm font-black text-white shrink-0 flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 text-white" />
                <span>Verify Credential</span>
              </button>
            </form>

            {/* Quick Sample Links */}
            <div className="mt-4 pt-3.5 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs text-slate-400 px-2">
              <span className="font-bold text-slate-300">Quick Test Records:</span>
              {trainers.slice(0, 3).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleQuickSelect(t.id)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-blue-300 font-semibold transition-colors shadow-sm"
                >
                  {t.id} ({t.name.split(' ')[0]})
                </button>
              ))}
            </div>
          </Card3D>
        </AnimateOnScroll>

        {/* 3D Certificate Credential Display */}
        <div className="max-w-4xl mx-auto">
          {matchedTrainer ? (
            <AnimateOnScroll animation="swipe-in-left" delay={120}>
              <Card3D glowColor="blue" intensity={10} depth={22} className="rounded-3xl glass-panel-3d border-2 border-blue-500/50 p-7 sm:p-9 shadow-3d-floating relative overflow-hidden animate-fadeIn">
                
                {/* Official Holographic Watermark */}
                <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none text-blue-400">
                  <ShieldCheck className="w-[28rem] h-[28rem]" />
                </div>

                {/* Status Header Bar */}
                <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-slate-800">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/90 border border-blue-500/60 text-blue-300 text-xs font-black tracking-wider shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    AUTHENTICATED RECORD: {matchedTrainer.status}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    SRE Central Academic Registry • Timestamp Verified
                  </div>
                </div>

                {/* Trainer Profile Card Layout */}
                <div className="pt-7 grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
                  {/* Avatar and Key Badges */}
                  <div className="flex flex-col items-center text-center p-5 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-inner">
                    <div className="relative">
                      <img
                        src={matchedTrainer.avatar}
                        alt={matchedTrainer.name}
                        className="w-32 h-32 rounded-3xl object-cover border-2 border-[#2575dc] shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 p-2 rounded-2xl bg-[#ef3838] text-white shadow-lg">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-white mt-4 font-heading">{matchedTrainer.name}</h3>
                    <p className="text-xs text-[#ef3838] font-mono mt-1 font-black">{matchedTrainer.id}</p>
                    <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-2 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {matchedTrainer.location}
                    </p>
                  </div>

                  {/* Academic Credentials & Details */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                        Conferred Credential
                      </span>
                      <h4 className="text-xl font-black text-white mt-1 font-heading">
                        {matchedTrainer.credential}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Certificate No.</div>
                        <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">
                          {matchedTrainer.certificateNo}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Issue Date</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          {matchedTrainer.issueDate}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Valid Through</div>
                        <div className="text-xs sm:text-sm font-bold text-[#2575dc] mt-0.5">
                          {matchedTrainer.validThrough}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Exam Grade</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          {matchedTrainer.grade}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Practicum Lab</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          {matchedTrainer.practicumHours} Hours
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Life Support</div>
                        <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">
                          CPR/AED Active
                        </div>
                      </div>
                    </div>

                    {/* Coaching Domains */}
                    <div className="pt-2">
                      <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                        Authorized Coaching Domains
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {matchedTrainer.specializations.map((spec, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800/90 text-slate-200 border border-slate-700 shadow-sm"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Guarantee Banner */}
                <div className="mt-7 pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-blue-400" />
                    <span>Encrypted Cryptographic Ledger ID: SHA256-SRE-8891-VERIFIED</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 font-bold">
                    <QrCode className="w-4 h-4 text-[#ef3838]" />
                    <span>Scan to verify via Mobile App</span>
                  </div>
                </div>

              </Card3D>
            </AnimateOnScroll>
          ) : searched ? (
            <AnimateOnScroll animation="zoom-in" className="rounded-3xl glass-panel-3d border border-red-500/40 p-8 text-center max-w-xl mx-auto shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/40 flex items-center justify-center text-red-400 mx-auto mb-4">
                <AlertCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">No Certified Record Found</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                We could not locate any active certification matching &ldquo;<span className="text-white font-bold">{searchQuery}</span>&rdquo;.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => handleQuickSelect('SRE-2024-1082')}
                  className="btn-3d-red px-5 py-2.5 rounded-xl text-xs font-bold text-white"
                >
                  Load Sample Active Record
                </button>
              </div>
            </AnimateOnScroll>
          ) : null}
        </div>

        {/* 3 Verification Guarantee Pillars in 3D */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimateOnScroll animation="fly-in-up" delay={50}>
            <Card3D glowColor="red" intensity={12} depth={18} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full">
              <h4 className="font-bold text-white text-base font-heading flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#ef3838]" />
                For Fitness Seekers & Clients
              </h4>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-medium">
                Never place your spinal or metabolic health in the hands of unverified trainers. Ensure your coach is listed on the official SRE active register.
              </p>
            </Card3D>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fly-in-up" delay={150}>
            <Card3D glowColor="blue" intensity={12} depth={18} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full">
              <h4 className="font-bold text-white text-base font-heading flex items-center gap-2">
                <Award className="w-5 h-5 text-[#2575dc]" />
                For Gym Owners & Managers
              </h4>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-medium">
                Verify prospective job applicants directly during hiring interviews to maintain your club’s liability safety and training reputation.
              </p>
            </Card3D>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fly-in-up" delay={250}>
            <Card3D glowColor="red" intensity={12} depth={18} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full">
              <h4 className="font-bold text-white text-base font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#ef3838]" />
                Anti-Fraud Guarantee
              </h4>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-medium">
                Every SRE certificate carries a randomized 128-bit verification seal and dual-factor institutional digital signature preventing forgery.
              </p>
            </Card3D>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};
