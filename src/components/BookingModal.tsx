import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, Phone, Calendar, Clock, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LOCATIONS_DATA } from '../data/locations';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialLocation?: string;
}

const TIME_SLOTS = [
  { id: '1', label12: '09:00 AM - 10:00 AM', label24: '09:00 - 10:00' },
  { id: '2', label12: '10:00 AM - 11:00 AM', label24: '10:00 - 11:00' },
  { id: '3', label12: '11:00 AM - 12:00 PM', label24: '11:00 - 12:00' },
  { id: '4', label12: '12:00 PM - 01:00 PM', label24: '12:00 - 13:00' },
  { id: '5', label12: '01:00 PM - 02:00 PM', label24: '13:00 - 14:00' },
  { id: '6', label12: '02:00 PM - 03:00 PM', label24: '14:00 - 15:00' },
  { id: '7', label12: '03:00 PM - 04:00 PM', label24: '15:00 - 16:00' },
  { id: '8', label12: '04:00 PM - 05:00 PM', label24: '16:00 - 17:00' },
  { id: '9', label12: '05:00 PM - 06:00 PM', label24: '17:00 - 18:00' },
  { id: '10', label12: '06:00 PM - 07:00 PM', label24: '18:00 - 19:00' },
  { id: '11', label12: '07:00 PM - 08:00 PM', label24: '19:00 - 20:00' },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialLocation,
}) => {
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h');
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const timeDropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    locality: initialLocation || 'Thane West',
    address: '',
    acType: 'Split AC',
    serviceType: initialService || 'AC Deep Jet Cleaning Service',
    problemDescription: '',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredSlot: '09:00 AM - 10:00 AM',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Handle ESC key, body scroll lock/restore, and reset submission on open
  useEffect(() => {
    if (!isOpen) return;

    setSubmitted(false);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(event.target as Node)) {
        setIsTimeDropdownOpen(false);
      }
    };
    if (isTimeDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTimeDropdownOpen]);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceType: initialService }));
    }
    if (initialLocation) {
      setFormData(prev => ({ ...prev, locality: initialLocation }));
    }
  }, [initialService, initialLocation]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'THN-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*AC Service Booking Request*\n\n` +
      `👤 *Name:* ${formData.name || 'Customer'}\n` +
      `📞 *Phone:* ${formData.phone || 'Provided on chat'}\n` +
      `📍 *Locality:* ${formData.locality}\n` +
      `🏠 *Address:* ${formData.address || 'Thane'}\n` +
      `❄️ *AC Type:* ${formData.acType}\n` +
      `🛠️ *Service Required:* ${formData.serviceType}\n` +
      `📅 *Preferred Date:* ${formData.preferredDate} (${formData.preferredSlot})\n` +
      `📝 *Issue Details:* ${formData.problemDescription || 'General servicing & cooling check'}`
    );
    window.open(`https://wa.me/917021455426?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <div 
        id="booking-modal-card"
        className="bg-white rounded-2xl shadow-2xl border border-[#E3EAF2] max-w-xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-[#0B72E7] to-[#16A9E0] p-4 sm:p-5 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-lg sm:text-xl font-extrabold">Book AC Service in Thane</h3>
            </div>
            <p className="text-xs sm:text-sm text-white/90 mt-0.5">
              Doorstep technician visit across Thane West, East, Ghodbunder & Kalwa
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#172033]">Booking Request Received!</h4>
                <p className="text-sm text-[#5B6472] mt-1">
                  Your reference ID is <span className="font-bold text-[#0B72E7]">{bookingRef}</span>. Our technician team will call you within 15–30 minutes to confirm the visit schedule.
                </p>
              </div>

              <div className="bg-[#F7FAFC] rounded-xl p-4 border border-[#E3EAF2] text-left text-sm space-y-2 text-[#172033]">
                <div className="flex justify-between">
                  <span className="text-[#5B6472]">Locality:</span>
                  <span className="font-semibold">{formData.locality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5B6472]">Service:</span>
                  <span className="font-semibold">{formData.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5B6472]">Preferred Slot:</span>
                  <span className="font-semibold">{formData.preferredDate} ({formData.preferredSlot})</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Send Confirmation on WhatsApp</span>
                </button>
                <a
                  href="tel:+917021455426"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 7021455426</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-[#5B6472] hover:text-[#172033] underline pt-2 block mx-auto cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Locality & AC Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1">
                    Select Thane Locality *
                  </label>
                  <div className="relative">
                    <select
                      id="booking-locality-select"
                      required
                      value={formData.locality}
                      onChange={e => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7]"
                    >
                      {LOCATIONS_DATA.map(loc => (
                        <option key={loc.slug} value={loc.name}>
                          {loc.name} ({loc.zone})
                        </option>
                      ))}
                    </select>
                    <MapPin className="w-4 h-4 text-[#5B6472] absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1">
                    AC Type *
                  </label>
                  <select
                    id="booking-actype-select"
                    value={formData.acType}
                    onChange={e => setFormData({ ...formData, acType: e.target.value as any })}
                    className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7]"
                  >
                    <option value="Split AC">Split AC (Wall Mounted)</option>
                    <option value="Inverter Split AC">Inverter Split AC</option>
                    <option value="Window AC">Window AC</option>
                    <option value="Commercial / Cassette AC">Commercial / Cassette AC</option>
                    <option value="Multi-Split AC">Multi-Split AC</option>
                  </select>
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-xs font-bold text-[#172033] mb-1">
                  Service Required *
                </label>
                <select
                  id="booking-service-select"
                  value={formData.serviceType}
                  onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7]"
                >
                  <option value="AC Deep Jet Cleaning Service">AC Deep Jet Cleaning & Foam Wash</option>
                  <option value="AC General Repair & Diagnostic">AC General Repair & Diagnostic Check</option>
                  <option value="AC Not Cooling Repair">AC Not Cooling / Weak Airflow Repair</option>
                  <option value="AC Water Leakage Fix">AC Indoor Water Leakage / Dripping Fix</option>
                  <option value="AC Gas Filling & Leak Test">AC Gas Filling & Leak Detection (R32/R410A/R22)</option>
                  <option value="AC Installation / Uninstallation">AC Installation / Relocation</option>
                  <option value="AC Annual Maintenance (AMC)">AC Annual Maintenance Contract (AMC)</option>
                  <option value="AC Compressor / PCB Repair">AC Compressor / Inverter PCB Circuit Repair</option>
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="booking-name-input"
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    id="booking-phone-input"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7]"
                  />
                </div>
              </div>

              {/* Address / Society */}
              <div>
                <label className="block text-xs font-bold text-[#172033] mb-1">
                  Society / Building & Flat No. (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Flat 602, Tower B, Hiranandani Estate"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7]"
                />
              </div>

              {/* Preferred Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7]"
                    />
                    <Calendar className="w-4 h-4 text-[#5B6472] absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>

                {/* What time works best? Dropdown field */}
                <div className="relative" ref={timeDropdownRef}>
                  <label className="block text-xs font-bold text-[#172033] mb-1">
                    What time works best? *
                  </label>
                  
                  <button
                    type="button"
                    onClick={() => setIsTimeDropdownOpen(prev => !prev)}
                    className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7] flex items-center justify-between cursor-pointer text-left hover:bg-[#F1F5F9] transition-colors"
                  >
                    <span className="font-medium truncate">{formData.preferredSlot || 'Select Time Slot'}</span>
                    <Clock className="w-4 h-4 text-[#5B6472] shrink-0 ml-2" />
                  </button>

                  {/* Popover opening ABOVE the field */}
                  {isTimeDropdownOpen && (
                    <div className="absolute bottom-full mb-1.5 left-0 right-0 sm:-left-32 sm:right-0 bg-white border border-[#CBD5E1] rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E2E8F0]">
                        <span className="text-xs font-bold text-[#172033]">
                          What time works best?
                        </span>
                        <div className="inline-flex items-center bg-[#E2E8F0] p-0.5 rounded-full">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTimeFormat('12h');
                              const currentSlot = TIME_SLOTS.find(
                                s => s.label12 === formData.preferredSlot || s.label24 === formData.preferredSlot
                              );
                              if (currentSlot) {
                                setFormData(prev => ({ ...prev, preferredSlot: currentSlot.label12 }));
                              }
                            }}
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                              timeFormat === '12h'
                                ? 'bg-[#334155] text-white shadow-xs'
                                : 'text-[#64748B] hover:text-[#1E293B]'
                            }`}
                          >
                            AM/PM
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTimeFormat('24h');
                              const currentSlot = TIME_SLOTS.find(
                                s => s.label12 === formData.preferredSlot || s.label24 === formData.preferredSlot
                              );
                              if (currentSlot) {
                                setFormData(prev => ({ ...prev, preferredSlot: currentSlot.label24 }));
                              }
                            }}
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                              timeFormat === '24h'
                                ? 'bg-[#334155] text-white shadow-xs'
                                : 'text-[#64748B] hover:text-[#1E293B]'
                            }`}
                          >
                            24h
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-56 overflow-y-auto">
                        {TIME_SLOTS.map(slot => {
                          const isSelected =
                            formData.preferredSlot === slot.label12 ||
                            formData.preferredSlot === slot.label24;
                          const displayLabel = timeFormat === '12h' ? slot.label12 : slot.label24;

                          return (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, preferredSlot: displayLabel }));
                                setIsTimeDropdownOpen(false);
                              }}
                              className={`py-2 px-2.5 rounded-xl border text-center font-medium text-xs transition-all duration-150 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#EAF6FF] border-[#0B72E7] text-[#0B72E7] font-bold shadow-xs'
                                  : 'bg-white border-[#E2E8F0] text-[#172033] hover:border-[#0B72E7] hover:bg-[#F8FAFC]'
                              }`}
                            >
                              {displayLabel}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Problem Description */}
              <div>
                <label className="block text-xs font-bold text-[#172033] mb-1">
                  Describe AC Issue or Special Instructions
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. AC turns on but doesn't cool, or water dripping inside the bedroom..."
                  value={formData.problemDescription}
                  onChange={e => setFormData({ ...formData, problemDescription: e.target.value })}
                  className="w-full bg-[#F7FAFC] border border-[#E3EAF2] rounded-lg px-3 py-2 text-sm text-[#172033] focus:outline-hidden focus:ring-2 focus:ring-[#0B72E7]/40 focus:border-[#0B72E7]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  id="booking-modal-submit"
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Confirm & Schedule AC Technician Visit
                </button>

                <div className="flex items-center justify-between text-xs text-[#5B6472] px-1">
                  <span>⚡ Transparent Pricing & Upfront Quote</span>
                  <span>🔒 No Advance Payment Required</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
