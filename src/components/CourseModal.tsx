import React from 'react';
import { X, CheckCircle2, Clock, MapPin, Award, BookOpen, CreditCard, ChevronRight } from 'lucide-react';
import type { Course } from '../data/coursesData';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#0b1120] border border-slate-700 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 border-b border-slate-800 flex justify-between items-start">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-800/60 inline-block mb-2">
              {course.badge}
            </span>
            <h3 className="text-2xl font-bold text-white font-heading">{course.title}</h3>
            <p className="text-xs text-slate-400 mt-1">Accredited Professional Diploma Program | {course.credits}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 text-xs flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#ef3838]" /> Duration
              </div>
              <div className="font-semibold text-white text-xs sm:text-sm">{course.duration}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 text-xs flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#2575dc]" /> Format
              </div>
              <div className="font-semibold text-white text-xs sm:text-sm">{course.mode}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 text-xs flex items-center gap-1.5 mb-1">
                <Award className="w-3.5 h-3.5 text-[#ef3838]" /> Level
              </div>
              <div className="font-semibold text-white text-xs sm:text-sm">{course.level}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 text-xs flex items-center gap-1.5 mb-1">
                <CreditCard className="w-3.5 h-3.5 text-[#2575dc]" /> Tuition Fee
              </div>
              <div className="font-bold text-[#ef3838] text-xs sm:text-sm">{course.price}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#2575dc]" /> Program Overview
            </h4>
            <p className="text-slate-300 leading-relaxed">{course.description}</p>
          </div>

          {/* Detailed Syllabus Modules */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Comprehensive Syllabus Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.syllabus.map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-[#ef3838]">
                Eligibility & Prerequisites
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">{course.prerequisites}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-[#2575dc]">
                Career Outcomes & Certification
              </h5>
              <ul className="space-y-1.5">
                {course.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-slate-900 border-t border-slate-800 flex flex-wrap justify-between items-center gap-4">
          <div>
            <div className="text-xs text-slate-400">Tuition Fee with flexible installment:</div>
            <div className="text-xl font-extrabold text-white">
              {course.price} <span className="text-xs font-normal text-slate-400">({course.emi})</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course.title);
              }}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#ef3838] to-[#2575dc] hover:from-red-600 hover:to-blue-600 shadow-lg shadow-red-500/25 transition-all flex items-center gap-1.5"
            >
              <span>Apply for this Program</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
