import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import sreLogo from '../assets/sre-logo-transparent.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050811]/70 backdrop-blur-[1px] text-slate-400 text-xs border-t border-slate-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info with Official Logo (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2.5 rounded-xl shadow-md border border-slate-200/90 inline-flex items-center justify-center flex-shrink-0">
                <img
                  src={sreLogo}
                  alt="SRE Fitness Academy Logo"
                  className="h-8 sm:h-9.5 w-auto object-contain block"
                  loading="eager"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white font-heading tracking-wider">
                  SRE <span className="text-[#ef3838]">FITNESS</span> <span className="text-[#2575dc]">ACADEMY</span>
                </span>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Sports Sciences & Biomechanics Institute
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm max-w-sm">
              Dedicated to standardizing human movement education through evidence-based kinesiology, clinical exercise science, and verified practical competency.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-300">
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                ISO 9001:2015 Registered
              </span>
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                REPs & NSCA Aligned
              </span>
            </div>
          </div>

          {/* Academic Certifications */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Academic Programs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">
                  Certified Personal Trainer (CPT - L4)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">
                  Sports Nutrition & Ergogenics
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">
                  Strength & Conditioning (CSCS Track)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">
                  Medical Fitness & Special Populations
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">
                  Functional Biomechanics Specialist
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">
                  Corporate Gym Staff Training
                </a>
              </li>
            </ul>
          </div>

          {/* Student & Verification Portal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Verification & Tools
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#verify-trainer" className="text-[#2575dc] font-semibold flex items-center gap-1.5 hover:underline">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ef3838]" />
                  Verify Trainer (Audit Registry)
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-blue-400 transition-colors">
                  Coaches' 1RM Calculator
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-blue-400 transition-colors">
                  Academic Whitepapers
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-blue-400 transition-colors">
                  CPT Exam Readiness Checklist
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  Academic Council & Faculty
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Pan-India Practical Labs
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Sports Science Dispatch
            </h4>
            <p className="text-slate-400 text-xs mb-3">
              Subscribe to monthly reviews of peer-reviewed exercise research and new batch notifications.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Sports Science Dispatch!'); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="colleague@domain.com"
                className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#ef3838] to-[#2575dc] hover:from-red-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Regulatory Disclaimers & Ethics Notice */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-400 space-y-3 leading-relaxed">
          <p>
            <strong>Professional Scope of Practice Notice:</strong> SRE Fitness Academy (A Unit of SRE Skilltech Education LLP) certifications qualify practitioners to design evidence-based conditioning, hypertrophy, and lifestyle nutrition interventions for generally healthy individuals and clearance-approved special populations. SRE coaches are educated to strictly adhere to ethical boundaries and do not diagnose medical pathologies or prescribe pharmaceuticals.
          </p>
          <div className="flex flex-wrap justify-between items-center gap-4 pt-2 text-slate-400">
            <div>
              © {new Date().getFullYear()} SRE Fitness Academy (A Unit of SRE Skilltech Education LLP). All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-slate-300">Academic Charter</a>
              <a href="#trainer-verification" className="hover:text-slate-300">Registry Rules</a>
              <a href="#contact" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#contact" className="hover:text-slate-300">Terms of Admission</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
