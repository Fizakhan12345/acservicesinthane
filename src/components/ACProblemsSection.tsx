import React from 'react';
import { 
  Snowflake, 
  Droplets, 
  Wind, 
  AlertTriangle, 
  Volume2, 
  PowerOff, 
  Gauge, 
  Wrench, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ACProblemsSectionProps {
  onSelectProblem: (problemName: string) => void;
}

export const ACProblemsSection: React.FC<ACProblemsSectionProps> = ({ onSelectProblem }) => {
  const problems = [
    {
      id: 'not-cooling',
      icon: Snowflake,
      problem: 'AC Not Cooling',
      cause: 'Low refrigerant gas, choked cooling coils, or faulty compressor run capacitor.',
      action: 'AC Not Cooling Repair'
    },
    {
      id: 'water-leakage',
      icon: Droplets,
      problem: 'Water Leakage',
      cause: 'Blocked condensate drain tray, cracked drain hose, or ice melting from choked fins.',
      action: 'AC Water Leakage Repair'
    },
    {
      id: 'weak-airflow',
      icon: Wind,
      problem: 'Weak Airflow',
      cause: 'Dust-clogged mesh filters, dirty cross-flow blower wheel, or slow fan motor.',
      action: 'AC Jet Cleaning Service'
    },
    {
      id: 'bad-smell',
      icon: AlertTriangle,
      problem: 'Bad Smell & Odor',
      cause: 'Bacterial and fungal mildew growth inside stagnant condensate water trays.',
      action: 'AC Jet Foam Sanitization'
    },
    {
      id: 'unusual-noise',
      icon: Volume2,
      problem: 'Unusual Noise / Rattling',
      cause: 'Worn blower motor bearings, unbalanced outdoor condenser fan, or loose chassis mount.',
      action: 'AC Noise & Vibration Repair'
    },
    {
      id: 'not-starting',
      icon: PowerOff,
      problem: 'AC Not Starting / Power Trip',
      cause: 'Tripped MCB breaker, blown PCB fuse, or burnt indoor/outdoor electrical terminal.',
      action: 'AC PCB & Electrical Repair'
    },
    {
      id: 'poor-cooling',
      icon: Gauge,
      problem: 'Poor / Inconsistent Cooling',
      cause: 'Thermostat sensor resistance drift, dirty outdoor condenser, or micro refrigerant leaks.',
      action: 'AC Gas & Sensor Diagnostics'
    },
    {
      id: 'frequent-tripping',
      icon: Wrench,
      problem: 'Frequent AC Tripping',
      cause: 'Compressor thermal overload, voltage fluctuations, or aging start capacitors.',
      action: 'AC Compressor Check'
    }
  ];

  return (
    <section id="ac-problems-section" className="py-16 lg:py-20 bg-white border-b border-[#E3EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Common AC Symptoms</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172033] tracking-tight">
            Is Your AC Showing These Problems?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6472] mt-2">
            Do not let minor air conditioner glitches turn into expensive compressor replacements. Select your symptom below for an immediate doorstep diagnostic visit in Thane.
          </p>
        </div>

        {/* 8 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {problems.map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`problem-card-${item.id}`}
                className="bg-[#F7FAFC] rounded-2xl p-5 border border-[#E3EAF2] hover:border-[#0B72E7] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#EAF6FF] text-[#0B72E7] flex items-center justify-center mb-4 group-hover:bg-[#0B72E7] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#172033] group-hover:text-[#0B72E7] transition-colors mb-1.5">
                    {item.problem}
                  </h3>
                  <p className="text-xs text-[#5B6472] leading-relaxed mb-4">
                    {item.cause}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E3EAF2]">
                  <button
                    onClick={() => onSelectProblem(item.action)}
                    className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#0B72E7] text-[#0B72E7] hover:text-white border border-[#E3EAF2] hover:border-transparent text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs group-hover:shadow-xs"
                  >
                    <span>Get AC Checked</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Emergency Note */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-[#EAF6FF]/60 border border-[#0B72E7]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0B72E7] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#172033]">Unsure about your exact AC issue?</h4>
              <p className="text-xs text-[#5B6472]">Our technician carries full diagnostic gauges and electrical meters for a complete on-site checkup.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectProblem('General AC Diagnostic Check')}
            className="px-5 py-2.5 rounded-xl bg-[#0B72E7] hover:bg-[#0856B2] text-white text-xs font-extrabold whitespace-nowrap shadow-xs cursor-pointer"
          >
            Book General Diagnostics
          </button>
        </div>

      </div>
    </section>
  );
};
