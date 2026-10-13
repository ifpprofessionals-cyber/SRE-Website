import React, { useState } from 'react';
import { 
  Eye, 
  MapPin, 
  CheckCircle2,
  Compass
} from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card3D } from './Card3D';

interface TourStation {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  specs: string;
  image: string;
  hotspots: { title: string; desc: string; top: string; left: string }[];
}

export const VirtualTour: React.FC = () => {
  const stations: TourStation[] = [
    {
      id: 'motion-lab',
      title: '3D Kinetic Vector & Motion Capture Suite',
      category: 'Biomechanics Research Lab',
      description: 'Equipped with multi-axis synchronized optical high-speed cameras, dual force plates, and real-time skeletal tracking algorithms to calculate exact moment arms and joint compressive shear.',
      features: [
        'Vicon Multi-Camera Motion Capture System',
        'Dual Bertec Force Plates (1,000 Hz sample rate)',
        'Wireless Surface Electromyography (sEMG)',
        'Instant Bar Velocity & Path Vector Projection'
      ],
      specs: 'Lab Area: 1,800 Sq. Ft. • Metro Testing Hubs',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
      hotspots: [
        { title: 'Optical Cameras', desc: 'Captures 240 frames/sec for joint angle analysis', top: '25%', left: '30%' },
        { title: 'Dual Force Plates', desc: 'Measures ground reaction forces in X, Y, Z axes', top: '70%', left: '55%' },
        { title: 'Real-time Vector HUD', desc: 'Displays lumbar shear loads during maximal lifts', top: '35%', left: '75%' }
      ]
    },
    {
      id: 'olympic-hall',
      title: 'Olympic Weightlifting & Powerlifting Platforms',
      category: 'Practical Strength Floor',
      description: 'Full competition Eleiko platforms with calibrated discs and friction-free stainless steel Olympic barbells designed for heavy eccentric velocity-based loading and dead-stop mechanics.',
      features: [
        '8 Full-Size IWF Competition Wood Platforms',
        'Eleiko Calibrated Steel Plates & Bars',
        'Tendo Linear Position Transducers for VBT',
        'Custom Heavy-Duty Monolifts & Half Racks'
      ],
      specs: 'Platform Capacity: 32 Athletes Simultaneously',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      hotspots: [
        { title: 'Eleiko Calibrated Discs', desc: 'Accuracy within +/- 10 grams of declared weight', top: '65%', left: '35%' },
        { title: 'VBT Velocity Sensors', desc: 'Linear transducers for mean concentric speed', top: '45%', left: '70%' }
      ]
    },
    {
      id: 'metabolic-cart',
      title: 'Clinical Exercise Physiology & Cardiorespiratory Lab',
      category: 'Cardiopulmonary Suite',
      description: 'High-precision open-circuit spirometry and metabolic cart suites for assessing VO2 Max, ventilatory thresholds (VT1/VT2), respiratory exchange ratio (RER), and clinical blood lactate dynamics.',
      features: [
        'Cosmed K5 Wearable Metabolic Cart',
        'Lactate Scout Clinical Handheld Analyzers',
        '12-Lead Diagnostic Resting & Stress ECG',
        'Lode Excalibur Sport Electromagnetic Cycle Ergometer'
      ],
      specs: 'Diagnostic Accuracy: Medical Grade CE-Certified',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      hotspots: [
        { title: 'Metabolic Mask', desc: 'Real-time breath-by-breath O2/CO2 gas exchange', top: '30%', left: '48%' },
        { title: 'Lactate Diagnostic Station', desc: 'Capillary blood lactate curves at step intervals', top: '60%', left: '25%' }
      ]
    },
    {
      id: 'body-comp',
      title: 'DEXA & Multi-Frequency Bioimpedance Suite',
      category: 'Anthropometry Diagnostics',
      description: 'Gold-standard body composition testing suites providing clinical bone mineral density, visceral adipose tissue quantification, and segmented intra-cellular water hydration analysis.',
      features: [
        'Dual-Energy X-Ray Absorptiometry (DEXA Equivalency)',
        'InBody 770 Multi-Frequency Segmental BIA',
        'Harpenden Precision Skinfold Calipers',
        'Ultrasound Muscular Cross-Sectional Thickness Scanners'
      ],
      specs: 'Scan Duration: Under 3 Minutes • High Precision',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
      hotspots: [
        { title: 'Segmental Analyzer', desc: '8-point tactile electrodes with multi-frequency impedance', top: '50%', left: '60%' }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(stations[0].id);
  const currentStation = stations.find(s => s.id === activeTab) || stations[0];

  return (
    <section id="virtual-tour" className="py-24 bg-[#070b16]/35 backdrop-blur-[1px] relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fly-in-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#ef3838]" />
            Practical Infrastructure Tour
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Inside SRE Practical Labs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Take a virtual tour through our clinical testing suites, 3D motion analysis rooms, and competition Olympic lifting halls where students build real-world mastery.
          </p>
        </AnimateOnScroll>

        {/* Station Navigation Selector (Single Line) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-2 rounded-3xl glass-panel-3d shadow-3d-floating max-w-full overflow-x-auto flex-nowrap gap-2 scrollbar-none">
            {stations.map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveTab(st.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all whitespace-nowrap flex items-center gap-2 flex-shrink-0 ${
                  activeTab === st.id
                    ? 'btn-3d-red text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Eye className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{st.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Lab Showcase Viewport with Card3D */}
        <Card3D glowColor="dual" intensity={7} depth={20} className="rounded-3xl glass-panel-3d overflow-hidden shadow-3d-floating">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Visual Screen with Interactive Hotspots (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] bg-slate-950 overflow-hidden group">
              <img
                src={currentStation.image}
                alt={currentStation.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Interactive Hotspot Indicators */}
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

              {/* Bottom Badge Over Image */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-slate-300 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#ef3838]" />
                  {currentStation.specs}
                </span>
                <span className="text-[11px] text-slate-400">Hover numbers to inspect tech</span>
              </div>
            </div>

            {/* Right: Technical Specs & Curriculum Details (5 cols) */}
            <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-bold text-[#ef3838] uppercase tracking-wider block mb-1">
                  {currentStation.category}
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {currentStation.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                  {currentStation.description}
                </p>

                {/* Practical Equipment List */}
                <div className="mt-6 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Practical Equipment Installed:
                  </h4>
                  {currentStation.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Included in: <strong className="text-white">CPT & CSCS Practicum</strong>
                </div>
                <a
                  href="#contact"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  Book Campus Visit &rarr;
                </a>
              </div>
            </div>

          </div>
        </Card3D>

      </div>
    </section>
  );
};
