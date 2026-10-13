import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  Layers, 
  Sparkles, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2, 
  Award,
  Download
} from 'lucide-react';
import { COURSES_DATA, type Course } from '../data/coursesData';
import { CourseModal } from './CourseModal';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

interface CoursesProps {
  onSelectCourseForAdmission: (courseTitle: string) => void;
  onOpenProspectus?: () => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourseForAdmission, onOpenProspectus }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'foundation', label: 'Foundational CPT' },
    { id: 'nutrition', label: 'Sports Nutrition' },
    { id: 'advanced', label: 'High Performance CSCS' },
    { id: 'rehab', label: 'Clinical Rehab' },
  ];

  const filteredCourses = activeCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter(c => c.category === activeCategory);

  const handleEnrollClick = (courseTitle: string) => {
    onSelectCourseForAdmission(courseTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-24 relative border-t border-slate-800/60 overflow-hidden">
      {/* 3D Depth Lighting Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-3d text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
            <GraduationCap className="w-4 h-4 text-[#ef3838]" />
            Accredited Academic Programs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading drop-shadow-md">
            Globally Recognized Professional Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Engineered to exceed national and international vocational standards. Every course includes extensive practical floor labs, biomechanical analysis workshops, and direct career placement assistance.
          </p>

          {/* Download Full Prospectus 3D CTA Pill */}
          {onOpenProspectus && (
            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={onOpenProspectus}
                className="btn-3d-red px-6 py-3 rounded-2xl text-xs sm:text-sm font-black text-white flex items-center gap-2.5 tracking-wide shadow-lg"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Complete 2026 Academic Catalog (PDF)</span>
              </button>
            </div>
          )}
        </AnimateOnScroll>

        {/* 3D Category Filter Pills */}
        <AnimateOnScroll animation="fly-in-up" delay={100} className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'btn-3d-red text-white scale-105'
                  : 'glass-panel-3d text-slate-300 hover:text-white hover:bg-slate-800/60 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </AnimateOnScroll>

        {/* 3D Physics Tilt Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <AnimateOnScroll key={course.id} animation="zoom-in" delay={idx * 80}>
              <Card3D 
                glowColor={course.popular ? 'red' : 'blue'} 
                intensity={12} 
                depth={22} 
                className={`rounded-3xl glass-panel-3d p-7 shadow-xl h-full flex flex-col justify-between ${
                  course.popular ? 'border-red-500/50 ring-1 ring-red-500/40' : ''
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3.5">
                    <span className="text-[11px] font-black tracking-wider uppercase bg-blue-950/90 text-blue-300 border border-blue-800/80 px-3 py-1 rounded-xl shadow-sm">
                      {course.badge}
                    </span>
                    {course.popular && (
                      <span className="text-[11px] font-black uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/40 px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-red-400" />
                        Popular Track
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-blue-300 transition-colors font-heading leading-snug">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal">
                    {course.description}
                  </p>

                  {/* Course Meta with 3D Well styling */}
                  <div className="mt-5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs text-slate-300 shadow-inner">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#ef3838] shrink-0" />
                      <span><strong>Duration:</strong> {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#2575dc] shrink-0" />
                      <span><strong>Mode:</strong> {course.mode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#ef3838] shrink-0" />
                      <span><strong>Accreditation:</strong> {course.credits}</span>
                    </div>
                  </div>

                  {/* Syllabus Modules */}
                  <div className="mt-5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Curriculum Modules:
                    </div>
                    <ul className="space-y-1.5">
                      {course.syllabus.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2575dc] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-7 pt-5 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Inspect Syllabus</span>
                  </button>

                  <button
                    onClick={() => handleEnrollClick(course.title)}
                    className="btn-3d-red px-5 py-2.5 rounded-xl text-xs font-black text-white flex items-center gap-1.5 shadow-md"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Card3D>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Corporate / Institutional Certification Banner */}
        <AnimateOnScroll animation="fly-in-up" delay={200} className="mt-16">
          <Card3D glowColor="dual" intensity={8} depth={18} className="p-8 sm:p-10 rounded-3xl glass-panel-3d flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950 px-3 py-1 rounded-lg border border-red-800/80">
                Institutional Partnerships
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white mt-3 font-heading">
                Looking to certify your entire gym chain or coaching staff?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal">
                We provide corporate training packages, custom practical audit workshops, and bulk on-premise examinations for health clubs and athletic federations.
              </p>
            </div>
            <button
              onClick={() => handleEnrollClick('Institutional / Corporate Training')}
              className="btn-3d-blue px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-white transition-all shrink-0 shadow-lg"
            >
              Inquire for Enterprise Training
            </button>
          </Card3D>
        </AnimateOnScroll>

      </div>

      {/* Syllabus Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollClick}
      />
    </section>
  );
};
