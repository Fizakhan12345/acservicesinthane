import React, { useState } from 'react';
import { Snowflake, Droplets, Wind, Zap, AlertTriangle, HelpCircle, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface DiagnosticToolProps {
  onSelectFix: (serviceName: string, problemDesc: string) => void;
}

interface IssueOption {
  id: string;
  title: string;
  icon: any;
  symptom: string;
  likelyCauses: string[];
  recommendedFix: string;
  estimatedTime: string;
  serviceCategory: string;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ onSelectFix }) => {
  const issues: IssueOption[] = [
    {
      id: 'not-cooling',
      title: 'AC Not Cooling / Warm Air',
      icon: Snowflake,
      symptom: 'AC runs continuously but blows room-temperature air or fails to lower room temperature.',
      likelyCauses: [
        'Blown compressor starting capacitor (35–50 MFD)',
        'Low refrigerant gas pressure or copper flare leak',
        'Outdoor condenser fins completely choked with dust',
        'Thermostat temperature sensor resistance drift'
      ],
      recommendedFix: 'AC Not Cooling Diagnostic & Coil Jet Service',
      estimatedTime: '45 - 60 mins',
      serviceCategory: 'AC Not Cooling Repair'
    },
    {
      id: 'water-leaking',
      title: 'Water Dripping Inside Room',
      icon: Droplets,
      symptom: 'Water overflows from front louvres or runs down the wall behind the indoor split unit.',
      likelyCauses: [
        'Condensate drain hose choked with algae sludge',
        'Unlevel indoor unit mounting bracket',
        'Frozen cooling coil melting too quickly due to low gas',
        'Cracked internal drain tray channel'
      ],
      recommendedFix: 'Pressure Drain Line Flush & Tray Sanitization',
      estimatedTime: '30 - 45 mins',
      serviceCategory: 'AC Water Leakage Repair'
    },
    {
      id: 'foul-smell',
      title: 'Foul / Musty Mold Smell',
      icon: Wind,
      symptom: 'Strong sour, humid, or moldy odor when switching on the AC.',
      likelyCauses: [
        'Bacterial and fungal colonies on aluminium cooling fins',
        'Mold buildup on cross-flow blower wheel',
        'Stagnant water trapped in the condensate tray'
      ],
      recommendedFix: 'Deep Antibacterial Foam Wash & Jet Service',
      estimatedTime: '45 - 60 mins',
      serviceCategory: 'AC Service & Deep Jet Cleaning'
    },
    {
      id: 'tripping-mcb',
      title: 'AC Tripping MCB / Power Fuse',
      icon: Zap,
      symptom: 'Main circuit breaker flips immediately when turning on the AC or starting compressor.',
      likelyCauses: [
        'Short-circuited compressor winding',
        'Blown starting capacitor with internal short',
        'Inverter PCB shorted IPM diode bridge',
        'Damaged or overloaded power wiring'
      ],
      recommendedFix: 'Electrical Diagnostic & Component Testing',
      estimatedTime: '45 - 60 mins',
      serviceCategory: 'AC Repair & Diagnostic Service'
    },
    {
      id: 'ice-formation',
      title: 'Ice on Pipes or Indoor Coil',
      icon: AlertTriangle,
      symptom: 'Visible white frost or thick ice block on thin copper pipe or indoor cooling fins.',
      likelyCauses: [
        'Refrigerant gas under-pressure causing freezing temperatures',
        'Completely blocked mesh air filters cutting off airflow',
        'Faulty blower fan motor running at abnormally slow speed'
      ],
      recommendedFix: 'Nitrogen Leak Test, Coil Thaw & Gas Top-up',
      estimatedTime: '60 - 90 mins',
      serviceCategory: 'AC Gas Filling & Leakage Detection'
    },
    {
      id: 'noisy-unit',
      title: 'Loud Rattling / Vibrating Noise',
      icon: HelpCircle,
      symptom: 'Excessive buzzing, metal clanking, or loud vibration during operation.',
      likelyCauses: [
        'Outdoor fan motor worn bearings or loose fan blade',
        'Loose outdoor mounting bracket without rubber dampers',
        'Indoor blower wheel out of balance or cracked hub',
        'Internal compressor mechanical wear'
      ],
      recommendedFix: 'Motor Bearing Lubrication & Bracket Tightening',
      estimatedTime: '30 - 50 mins',
      serviceCategory: 'AC Repair & Diagnostic Service'
    }
  ];

  const [selectedIssue, setSelectedIssue] = useState<IssueOption>(issues[0]);

  return (
    <section id="ac-problem-troubleshooter" className="py-16 bg-[#F7FAFC] border-y border-[#E3EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Interactive AC Troubleshooter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
            What Problem Is Your AC Facing in Thane?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6472] mt-2">
            Select your AC symptom below to see the verified technical cause and book the appropriate doorstep fix.
          </p>
        </div>

        {/* Issue Selector Pills / Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {issues.map(item => {
            const Icon = item.icon;
            const isSelected = selectedIssue.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIssue(item)}
                className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B72E7] text-white border-[#0B72E7] shadow-md scale-102'
                    : 'bg-white text-[#172033] border-[#E3EAF2] hover:border-[#0B72E7]/40 hover:bg-[#EAF6FF]/30'
                }`}
              >
                <div className={`p-2 rounded-lg mb-2 ${isSelected ? 'bg-white/20 text-white' : 'bg-[#EAF6FF] text-[#0B72E7]'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-snug">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Diagnostic Detail Card */}
        <div className="bg-white rounded-2xl border border-[#E3EAF2] shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B72E7]">
                  Diagnostic Result
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172033] mt-0.5">
                  {selectedIssue.title}
                </h3>
                <p className="text-sm text-[#5B6472] mt-1 bg-slate-50 p-3 rounded-lg border border-[#E3EAF2]">
                  <strong>Symptom:</strong> {selectedIssue.symptom}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#172033] mb-2">
                  Most Probable Causes:
                </h4>
                <ul className="space-y-1.5">
                  {selectedIssue.likelyCauses.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#172033]">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#EAF6FF] rounded-xl p-5 sm:p-6 border border-[#0B72E7]/20 space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#0B72E7] block">Recommended Service</span>
                <span className="text-lg font-bold text-[#172033] block mt-0.5">
                  {selectedIssue.recommendedFix}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-medium text-[#5B6472] pt-2 border-t border-[#0B72E7]/20">
                <span>Estimated Duration:</span>
                <span className="font-bold text-[#172033]">{selectedIssue.estimatedTime}</span>
              </div>

              <div className="space-y-1.5 text-xs text-[#5B6472]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Doorstep technician visit across Thane</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Pre-repair diagnosis & transparent quote</span>
                </div>
              </div>

              <button
                onClick={() => onSelectFix(selectedIssue.serviceCategory, selectedIssue.title)}
                className="w-full py-3 rounded-lg bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <span>Book Technician for This Issue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
