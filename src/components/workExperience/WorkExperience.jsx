import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Building2 } from 'lucide-react';
import { WORK_EXPERIENCE } from '../../utils/data';

const WorkExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-20 border-t border-[#1E2333] bg-[#0E1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131620] border border-[#1E2333] text-xs font-mono text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>ENGINEERING TIMELINE & SYSTEM CONTRIBUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Impact-oriented history of microservices architecture, full-stack application development, open-source contributions, and engineering leadership.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div 
                key={idx}
                className={`p-6 bg-[#131620] border transition-all duration-300 rounded-xl text-left ${
                  isExpanded 
                    ? 'border-emerald-500/40 shadow-xl' 
                    : 'border-[#1E2333] hover:border-[#2A3147]'
                }`}
              >
                
                {/* Role Header Bar */}
                <div 
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        @{exp.company}
                      </span>
                      <span className="px-2.5 py-0.5 text-[11px] font-mono text-slate-300 bg-[#0E1017] border border-[#1E2333] rounded">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className={`p-1.5 rounded-md bg-[#0E1017] border border-[#1E2333] text-slate-400 transition-transform ${isExpanded ? 'rotate-90 text-emerald-400' : ''}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Role Details */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-[#1E2333] space-y-4 animate-fade-in">
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {exp.summary}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-mono text-slate-400">KEY CONTRIBUTIONS & OUTCOMES:</div>
                      <ul className="space-y-2">
                        {exp.contributions.map((c, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {exp.tech.map((t, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-[#0E1017] border border-[#1E2333] rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;