import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { LOCATIONS_DATA } from '../data/locations';
import { PageRoute } from '../types';

interface ContactPageProps {
  navigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    locality: 'Thane West',
    acType: 'Split AC',
    service: 'AC Jet Cleaning Service',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*Contact / AC Service Query*\n\n` +
      `👤 *Name:* ${formData.name || 'Customer'}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📍 *Locality:* ${formData.locality}\n` +
      `❄️ *AC Type:* ${formData.acType}\n` +
      `🛠️ *Service:* ${formData.service}\n` +
      `📝 *Message:* ${formData.message || 'Need AC service support'}`
    );
    window.open(`https://wa.me/918795496688?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-linear-to-b from-[#EAF6FF]/70 via-white to-white py-14 border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>We Are Here to Help</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight">
            Contact AC Services in Thane
          </h1>
          <p className="text-sm sm:text-base text-[#5B6472] max-w-2xl mx-auto leading-relaxed">
            Reach out for quick technician scheduling, breakdown emergencies, commercial AMC inquiries, or general AC repair assistance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info & NAP */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3EAF2] shadow-xs space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#172033]">Contact Information</h2>
                  <p className="text-xs sm:text-sm text-[#5B6472] mt-1">
                    Direct communication with our Thane operations team.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Phone */}
                  <a
                    href="tel:+918795496688"
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#EAF6FF] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] group-hover:bg-[#0B72E7] text-[#0B72E7] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#5B6472] font-medium">Customer Hotline</span>
                      <span className="block font-bold text-base text-[#172033] group-hover:text-[#0B72E7] transition-colors">
                        +91 8795496688
                      </span>
                      <span className="text-[11px] text-[#16A34A] font-semibold">Open for Calls 7 Days a Week</span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918795496688?text=Hi%2C%20I%20need%20AC%20service%20in%20Thane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-100 group-hover:bg-[#25D366] text-[#25D366] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <WhatsAppIcon className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#5B6472] font-medium">Instant WhatsApp Chat</span>
                      <span className="block font-bold text-base text-[#172033] group-hover:text-[#25D366] transition-colors">
                        +91 8795496688
                      </span>
                      <span className="text-[11px] text-[#5B6472]">Share photo/video of AC problem</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:acservicesinthane@gmail.com"
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#EAF6FF] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] group-hover:bg-[#0B72E7] text-[#0B72E7] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#5B6472] font-medium">Email Support</span>
                      <span className="block font-bold text-sm text-[#172033] group-hover:text-[#0B72E7] transition-colors break-all">
                        acservicesinthane@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#5B6472] font-medium">Service Headquarters</span>
                      <span className="block font-bold text-sm text-[#172033]">
                        Thane West, Mumbai, Maharashtra 400606
                      </span>
                      <span className="text-[11px] text-[#5B6472]">
                        Mobile dispatch units across Thane West, East, Ghodbunder & Kalwa
                      </span>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3.5 p-3 bg-[#F7FAFC] rounded-xl border border-[#E3EAF2]">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#0B72E7] flex items-center justify-center shrink-0 border border-[#E3EAF2]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#5B6472] font-medium">Working Hours</span>
                      <span className="block font-bold text-sm text-[#172033]">
                        Monday – Sunday: 8:00 AM – 9:00 PM
                      </span>
                      <span className="text-[11px] text-[#16A34A] font-semibold">
                        Emergency breakdown support available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact & Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3EAF2] shadow-xs">
                <h2 className="text-xl font-bold text-[#172033] mb-1">
                  Send a Message or Book AC Service
                </h2>
                <p className="text-xs sm:text-sm text-[#5B6472] mb-6">
                  Fill in the details below. Our technical team responds promptly.
                </p>

                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-[#172033]">Message Sent Successfully!</h3>
                    <p className="text-sm text-[#5B6472] max-w-md mx-auto">
                      Thank you for contacting AC Services in Thane. Our team will review your inquiry and call you back shortly.
                    </p>
                    <div className="pt-2 flex justify-center gap-3">
                      <button
                        onClick={handleWhatsAppSend}
                        className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                        <span>Continue on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 rounded-lg bg-slate-100 text-[#172033] text-xs font-bold cursor-pointer"
                      >
                        Send Another Query
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#172033] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#172033] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#172033] mb-1">
                          Thane Locality *
                        </label>
                        <select
                          value={formData.locality}
                          onChange={e => setFormData({ ...formData, locality: e.target.value })}
                          className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40"
                        >
                          {LOCATIONS_DATA.map(l => (
                            <option key={l.slug} value={l.name}>
                              {l.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#172033] mb-1">
                          AC Type
                        </label>
                        <select
                          value={formData.acType}
                          onChange={e => setFormData({ ...formData, acType: e.target.value })}
                          className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40"
                        >
                          <option value="Split AC">Split AC</option>
                          <option value="Inverter Split AC">Inverter Split AC</option>
                          <option value="Window AC">Window AC</option>
                          <option value="Commercial / Cassette AC">Commercial / Cassette AC</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#172033] mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40"
                      >
                        <option value="AC Jet Cleaning Service">AC Deep Jet Cleaning & Foam Wash</option>
                        <option value="AC General Repair & Diagnostic">AC General Repair & Diagnostics</option>
                        <option value="AC Not Cooling Repair">AC Not Cooling / Low Airflow</option>
                        <option value="AC Water Leakage Fix">AC Indoor Water Leakage</option>
                        <option value="AC Gas Filling & Leak Test">AC Gas Refilling & Leak Test</option>
                        <option value="AC Installation">AC Installation / Uninstallation</option>
                        <option value="Commercial AMC">Commercial AMC / Multi-Unit Maintenance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#172033] mb-1">
                        Message / Issue Description (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us what you're observing (e.g. error code, noise, timing preference)..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-3 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Request</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppSend}
                        className="py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
