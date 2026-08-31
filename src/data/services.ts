import { ServiceData } from '../types';

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: 'ac-service',
    title: 'AC Service & Deep Jet Cleaning',
    shortDesc: 'Complete high-pressure jet pump cleaning, antibacterial foam treatment, and filter sanitization for optimal airflow and cooling.',
    fullDesc: 'Our AC Jet Cleaning Service is engineered to remove accumulated dust, grime, and fungal spores from deep within the cooling coils and blower wheel. Using specialized waterproof collection bags and pressure wands, we restore factory-level cooling efficiency without any mess in your room.',
    iconName: 'Sparkles',
    category: 'Service',
    priceStarting: 549,
    image: '/images/ac-cleaning.jpg',
    imageAlt: 'Indian AC technician doing high pressure jet cleaning in Thane',
    features: [
      'Indoor evaporator coil high-pressure jet wash',
      'Outdoor condenser unit cleaning with pressure pump',
      'Drain tray and condensate pipe pressure flush',
      'Blower wheel and air louvre sanitization',
      'Operating temperature and airflow delta check',
      'Electrical connection and capacitor inspection'
    ],
    commonProblems: [
      'Weak airflow from indoor blower unit',
      'Foul or musty mold odor when switching on AC',
      'Slow cooling in rooms despite lowest temperature setting',
      'High electricity bills caused by choked condenser fins',
      'Dust particles blowing out with cooled air'
    ],
    processSteps: [
      { title: 'Initial Inspection', desc: 'Technician tests baseline cooling temperature, airflow velocity, and listening for unusual motor vibration.' },
      { title: 'Waterproof Bag Setup', desc: 'Indoor unit is fitted with a specialized drain jacket to collect all wash water cleanly without wall or floor spills.' },
      { title: 'Deep Foam & Jet Wash', desc: 'Antibacterial foam is applied to cooling coils, followed by high-pressure jet pump flushing of coils and blower.' },
      { title: 'Outdoor Condenser Wash', desc: 'Outdoor unit condenser fins are flushed thoroughly to expel heat buildup and atmospheric dust.' },
      { title: 'Performance Testing', desc: 'AC is reassembled and run for 15 minutes to verify temperature drop and whisper-quiet operation.' }
    ],
    faqs: [
      { question: 'What is the difference between normal dry service and jet pump service?', answer: 'A dry service only brushes surface dust, whereas our Jet Pump service uses high-pressure water and antibacterial foam to penetrate deep between microscopic aluminium coil fins, removing 99% of trapped sludge and bacteria.' },
      { question: 'Will jet cleaning make a mess on my bedroom walls or floor?', answer: 'No. Our technicians attach a waterproof service jacket with a funnel pipe directly under your indoor unit, channeling all wastewater into an enclosed bucket.' },
      { question: 'How frequently should I get my AC serviced in Thane?', answer: 'Given Thane’s tropical humidity and construction dust along Ghodbunder Road and Central Thane, residential ACs should be serviced every 3 to 4 months for optimal efficiency.' }
    ]
  },
  {
    slug: 'ac-repair',
    title: 'AC Repair & Diagnostic Service',
    shortDesc: 'Comprehensive troubleshooting for all AC breakdowns, electrical failures, sensor faults, and cooling problems across Thane.',
    fullDesc: 'When your air conditioner stops cooling, trips the MCB, or makes unusual noises, our experienced Thane technicians perform precision electrical and mechanical diagnostic checks to pinpoint the exact root cause and provide clear upfront estimates before carrying out repairs.',
    iconName: 'Wrench',
    category: 'Repair',
    priceStarting: 549,
    image: '/images/ac-repair.jpg',
    imageAlt: 'Certified Indian technician performing AC repair diagnostics in Thane',
    features: [
      'Multi-point mechanical and electrical diagnosis',
      'Capacitor, relay, and contactor testing',
      'Thermostat and temperature sensor calibration',
      'Fan motor and blower bearing replacement',
      'Authentic replacement components',
      'Post-repair cooling delta temperature verification'
    ],
    commonProblems: [
      'AC turning on but blowing room-temperature or warm air',
      'AC unit tripping the circuit breaker (MCB) immediately',
      'Loud humming, rattling, or squealing noises from outdoor/indoor unit',
      'Indoor unit display blinking error codes (E1, E6, F3, etc.)',
      'Remote control commands not responding on receiver'
    ],
    processSteps: [
      { title: 'On-Site Diagnostic', desc: 'Technician analyzes electrical circuits, refrigerant pressure, compressor draw, and sensor resistances.' },
      { title: 'Transparent Quote', desc: 'Exact fault is demonstrated to you along with genuine part replacement pricing with no hidden charges.' },
      { title: 'Precision Repair', desc: 'Faulty component is replaced with authentic branded parts and calibrated to manufacturer specs.' },
      { title: 'System Load Testing', desc: 'Unit is tested under load to ensure stable amperage draw and consistent cooling performance.' }
    ],
    faqs: [
      { question: 'Do you charge an inspection fee for AC repair in Thane?', answer: 'We charge a nominal inspection fee which is adjusted against the final repair bill once you proceed with the service.' },
      { question: 'Do you use genuine parts for AC repair?', answer: 'Yes, we only use brand-authorized capacitors, sensors, fan motors, and contactors with manufacturer warranty.' }
    ]
  },
  {
    slug: 'ac-installation',
    title: 'AC Installation & Uninstallation',
    shortDesc: 'Expert Split and Window AC installation with heavy-duty brackets, nitrogen vacuuming, and leak-tested copper piping.',
    fullDesc: 'Proper installation is the single most critical factor in AC lifespan and cooling efficiency. We ensure vibration-free wall mounting, precise copper pipe flaring, high-grade insulation, vacuum pump evacuation to remove air/moisture, and seamless electrical wiring across Thane homes and offices.',
    iconName: 'Hammer',
    category: 'Installation',
    priceStarting: 1499,
    image: '/images/ac-installation.jpg',
    imageAlt: 'Indian technician installing split AC unit in Thane apartment',
    features: [
      'Vibration-damped outdoor unit bracket mounting',
      'High-grade copper line flaring and insulation wrapping',
      'Pre-commissioning vacuum pump moisture evacuation',
      'Core drill hole sealing to prevent rainwater/pest ingress',
      'Complete gas valve opening and pressure verification',
      'Safe uninstallation with refrigerant pump-down technique'
    ],
    commonProblems: [
      'Gas leaking from poorly flared copper connections',
      'Water leaking into room due to improper indoor unit incline',
      'Severe wall vibration from unanchored outdoor brackets',
      'Moisture trapped in refrigerant lines causing premature compressor failure'
    ],
    processSteps: [
      { title: 'Site Assessment', desc: 'Determining optimal indoor airflow direction and rigid outdoor structural support.' },
      { title: 'Mounting & Core Drilling', desc: 'Securely installing indoor baseplate and outdoor anti-vibration brackets.' },
      { title: 'Copper Pipe Flaring & Vacuuming', desc: 'Connecting insulated copper lines and running vacuum pump to eliminate moisture.' },
      { title: 'Commissioning & Leak Check', desc: 'Opening refrigerant valves, checking flare joints with soapy water/electronic sniffer, and testing cooling.' }
    ],
    faqs: [
      { question: 'Why is vacuuming necessary during AC installation?', answer: 'Vacuuming removes atmospheric air and moisture from copper piping before releasing refrigerant. Moisture inside lines causes acid formation and destroys the compressor.' },
      { question: 'Do you provide copper pipes and electrical wires during installation?', answer: 'Yes, we can provide heavy-gauge 100% copper piping, drain pipes, brackets, and copper wiring as needed at standard market rates.' }
    ]
  },
  {
    slug: 'ac-maintenance',
    title: 'AC Maintenance & Preventive AMC',
    shortDesc: 'Routine tune-ups, filter servicing, electrical safety checks, and annual maintenance plans for homes and commercial businesses.',
    fullDesc: 'Regular preventive AC maintenance ensures high energy efficiency, lowers electricity bills by up to 25%, prevents unexpected summer breakdowns, and extends equipment lifespan. We offer flexible AMC options for Thane homeowners, societies, retail stores, and commercial offices.',
    iconName: 'ShieldCheck',
    category: 'Maintenance',
    priceStarting: 4999,
    image: '/images/ac-maintenance.jpg',
    imageAlt: 'AC preventive maintenance and inspection in Thane',
    features: [
      'Scheduled quarterly deep jet cleaning visits',
      'Refrigerant operating pressure & leak auditing',
      'Electrical contact cleaning and capacitor health checks',
      'Thermostat calibration and blower balance verification',
      'Priority emergency breakdown response within 4 hours',
      'Discounts on all spare parts and gas refilling'
    ],
    commonProblems: [
      'Spiking summer electricity bills due to strained AC operation',
      'Sudden breakdown on hottest summer days',
      'Shortened compressor lifespan from neglected coil maintenance'
    ],
    processSteps: [
      { title: 'Comprehensive Audit', desc: 'Checking current system performance, amperage draw, and coil condition.' },
      { title: 'Deep Cleaning & Lubrication', desc: 'Jet washing both indoor and outdoor units, flushing drain line, lubricating fan motors.' },
      { title: 'Electrical & Safety Check', desc: 'Tightening terminal lugs, measuring capacitor MFD value, testing thermostat sensors.' }
    ],
    faqs: [
      { question: 'What is included in an Annual Maintenance Contract (AMC) in Thane?', answer: 'Our standard AMC includes 3 to 4 periodic deep jet services per year, unlimited breakdown visits, and priority response.' },
      { question: 'Can commercial offices in Wagle Estate or Ghodbunder Road get customized AMC plans?', answer: 'Yes, we design custom corporate AMC packages for IT parks, clinics, restaurants, and retail spaces with flexible weekend servicing.' }
    ]
  },
  {
    slug: 'ac-gas-filling',
    title: 'AC Gas Filling & Leakage Detection',
    shortDesc: '100% authentic R32, R410A, and R22 refrigerant charging with nitrogen pressure testing and copper brazing repair.',
    fullDesc: 'Air conditioners do not consume gas; if refrigerant is low, there is a leak in the system. We never simply top up gas blindly. Our technicians first locate the leak using high-pressure nitrogen testing, braze and repair the copper tubing, vacuum the system thoroughly, and weigh-in authentic refrigerant according to manufacturer nameplate specs.',
    iconName: 'Gauge',
    category: 'Gas',
    priceStarting: 2499,
    image: '/images/ac-gas-refilling.jpg',
    imageAlt: 'Professional AC gas charging and pressure gauge reading in Thane',
    features: [
      'Nitrogen pressure testing up to 350 PSI to locate micro-leaks',
      'High-temperature oxygen-acetylene copper joint brazing',
      'Electronic scale precision refrigerant weight charging',
      'Pure virgin refrigerants: R-32, R-410A, R-22',
      'Rotary and scroll compressor standing & running pressure checks',
      '90-day warranty on leak repair workmanship'
    ],
    commonProblems: [
      'AC running continuously but room does not cool down',
      'Ice or white frost forming on thin copper discharge pipe or indoor coil',
      'Hissing noise coming from indoor evaporator unit',
      'Compressor running hot and shutting off on thermal overload'
    ],
    processSteps: [
      { title: 'Pressure Diagnostic', desc: 'Connecting digital manifold gauge to measure suction and standing pressure.' },
      { title: 'Leak Detection', desc: 'Pressurizing system with dry nitrogen and applying bubble solution to all flare nuts and U-bends.' },
      { title: 'Brazing & Repair', desc: 'Welding the leak point and replacing any damaged flare nuts or copper sections.' },
      { title: 'Moisture Evacuation', desc: 'Running a 2-stage vacuum pump down to 500 microns to remove non-condensables.' },
      { title: 'Precision Gas Charging', desc: 'Charging pure refrigerant by weight using digital electronic scales.' }
    ],
    faqs: [
      { question: 'Why does my AC lose gas?', answer: 'Vibration over time, copper oxidation in humid Thane weather, or improperly tightened flare joints can cause microscopic pinhole leaks.' },
      { question: 'Can you just refill gas without fixing the leak?', answer: 'No reputable technician should do this. Unrepaired leaks will cause the new gas to escape within days or weeks. We always locate and seal leaks first.' },
      { question: 'What type of gas does my AC use?', answer: 'Modern 5-star inverter ACs use eco-friendly R32 or R410A, while older non-inverter systems may use R22. We check the outdoor unit nameplate to ensure exact matching.' }
    ]
  },
  {
    slug: 'ac-gas-charging',
    title: 'AC Gas Charging & Refrigerant Top-up',
    shortDesc: 'Precision refrigerant top-up and pressure balancing for Split, Window, and Inverter AC units in Thane.',
    fullDesc: 'When minor pressure drops occur after valve service or seasonal maintenance, our technicians provide certified gas charging with manifold pressure gauge verification, superheat/subcooling calculation, and compressor amperage testing.',
    iconName: 'Flame',
    category: 'Gas',
    priceStarting: 2999,
    image: '/images/ac-gas-refilling.jpg',
    imageAlt: 'AC gas top-up and pressure check in Thane',
    features: [
      'Suction and discharge pressure gauge monitoring',
      'Superheat and subcooling temperature calculation',
      '100% pure virgin grade refrigerants',
      'Compressor current draw (Amp) verification',
      'Dual-gauge manifold leak isolation'
    ],
    commonProblems: [
      'Partial cooling where air feels slightly chilled but room never gets cold',
      'Slow temperature drop taking hours to cool the room',
      'Compressor drawing high current due to inadequate refrigerant circulation'
    ],
    processSteps: [
      { title: 'Pressure Reading', desc: 'Testing low-side and high-side operating pressures.' },
      { title: 'Leak Screening', desc: 'Inspecting service valves, flare connections, and condenser bends.' },
      { title: 'Refrigerant Injection', desc: 'Carefully metering virgin refrigerant into the system in liquid/vapor phase as specified.' },
      { title: 'Cooling Delta Check', desc: 'Measuring temperature difference between return air and supply grill (minimum 10-14°C drop).' }
    ],
    faqs: [
      { question: 'How do I know if my AC needs gas charging?', answer: 'Common signs include ice formation on copper lines, lukewarm airflow from the blower, and the compressor running non-stop without cooling.' }
    ]
  },
  {
    slug: 'ac-not-cooling-repair',
    title: 'AC Not Cooling Repair',
    shortDesc: 'Rapid troubleshooting and repair for air conditioners blowing warm air, weak airflow, or failing to lower room temperature.',
    fullDesc: 'An AC that is not cooling is the most frequent emergency during Thane’s warm and humid months. Whether the issue is a failed dual run capacitor, a dirty condenser, low gas, a faulty thermostat sensor, or an inverter compressor lock, our technicians diagnose the root cause on-site and restore instant cooling.',
    iconName: 'Snowflake',
    category: 'Repair',
    priceStarting: 449,
    image: '/images/ac-emergency.jpg',
    imageAlt: 'AC emergency doorstep repair in Thane',
    features: [
      'Comprehensive cooling circuit diagnosis',
      'Compressor starting capacitor and relay test',
      'Thermostat and ambient room sensor check',
      'Condenser coil heat dissipation test',
      'Evaporator coil ice-up troubleshooting',
      'Immediate on-site repair with genuine parts'
    ],
    commonProblems: [
      'AC indoor fan running but outdoor unit compressor not starting',
      'Warm or room-temperature air blowing from the louvres',
      'Cooling stops after 10-15 minutes of operation',
      'AC turns on but room temperature never drops below 28°C'
    ],
    processSteps: [
      { title: 'Electrical Diagnostic', desc: 'Testing capacitor microfarads, contactor coil, and PCB output voltage to compressor.' },
      { title: 'Thermal & Refrigerant Check', desc: 'Measuring gas pressure, suction line chill, and condenser discharge heat.' },
      { title: 'Targeted Component Fix', desc: 'Replacing failed starting capacitor, clearing coil blockage, or recharging refrigerant.' },
      { title: 'Cooling Verification', desc: 'Validating temperature drop with digital infrared thermometer.' }
    ],
    faqs: [
      { question: 'Why is my AC blowing air but not cooling at all?', answer: 'The most common causes are a blown compressor capacitor, low refrigerant gas, a clogged outdoor condenser coil, or a failed sensor preventing the compressor from engaging.' },
      { question: 'Can a dirty air filter stop an AC from cooling?', answer: 'Yes! A choked filter restricts airflow across the evaporator coil, causing the coil to freeze into solid ice and blocking all cool air delivery.' }
    ]
  },
  {
    slug: 'ac-water-leakage-repair',
    title: 'AC Water Leakage Repair',
    shortDesc: 'Permanent fix for indoor unit water dripping, overflowing drain trays, blocked drain pipes, and ceiling dampness.',
    fullDesc: 'Water dripping from your indoor AC unit can damage expensive paint, wallpaper, and wooden furniture. Water leaks occur when the condensate drain line gets choked with algae sludge, the internal drain pan is cracked or tilted, or the evaporator coil is freezing due to low gas. We clear clogs and resolve drain faults permanently.',
    iconName: 'Droplets',
    category: 'Repair',
    priceStarting: 449,
    image: '/images/ac-cleaning.jpg',
    imageAlt: 'AC drain tray and water leakage fix in Thane',
    features: [
      'High-pressure drain line unclogging and flush',
      'Indoor unit mounting level and angle recalibration',
      'Condensate drain tray descaling and crack sealing',
      'Evaporator coil ice-melt and freeze troubleshooting',
      'Antibacterial drain line treatment to prevent future algae',
      'Wall inspection to ensure no hidden moisture accumulation'
    ],
    commonProblems: [
      'Water dripping down the wall behind the indoor split unit',
      'Water splashing out with the airflow from the blower fan',
      'Condensate overflowing from the front louvres onto bedroom floor',
      'Bubbling sounds in the drain pipe'
    ],
    processSteps: [
      { title: 'Disassembly & Tray Inspection', desc: 'Opening front fascia and checking internal drain channel for cracks or algae buildup.' },
      { title: 'Pressure Drain Flush', desc: 'Using specialized air/water pressure pump to blow out slime, dirt, and mold from the drain hose.' },
      { title: 'Level Alignment Check', desc: 'Checking spirit level alignment to ensure indoor unit tilts slightly toward the drain exit.' },
      { title: 'Water Flow Testing', desc: 'Pouring 1 liter of test water into the drain tray to confirm instant free drainage outside.' }
    ],
    faqs: [
      { question: 'Why is water dripping from my indoor Split AC unit?', answer: 'The primary culprit is a clogged drain pipe filled with dust and fungal slime. Other causes include an unlevel unit mounting bracket or coil icing up from low refrigerant.' },
      { question: 'Can water leakage inside the AC cause electrical short circuits?', answer: 'Yes, if water overflows into the electrical PCB enclosure or terminal block, it can short the circuit board. It should be repaired immediately.' }
    ]
  },
  {
    slug: 'ac-compressor-repair',
    title: 'AC Compressor Repair & Replacement',
    shortDesc: 'Diagnosis, terminal testing, capacitor replacement, and certified compressor replacement for all major brands.',
    fullDesc: 'The compressor is the heart of your air conditioning system. When it fails to start, makes loud metallic knocking sounds, or trips the main breaker, our certified technicians perform terminal resistance testing, winding continuity checks, and capacitor verification before recommending repair or replacement.',
    iconName: 'Zap',
    category: 'Specialized',
    priceStarting: 1999,
    image: '/images/ac-repair.jpg',
    imageAlt: 'AC compressor diagnosis and wiring inspection in Thane',
    features: [
      'Compressor winding resistance (Common, Start, Run) test',
      'Mega-ohm insulation breakdown check to ground',
      'Overload protector (OLP) and starting relay replacement',
      'Hard start kit installation for low voltage areas',
      'Rotary, Scroll, and Inverter BLDC compressor replacement',
      '100% nitrogen brazing and vacuum commissioning'
    ],
    commonProblems: [
      'Outdoor unit hums for 5 seconds and clicks off without starting',
      'Compressor trips MCB circuit breaker immediately on turning on',
      'Excessive shaking, metal clanking, or rattling in outdoor unit',
      'Compressor running extremely hot and shutting down after 5 minutes'
    ],
    processSteps: [
      { title: 'Electrical Resistance Test', desc: 'Testing C-S, C-R, and S-R terminal ohms with digital multimeter.' },
      { title: 'Capacitor & OLP Check', desc: 'Inspecting run capacitor and thermal overload protector.' },
      { title: 'Mechanical Lockup Assessment', desc: 'Checking if compressor is mechanically locked or electrically grounded.' },
      { title: 'Replacement / Hard Start', desc: 'Installing genuine replacement compressor with nitrogen-purged brazing.' }
    ],
    faqs: [
      { question: 'Can a locked AC compressor be repaired without replacement?', answer: 'In some cases of starting friction or low voltage, a heavy-duty starting capacitor or Hard Start kit can revive the compressor. If internal mechanical bearings have seized, replacement is necessary.' }
    ]
  },
  {
    slug: 'ac-pcb-repair',
    title: 'AC PCB Circuit Board Diagnostic & Repair',
    shortDesc: 'Component-level motherboard repair for Inverter and Non-Inverter AC units, resolving display errors and communication faults.',
    fullDesc: 'Modern 5-star inverter air conditioners rely on complex microcontrollers and Power Inverter Modules (IPM) to control compressor speed and fan motors. Voltage spikes, geckos/insects, or moisture can damage PCB components. We provide expert component-level micro-soldering and PCB repair across Thane.',
    iconName: 'Cpu',
    category: 'Specialized',
    priceStarting: 2399,
    image: '/images/ac-repair.jpg',
    imageAlt: 'AC PCB circuit board testing in Thane',
    features: [
      'Indoor and outdoor inverter PCB communication diagnosis',
      'Intelligent Power Module (IPM) and IGBT testing',
      'Sensor resistance and thermistor recalibration',
      'Relay, fuse, and capacitor micro-soldering',
      'Protection conformal coating against moisture and insects',
      'Direct compatibility testing with Daikin, LG, Voltas, Bluestar, Samsung'
    ],
    commonProblems: [
      'AC display flashing error codes (e.g., E1, E4, E6, F1, F3, U4, CH05)',
      'AC completely dead with no lights on display or power response',
      'Indoor unit runs but outdoor PCB does not send signal to compressor',
      'Blower fan running at single fixed speed without speed regulation'
    ],
    processSteps: [
      { title: 'Error Code Decoding', desc: 'Identifying manufacturer specific error code using diagnostic flowcharts.' },
      { title: 'Voltage & Sensor Probing', desc: 'Measuring DC bus voltage, 5V/12V rails, and thermistor sensor inputs.' },
      { title: 'Component Level Repair', desc: 'Replacing blown switching chips, optocouplers, or IPM modules on precision test bench.' },
      { title: 'Reinstallation & Validation', desc: 'Reinstalling board with heat sink compound and conformal protective coating.' }
    ],
    faqs: [
      { question: 'Is it cheaper to repair an AC PCB or replace it entirely?', answer: 'Component-level PCB repair typically costs 60% less than buying a brand-new motherboard from the manufacturer and restores full functionality with warranty.' },
      { question: 'Why do Inverter AC PCBs get damaged in Thane?', answer: 'Monsoon humidity, occasional voltage surges, and insects entering the outdoor unit enclosure are the most common causes of PCB failure in Thane.' }
    ]
  },
  {
    slug: 'split-ac-service',
    title: 'Split AC Deep Servicing & Care',
    shortDesc: 'Specialized maintenance for high-wall Split AC units with indoor coil foam jet wash and outdoor unit condenser flush.',
    fullDesc: 'Split air conditioners are the most common cooling systems in Thane flats and high-rises. Our dedicated Split AC service utilizes waterproof wash bibs, high-pressure jet wands, and antimicrobial foam to cleanse the indoor evaporator, cross-flow blower wheel, and outdoor condenser unit without removing the unit from the wall.',
    iconName: 'Layers',
    category: 'Service',
    priceStarting: 599,
    image: '/images/ac-cleaning.jpg',
    imageAlt: 'Split AC deep foam wash in Thane',
    features: [
      'Mess-free indoor wash with waterproof catchment jacket',
      'Deep chemical foam wash for aluminium cooling fins',
      'Cross-flow tangential blower wheel cleaning',
      'Outdoor condenser heat exchanger wash',
      'Refrigerant operating pressure validation',
      'Air swing motor and louvre gear lubrication'
    ],
    commonProblems: [
      'Black mold specs blowing out from blower wheel',
      'Uneven room cooling with reduced airflow',
      'Unpleasant musty smell on startup',
      'Outdoor fan unit overheating on sunny afternoons'
    ],
    processSteps: [
      { title: 'Disassembly', desc: 'Carefully removing front panel, air filters, and horizontal louvre.' },
      { title: 'Jacket Protection', desc: 'Mounting waterproof catchment jacket around the indoor unit.' },
      { title: 'Jet Foam Clean', desc: 'Applying foam cleaner and jet spraying evaporator coil and blower wheel.' },
      { title: 'Outdoor Jet Wash', desc: 'Jet washing outdoor condenser to remove fine urban dust.' },
      { title: 'Reassembly & Testing', desc: 'Drying, reassembling, and measuring supply air temperature drop.' }
    ],
    faqs: [
      { question: 'How long does a Split AC jet service take?', answer: 'A comprehensive Split AC jet service takes approximately 45 to 60 minutes per unit.' }
    ]
  },
  {
    slug: 'window-ac-service',
    title: 'Window AC Deep Service & Maintenance',
    shortDesc: 'Complete slide-out servicing, coil descaling, base pan de-rusting, and motor lubrication for Window AC units.',
    fullDesc: 'Window ACs collect heavy dust in their compact chassis, leading to water accumulation, chassis rusting, and restricted cooling airflow. We provide thorough slide-out servicing, high-pressure washing of both coils, motor bearing lubrication, and vibration dampening across Thane.',
    iconName: 'Box',
    category: 'Service',
    priceStarting: 599,
    image: '/images/ac-maintenance.jpg',
    imageAlt: 'Window AC slide-out cleaning in Thane',
    features: [
      'Slide-out chassis deep pressure wash',
      'Dual coil (front evaporator & rear condenser) chemical clean',
      'Base pan water drain unclogging and rust inhibitor application',
      'Dual-shaft fan motor lubrication and blade cleaning',
      'Capacitor and rotary switch electrical inspection',
      'Cabinet soundproofing and vibration-free remounting'
    ],
    commonProblems: [
      'Loud rattling, vibrating, or humming noise from window frame',
      'Water pooling and overflowing from the front bottom panel',
      'Weak cold airflow caused by packed dust behind front grill',
      'Window AC motor running hot and slowing down'
    ],
    processSteps: [
      { title: 'Chassis Slide-Out', desc: 'Unfastening security screws and sliding out internal chassis from window sleeve.' },
      { title: 'High Pressure Wash', desc: 'Jet washing both front cooling coil and rear condenser coil with protective motor cover.' },
      { title: 'Drain Channel Clean', desc: 'Clearing debris and algae from the base pan drain hole.' },
      { title: 'Reinstallation', desc: 'Sliding chassis back into sleeve, checking seal integrity, and running temperature test.' }
    ],
    faqs: [
      { question: 'Do you need to remove the Window AC from the wall?', answer: 'In most modern window units, the internal chassis slides out smoothly from the outer casing for deep washing, without dismantling the window frame.' }
    ]
  },
  {
    slug: 'commercial-ac-service',
    title: 'Commercial AC & VRV / Cassette Maintenance',
    shortDesc: 'Heavy-duty cooling solutions, Cassette AC repair, ductable maintenance, and scheduled AMC for Thane businesses.',
    fullDesc: 'Commercial environments—such as corporate offices in Wagle Estate, clinics in Panch Pakhadi, retail outlets in Viviana/Korum malls, and restaurants along Ghodbunder Road—require uninterrupted cooling. We offer expert servicing for Cassette ACs, Ductables, Tower units, and VRV/VRF systems with minimal workplace disruption.',
    iconName: 'Building2',
    category: 'Specialized',
    priceStarting: 2499,
    image: '/images/ac-commercial.jpg',
    imageAlt: 'Commercial AC maintenance and servicing in Thane office',
    features: [
      'Cassette AC 4-way louvre and drain pump maintenance',
      'Ductable AC air filter replacement and static pressure check',
      'VRV/VRF multi-indoor refrigerant flow balancing',
      'Server room 24/7 cooling redundancy inspection',
      'After-hours and weekend scheduled servicing to avoid business interruption',
      'Comprehensive digital service log and GST invoicing'
    ],
    commonProblems: [
      'Cassette AC drain pump failure causing ceiling water leaks',
      'Uneven cooling across different office cabins or retail zones',
      'High monthly commercial electricity billing from choked condensers',
      'Server room temperature alarms due to unexpected AC trips'
    ],
    processSteps: [
      { title: 'Pre-Service Audit', desc: 'Inspecting airflow, thermostat controls, and drain pump operation.' },
      { title: 'Filter & Coil Wash', desc: 'Deep jet washing ceiling cassette filters, cooling coils, and outdoor condenser banks.' },
      { title: 'Drain Pump Testing', desc: 'Checking automatic lift pump and float switch to prevent ceiling water damage.' },
      { title: 'System Balancing', desc: 'Validating refrigerant pressures and room airflow delivery across all zones.' }
    ],
    faqs: [
      { question: 'Can you service commercial ACs outside regular office hours in Thane?', answer: 'Yes, we provide night and weekend servicing slots for offices and retail stores to ensure zero business downtime.' },
      { question: 'Do you provide GST invoices for commercial AC repairs?', answer: 'Yes, all commercial repairs and AMC contracts are issued with official GST-compliant tax invoices.' }
    ]
  },
  {
    slug: 'residential-ac-service',
    title: 'Residential Apartment AC Care',
    shortDesc: 'Trusted doorstep AC servicing, repair, and gas refilling for homes and residential societies across Thane.',
    fullDesc: 'We understand that your home requires respectful, tidy, and reliable service. Our technicians arrive with identity verification, floor protection covers, and waterproof jet-wash kits to keep your walls, curtains, and flooring completely clean while providing the highest standard of AC care.',
    iconName: 'Home',
    category: 'Service',
    priceStarting: 499,
    image: '/images/ac-installation.jpg',
    imageAlt: 'Doorstep residential AC servicing in Thane apartment',
    features: [
      '100% mess-free service with waterproof collection bags',
      'Polite, verified, and experienced local technicians',
      'Transparent upfront quotes with no surprise charges',
      'Multi-unit society discounts for 2 or more ACs',
      'Flexible booking slots including mornings and weekends',
      'Post-service cooling guarantee and digital invoice'
    ],
    commonProblems: [
      'AC not cooling bedroom adequately at night',
      'Musty odor triggering allergies or morning coughs',
      'Water dripping onto bed or wooden flooring',
      'High electricity bills during summer months'
    ],
    processSteps: [
      { title: 'Doorstep Arrival', desc: 'Technician arrives on scheduled time with protective floor sheets and service gear.' },
      { title: 'Deep Cleaning', desc: 'Complete foam and jet wash of indoor and outdoor units.' },
      { title: 'Health & Airflow Check', desc: 'Checking gas pressure, blower speed, and room temperature drop.' },
      { title: 'Clean Wrap Up', desc: 'Leaving your home clean, dry, and cool.' }
    ],
    faqs: [
      { question: 'Do you offer discounts for servicing multiple ACs in one apartment?', answer: 'Yes! We offer combo discounts when you service 2, 3, or more AC units in the same home or residential society.' }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  const cleanSlug = slug.replace(/^\//, '').replace(/\/$/, '');
  return SERVICES_DATA.find(s => s.slug === cleanSlug);
}
