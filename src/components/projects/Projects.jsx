import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Terminal, 
  ArrowRight,
  BrainCircuit,
  Cpu
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { PROJECTS } from '../../utils/data';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack & Web3', 'AI & Systems'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-20 border-t border-[#1E2333] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131620] border border-[#1E2333] text-xs font-mono text-emerald-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>SELECTED ENGINEERING CASE STUDIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Systems & Production Work
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Curated case studies surfacing backend architecture, high-concurrency data flows, smart contract integrations, and evaluation tooling.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-lg bg-[#0E1017] border border-[#1E2333] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#131620]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative flex flex-col justify-between bg-[#0E1017] border border-[#1E2333] hover:border-emerald-500/40 rounded-xl overflow-hidden transition-all duration-300 tech-border"
            >
              <div>
                
                {/* Project Banner Graphic / Image */}
                <div className="w-full h-48 sm:h-56 bg-[#131620] relative overflow-hidden border-b border-[#1E2333]">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#131620] to-[#0E1017] font-mono text-xs text-slate-400 space-y-2">
                      <BrainCircuit className="w-10 h-10 text-purple-400" />
                      <span className="text-slate-300 font-bold">{project.title}</span>
                      <span className="text-purple-400 text-[11px]">[AI EVALUATION & HARNESS]</span>
                    </div>
                  )}

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 text-[11px] font-mono font-semibold text-slate-200 bg-[#0E1017]/90 backdrop-blur-md border border-[#1E2333] rounded-md shadow-md">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-4 text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-0.5 text-[11px] font-mono text-slate-400 bg-[#131620] border border-[#1E2333] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-slate-500">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-[#131620]/50 border-t border-[#1E2333] flex items-center justify-between font-mono text-xs">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                >
                  <span>Architecture Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span className="hidden sm:inline">Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Case Study Modal */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

      </div>
    </section>
  );
};

export default Projects;
