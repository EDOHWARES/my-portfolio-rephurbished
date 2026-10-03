import React from 'react';
import { GitBranch, GitCommit, Star, ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../utils/data';

const GithubSection = () => {
  return (
    <section className="py-20 border-t border-[#1E2333] bg-[#0E1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#131620] via-[#0E1017] to-[#131620] border border-[#1E2333] space-y-6 text-left relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090A0F] border border-[#1E2333] text-xs font-mono text-emerald-400">
                <FaGithub className="w-3.5 h-3.5" />
                <span>OPEN SOURCE & REPOSITORY VERIFICATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                GitHub Engineering Activity & Contributions
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Active open-source contributor across the Stellar ecosystem (Drips platform), StarkNet developer tooling, and educational standard modules. Clean commit history, strict PR code reviews, and well-tested repositories.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-[#2A3147] rounded-xl shadow-lg transition-all shrink-0 hover:-translate-y-0.5"
            >
              <FaGithub className="w-5 h-5 text-emerald-400" />
              <span>Explore GitHub @EDOHWARES</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1E2333]">
            <div className="p-4 rounded-xl bg-[#090A0F] border border-[#1E2333] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <span>OPEN SOURCE PROJECTS</span>
              </div>
              <p className="text-lg font-bold text-white font-mono">Drips · OnlyDust · FreeCodeCamp</p>
            </div>

            <div className="p-4 rounded-xl bg-[#090A0F] border border-[#1E2333] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>REPOSITORIES</span>
              </div>
              <p className="text-lg font-bold text-white font-mono">Bault · SafeRoute-NG · InheritX</p>
            </div>

            <div className="p-4 rounded-xl bg-[#090A0F] border border-[#1E2333] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <GitBranch className="w-4 h-4 text-purple-400" />
                <span>CODE QUALITY</span>
              </div>
              <p className="text-lg font-bold text-white font-mono">Strict Types & Automated Tests</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubSection;
