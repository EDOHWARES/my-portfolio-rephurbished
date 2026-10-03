import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_firstname: '',
    user_secondname: '',
    user_email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      formData.user_firstname.trim() &&
      formData.user_email.trim() &&
      formData.message.trim().length >= 5
    ) {
      setStatus('submitting');

      emailjs
        .sendForm('service_w0r3lrf', 'template_91f10bb', form.current, {
          publicKey: 'm84fka36gjWPZrIjK',
        })
        .then(
          () => {
            setStatus('success');
            setFormData({
              user_firstname: '',
              user_secondname: '',
              user_email: '',
              message: ''
            });
            setTimeout(() => setStatus('idle'), 5000);
          },
          (error) => {
            console.error('FAILED...', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
          }
        );
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="w-full bg-[#0E1017] border border-[#1E2333] rounded-xl p-6 sm:p-8 space-y-6 text-left">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-white">Send Direct Message</h3>
        <p className="text-xs text-slate-400 font-mono">
          DIRECT ROUTE · EMMA_SYSTEMS // DISPATCH
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-400">FIRST NAME *</label>
            <input 
              type="text" 
              name="user_firstname" 
              value={formData.user_firstname} 
              onChange={handleChange}
              placeholder="First name"
              required 
              className="w-full bg-[#131620] text-sm text-slate-200 placeholder-slate-500 rounded-lg border border-[#1E2333] focus:border-emerald-500/60 focus:outline-none px-4 py-2.5 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-400">LAST NAME</label>
            <input 
              type="text" 
              name="user_secondname" 
              value={formData.user_secondname} 
              onChange={handleChange}
              placeholder="Last name"
              className="w-full bg-[#131620] text-sm text-slate-200 placeholder-slate-500 rounded-lg border border-[#1E2333] focus:border-emerald-500/60 focus:outline-none px-4 py-2.5 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-slate-400">EMAIL ADDRESS *</label>
          <input 
            type="email" 
            name="user_email" 
            value={formData.user_email} 
            onChange={handleChange}
            placeholder="name@company.com"
            required 
            className="w-full bg-[#131620] text-sm text-slate-200 placeholder-slate-500 rounded-lg border border-[#1E2333] focus:border-emerald-500/60 focus:outline-none px-4 py-2.5 transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-slate-400">MESSAGE DETAILS *</label>
          <textarea 
            name="message" 
            rows={4} 
            value={formData.message} 
            onChange={handleChange}
            placeholder="Describe role, contract inquiry, or project technical requirements..."
            required 
            className="w-full bg-[#131620] text-sm text-slate-200 placeholder-slate-500 rounded-lg border border-[#1E2333] focus:border-emerald-500/60 focus:outline-none px-4 py-2.5 transition-colors resize-none"
          />
        </div>

        {/* Status Toast */}
        {status === 'success' && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Message sent successfully! I will respond promptly.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Please complete all required fields cleanly before sending.</span>
          </div>
        )}

        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 rounded-lg shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Transmitting message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Transmit Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;