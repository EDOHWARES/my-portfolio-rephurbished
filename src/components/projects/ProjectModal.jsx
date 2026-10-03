import React from 'react';
import { X, ExternalLink, Layers, ShieldAlert, Cpu, CheckCircle2, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#0E1017] border border-[#1E2333] rounded-xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#131620] border-b border-[#1E2333]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              {project.tag}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">CASE STUDY DETAIL</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#191D2B] rounded-lg transition-colors"
            aria-label="Close project case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image Preview if available */}
        {project.imageUrl && (
          <div className="w-full h-48 sm:h-64 overflow-hidden bg-[#090A0F] border-b border-[#1E2333] relative">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1017] via-transparent to-transparent" />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#131620] border border-[#1E2333] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400">
                <ShieldAlert className="w-4 h-4" />
                <span>PROBLEM STATEMENT</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#131620] border border-[#1E2333] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Cpu className="w-4 h-4" />
                <span>ENGINEERING SOLUTION</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Challenges Solved */}
          {project.keyChallenges && project.keyChallenges.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-slate-400">KEY ARCHITECTURAL CHALLENGES SOLVED</h3>
              <div className="space-y-2">
                {project.keyChallenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#131620]/60 border border-[#1E2333]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-slate-400">TECHNOLOGY STACK & INTEGRATIONS</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs font-mono text-slate-200 bg-[#131620] border border-[#1E2333] rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#131620] border-t border-[#1E2333]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
          
          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
