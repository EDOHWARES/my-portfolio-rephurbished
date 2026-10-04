import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../../utils/data';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_secondname: '',
    user_email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getFormattedFullName = () => {
    return `${formData.user_firstname.trim()} ${formData.user_secondname.trim()}`.trim();
  };

  const sendDirectMessage = async (e) => {
    e.preventDefault();

    const fullName = getFormattedFullName();
    const email = formData.user_email.trim();
    const message = formData.message.trim();

    if (!fullName || !email || message.length < 5) {
      setStatus('error');
      setErrorMessage('Please fill in your name, valid email, and a message (at least 5 characters).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // FormSubmit AJAX dispatch to target email
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: fullName,
          Email: email,
          Message: message,
          _subject: `[PORTFOLIO INQUIRY] New Message from ${fullName}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setStatus('success');
        setFormData({
          user_firstname: '',
          user_secondname: '',
          user_email: '',
          message: ''
        });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        throw new Error(result.message || 'Transmission failed');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX attempt error:', err);
      
      // Fallback: try FormSubmit standard form submission payload or display mailto option
      try {
        const formDataPayload = new FormData();
        formDataPayload.append('Name', fullName);
        formDataPayload.append('Email', email);
        formDataPayload.append('Message', message);
        formDataPayload.append('_subject', `[PORTFOLIO INQUIRY] New Message from ${fullName}`);
        formDataPayload.append('_captcha', 'false');

        const fallbackResp = await fetch(`https://formsubmit.co/${PERSONAL_INFO.email}`, {
          method: 'POST',
          body: formDataPayload,
          mode: 'no-cors'
        });

        setStatus('success');
        setFormData({
          user_firstname: '',
          user_secondname: '',
          user_email: '',
          message: ''
        });
        setTimeout(() => setStatus('idle'), 6000);
      } catch (fallbackErr) {
        console.error('All form submission routes failed:', fallbackErr);
        setStatus('error');
        setErrorMessage('Could not deliver directly via web endpoint. Please use the "Open in Mail Client" button below.');
      }
    }
  };

  const handleOpenMailClient = () => {
    const fullName = getFormattedFullName() || 'Portfolio Guest';
    const subject = encodeURIComponent(`[PORTFOLIO INQUIRY] Inquiry from ${fullName}`);
    const body = encodeURIComponent(
      `Hello Emmanuel,\n\n${formData.message || 'I would like to discuss a software engineering opportunity with you.'}\n\nBest regards,\n${fullName}\n${formData.user_email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full bg-[#0E1017] border border-[#1E2333] rounded-xl p-6 sm:p-8 space-y-6 text-left tech-border">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span>Send Direct Message</span>
          <span className="text-xs font-mono font-normal text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
            AUTO-ROUTED
          </span>
        </h3>
        <p className="text-xs text-slate-400 font-mono">
          DISPATCH DIRECTLY TO: {PERSONAL_INFO.email}
        </p>
      </div>

      <form onSubmit={sendDirectMessage} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-400">FIRST NAME *</label>
            <input 
              type="text" 
              name="user_firstname" 
              value={formData.user_firstname} 
              onChange={handleChange}
              placeholder="e.g. Sarah"
              required 
              className="w-full bg-[#131620] text-sm text-slate-200 placeholder-slate-500 rounded-lg border border-[#1E2333] focus:border-emerald-500/60 focus:outline-none px-4 py-2.5 transition-colors font-sans"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-400">LAST NAME</label>
            <input 
              type="text" 
              name="user_secondname" 
              value={formData.user_secondname} 
              onChange={handleChange}
              placeholder="e.g. Connor"
              className="w-full bg-[#131620] text-sm text-slate-200 placeholder-slate-500 rounded-lg border border-[#1E2333] focus:border-emerald-500/60 focus:outline-none px-4 py-2.5 transition-colors font-sans"
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
            placeholder="sarah@company.com"
            required 
            className="w-full bg-[#131620] text-sm text-slate-200 placeholder-slate-500 rounded-lg border border-[#1E2333] focus:border-emerald-500/60 focus:outline-none px-4 py-2.5 transition-colors font-sans"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-slate-400">MESSAGE DETAILS *</label>
          <textarea 
            name="message" 
            rows={4} 
            value={formData.message} 
            onChange={handleChange}
            placeholder="Describe role details, project scope, or contract requirements..."
            required 
            className="w-full bg-[#131620] text-sm text-slate-200 placeholder-slate-500 rounded-lg border border-[#1E2333] focus:border-emerald-500/60 focus:outline-none px-4 py-2.5 transition-colors resize-none font-sans"
          />
        </div>

        {/* Status Toast Feedback */}
        {status === 'success' && (
          <div className="flex items-center gap-2 p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Message formatted & transmitted successfully to {PERSONAL_INFO.email}!</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-start gap-2 p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>{errorMessage || 'Error transmitting message.'}</p>
              <button 
                type="button" 
                onClick={handleOpenMailClient}
                className="underline text-red-300 hover:text-white font-semibold cursor-pointer"
              >
                Click here to launch your mail client directly
              </button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button 
            type="submit"
            disabled={status === 'submitting'}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 rounded-lg shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Transmitting Data...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Transmit Message</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleOpenMailClient}
            className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-mono text-slate-300 bg-[#131620] hover:bg-[#191D2B] border border-[#1E2333] hover:border-emerald-500/30 rounded-lg transition-colors cursor-pointer shrink-0"
            title="Open in your default mail app"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mail Client</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;