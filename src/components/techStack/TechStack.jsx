import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Terminal, 
  Database, 
  Layout, 
  Layers, 
  Globe, 
  Palette, 
  Cpu, 
  Radio, 
  Server, 
  Network, 
  Zap, 
  ShieldCheck, 
  BrainCircuit, 
  Flame, 
  CheckSquare, 
  Bot, 
  Sparkles, 
  GitBranch, 
  Container, 
  Cloud, 
  Send,
  Layers3
} from 'lucide-react';
import { TECH_STACK } from '../../utils/data';

const iconComponentMap = {
  Code2, FileCode, Terminal, Database, Layout, Layers, Globe, Palette, Cpu, Radio,
  Server, Network, Zap, ShieldCheck, BrainCircuit, Flame, CheckSquare, Bot, Sparkles,
  GitBranch, Container, Cloud, Send
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { key: 'all', label: 'All Technologies' },
    { key: 'languages', label: 'Languages' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'aiAndEval', label: 'AI & Evaluation' },
    { key: 'devopsAndTools', label: 'DevOps & Tools' }
  ];

  const getFilteredItems = () => {
    if (activeTab === 'all') {
      return [
        ...TECH_STACK.languages,
        ...TECH_STACK.backend,
        ...TECH_STACK.frontend,
        ...TECH_STACK.aiAndEval,
        ...TECH_STACK.devopsAndTools
      ];
    }
    return TECH_STACK[activeTab] || [];
  };

  return (
    <section id="stack" className="py-20 border-t border-[#1E2333] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131620] border border-[#1E2333] text-xs font-mono text-emerald-400">
              <Layers3 className="w-3.5 h-3.5" />
              <span>TECHNICAL STACK & TOOLING ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Tech Stack & Tooling
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Battle-tested tools, frameworks, and evaluation methodologies applied across production systems and technical research.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-lg bg-[#0E1017] border border-[#1E2333] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                  activeTab === cat.key
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#131620]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getFilteredItems().map((item, idx) => {
            const Icon = iconComponentMap[item.icon] || Code2;
            return (
              <div 
                key={idx}
                className="p-4 bg-[#0E1017] border border-[#1E2333] hover:border-emerald-500/30 rounded-xl transition-all duration-200 flex items-start gap-3 text-left group"
              >
                <div className="p-2.5 rounded-lg bg-[#131620] border border-[#1E2333] text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
