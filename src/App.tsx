import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Credibility } from './components/Credibility';
import { Courses } from './components/Courses';
import { Testimonials } from './components/Testimonials';
import { VirtualTour } from './components/VirtualTour';
import { JobBoardTeaser } from './components/JobBoardTeaser';
import { TrainerVerification } from './components/TrainerVerification';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParallaxBackground } from './components/ParallaxBackground';
import { ProspectusModal } from './components/ProspectusModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const MainLayout: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProgramForAdmission, setSelectedProgramForAdmission] = useState<string>(
    'Certified Personal Trainer (CPT - Level 4)'
  );
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);

  const handleSelectCourseForAdmission = (courseTitle: string) => {
    setSelectedProgramForAdmission(courseTitle);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-red-500 selection:text-white relative transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-[#111728] text-slate-100' 
        : 'bg-[#e6ecf4] text-slate-900'
    }`}>
      {/* Dynamic Parallax Background (Moves dynamically as user slides/scrolls up or down) */}
      <ParallaxBackground />

      {/* Auto-Collapsing Top Navigation (Collapses when scrolling down, reveals when scrolling up) */}
      <Navbar />

      {/* Main Single Page Sections (Foreground Layer) */}
      <main className="flex-grow relative z-10 pt-20 sm:pt-24">
        {/* 1. Home / Hero (includes reserved Video Slide Animation showcase stage) */}
        <Hero />

        {/* 2. About Institute (Includes Pillars & "Team" Academic Board) */}
        <About />

        {/* 3. Credibility (1. Affiliations, 2. Partner Gyms, 3. Recruiters) */}
        <Credibility />

        {/* 4. Academic Courses & Certifications with Prospectus Trigger */}
        <Courses 
          onSelectCourseForAdmission={handleSelectCourseForAdmission} 
          onOpenProspectus={() => setIsProspectusModalOpen(true)}
        />

        {/* 5. Alumni Testimonials & Verified Career Case Studies */}
        <Testimonials />

        {/* 6. Virtual Campus & Practical Labs Interactive Tour */}
        <VirtualTour />

        {/* 7. Verify Trainer (Audit Registry) */}
        <TrainerVerification />

        {/* 8. Exclusive Alumni Job Board & Hiring Openings */}
        <JobBoardTeaser />

        {/* 9. Academic Resources & Diagnostic Tools Suite */}
        <Resources />

        {/* 10. Admissions, EMI Installment Calculator & Contact */}
        <Contact selectedProgram={selectedProgramForAdmission} />
      </main>

      {/* Institutional Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Downloadable Academic Prospectus Modal */}
      <ProspectusModal 
        isOpen={isProspectusModalOpen} 
        onClose={() => setIsProspectusModalOpen(false)} 
      />

      {/* Floating Instant WhatsApp Admissions Counselor Chat */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
