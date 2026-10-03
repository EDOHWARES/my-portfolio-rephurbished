import React, { useState } from 'react';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import EngineeringProfile from './components/engineeringProfile/EngineeringProfile';
import Projects from './components/projects/Projects';
import AIEvaluation from './components/aiEvaluation/AIEvaluation';
import WorkExperience from './components/workExperience/WorkExperience';
import TechStack from './components/techStack/TechStack';
import GithubSection from './components/githubSection/GithubSection';
import About from './components/about/About';
import ContactMe from './components/contactMe/ContactMe';
import Footer from './components/footer/Footer';
import ResumeModal from './components/resumeModal/ResumeModal';

function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#E2E8F0] selection:bg-emerald-500/20 selection:text-emerald-400 font-sans antialiased">
      {/* Navigation Header */}
      <NavBar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="w-full relative">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <EngineeringProfile />
        <Projects />
        <AIEvaluation />
        <WorkExperience />
        <TechStack />
        <GithubSection />
        <About />
        <ContactMe onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Persistent Resume Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
    </div>
  );
}

export default App;
