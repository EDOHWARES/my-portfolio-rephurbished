import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  FileText, 
  Copy, 
  Check, 
  ShieldCheck, 
  BrainCircuit, 
  Server,
  Code2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/data';

const Hero = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState('eval');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131620] border border-[#1E2333] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
                SOFTWARE ENGINEER · FULL-STACK & AI SYSTEMS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building production systems & engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">high-reliability AI workflows</span>.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Software engineer specializing in full-stack architecture, high-throughput Node.js/TypeScript microservices, React/Next.js applications, and LLM evaluation & benchmark workflows. Engineering real systems with technical rigor.
            </p>

            {/* Platform Readiness Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">OPTIMIZED FOR:</span>
              {PERSONAL_INFO.targetPlatforms.map((p) => (
                <span key={p.name} className="px-2.5 py-1 rounded bg-[#0E1017] border border-[#1E2333] text-slate-300">
                  {p.name}
                </span>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg shadow-emerald-950/40 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-[#131620] hover:bg-[#191D2B] border border-[#1E2333] hover:border-emerald-500/30 rounded-lg transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={copyEmailToClipboard}
                className="flex items-center gap-2 px-4 py-3 text-sm font-mono text-slate-400 hover:text-white bg-[#0E1017] border border-[#1E2333] hover:border-[#2A3147] rounded-lg transition-all"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied' : PERSONAL_INFO.email}</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#1E2333]">
              <div>
                <div className="text-xs font-mono text-slate-400">CORE STACK</div>
                <div className="text-sm font-semibold text-slate-200 mt-1">Node.js · TS · Next.js</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">AI EVALUATION</div>
                <div className="text-sm font-semibold text-slate-200 mt-1">LLM Code & Response Audit</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">SYSTEMS & WEB3</div>
                <div className="text-sm font-semibold text-slate-200 mt-1">Stellar & StarkNet SDKs</div>
              </div>
            </div>

          </div>

          {/* Right Hero Column — Technical Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-[#0E1017] border border-[#1E2333] shadow-2xl overflow-hidden tech-border">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#131620] border-b border-[#1E2333]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">emmanuel_edoh_sys.ts</span>
                </div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setActiveTab('eval')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${activeTab === 'eval' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    eval_harness.ts
                  </button>
                  <button 
                    onClick={() => setActiveTab('sys')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${activeTab === 'sys' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    microservice.ts
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-6 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                {activeTab === 'eval' ? (
                  <div className="space-y-2">
                    <p className="text-slate-500">// AI Model Response & Code Quality Benchmark</p>
                    <p><span className="text-purple-400">import</span> &#123; <span className="text-cyan-400">ModelEvaluator</span>, <span className="text-cyan-400">GroundTruthSuite</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@eval/core'</span>;</p>
                    <br />
                    <p><span className="text-purple-400">export async function</span> <span className="text-yellow-300">benchmarkModelOutput</span>(promptId: <span className="text-cyan-400">string</span>) &#123;</p>
                    <p className="pl-4"><span className="text-purple-400">const</span> harness = <span className="text-purple-400">new</span> <span className="text-cyan-400">ModelEvaluator</span>(&#123;</p>
                    <p className="pl-8">domain: <span className="text-emerald-300">'FullStack & Systems'</span>,</p>
                    <p className="pl-8">strictTyping: <span className="text-orange-400">true</span>,</p>
                    <p className="pl-8">securityAudit: <span className="text-orange-400">true</span></p>
                    <p className="pl-4">&#125;);</p>
                    <br />
                    <p className="pl-4"><span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> harness.<span className="text-yellow-300">verifyCorrectness</span>(promptId);</p>
                    <p className="pl-4"><span className="text-purple-400">return</span> &#123; status: <span className="text-emerald-400">'PASS'</span>, accuracy: <span className="text-emerald-400">99.4</span> &#125;;</p>
                    <p>&#125;</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-slate-500">// High-Concurrency Node.js Microservice Route</p>
                    <p><span className="text-purple-400">import</span> &#123; <span className="text-cyan-400">Router</span>, <span className="text-cyan-400">Request</span>, <span className="text-cyan-400">Response</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'express'</span>;</p>
                    <p><span className="text-purple-400">import</span> &#123; <span className="text-cyan-400">rateLimitGuard</span>, <span className="text-cyan-400">jwtAuth</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'./middleware'</span>;</p>
                    <br />
                    <p><span className="text-purple-400">const</span> router = <span className="text-yellow-300">Router</span>();</p>
                    <p>router.<span className="text-yellow-300">post</span>(<span className="text-emerald-300">'/v1/telemetry/stream'</span>, jwtAuth, <span className="text-purple-400">async</span> (req: <span className="text-cyan-400">Request</span>, res: <span className="text-cyan-400">Response</span>) =&gt; &#123;</p>
                    <p className="pl-4"><span className="text-purple-400">const</span> telemetry = <span className="text-purple-400">await</span> req.<span className="text-yellow-300">processPayload</span>();</p>
                    <p className="pl-4">res.<span className="text-yellow-300">status</span>(<span className="text-orange-400">200</span>).<span className="text-yellow-300">json</span>(&#123; status: <span className="text-emerald-400">'SYNCED'</span>, latencyMs: <span className="text-emerald-400">42</span> &#125;);</p>
                    <p>&#125;);</p>
                  </div>
                )}
              </div>

              {/* Terminal Footer Status Bar */}
              <div className="px-4 py-2 bg-[#131620] border-t border-[#1E2333] flex items-center justify-between font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>SYSTEM_HEALTH: NOMINAL</span>
                </div>
                <div>LOGS: 0 ERRORS</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
