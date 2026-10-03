import React from 'react';
import { 
  BrainCircuit, 
  Flame, 
  CheckSquare, 
  Bot, 
  Sparkles, 
  ShieldAlert, 
  FileCode2, 
  Terminal,
  ArrowUpRight
} from 'lucide-react';
import { AI_EVALUATION_WORKFLOWS, PERSONAL_INFO } from '../../utils/data';

const iconMap = {
  'code-eval': FileCode2,
  'red-teaming': Flame,
  'benchmark': CheckSquare,
  'agentic': Bot
};

const AIEvaluation = () => {
  return (
    <section id="ai-eval" className="py-20 border-t border-[#1E2333] bg-[#0E1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>SPECIALIZED AI WORKFLOWS & MODEL TESTING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              AI Engineering, Model Evaluation & Technical Research
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Extending software engineering expertise into model output quality auditing, automated benchmarking, prompt red-teaming, and ground-truth evaluation datasets for platforms like Turing, Mindrift, Mercor, micro1, and AfterQuery.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-[#131620] border border-[#1E2333] text-purple-400">
              ● EVALUATION SUITE ONLINE
            </span>
          </div>
        </div>

        {/* AI Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {AI_EVALUATION_WORKFLOWS.map((wf) => {
            const Icon = iconMap[wf.id] || BrainCircuit;
            return (
              <div 
                key={wf.id}
                className="p-6 bg-[#131620] border border-[#1E2333] hover:border-purple-500/40 rounded-xl transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{wf.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {wf.description}
                </p>

                <div className="pt-3 border-t border-[#1E2333]">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">EVALUATION METRICS & AUDIT AREAS:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {wf.aspects.map((asp, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-[#0E1017] border border-[#1E2333] rounded-md"
                      >
                        {asp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Readiness Highlight Banner */}
        <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#131620] via-[#161B2E] to-[#131620] border border-[#1E2333] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Ready for AI Evaluation & Model Quality Platform Tasks</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Experienced in assessing code generation accuracy, writing unit tests for model output verification, and crafting clear step-by-step technical explanations.
              </p>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-lg shadow-purple-950/40 transition-colors shrink-0"
            >
              <span>Discuss AI Evaluation Roles</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIEvaluation;
