import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Copy, Check, Mail, Phone, Calendar, ArrowUpRight, Send } from 'lucide-react';

export default function ContactSection({ darkMode }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Web Design',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', service: 'Web Design', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block font-display text-sm tracking-widest text-[#08b9d4] dark:text-[#00bdf1] uppercase mb-2">
            CONTACT ME
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.95]">
            {portfolioData.contact.title}
          </h2>
          <p
            className={`mt-4 max-w-2xl text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-[#cccccc]' : 'text-[#575757]'
            }`}
          >
            {portfolioData.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Booking (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Email Copy Card */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                darkMode ? 'bg-[#1c1c1c] border-[#303030]' : 'bg-[#f2f2f2] border-[#e3e3e3]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider uppercase text-[#08b9d4] dark:text-[#00bdf1]">
                <Mail size={16} />
                <span>Email Me Directly</span>
              </div>
              <div className="flex items-center justify-between gap-4 mt-2">
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
                  {portfolioData.contact.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className={`p-3 rounded-full border transition-all duration-200 flex-shrink-0 ${
                    copied
                      ? 'bg-[#44c92c] text-white border-[#44c92c]'
                      : darkMode
                      ? 'bg-[#242424] border-[#3a3a3a] text-white hover:bg-white hover:text-black'
                      : 'bg-white border-[#e0e0e0] text-black hover:bg-black hover:text-white'
                  }`}
                  title={copied ? 'Copied!' : 'Click to copy'}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              <div className="text-[11px] text-[#575757] dark:text-[#a1a1a1] mt-2">
                {copied ? 'Copied to clipboard!' : 'Click the button to copy'}
              </div>
            </div>

            {/* WhatsApp & Phone */}
            <div
              className={`p-6 rounded-3xl border transition-all duration-300 flex items-center justify-between ${
                darkMode ? 'bg-[#1c1c1c] border-[#303030]' : 'bg-[#f2f2f2] border-[#e3e3e3]'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#08b9d4] dark:text-[#00bdf1]">
                  <Phone size={14} />
                  <span>WhatsApp & Call</span>
                </div>
                <div className="font-bold text-base sm:text-lg mt-1">{portfolioData.contact.phoneDisplay}</div>
              </div>
              <a
                href={portfolioData.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-full border transition-all duration-200 ${
                  darkMode
                    ? 'bg-[#242424] border-[#3a3a3a] text-white hover:bg-white hover:text-black'
                    : 'bg-white border-[#e0e0e0] text-black hover:bg-black hover:text-white'
                }`}
                title="Chat on WhatsApp"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Direct Project Inquiry */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                darkMode ? 'bg-[#1c1c1c] border-[#303030]' : 'bg-[#f2f2f2] border-[#e3e3e3]'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#08b9d4] dark:text-[#00bdf1] mb-2">
                <Calendar size={16} />
                <span>Project Collaboration</span>
              </div>
              <h4 className="font-display font-bold text-2xl uppercase tracking-tight mb-2">
                {portfolioData.contact.consultationTitle}
              </h4>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'
                }`}
              >
                {portfolioData.contact.consultationDesc}
              </p>
              <a
                href={`mailto:${portfolioData.contact.email}?subject=Project%20Inquiry%20for%20Thaddeaus`}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border ${
                  darkMode
                    ? 'bg-white text-black border-white hover:bg-neutral-200'
                    : 'bg-black text-white border-black hover:bg-neutral-800'
                }`}
              >
                <span>{portfolioData.contact.consultationCta}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {portfolioData.contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
                    darkMode
                      ? 'bg-[#1c1c1c] border-[#303030] text-neutral-300 hover:text-white hover:border-neutral-500'
                      : 'bg-[#f2f2f2] border-[#e3e3e3] text-neutral-700 hover:text-black hover:border-neutral-400'
                  }`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 ${
                darkMode ? 'bg-[#1c1c1c] border-[#303030]' : 'bg-[#f2f2f2] border-[#e3e3e3]'
              }`}
            >
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#44c92c]/20 text-[#44c92c] flex items-center justify-center mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="font-display font-bold text-3xl uppercase tracking-tight mb-2">
                    Message Sent!
                  </h4>
                  <p className={darkMode ? 'text-[#a1a1a1]' : 'text-[#616161]'}>
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#08b9d4] ${
                        darkMode
                          ? 'bg-[#242424] border-[#3a3a3a] text-white placeholder-neutral-500'
                          : 'bg-white border-[#e0e0e0] text-black placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#08b9d4] ${
                        darkMode
                          ? 'bg-[#242424] border-[#3a3a3a] text-white placeholder-neutral-500'
                          : 'bg-white border-[#e0e0e0] text-black placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#08b9d4] ${
                        darkMode
                          ? 'bg-[#242424] border-[#3a3a3a] text-white'
                          : 'bg-white border-[#e0e0e0] text-black'
                      }`}
                    >
                      <option value="Web Design">Web Design</option>
                      <option value="Branding">Branding & Identity</option>
                      <option value="Product Design">Product & UI/UX Design</option>
                      <option value="Graphics Design">Graphics & Visual Assets</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your goals, scope, and timeline..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#08b9d4] resize-none ${
                        darkMode
                          ? 'bg-[#242424] border-[#3a3a3a] text-white placeholder-neutral-500'
                          : 'bg-white border-[#e0e0e0] text-black placeholder-neutral-400'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`mt-2 flex items-center justify-center gap-2 py-4 rounded-full font-display font-bold text-lg uppercase tracking-wider transition-all duration-300 border ${
                      darkMode
                        ? 'bg-[#00bdf1] text-black border-[#00bdf1] hover:bg-[#38d4ff] shadow-lg shadow-[#00bdf1]/20'
                        : 'bg-[#08b9d4] text-white border-[#08b9d4] hover:bg-[#07a3bb] shadow-lg shadow-[#08b9d4]/20'
                    }`}
                  >
                    <span>Send Project Request</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
