import React, { useState } from 'react';
import { X, FileText, ExternalLink, Copy, Check, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/data';

const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.resumeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#0E1017] border border-[#1E2333] rounded-xl shadow-2xl p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1E2333]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Engineering Resume</h3>
              <p className="text-xs text-slate-400 font-mono">Emmanuel_Edoh_Resume.pdf</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#191D2B] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-4">
          <div className="p-4 rounded-lg bg-[#131620] border border-[#1E2333] space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> VERIFIED CREDENTIALS
              </span>
              <span>UPDATE: 2026 EDITION</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Contains detailed professional experience, technical architecture achievements, stack proficiency, open-source work, and contact references.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-slate-400 font-mono">DIRECT LINK</label>
            <div className="flex items-center gap-2 p-2 bg-[#131620] border border-[#1E2333] rounded-lg">
              <input 
                type="text" 
                readOnly 
                value={PERSONAL_INFO.resumeUrl}
                className="w-full bg-transparent text-xs text-slate-300 font-mono focus:outline-none px-2 truncate"
              />
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-200 bg-[#191D2B] hover:bg-[#252B3F] border border-[#2A3147] rounded-md transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#1E2333]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg shadow-emerald-950/40 transition-colors"
          >
            <span>Open PDF Resume</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
