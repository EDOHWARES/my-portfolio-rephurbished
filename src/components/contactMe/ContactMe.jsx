import React, { useState } from 'react';
import { Mail, FileText, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../utils/data';
import ContactForm from './contactForm/ContactForm';

const ContactMe = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-[#1E2333] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131620] border border-[#1E2333] text-xs font-mono text-emerald-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT & ENGAGEMENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Initiate Contact
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Open for remote software engineering, full-stack systems, AI evaluation contracts, and technical research roles across Turing, Mindrift, Mercor, micro1, AfterQuery, and startups globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column — Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-[#0E1017] border border-[#1E2333] hover:border-emerald-500/30 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Direct Email</h3>
                    <p className="text-xs text-slate-400 font-mono">PRIMARY INBOX</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white bg-[#131620] border border-[#1E2333] rounded-lg transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-2.5 rounded-lg bg-[#131620] border border-[#1E2333] font-mono text-xs text-slate-200 flex items-center justify-between">
                <span className="truncate">{PERSONAL_INFO.email}</span>
                <span className="text-[10px] text-emerald-400 font-semibold uppercase">{copiedEmail ? 'Copied!' : 'Click Copy'}</span>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-[#0E1017] border border-[#1E2333] hover:border-emerald-500/30 transition-all block space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#131620] text-slate-300 border border-[#1E2333] group-hover:text-emerald-400">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">GitHub Profile</h3>
                    <p className="text-xs text-slate-400 font-mono">@EDOHWARES</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
              </div>
            </a>

            {/* Twitter Card */}
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-[#0E1017] border border-[#1E2333] hover:border-emerald-500/30 transition-all block space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#131620] text-cyan-400 border border-[#1E2333]">
                    <FaXTwitter className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">X / Twitter</h3>
                    <p className="text-xs text-slate-400 font-mono">@0xedohwarez</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
              </div>
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="w-full flex items-center justify-between p-5 rounded-xl bg-[#0E1017] border border-[#1E2333] hover:border-emerald-500/30 transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Resume & Credentials</h3>
                  <p className="text-xs text-slate-400 font-mono">PDF PREVIEW / DOWNLOAD</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
            </button>

          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMe;