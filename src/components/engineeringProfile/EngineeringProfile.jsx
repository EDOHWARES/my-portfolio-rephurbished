import React from 'react';
import { Server, BrainCircuit, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CORE_CAPABILITIES } from '../../utils/data';

const iconMap = {
  Server: Server,
  BrainCircuit: BrainCircuit,
  Cpu: Cpu
};

const EngineeringProfile = () => {
  return (
    <section id="profile" className="py-20 border-t border-[#1E2333] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131620] border border-[#1E2333] text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENGINEERING PROFILE & CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Technical Identity & Problem Domains
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Rather than a static keyword cloud, here is how I architect software, evaluate complex systems, and solve production engineering challenges.
          </p>
        </div>

        {/* 3 Pillar Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_CAPABILITIES.map((cap, idx) => {
            const Icon = iconMap[cap.iconName] || Server;
            return (
              <div 
                key={cap.id} 
                className="group relative p-6 bg-[#0E1017] border border-[#1E2333] hover:border-emerald-500/40 rounded-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-[#131620] border border-[#1E2333] text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">
                      0{idx + 1} // CAPABILITY
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 pt-3 border-t border-[#1E2333]">
                    {cap.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="mt-6 pt-4 border-t border-[#1E2333]/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>DOMAIN: PRODUCTION READY</span>
                  <span className="text-emerald-400">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EngineeringProfile;
