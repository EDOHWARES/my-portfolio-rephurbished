import React from 'react';
import { Terminal, ShieldCheck, FileText } from 'lucide-react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../utils/data';

const Footer = ({ onOpenResume }) => {
  return (
    <footer className="border-t border-[#1E2333] bg-[#090A0F] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white tracking-wider">EMMANUEL EDOH</span>
              <span className="text-slate-500 mx-2">//</span>
              <span className="text-slate-400">SOFTWARE ENGINEER</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-slate-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#profile" className="hover:text-white transition-colors">Profile</a>
            <a href="#ai-eval" className="hover:text-white transition-colors">AI Evaluation</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <button onClick={onOpenResume} className="hover:text-emerald-400 transition-colors">Resume</button>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-[#0E1017] border border-[#1E2333] rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-[#0E1017] border border-[#1E2333] rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-6 border-t border-[#1E2333]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>SYSTEM STATUS: ALL SYSTEMS ONLINE</span>
          </div>

          <div>
            © {new Date().getFullYear()} Emmanuel Edoh. Built with React 18, Vite & Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
