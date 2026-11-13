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
  const [showHelp, setShowHelp] = useState(false);

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

  const handleQuickSelect = (idOrCert: string) => {
    setSearchQuery(idOrCert);
    handleSearch(idOrCert);
  };

  const isVerified = matchedTrainer && matchedTrainer.status === 'ACTIVE VERIFIED';

  return (
    <section id="verify-trainer" className="py-24 relative border-t border-slate-800/60 overflow-hidden">
      {/* 3D Atmospheric Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-3d text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#ef3838]" />
            SRE FITNESS ACADEMY • CREDENTIAL VERIFICATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading drop-shadow-md">
            Verify Trainer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Verify a fitness professional&apos;s credentials issued or recorded by SRE Fitness Academy. Check available certificate details and credential status to make more informed decisions when choosing a trainer.
          </p>

          {/* Verification Portal Status Badge */}
          <div className="mt-5 inline-flex items-center gap-2 text-xs px-4 py-1.5 rounded-full glass-panel-3d text-slate-300 shadow-sm">
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span className="font-medium">
              {sheetLoaded
                ? `Credential Verification Portal (${trainers.length} Records Synced)`
                : `Credential Verification Portal`}
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
                  placeholder="Enter Certificate ID or Trainer Name"
                  className="w-full pl-12 pr-4 py-4 bg-slate-950/80 rounded-2xl border border-slate-700/80 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-inner font-medium"
                />
              </div>
              <button
                type="submit"
                className="btn-3d-red px-8 py-4 rounded-2xl text-sm font-black text-white shrink-0 flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 text-white" />
                <span>Verify Certificate</span>
              </button>
            </form>

            {/* Example Searches */}
            <div className="mt-4 pt-3.5 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs text-slate-400 px-2">
              <span className="font-bold text-slate-300">Example Searches:</span>
              <button
                type="button"
                onClick={() => {
                  const cert = trainers[0]?.certificateNo || 'SRE-CPT-2024-001082';
                  handleQuickSelect(cert);
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-blue-300 font-semibold transition-colors shadow-sm"
              >
                Enter a certificate ID
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = trainers[0]?.name || 'Vikramaditya Roy';
                  handleQuickSelect(name);
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-blue-300 font-semibold transition-colors shadow-sm"
              >
                Search by trainer name
              </button>
              <button
                type="button"
                onClick={() => setShowHelp(!showHelp)}
                className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-semibold transition-colors shadow-sm"
              >
                View verification help
              </button>
            </div>

            {showHelp && (
              <div className="mt-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">Verification Assistance:</strong>
                Enter the exact Certificate ID (e.g. SRE-CPT-2024-001082) or the trainer&apos;s full legal name as recorded. If you require manual institutional verification or encounter any issues, please contact the SRE Fitness Academy credential desk.
              </div>
            )}
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
                  {isVerified ? (
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 text-xs font-black tracking-wider shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      CREDENTIAL STATUS: VERIFIED
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/90 border border-amber-500/60 text-amber-300 text-xs font-black tracking-wider shadow-sm">
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                      CREDENTIAL STATUS: REQUIRES ATTENTION
                    </div>
                  )}
                  <div className="text-xs text-slate-400 font-mono">
                    SRE Fitness Academy • Credential Record
                  </div>
                </div>

                {/* Search Result Outcome Message Banner */}
                {isVerified ? (
                  <div className="mt-5 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-2.5 text-xs text-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white text-xs block">Credential found and valid</span>
                      The submitted details match a credential in SRE Fitness Academy&apos;s records. Review the qualification, issue date, and status shown below.
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white text-xs block">Credential status requires attention</span>
                      A matching record was found, but the credential is marked as expired, inactive, suspended, or otherwise restricted. Review the status displayed in the official record.
                    </div>
                  </div>
                )}

                {/* Trainer Profile Card Layout */}
                <div className="pt-7 grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
                  {/* Avatar and Key Badges */}
                  <div className="flex flex-col items-center text-center p-5 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-inner">
                    <div className="relative">
                      <img
                        src={matchedTrainer.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
                        alt={matchedTrainer.name}
                        className="w-32 h-32 rounded-3xl object-cover border-2 border-[#2575dc] shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 p-2 rounded-2xl bg-[#ef3838] text-white shadow-lg">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-white mt-4 font-heading">{matchedTrainer.name}</h3>
                    <p className="text-xs text-[#ef3838] font-mono mt-1 font-black">
                      Certificate ID: {matchedTrainer.certificateNo || matchedTrainer.id}
                    </p>
                    {matchedTrainer.location && (
                      <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-2 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {matchedTrainer.location}
                      </p>
                    )}
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
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Certificate ID</div>
                        <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">
                          {matchedTrainer.certificateNo || matchedTrainer.id}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Date Issued</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          {matchedTrainer.issueDate}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Validity</div>
                        <div className="text-xs sm:text-sm font-bold text-[#2575dc] mt-0.5">
                          {matchedTrainer.validThrough || 'No expiry specified'}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Assessment Status</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          {matchedTrainer.grade || 'Passed / Completed'}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Practical Requirement</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          {matchedTrainer.practicumHours ? `${matchedTrainer.practicumHours}` : 'Completed'}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Additional Credentials</div>
                        <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">
                          {matchedTrainer.additionalCredentials || 'Not Available'}
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

                {/* Bottom Source Banner */}
                <div className="mt-7 pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-blue-400" />
                    <span>Verification Source: SRE Fitness Academy Credential Records</span>
                  </div>
                  <a href="#verify-trainer" className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300">
                    <QrCode className="w-4 h-4 text-[#ef3838]" />
                    <span>Verify Using Certificate ID</span>
                  </a>
                </div>

              </Card3D>
            </AnimateOnScroll>
          ) : searched ? (
            <AnimateOnScroll animation="zoom-in" className="rounded-3xl glass-panel-3d border border-red-500/40 p-8 text-center max-w-xl mx-auto shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/40 flex items-center justify-center text-red-400 mx-auto mb-4">
                <AlertCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">No matching record</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                We could not find a matching credential. Check the certificate ID or trainer name and try again. If you need assistance, contact SRE Fitness Academy.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const sample = trainers[0]?.certificateNo || 'SRE-CPT-2024-001082';
                    handleQuickSelect(sample);
                  }}
                  className="btn-3d-red px-5 py-2.5 rounded-xl text-xs font-bold text-white"
                >
                  Try Example Search
                </button>
              </div>
            </AnimateOnScroll>
          ) : null}
        </div>

        {/* 3 Verification Information Cards in 3D */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimateOnScroll animation="fly-in-up" delay={50}>
            <Card3D glowColor="red" intensity={12} depth={18} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full">
              <h4 className="font-bold text-white text-base font-heading flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#ef3838]" />
                For Fitness Seekers & Clients
              </h4>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-medium">
                Check a trainer&apos;s recorded SRE Fitness Academy credentials before making your decision. Review the qualification and verification status, and ask about experience and services relevant to your fitness goals.
              </p>
            </Card3D>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fly-in-up" delay={150}>
            <Card3D glowColor="blue" intensity={12} depth={18} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full">
              <h4 className="font-bold text-white text-base font-heading flex items-center gap-2">
                <Award className="w-5 h-5 text-[#2575dc]" />
                For Gym Owners & Employers
              </h4>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-medium">
                Use the verification portal to check credentials recorded by SRE Fitness Academy when evaluating trainers. Verify additional qualifications, experience, references, and role-specific requirements separately.
              </p>
            </Card3D>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fly-in-up" delay={250}>
            <Card3D glowColor="red" intensity={12} depth={18} className="p-7 rounded-3xl glass-panel-3d shadow-xl h-full">
              <h4 className="font-bold text-white text-base font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#ef3838]" />
                Credential Verification & Trust
              </h4>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-medium">
                Verification results are based on the records available in the SRE Fitness Academy system. A matching record confirms the recorded credential details; it does not independently guarantee a trainer&apos;s identity, competence, conduct, or current professional standing.
              </p>
            </Card3D>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};
