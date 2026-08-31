import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface PriceEstimatorProps {
  onBookService: (serviceName: string) => void;
}

export const PriceEstimator: React.FC<PriceEstimatorProps> = ({ onBookService }) => {
  const [acType, setAcType] = useState<'split' | 'window' | 'inverter' | 'commercial'>('split');
  const [tonnage, setTonnage] = useState<'1' | '1.5' | '2+'>('1.5');
  const [selectedService, setSelectedService] = useState<'jet-service' | 'repair' | 'gas' | 'installation' | 'leakage'>('jet-service');

  const getEstimatedPrice = () => {
    let base = 549;
    if (selectedService === 'jet-service') {
      base = acType === 'window' ? 599 : acType === 'commercial' ? 2499 : 549;
      if (tonnage === '2+') base += 100;
    } else if (selectedService === 'repair') {
      base = 549; // Diagnostic charge adjusted against repair
    } else if (selectedService === 'gas') {
      base = acType === 'window' ? 2499 : 2999;
      if (tonnage === '2+') base += 300;
    } else if (selectedService === 'installation') {
      base = 1499;
    } else if (selectedService === 'leakage') {
      base = 449;
    }
    return base;
  };

  const getServiceName = () => {
    switch (selectedService) {
      case 'jet-service': return 'AC Deep Jet Cleaning Service';
      case 'repair': return 'AC Repair & Diagnostics';
      case 'gas': return 'AC Gas Filling & Leak Test';
      case 'installation': return 'AC Installation Service';
      case 'leakage': return 'AC Water Leakage Repair';
    }
  };

  return (
    <section id="pricing-estimator" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Honest & Upfront Pricing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
            Transparent AC Service Rates in Thane
          </h2>
          <p className="text-sm sm:text-base text-[#5B6472] mt-2">
            No hidden charges. Clear, upfront quotes with post-service testing across all Thane localities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#F7FAFC] rounded-2xl border border-[#E3EAF2] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Options */}
            <div className="md:col-span-7 space-y-5">
              {/* AC Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#172033] mb-2">
                  1. Select AC Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'split', label: 'Split AC' },
                    { id: 'inverter', label: 'Inverter Split' },
                    { id: 'window', label: 'Window AC' },
                    { id: 'commercial', label: 'Commercial / Cassette' }
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setAcType(t.id as any)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        acType === t.id
                          ? 'bg-[#0B72E7] text-white border-[#0B72E7]'
                          : 'bg-white text-[#172033] border-[#E3EAF2] hover:border-[#0B72E7]/40'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tonnage Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#172033] mb-2">
                  2. Select Tonnage
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '1', label: '1.0 Ton' },
                    { id: '1.5', label: '1.5 Ton' },
                    { id: '2+', label: '2.0+ Ton' }
                  ].map(ton => (
                    <button
                      key={ton.id}
                      onClick={() => setTonnage(ton.id as any)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        tonnage === ton.id
                          ? 'bg-[#0B72E7] text-white border-[#0B72E7]'
                          : 'bg-white text-[#172033] border-[#E3EAF2] hover:border-[#0B72E7]/40'
                      }`}
                    >
                      {ton.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#172033] mb-2">
                  3. Select Service Required
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'jet-service', label: 'Deep Jet Service' },
                    { id: 'repair', label: 'Repair & Diagnostic' },
                    { id: 'gas', label: 'Gas Charging' },
                    { id: 'leakage', label: 'Water Leak Fix' },
                    { id: 'installation', label: 'Installation' }
                  ].map(srv => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id as any)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        selectedService === srv.id
                          ? 'bg-[#0B72E7] text-white border-[#0B72E7]'
                          : 'bg-white text-[#172033] border-[#E3EAF2] hover:border-[#0B72E7]/40'
                      }`}
                    >
                      {srv.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Output Box */}
            <div className="md:col-span-5 bg-white rounded-xl p-6 border border-[#E3EAF2] shadow-sm text-center space-y-4">
              <div>
                <span className="text-xs font-bold text-[#5B6472] uppercase tracking-wider">
                  Starting Estimate
                </span>
                <div className="flex items-baseline justify-center gap-1 mt-1">
                  <span className="text-sm font-semibold text-[#5B6472]">₹</span>
                  <span className="text-4xl font-extrabold text-[#0B72E7]">
                    {getEstimatedPrice().toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#5B6472]">/ unit</span>
                </div>
                <p className="text-xs font-semibold text-[#172033] mt-1">
                  {getServiceName()}
                </p>
              </div>

              <div className="text-left space-y-1.5 text-xs text-[#5B6472] pt-3 border-t border-[#E3EAF2]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                  <span>Doorstep visit in Thane</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                  <span>Pressure testing & safety check</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                  <span>No advance payment needed</span>
                </div>
              </div>

              <button
                onClick={() => onBookService(getServiceName())}
                className="w-full py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <span>Book at This Rate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
