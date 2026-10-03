import React from 'react';
import { User, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { ABOUT_TEXT, PERSONAL_INFO } from '../../utils/data';

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-[#1E2333] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Profile Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-2xl bg-[#0E1017] border border-[#1E2333] p-3 overflow-hidden shadow-2xl">
                <img 
                  src={PERSONAL_INFO.avatar} 
                  alt={PERSONAL_INFO.name}
                  className="w-full max-w-sm h-auto rounded-xl object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" 
                />
                <div className="mt-3 p-3 bg-[#131620] rounded-lg border border-[#1E2333] font-mono text-xs text-left">
                  <div className="text-slate-400">ENGINEER: <span className="text-white">{PERSONAL_INFO.name}</span></div>
                  <div className="text-emerald-400 mt-0.5">STATUS: {PERSONAL_INFO.status}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Statement Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131620] border border-[#1E2333] text-xs font-mono text-emerald-400">
                <User className="w-3.5 h-3.5" />
                <span>ABOUT & TECHNICAL PHILOSOPHY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {ABOUT_TEXT.headline}
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>{ABOUT_TEXT.paragraph1}</p>
              <p>{ABOUT_TEXT.paragraph2}</p>
              <p>{ABOUT_TEXT.paragraph3}</p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0E1017] border border-[#1E2333]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Production API Architecture</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0E1017] border border-[#1E2333]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>LLM Output & Code Audit</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0E1017] border border-[#1E2333]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>React / Next.js Full-Stack</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0E1017] border border-[#1E2333]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>High Concurrency & Low Latency</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
