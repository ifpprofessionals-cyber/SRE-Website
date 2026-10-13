import React, { useState } from 'react';
import { 
  Percent, 
  ShieldCheck 
} from 'lucide-react';
import { Card3D } from './Card3D';

interface CoursePlan {
  name: string;
  totalFee: number;
  durationMonths: number;
}

export const EmiCalculator: React.FC = () => {
  const courses: CoursePlan[] = [
    { name: 'Certified Personal Trainer (CPT - L4)', totalFee: 48000, durationMonths: 4 },
    { name: 'Sports Nutrition & Ergogenics Specialist', totalFee: 32000, durationMonths: 3 },
    { name: 'Master Strength & Conditioning (CSCS Track)', totalFee: 65000, durationMonths: 6 },
    { name: 'Medical Fitness & Clinical Exercise Prescription', totalFee: 55000, durationMonths: 5 },
    { name: 'Functional Biomechanics Specialist', totalFee: 38000, durationMonths: 3 }
  ];

  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [tenureMonths, setTenureMonths] = useState(6); // 3, 6, 9, 12 months
  const [downPayment, setDownPayment] = useState(5000);

  const activeCourse = courses[selectedCourseIndex];
  const loanPrincipal = Math.max(activeCourse.totalFee - downPayment, 0);
  
  // 0% interest for 3 and 6 months, nominal 1.2% flat processing for 9 & 12 months
  const interestRate = tenureMonths <= 6 ? 0 : 0.04;
  const totalPayableLoan = loanPrincipal * (1 + interestRate);
  const monthlyEmi = Math.round(totalPayableLoan / tenureMonths);

  return (
    <Card3D glowColor="dual" intensity={7} depth={20} className="mt-16 rounded-3xl glass-panel-3d p-8 sm:p-10 shadow-3d-floating relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-2">
              <Percent className="w-3.5 h-3.5" />
              0% Interest Flexible Student Financing
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              Flexible Tuition & EMI Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Start your professional career with zero upfront burden. Split your fees into convenient monthly installments.
            </p>
          </div>
          <div className="text-right sm:border-l sm:border-slate-800 sm:pl-6">
            <span className="text-[11px] text-slate-500 uppercase font-semibold block">Monthly EMI from</span>
            <span className="text-3xl font-black text-emerald-400 font-heading">₹{monthlyEmi}</span>
            <span className="text-[10px] text-slate-400 block">/ Month</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 items-center">
          {/* Controls */}
          <div className="space-y-5">
            <div>
              <label className="text-xs text-slate-400 block mb-1.5 font-semibold">
                Select Certification Course:
              </label>
              <select
                value={selectedCourseIndex}
                onChange={(e) => setSelectedCourseIndex(parseInt(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
              >
                {courses.map((c, i) => (
                  <option key={i} value={i}>
                    {c.name} — ₹{c.totalFee.toLocaleString('en-IN')}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-semibold">
                <span>Initial Down Payment</span>
                <span className="text-[#ef3838]">₹{downPayment.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="0"
                max={activeCourse.totalFee * 0.5}
                step="2500"
                value={downPayment}
                onChange={(e) => setDownPayment(parseInt(e.target.value))}
                className="w-full accent-[#ef3838] h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>₹0 (Zero Downpayment)</span>
                <span>Max ₹{(activeCourse.totalFee * 0.5).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-2 font-semibold">
                Repayment Tenure (Months):
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 6, 9, 12].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTenureMonths(m)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      tenureMonths === m
                        ? 'bg-gradient-to-r from-[#ef3838] to-[#2575dc] text-white border-transparent shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {m} Mo {m <= 6 ? '(0% Int)' : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Breakdown Card */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-blue-500/30 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Tuition Financing Summary</span>
              <span className="text-emerald-400 font-mono text-[11px]">Instant Approval</span>
            </h4>

            <div className="flex justify-between text-xs text-slate-300">
              <span>Course Standard Tuition:</span>
              <span className="font-semibold text-white">₹{activeCourse.totalFee.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between text-xs text-slate-300">
              <span>Down Payment Deducted:</span>
              <span className="font-semibold text-emerald-400">- ₹{downPayment.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between text-xs text-slate-300">
              <span>Tenure Duration:</span>
              <span className="font-semibold text-white">{tenureMonths} Monthly Installments</span>
            </div>

            <div className="flex justify-between text-xs text-slate-300">
              <span>Financing Scheme:</span>
              <span className="font-semibold text-blue-400">
                {tenureMonths <= 6 ? '0% No-Cost EMI' : 'Subsidized Student Rate'}
              </span>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
              <span className="text-xs text-slate-400">Your Monthly Investment:</span>
              <span className="text-2xl font-black text-white font-heading">
                ₹{monthlyEmi.toLocaleString('en-IN')}
                <span className="text-xs font-normal text-slate-400"> /mo</span>
              </span>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Partnered with LiquiLoans, Eduvanz & Razorpay for 10-minute digital KYC.</span>
            </div>
          </div>
        </div>
      </div>
    </Card3D>
  );
};
