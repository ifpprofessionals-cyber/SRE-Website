import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building, 
  PhoneCall
} from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { EmiCalculator } from './EmiCalculator';
import { Card3D } from './Card3D';

interface ContactProps {
  selectedProgram: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedProgram }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: selectedProgram || 'Certified Personal Trainer (CPT - Level 4)',
    mode: 'Hybrid (Classroom Labs + Online)',
    center: 'Mumbai Central Campus',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync if selectedProgram changes from props
  React.useEffect(() => {
    if (selectedProgram) {
      setFormData(prev => ({ ...prev, program: selectedProgram }));
    }
  }, [selectedProgram]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const campuses = [
    {
      city: "Mumbai (Main Campus & Research Lab)",
      address: "SRE House, Level 4, Science & Sports Technology Hub, Bandra-Kurla Complex, Mumbai 400051",
      phone: "+91 (022) 4890-5500"
    },
    {
      city: "Bengaluru (Biomechanics Hub)",
      address: "High Performance Centre, 100ft Road, Indiranagar, Bengaluru 560038",
      phone: "+91 (080) 6120-7700"
    },
    {
      city: "Delhi NCR (Olympic S&C Facility)",
      address: "Institutional Area, Sector 44, Gurugram, Delhi NCR 122003",
      phone: "+91 (0124) 430-8800"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#070b16]/35 backdrop-blur-[1px] relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-[#ef3838]" />
            Admissions & Academic Counsel
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Begin Your Professional Fitness Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Speak directly with an Academic Advisor to discuss syllabus depth, lab scheduling, installment plans, and career placement trajectories.
          </p>
        </AnimateOnScroll>

        {/* 2-Column Grid: Inquiry Form (Left) & Campus Hubs (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Inquiry / Admission Form (7 cols) */}
          <AnimateOnScroll animation="swipe-in-left" delay={100} className="lg:col-span-7">
            <Card3D glowColor="dual" intensity={7} depth={20} className="rounded-3xl glass-panel-3d p-6 sm:p-10 shadow-3d-floating relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/40 text-[#2575dc] flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Admission Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-blue-400 font-semibold">{formData.name}</span>. An Academic Program Coordinator from <span className="text-white font-semibold">SRE Fitness Academy</span> will contact you within 4 business hours with the detailed curriculum brochure and fee structure for{' '}
                    <span className="text-[#ef3838] font-medium">{formData.program}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800/80 pb-4 mb-5">
                    <h3 className="text-xl font-bold text-white font-heading">
                      Request Academic Counseling & Prospectus
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      No commitment required. Download comprehensive batch schedules and syllabus outlines.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ayush Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ayush@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Contact / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Program of Interest *
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Certified Personal Trainer (CPT - Level 4)">Certified Personal Trainer (CPT - Level 4)</option>
                        <option value="Advanced Diploma in Sports Nutrition & Ergogenics">Advanced Diploma in Sports Nutrition</option>
                        <option value="Master Strength & Conditioning Specialist (CSCS Track)">Strength & Conditioning (CSCS Track)</option>
                        <option value="Medical Fitness & Special Populations Specialist">Medical Fitness Specialist</option>
                        <option value="Functional Biomechanics & Corrective Exercise">Biomechanics & Corrective Exercise</option>
                        <option value="Institutional / Corporate Training">Enterprise / Gym Staff Training</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Study Format
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Hybrid (Classroom Labs + Online)">Hybrid (Classroom Labs + Online)</option>
                        <option value="Weekend Practical Intensive">Weekend Practical Intensive</option>
                        <option value="100% Live Virtual Classroom">100% Live Virtual Classroom</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Practical Lab Hub
                      </label>
                      <select
                        value={formData.center}
                        onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Mumbai Central Campus">Mumbai Central Campus (BKC)</option>
                        <option value="Bengaluru Lab Hub">Bengaluru Lab Hub (Indiranagar)</option>
                        <option value="Delhi NCR S&C Facility">Delhi NCR Facility (Gurugram)</option>
                        <option value="Pune Practical Studio">Pune Practical Studio</option>
                        <option value="Hyderabad Regional Hub">Hyderabad Regional Hub</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Career Goals or Background Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your fitness background, current profession, or questions regarding EMI & syllabus..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-3d-red w-full py-4 rounded-2xl text-sm font-black text-white flex items-center justify-center gap-2 tracking-wide shadow-lg"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Submit Application / Request Academic Call</span>
                  </button>

                  <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Your privacy is protected. No spam or aggressive sales calls.</span>
                  </div>
                </form>
              )}
            </Card3D>
          </AnimateOnScroll>

          {/* Direct Institutional Office Info & Regional Hubs (5 cols) */}
          <AnimateOnScroll animation="swipe-in-right" delay={150} className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-[#ef3838]" />
                Direct Registrar Desk
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-[#2575dc] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Toll-Free Admissions Desk:</div>
                    <div className="text-slate-300 font-mono">+91 (022) 4890-5500</div>
                    <div className="text-xs text-slate-400">Student WhatsApp: +91 98200 45678</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-[#ef3838] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Official Registrar Inquiries:</div>
                    <a href="mailto:admissions@sreacademy.org" className="text-blue-400 hover:underline">
                      admissions@sreacademy.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-[#2575dc] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Advisory Office Hours:</div>
                    <div className="text-slate-300">Mon - Sat: 9:00 AM – 7:30 PM (IST)</div>
                    <div className="text-xs text-slate-400">Sunday: Closed (Practical Exams Only)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Testing Hubs */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider px-1">
                Practical Training & Examination Hubs
              </h4>

              {campuses.map((camp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#090e1c] border border-slate-800/90 text-xs hover:border-blue-500/40 transition-colors"
                >
                  <div className="font-bold text-white flex items-center gap-2">
                    <Building className={`w-4 h-4 ${idx % 2 === 0 ? 'text-[#ef3838]' : 'text-[#2575dc]'}`} />
                    {camp.city}
                  </div>
                  <div className="text-slate-400 mt-1.5 leading-relaxed">
                    {camp.address}
                  </div>
                  <div className="text-slate-400 font-mono mt-2 text-[11px]">
                    Direct: {camp.phone}
                  </div>
                </div>
              ))}
            </div>

          </AnimateOnScroll>

        </div>

        {/* Flexible Tuition & EMI Calculator */}
        <AnimateOnScroll animation="fly-in-up" delay={200}>
          <EmiCalculator />
        </AnimateOnScroll>

      </div>
    </section>
  );
};
