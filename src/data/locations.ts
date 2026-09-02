import { LocationData } from '../types';
import { AREA_SEO_METADATA } from './areaSeoMetadata';

const BASE_LOCATIONS_DATA: Omit<LocationData, 'metaTitle' | 'metaDescription'>[] = [
  // 1. MAIN THANE PAGES
  {
    slug: 'ac-service-in-thane',
    name: 'Thane',
    zone: 'Main Thane',
    pincode: '400601 / 400606',
    landmarks: ['Thane Railway Station', 'Viviana Mall', 'Korum Mall', 'Talao Pali', 'Ghodbunder Road Corridor'],
    description: 'Thane is a bustling metropolis with high-rise residential towers, commercial business hubs, and traditional residential pockets. The humid tropical climate and heavy monsoon rainfall make routine AC maintenance, coil cleaning, and cooling optimization essential across the city.',
    localContext: 'From old central Thane residential colonies to sprawling modern complexes along Ghodbunder Road, our technicians provide fast doorstep AC repair and deep servicing across all sectors.',
    residentialContext: 'Covers standalone residential societies, high-rise gated townships, retail shops, and corporate IT parks throughout Thane city.',
    commonIssues: ['Cooling drop due to high ambient humidity', 'Drainage line choking during monsoon', 'Dust accumulation on outdoor condenser coils', 'Frequent power fluctuation PCB sensor faults', 'Gas leakage in older copper tubing'],
    nearbyLocalities: ['Thane West', 'Thane East', 'Naupada', 'Panch Pakhadi', 'Ghodbunder Road', 'Kalwa'],
    faqs: [
      { question: 'Do you provide doorstep AC service across all areas of Thane?', answer: 'Yes. AC Services in Thane covers all residential, commercial, and retail locations across Thane West, Thane East, Ghodbunder Road, and Kalwa with doorstep technician visits.' },
      { question: 'What AC brands do your technicians repair in Thane?', answer: 'We service and repair all major brands including Voltas, Daikin, LG, Bluestar, Samsung, Hitachi, Carrier, Panasonic, Godrej, Mitsubishi, Lloyd, and O General.' },
      { question: 'How quickly can an AC technician visit my Thane home or office?', answer: 'We offer prompt scheduling across Thane, with same-day appointments and urgent inspection slots available based on technician availability in your specific locality.' },
      { question: 'Do you offer AC jet pump deep cleaning in Thane?', answer: 'Yes, our complete AC service includes high-pressure jet pump coil washing, blower fan sanitization, drain tray flush, and electrical checking.' },
      { question: 'Can I book AC gas charging in Thane with leakage testing?', answer: 'Yes. We provide complete nitrogen/pressure leak detection followed by precision gas charging for R32, R410A, and R22 refrigerants.' },
      { question: 'What is the diagnostic process for an AC that is not cooling?', answer: 'Our technician inspects airflow, compressor capacitor rating, refrigerant gas pressure, thermostat sensor resistance, and condenser coil cleanliness before proposing any part replacement.' }
    ]
  },
  {
    slug: 'ac-service-in-thane-west',
    name: 'Thane West',
    zone: 'Main Thane',
    pincode: '400601 - 400615',
    landmarks: ['Panch Pakhadi', 'Naupada', 'Gokhale Road', 'Viviana Mall', 'Pokhran Road', 'Majiwada Junction'],
    description: 'Thane West represents the vibrant heart and expanding residential hub of Thane, encompassing established neighborhoods, corporate complexes, and modern high-rises.',
    localContext: 'With dense residential towers and busy commercial streets, AC units in Thane West face continuous operation during peak summer and humid coastal monsoon months.',
    residentialContext: 'High density of 1BHK, 2BHK, 3BHK apartments and penthouse units using Split and Inverter AC systems requiring routine filter and coil care.',
    commonIssues: ['Low cooling during humid afternoons', 'Indoor unit water dripping onto walls', 'Dust accumulation from roadway proximity', 'Outdoor fan motor squeaking or overheating'],
    nearbyLocalities: ['Naupada', 'Panch Pakhadi', 'Charai', 'Vartak Nagar', 'Wagle Estate', 'Majiwada'],
    faqs: [
      { question: 'Do you offer Split AC repair in Thane West?', answer: 'Yes, we provide specialized Split AC repair, PCB troubleshooting, cooling coil servicing, and motor repairs throughout Thane West.' },
      { question: 'Can I get same-day AC maintenance in Thane West?', answer: 'Yes, our local technicians are stationed across Thane West to facilitate fast same-day response depending on current booking slots.' },
      { question: 'How do I book an AC technician visit in Thane West?', answer: 'You can book by calling +91 7021455426, messaging on WhatsApp, or submitting our online service request form.' },
      { question: 'Do you handle commercial AC servicing for offices in Thane West?', answer: 'Yes, we service commercial split, cassette, and tower AC units for offices, clinics, retail shops, and restaurants in Thane West.' },
      { question: 'What causes AC water leakage in Thane West apartments?', answer: 'Blocked condensate drain pipes, algae sludge in the internal drain tray, or tilted indoor unit mounting are the primary causes, all resolvable via deep cleaning.' }
    ]
  },
  {
    slug: 'ac-service-in-thane-east',
    name: 'Thane East',
    zone: 'Main Thane',
    pincode: '400603',
    landmarks: ['Thane East Railway Station', 'Kopri Colony', 'Chendani Koliwada', 'Eastern Express Highway exit'],
    description: 'Thane East is known for its historic residential communities, cooperative housing societies, and connectivity to Mumbai via the Eastern Express Highway.',
    localContext: 'Proximity to Thane Creek brings higher humidity and saline air exposure, which accelerates coil corrosion and necessitates regular anti-corrosive checks and jet wash servicing.',
    residentialContext: 'Predominantly residential apartments and independent housing societies with both Split and Window AC installations.',
    commonIssues: ['Outdoor unit coil corrosion from creek humidity', 'Capacitor failure during summer voltage fluctuations', 'Window AC vibrating or loud compressor noise', 'Gas pressure depletion'],
    nearbyLocalities: ['Kopri', 'Chendani', 'Kisan Nagar', 'Thane West', 'Kalwa'],
    faqs: [
      { question: 'Do you service Window ACs in Thane East?', answer: 'Yes, we provide full Window AC deep chemical washing, motor lubrication, fan blade repair, and gas refilling in Thane East.' },
      { question: 'How does coastal creek humidity affect ACs in Thane East?', answer: 'Creek moisture can corrode condenser fins faster; regular jet pump servicing and anti-rust protection help maintain heat exchange efficiency.' },
      { question: 'What is included in an AC servicing package in Thane East?', answer: 'Filter cleaning, indoor evaporator coil jet wash, outdoor condenser unit wash, drain line clearing, gas pressure check, and amperage testing.' },
      { question: 'Can you fix Split AC water leaking inside the room in Kopri, Thane East?', answer: 'Yes, our technician flushes the clogged drain hose, cleans the drain tray, and levels the indoor unit bracket to eliminate water leakage.' }
    ]
  },
  {
    slug: 'ac-service-in-ghodbunder-road',
    name: 'Ghodbunder Road',
    zone: 'Main Thane',
    pincode: '400607 / 400615',
    landmarks: ['Hypercity / Big Centre', 'Suraj Water Park', 'Kasarvadavali Metro Corridor', 'Bhayandarpada'],
    description: 'Ghodbunder Road (State Highway 42) is Thane’s premier growth corridor, lined with dozens of mega high-rise residential townships, commercial complexes, and retail centers.',
    localContext: 'Heavy highway vehicular dust and construction activity along the corridor make air filters and outdoor condenser coils clog twice as fast, demanding frequent professional cleaning.',
    residentialContext: 'Large gated communities with 10 to 35+ storey residential towers utilizing modern multi-split, 5-star inverter, and ductable AC systems.',
    commonIssues: ['Highway dust choking outdoor condenser coils', 'Inverter PCB communication errors', 'Weak airflow from clogged secondary mesh filters', 'High electricity bills due to strained compressors'],
    nearbyLocalities: ['Kapurbawdi', 'Majiwada', 'Manpada', 'Patlipada', 'Waghbil', 'Kasarvadavali', 'Brahmand', 'Hiranandani Estate'],
    faqs: [
      { question: 'Why do ACs on Ghodbunder Road require frequent servicing?', answer: 'Highway dust and active infrastructure development lead to heavy particulate buildup on outdoor coils and indoor filters, reducing heat transfer.' },
      { question: 'Do your technicians service high-rise apartments on Ghodbunder Road?', answer: 'Yes, our technicians are equipped with safety gear and extension lines to service outdoor units on high-rise building ledges and duct shafts.' },
      { question: 'Do you provide Inverter AC repair on Ghodbunder Road?', answer: 'Yes, we diagnose inverter PCB errors, variable speed BLDC fan motors, electronic expansion valves, and sensor faults.' },
      { question: 'Can I book weekend AC servicing on Ghodbunder Road?', answer: 'Yes, we operate 7 days a week with flexible weekend slots for busy working professionals and families.' }
    ]
  },

  // 2. THANE WEST / CENTRAL THANE (27 LOCALITIES)
  {
    slug: 'ac-service-in-naupada',
    name: 'Naupada',
    zone: 'Thane West / Central',
    pincode: '400602',
    landmarks: ['Gokhale Road', 'Ram Maruti Road', 'Naupada Police Station', 'Bhagvati School'],
    description: 'Naupada is one of Thane’s most established residential and commercial shopping districts, characterized by bustling retail lanes and redevelopment residential apartments.',
    localContext: 'Compact building spacing and active commercial footfall require quiet, efficient AC operation for homes, clinics, and showrooms.',
    residentialContext: 'Cooperative housing societies, redeveloped 7-15 storey towers, and ground-floor retail shops.',
    commonIssues: ['Window AC rattling noise in older societies', 'Split AC compressor tripping during peak afternoon heat', 'Dust clogging indoor blowers in roadside shops'],
    nearbyLocalities: ['Panch Pakhadi', 'Charai', 'Vishnu Nagar', 'Khopat', 'Thane Railway Station'],
    faqs: [
      { question: 'Do you provide AC repair near Ram Maruti Road in Naupada?', answer: 'Yes, we provide doorstep AC servicing and repair across all lanes of Naupada, including Ram Maruti Road and Gokhale Road.' },
      { question: 'Can you repair old Window AC units in Naupada residential societies?', answer: 'Yes, we repair and service Window ACs of all tonnages and models with complete motor and coil maintenance.' },
      { question: 'How much time does a standard Split AC jet service take in Naupada?', answer: 'A comprehensive jet pump service typically takes 45 to 60 minutes per AC unit.' },
      { question: 'Do you test gas pressure before refilling in Naupada?', answer: 'Yes, our technicians always test operating pressure with digital/analog manifold gauges and check for leaks before recommending gas charging.' }
    ]
  },
  {
    slug: 'ac-service-in-panch-pakhadi',
    name: 'Panch Pakhadi',
    zone: 'Thane West / Central',
    pincode: '400602',
    landmarks: ['Thane Municipal Corporation (TMC) HQ', 'Kachrali Lake', 'Alok Hotel Junction', 'Service Road'],
    description: 'Panch Pakhadi is an upscale residential and administrative neighborhood in Central Thane, home to TMC headquarters, popular restaurants, and premium residential apartments.',
    localContext: 'Proximity to Kachrali Lake introduces mild humidity while urban commercial dining spots require heavy-duty AC reliability.',
    residentialContext: 'Premium 2BHK, 3BHK, and 4BHK apartments, standalone commercial offices, and fine dining establishments.',
    commonIssues: ['Mildew and mold buildup in AC cooling coils', 'Inverter AC sensor calibration faults', 'Drain line blockage causing indoor dripping'],
    nearbyLocalities: ['Naupada', 'Charai', 'Teen Hath Naka', 'Louis Wadi', 'Khopat'],
    faqs: [
      { question: 'Do you service commercial ACs for restaurants in Panch Pakhadi?', answer: 'Yes, we service cassette, ductable, and heavy split AC units for eateries, corporate offices, and clinics in Panch Pakhadi.' },
      { question: 'Can you remove bad moldy odors coming from my Split AC in Panch Pakhadi?', answer: 'Yes, our deep foam jet wash sanitizes the cooling coil, blower wheel, and drain pan to remove bacteria, mildew, and foul smells.' },
      { question: 'Is AC uninstallation and re-installation available in Panch Pakhadi?', answer: 'Yes, we handle safe refrigerant pump-down, bracket unmounting, copper pipe routing, and leak-tested installation for shifting.' }
    ]
  },
  {
    slug: 'ac-service-in-charai',
    name: 'Charai',
    zone: 'Thane West / Central',
    pincode: '400601',
    landmarks: ['Charai Market', 'Sant Eknath Rang Mandir', 'Dr. Bedekar Hospital'],
    description: 'Charai is a historic residential precinct in central Thane with traditional Maharashtrian housing societies and modern redeveloped buildings.',
    localContext: 'Dense residential neighborhood where quiet AC operation and efficient power consumption are top priorities for residents.',
    residentialContext: 'Mix of low-rise cooperative societies and modern mid-rise residential towers.',
    commonIssues: ['Capacitor burnout due to aging electrical lines', 'Fan motor vibration', 'Slow cooling in top-floor apartments'],
    nearbyLocalities: ['Naupada', 'Tembhi Naka', 'Jambli Naka', 'Uthalsar', 'Chendani'],
    faqs: [
      { question: 'Do you provide quick AC repair in Charai, Thane?', answer: 'Yes, our technicians regularly visit Charai for troubleshooting cooling issues, water leakages, and noisy compressors.' },
      { question: 'Can you service Inverter ACs in Charai?', answer: 'Yes, we are experienced in multi-brand inverter AC diagnostics including Daikin, LG, Panasonic, and Voltas.' }
    ]
  },
  {
    slug: 'ac-service-in-tembhi-naka',
    name: 'Tembhi Naka',
    zone: 'Thane West / Central',
    pincode: '400601',
    landmarks: ['Anand Ashram', 'Talao Pali proximity', 'Central Market Area'],
    description: 'Tembhi Naka is a prominent cultural and commercial crossroads in old Thane, featuring high density shops, offices, and residential dwellings.',
    localContext: 'Commercial offices and shops require prompt cooling maintenance to handle high foot traffic and warm days.',
    residentialContext: 'Commercial establishments on lower floors with residential apartments above.',
    commonIssues: ['Dust choked air filters in street-facing shops', 'Outdoor unit airflow restriction', 'Water dripping on pedestrian walkways'],
    nearbyLocalities: ['Jambli Naka', 'Charai', 'Uthalsar', 'Khopat', 'Naupada'],
    faqs: [
      { question: 'Do you handle street-facing shop AC repairs in Tembhi Naka?', answer: 'Yes, we resolve outdoor placement issues, drain line routing, and filter deep cleaning for retail shops.' }
    ]
  },
  {
    slug: 'ac-service-in-jambli-naka',
    name: 'Jambli Naka',
    zone: 'Thane West / Central',
    pincode: '400601',
    landmarks: ['Thane Main Vegetable Market', 'Court Naka proximity', 'Talao Pali'],
    description: 'Jambli Naka is the core heritage commercial and retail marketplace of Thane, with wholesale traders, jewelry shops, and residential quarters.',
    localContext: 'Continuous operation of commercial split ACs requires preventive maintenance and regular coil cleaning.',
    residentialContext: 'Commercial retail outlets, clinics, and traditional residential buildings.',
    commonIssues: ['Heavy dust intake on outdoor units', 'High runtime compressor wear', 'Thermostat switch faults'],
    nearbyLocalities: ['Tembhi Naka', 'Charai', 'Uthalsar', 'Khopat', 'Kopri'],
    faqs: [
      { question: 'Do you provide emergency AC repair for shops in Jambli Naka?', answer: 'Yes, we offer fast response for commercial retail stores and offices facing sudden AC cooling breakdowns.' }
    ]
  },
  {
    slug: 'ac-service-in-uthalsar',
    name: 'Uthalsar',
    zone: 'Thane West / Central',
    pincode: '400601',
    landmarks: ['Uthalsar Ward Office', 'Castle Mill Circle', 'Central Jail Road'],
    description: 'Uthalsar connects old Thane to Castle Mill and Pokhran Road, featuring residential complexes and educational institutions.',
    localContext: 'Centrally located with easy technician access for rapid doorstep AC servicing.',
    residentialContext: 'Multi-storey residential buildings and cooperative housing societies.',
    commonIssues: ['Refrigerant leakage from old flare joints', 'Indoor blower noise', 'Thermostat sensor malfunction'],
    nearbyLocalities: ['Khopat', 'Charai', 'Vartak Nagar', 'Castle Mill', 'Naupada'],
    faqs: [
      { question: 'Can I book an AC technician in Uthalsar on short notice?', answer: 'Yes, we have technicians covering Uthalsar and Castle Mill daily for prompt service bookings.' }
    ]
  },
  {
    slug: 'ac-service-in-khopat',
    name: 'Khopat',
    zone: 'Thane West / Central',
    pincode: '400601',
    landmarks: ['Khopat ST Bus Depot', 'Kolkata Sweet House junction', 'Cadbury Junction proximity'],
    description: 'Khopat is a central residential and transit zone in Thane West with high population density and active commerce.',
    localContext: 'Transit corridors generate particulate matter that settles on outdoor AC units, requiring periodic foam jet washing.',
    residentialContext: 'Residential apartment societies and small business setups.',
    commonIssues: ['Choked cooling coils', 'Outdoor fan motor overheating', 'Water leakages inside rooms'],
    nearbyLocalities: ['Uthalsar', 'Naupada', 'Panch Pakhadi', 'Vartak Nagar', 'Louis Wadi'],
    faqs: [
      { question: 'Do you provide jet pump AC cleaning in Khopat?', answer: 'Yes, our high-pressure jet pump cleaning removes deep dirt and grime from condenser and evaporator coils in Khopat.' }
    ]
  },
  {
    slug: 'ac-service-in-vishnu-nagar',
    name: 'Vishnu Nagar',
    zone: 'Thane West / Central',
    pincode: '400602',
    landmarks: ['Naupada Police Station road', 'Gokhale Road access', 'Talav Pali walk'],
    description: 'Vishnu Nagar is a quiet residential enclave nestled adjacent to Naupada and Talao Pali, popular with long-term Thane families.',
    localContext: 'Residents prioritize whisper-quiet Split AC operation and thorough sanitization of air filters.',
    residentialContext: 'Well-maintained cooperative housing societies and newly redeveloped residential towers.',
    commonIssues: ['Noisy indoor blower wheel', 'Low cooling due to dirty filters', 'AC tripping the MCB switch'],
    nearbyLocalities: ['Naupada', 'Charai', 'Panch Pakhadi', 'Thane West'],
    faqs: [
      { question: 'Can you fix AC tripping my apartment circuit breaker in Vishnu Nagar?', answer: 'Yes, we check compressor grounding, capacitor short-circuits, and electrical wiring to resolve MCB tripping safely.' }
    ]
  },
  {
    slug: 'ac-service-in-vartak-nagar',
    name: 'Vartak Nagar',
    zone: 'Thane West / Central',
    pincode: '400606',
    landmarks: ['MHADA Colony', 'Kores Compound', 'Pokhran Road 1', 'Vedant Complex'],
    description: 'Vartak Nagar has evolved into a major residential hub with massive modern towers, shopping arcades, and landscaped complexes.',
    localContext: 'Modern high-rises in Vartak Nagar frequently use 5-star inverter split ACs that require specialized electronic diagnostic tools.',
    residentialContext: 'High-rise residential townships, MHADA buildings, and gated societies.',
    commonIssues: ['Inverter error codes (E1, E6, F3, etc.)', 'Condenser coil dust coating from nearby construction', 'Capacitor and sensor replacement'],
    nearbyLocalities: ['Pokhran Road No. 1', 'Pokhran Road No. 2', 'Shivai Nagar', 'Shree Nagar', 'Wagle Estate', 'Upvan'],
    faqs: [
      { question: 'Do you repair Inverter AC PCB error codes in Vartak Nagar?', answer: 'Yes, our technicians specialize in inverter AC circuit diagnosis, error code resolution, and sensor repairs.' },
      { question: 'Do you provide AC installation services in new Vartak Nagar towers?', answer: 'Yes, we provide copper piping, vacuuming, bracket mounting, and leak-tested installation.' }
    ]
  },
  {
    slug: 'ac-service-in-shivai-nagar',
    name: 'Shivai Nagar',
    zone: 'Thane West / Central',
    pincode: '400606',
    landmarks: ['Shivai Nagar Ground', 'Pokhran Road No. 1 connectivity', 'Upvan Lake proximity'],
    description: 'Shivai Nagar is a peaceful green residential locality situated near Pokhran Road and the Yeoor foothills.',
    localContext: 'Higher evening humidity from nearby greenery makes mold prevention and deep coil sanitization important.',
    residentialContext: 'Mid-rise and high-rise residential apartment communities.',
    commonIssues: ['Musty odor from indoor unit', 'Slow cooling performance', 'Water dripping from AC drain pipe'],
    nearbyLocalities: ['Vartak Nagar', 'Shree Nagar', 'Upvan', 'Pokhran Road No. 1'],
    faqs: [
      { question: 'How do I stop moldy smells from my AC in Shivai Nagar?', answer: 'We apply antibacterial foam wash to eliminate mildew, dust mites, and bacteria inside the evaporator coil and drain pan.' }
    ]
  },
  {
    slug: 'ac-service-in-shree-nagar',
    name: 'Shree Nagar',
    zone: 'Thane West / Central',
    pincode: '400604',
    landmarks: ['Shree Nagar Bus Stop', 'Wagle Estate border', 'Kisan Nagar connectivity'],
    description: 'Shree Nagar is a vibrant neighborhood bordering Wagle Estate, hosting numerous residential societies and local businesses.',
    localContext: 'Busy mixed zone where both residential Split ACs and commercial workplace air conditioners are widely used.',
    residentialContext: 'Cooperative housing societies, stand-alone residential buildings, and retail establishments.',
    commonIssues: ['Low gas pressure', 'Indoor unit vibration', 'Compressor capacitor failure'],
    nearbyLocalities: ['Wagle Estate', 'Shivai Nagar', 'Vartak Nagar', 'Louis Wadi', 'Kisan Nagar'],
    faqs: [
      { question: 'Do you offer AC maintenance for housing societies in Shree Nagar?', answer: 'Yes, we provide routine AC maintenance, periodic filter cleanings, and preventive tune-ups for individual flats and societies.' }
    ]
  },
  {
    slug: 'ac-service-in-wagle-estate',
    name: 'Wagle Estate',
    zone: 'Thane West / Central',
    pincode: '400604',
    landmarks: ['Road No. 16', 'Road No. 22 IT Park', 'Passport Seva Kendra', 'Ashar IT Park'],
    description: 'Wagle Estate is Thane’s premier IT and commercial powerhouse, hosting hundreds of tech firms, BPOs, data hubs, clinics, and manufacturing offices.',
    localContext: 'Commercial HVAC, cassette units, ductables, and multi-split AC systems run continuously for 10-14 hours daily.',
    residentialContext: 'Large commercial IT parks, corporate towers, mixed retail plazas, and nearby staff residential quarters.',
    commonIssues: ['Cassette AC water overflow pump failure', 'Overworked commercial compressor overheating', 'Thermostat sensor drifts in server rooms', 'Airflow imbalance in office cabins'],
    nearbyLocalities: ['Wagle Industrial Estate', 'Louis Wadi', 'Teen Hath Naka', 'Panch Pakhadi', 'Shree Nagar'],
    faqs: [
      { question: 'Do you service commercial Cassette and Tower ACs in Wagle Estate?', answer: 'Yes, we provide specialized commercial AC maintenance, cassette drain pump repairs, and filter washing for IT offices and businesses in Wagle Estate.' },
      { question: 'Can you handle emergency AC breakdown for server rooms or office cabins in Wagle Estate?', answer: 'Yes, we offer priority commercial service visits for critical office workspaces and data server rooms.' },
      { question: 'Do you provide Annual Maintenance Contracts (AMC) in Wagle Estate?', answer: 'Yes, we offer tailored preventive AMC plans with scheduled quarterly maintenance and discounted breakdown support.' }
    ]
  },
  {
    slug: 'ac-service-in-wagle-industrial-estate',
    name: 'Wagle Industrial Estate',
    zone: 'Thane West / Central',
    pincode: '400604',
    landmarks: ['MIDC Zone', 'Checknaka border', 'Ambika Nagar access', 'Industrial Plots'],
    description: 'Wagle Industrial Estate comprises industrial enterprises, warehouses, printing presses, labs, and corporate offices.',
    localContext: 'Heavy industrial operations require robust AC maintenance to protect precision equipment, quality control labs, and staff offices from heat and dust.',
    residentialContext: 'Industrial and commercial establishments.',
    commonIssues: ['High ambient heat outdoor compressor cut-off', 'Industrial dust clogging condenser fins', 'Frequent gas refilling due to vibration stress'],
    nearbyLocalities: ['Wagle Estate', 'Louis Wadi', 'Teen Hath Naka', 'Kisan Nagar'],
    faqs: [
      { question: 'Do you service industrial and laboratory AC units in Wagle Industrial Estate?', answer: 'Yes, we service high-capacity split, ductable, and cassette ACs in industrial offices and testing facilities.' }
    ]
  },
  {
    slug: 'ac-service-in-louis-wadi',
    name: 'Louis Wadi',
    zone: 'Thane West / Central',
    pincode: '400604',
    landmarks: ['Eastern Express Highway junction', 'Nitin Company proximity', 'Panch Pakhadi border'],
    description: 'Louis Wadi is a prime residential and commercial junction along the Eastern Express Highway in Thane West.',
    localContext: 'High vehicular traffic creates fine carbon and dust deposits on outdoor condenser units, reducing cooling efficiency.',
    residentialContext: 'Gated residential complexes, high-rise apartments, and highway-facing corporate showrooms.',
    commonIssues: ['Outdoor unit fin clogging from highway emissions', 'Refrigerant pressure drop', 'Water leakage in interior walls'],
    nearbyLocalities: ['Panch Pakhadi', 'Teen Hath Naka', 'Wagle Estate', 'Khopat', 'Naupada'],
    faqs: [
      { question: 'Can you service highway-facing AC outdoor units in Louis Wadi?', answer: 'Yes, our jet wash removes highway particulate buildup and restores proper airflow through the condenser coil.' }
    ]
  },
  {
    slug: 'ac-service-in-teen-hath-naka',
    name: 'Teen Hath Naka',
    zone: 'Thane West / Central',
    pincode: '400602',
    landmarks: ['Flyover Junction', 'Eternity Mall', 'Highway Entry', 'Korum Mall access'],
    description: 'Teen Hath Naka is one of the busiest highway intersections in Thane, connecting Mumbai, Eastern Express Highway, and Ghodbunder Road.',
    localContext: 'Major commercial and residential node where reliable AC cooling is indispensable for retail malls, hotels, and apartments.',
    residentialContext: 'Apartment towers, commercial office buildings, and hotels.',
    commonIssues: ['Heavy dust intake on outdoor units', 'Capacitor wear from high ambient temperatures', 'Drainage pipe blockages'],
    nearbyLocalities: ['Panch Pakhadi', 'Louis Wadi', 'Naupada', 'Wagle Estate', 'Kopri'],
    faqs: [
      { question: 'How do I book AC repair near Teen Hath Naka?', answer: 'Call +91 7021455426 or use our online form for fast doorstep technician dispatch.' }
    ]
  },
  {
    slug: 'ac-service-in-kopri',
    name: 'Kopri',
    zone: 'Thane West / Central',
    pincode: '400603',
    landmarks: ['Kopri Bridge', 'Kopri Colony Market', 'Mith Bunder Road', 'Thane East Station Walkway'],
    description: 'Kopri is a bustling residential township located strategically near the creek and Thane East railway terminal.',
    localContext: 'Saline winds and humidity from nearby creek areas demand regular coil inspection to avoid refrigerant micro-leaks.',
    residentialContext: 'Cooperative housing societies, apartments, and local commercial shops.',
    commonIssues: ['Copper coil pinhole gas leaks', 'Window AC motor squeaking', 'Drain tray overflowing with water'],
    nearbyLocalities: ['Thane East', 'Chendani', 'Teen Hath Naka', 'Naupada'],
    faqs: [
      { question: 'Do you fix copper pipe gas leaks in Kopri?', answer: 'Yes, we perform nitrogen pressure leak testing, brazing repair, and full gas re-charging in Kopri.' }
    ]
  },
  {
    slug: 'ac-service-in-pokhran-road-no-1',
    name: 'Pokhran Road No. 1',
    zone: 'Thane West / Central',
    pincode: '400606',
    landmarks: ['Kores Compound', 'Cadbury Junction connectivity', 'Upvan Lake link', 'Vartak Nagar hub'],
    description: 'Pokhran Road No. 1 is an upscale residential arterial connecting central Thane to the lush foothills of Upvan.',
    localContext: 'Home to premier residential developments where homeowners demand high-standard clean servicing without water spillage on walls or wooden floors.',
    residentialContext: 'Luxury 2BHK, 3BHK, and 4BHK gated communities with 5-star inverter ACs.',
    commonIssues: ['Inverter sensor calibration', 'Condensate drainage choke in interior false ceilings', 'Air filter deep sanitization'],
    nearbyLocalities: ['Pokhran Road No. 2', 'Vartak Nagar', 'Upvan', 'Vasant Vihar', 'Samata Nagar'],
    faqs: [
      { question: 'Do your technicians use protective service kits to avoid mess in Pokhran Road No. 1 homes?', answer: 'Yes, we use waterproof service collection jackets and floor covers during indoor jet pump washes to keep your walls and floors clean.' }
    ]
  },
  {
    slug: 'ac-service-in-pokhran-road-no-2',
    name: 'Pokhran Road No. 2',
    zone: 'Thane West / Central',
    pincode: '400606 / 400610',
    landmarks: ['TCS Olympus Park', 'Bethany Hospital', 'Tata Serein', 'Voltas Compound', 'Gandhi Nagar'],
    description: 'Pokhran Road No. 2 is Thane’s premier luxury residential belt and corporate tech corridor, adjacent to the Yeoor hills.',
    localContext: 'Surrounded by green hills yet hosting large IT campuses like TCS Olympus, creating heavy demand for residential and corporate AC reliability.',
    residentialContext: 'High-end residential high-rises (Tata Serein, Kalpataru, Raymond Realty) and corporate offices.',
    commonIssues: ['Inverter AC communication errors', 'High-rise ledge outdoor unit servicing', 'Multi-split cooling efficiency balance'],
    nearbyLocalities: ['Pokhran Road No. 1', 'Vasant Vihar', 'Upvan', 'Gandhi Nagar', 'Manpada', 'Majiwada'],
    faqs: [
      { question: 'Can you service ACs in luxury high-rises on Pokhran Road No. 2?', answer: 'Yes, we specialize in high-end Inverter Split ACs, multi-split systems, and ductables for luxury towers on Pokhran Road No. 2.' },
      { question: 'Do you provide AC servicing for IT employees and corporate residences near TCS Olympus?', answer: 'Yes, we offer convenient evening and weekend service slots for working professionals.' }
    ]
  },
  {
    slug: 'ac-service-in-vasant-vihar',
    name: 'Vasant Vihar',
    zone: 'Thane West / Central',
    pincode: '400610',
    landmarks: ['Vasant Vihar High School', 'Club House', 'Amrapali Arcade', 'Lok Puram Circle'],
    description: 'Vasant Vihar is a premier, self-contained planned residential township in Thane West known for wide avenues and upscale residential societies.',
    localContext: 'Residents rely heavily on air conditioning for year-round comfort; prompt preventative maintenance prevents sudden summer breakdowns.',
    residentialContext: 'Large planned residential complexes, row houses, and commercial shopping plazas.',
    commonIssues: ['AC not cooling due to gas depletion', 'Indoor water leakage damaging wooden cabinetry', 'Remote control sensor or PCB failure'],
    nearbyLocalities: ['Pokhran Road No. 2', 'Upvan', 'Manpada', 'Gandhi Nagar', 'Kapurbawdi'],
    faqs: [
      { question: 'Do you provide Split AC gas filling in Vasant Vihar, Thane?', answer: 'Yes, we provide leak detection and authentic R32, R410A, and R22 gas filling with pressure verification.' },
      { question: 'How quickly can an AC technician come to Vasant Vihar?', answer: 'We have dedicated technicians assigned to Vasant Vihar and can typically arrange visits within 2 to 4 hours.' }
    ]
  },
  {
    slug: 'ac-service-in-upvan',
    name: 'Upvan',
    zone: 'Thane West / Central',
    pincode: '400606',
    landmarks: ['Upvan Lake', 'Yeoor Hills Gate', 'Sanskriti Arts Festival venue', 'Gavand Baug'],
    description: 'Upvan is a picturesque, nature-rich residential locality surrounding Upvan Lake at the foot of Yeoor Hills.',
    localContext: 'High natural humidity and lush greenery around the lake lead to rapid mold and fungal growth inside AC drain pans and blower wheels.',
    residentialContext: 'Premium lake-facing apartments, bungalows, and gated communities.',
    commonIssues: ['Fungal and mold odor in indoor AC unit', 'Drain pipe slime and clogging', 'Coil oxidation from moist evening air'],
    nearbyLocalities: ['Pokhran Road No. 1', 'Pokhran Road No. 2', 'Shivai Nagar', 'Vartak Nagar', 'Yeoor'],
    faqs: [
      { question: 'Why does my AC smell foul near Upvan Lake?', answer: 'The lake humidity fosters bacteria and mold in the cooling fins; our antimicrobial jet wash eliminates these smells completely.' },
      { question: 'Do you service ACs in Gavand Baug and Upvan lakeside towers?', answer: 'Yes, we provide full AC maintenance, repair, and installation services across Upvan.' }
    ]
  },
  {
    slug: 'ac-service-in-samata-nagar',
    name: 'Samata Nagar',
    zone: 'Thane West / Central',
    pincode: '400606',
    landmarks: ['Samata Nagar Post Office', 'Pokhran Road 1 access', 'Raymond Compound proximity'],
    description: 'Samata Nagar is an established residential neighborhood in Thane West with high-density residential housing.',
    localContext: 'Affordable and reliable AC repair is essential for families during peak summer and humid monsoon months.',
    residentialContext: 'Residential housing societies and redeveloped apartment blocks.',
    commonIssues: ['Capacitor failure', 'Low air delivery from dirty filters', 'AC not turning on'],
    nearbyLocalities: ['Vartak Nagar', 'Pokhran Road No. 1', 'Khopat', 'Louis Wadi'],
    faqs: [
      { question: 'Can you fix an AC that is not turning on in Samata Nagar?', answer: 'Yes, we test the power supply, MCB breaker, fuse, and PCB circuit board to restore operation.' }
    ]
  },
  {
    slug: 'ac-service-in-gandhi-nagar',
    name: 'Gandhi Nagar',
    zone: 'Thane West / Central',
    pincode: '400606',
    landmarks: ['Pokhran Road 2 corridor', 'Subhash Nagar connectivity', 'Cadbury boundary'],
    description: 'Gandhi Nagar is a centrally situated residential pocket linking Pokhran Road 2 to central transit routes.',
    localContext: 'High usage of 1.5-ton Split ACs in family homes requiring periodic servicing.',
    residentialContext: 'Cooperative housing societies and low to mid-rise apartments.',
    commonIssues: ['Cooling loss due to gas leakage', 'Water overflow in monsoon', 'Outdoor fan noise'],
    nearbyLocalities: ['Pokhran Road No. 2', 'Vasant Vihar', 'Samata Nagar', 'Vartak Nagar'],
    faqs: [
      { question: 'Do you charge a visit fee if we proceed with AC repair in Gandhi Nagar?', answer: 'Our inspection charges are transparent and adjusted against the total repair cost upon approval.' }
    ]
  },
  {
    slug: 'ac-service-in-lokmanya-nagar',
    name: 'Lokmanya Nagar',
    zone: 'Thane West / Central',
    pincode: '400606',
    landmarks: ['Bus Depot Pada No 4', 'Yeoor Foothills', 'Sawarkar Nagar proximity'],
    description: 'Lokmanya Nagar is a dense residential settlement nestled against the foothills of Yeoor in Thane West.',
    localContext: 'Residents need fast and dependable repair for Split and Window ACs during hot weather.',
    residentialContext: 'High-density residential housing, standalone apartments, and local shops.',
    commonIssues: ['Window AC motor humming', 'Capacitor burnout from voltage spikes', 'Filter dust blockage'],
    nearbyLocalities: ['Sawarkar Nagar', 'Vartak Nagar', 'Shivai Nagar', 'Upvan'],
    faqs: [
      { question: 'Do you service Window and Split ACs in Lokmanya Nagar Pada 3 & 4?', answer: 'Yes, we provide doorstep technician visits across all padas of Lokmanya Nagar.' }
    ]
  },
  {
    slug: 'ac-service-in-sawarkar-nagar',
    name: 'Sawarkar Nagar',
    zone: 'Thane West / Central',
    pincode: '400606',
    landmarks: ['Sawarkar Nagar Ground', 'Lokmanya Nagar link', 'Vartak Nagar access'],
    description: 'Sawarkar Nagar is a peaceful residential enclave in Thane West near Vartak Nagar.',
    localContext: 'Families require reliable AC servicing before summer to ensure steady cooling and low power bills.',
    residentialContext: 'Residential housing societies and multi-storey apartments.',
    commonIssues: ['Weak airflow from dirty fan blower', 'Compressor overheating', 'Thermostat sensor fault'],
    nearbyLocalities: ['Lokmanya Nagar', 'Vartak Nagar', 'Shivai Nagar', 'Pokhran Road 1'],
    faqs: [
      { question: 'Can I schedule an AC cleaning on Sundays in Sawarkar Nagar?', answer: 'Yes, our technicians are available on Saturdays and Sundays for convenient home servicing.' }
    ]
  },
  {
    slug: 'ac-service-in-manpada',
    name: 'Manpada',
    zone: 'Thane West / Central',
    pincode: '400607',
    landmarks: ['Neelkanth Woods', 'D-Mart Manpada', 'Happy Valley', 'Tikujiniwadi Road'],
    description: 'Manpada is an upscale residential hub in Thane West, featuring gated luxury complexes, scenic hill views, and retail hotspots.',
    localContext: 'High adoption of premium multi-split and inverter AC units across expansive apartments and penthouses.',
    residentialContext: 'Luxury high-rise residential towers (Neelkanth Woods, Happy Valley, Acme Ozone) and commercial shops.',
    commonIssues: ['Inverter PCB communication faults', 'Internal drain pipe clogging in false ceilings', 'Condenser coil dust coating'],
    nearbyLocalities: ['Tikujiniwadi', 'Chitalsar', 'Vasant Vihar', 'Kapurbawdi', 'Majiwada', 'Patlipada'],
    faqs: [
      { question: 'Do you service Inverter ACs in Neelkanth Woods and Happy Valley in Manpada?', answer: 'Yes, our technicians regularly service Inverter Split and Cassette ACs in all major Manpada societies.' },
      { question: 'Can you fix AC water leaking onto bedroom flooring in Manpada?', answer: 'Yes, we clear clogged drain lines and flush the drain tray with pressure pumps to stop all leakage.' }
    ]
  },
  {
    slug: 'ac-service-in-chitalsar',
    name: 'Chitalsar',
    zone: 'Thane West / Central',
    pincode: '400607',
    landmarks: ['Chitalsar Manpada Road', 'Glaxo proximity', 'Ghodbunder Road link'],
    description: 'Chitalsar is a fast-growing residential micro-market adjoining Manpada and Ghodbunder Road.',
    localContext: 'Surrounded by ongoing construction, making regular AC filter and coil washing essential for optimal cooling.',
    residentialContext: 'Modern residential complexes and standalone apartments.',
    commonIssues: ['Heavy construction dust settling on outdoor coils', 'Gas leakage at copper joints', 'Compressor capacitor failure'],
    nearbyLocalities: ['Manpada', 'Tikujiniwadi', 'Kapurbawdi', 'Brahmand', 'Patlipada'],
    faqs: [
      { question: 'How often should I clean my AC filters in Chitalsar due to construction dust?', answer: 'We recommend cleaning mesh filters every 2 to 3 weeks and scheduling a professional jet wash every 3 to 4 months.' }
    ]
  },
  {
    slug: 'ac-service-in-tikujiniwadi',
    name: 'Tikujiniwadi',
    zone: 'Thane West / Central',
    pincode: '400607',
    landmarks: ['Tikuji-Ni-Wadi Amusement Park', 'Yeoor Hills view', 'Manpada Road'],
    description: 'Tikujiniwadi is a scenic green residential zone adjacent to the famous theme park and Yeoor hills.',
    localContext: 'High greenery and afternoon sun exposure create demand for powerful, energy-efficient cooling.',
    residentialContext: 'Gated villa communities, row houses, and modern high-rise apartments.',
    commonIssues: ['Moisture and mold in indoor cooling coil', 'Inverter compressor modulation faults', 'Drain pipe blockage'],
    nearbyLocalities: ['Manpada', 'Chitalsar', 'Upvan', 'Vasant Vihar'],
    faqs: [
      { question: 'Do you service ACs in residential bungalows and towers in Tikujiniwadi?', answer: 'Yes, we service Split ACs, multi-splits, and cassette ACs for both bungalows and high-rise flats in Tikujiniwadi.' }
    ]
  },

  // 3. GHODBUNDER ROAD SIDE (18 LOCALITIES)
  {
    slug: 'ac-service-in-kapurbawdi',
    name: 'Kapurbawdi',
    zone: 'Ghodbunder Road',
    pincode: '400607',
    landmarks: ['Kapurbawdi Junction Flyover', 'Big Centre', 'Highland Park', 'Cinepolis Mall'],
    description: 'Kapurbawdi is a vital junction connecting Central Thane, Ghodbunder Road, and Bhiwandi/Agra Road, featuring large residential townships and commercial plazas.',
    localContext: 'High vehicular movement at the junction creates soot and dust buildup on outdoor units, requiring regular high-pressure foam washes.',
    residentialContext: 'High-rise residential towers (Highland Park, Ashar Metro Towers) and commercial centers.',
    commonIssues: ['Junction soot clogging outdoor condenser fins', 'Low cooling due to restricted airflow', 'Water leaking into false ceiling'],
    nearbyLocalities: ['Majiwada', 'Balkum', 'Dhokali', 'Manpada', 'Vasant Vihar', 'Kolshet'],
    faqs: [
      { question: 'Do you provide AC repair in Kapurbawdi?', answer: 'Yes. AC Services in Thane provides AC inspection, repair, gas filling, and maintenance services for customers in Kapurbawdi, subject to technician availability and service requirements.' },
      { question: 'Can I book a technician for Split AC servicing in Kapurbawdi online?', answer: 'Yes, you can submit your details online or call +91 7021455426 to book an appointment.' },
      { question: 'What AC problems can you inspect in Kapurbawdi apartments?', answer: 'We inspect cooling loss, gas leaks, indoor water dripping, compressor tripping, unusual fan noises, and electrical PCB issues.' },
      { question: 'Do you service Daikin and Voltas ACs in Kapurbawdi?', answer: 'Yes, we service all brands including Daikin, Voltas, LG, Bluestar, Samsung, Hitachi, and Mitsubishi.' },
      { question: 'Do you provide emergency AC repair in Kapurbawdi during summer?', answer: 'Yes, we prioritize same-day emergency inspection slots across Kapurbawdi during peak summer.' }
    ]
  },
  {
    slug: 'ac-service-in-majiwada',
    name: 'Majiwada',
    zone: 'Ghodbunder Road',
    pincode: '400601 / 400608',
    landmarks: ['Majiwada Junction', 'Lodha Paradise', 'Rustomjee Urbania', 'Viviana Mall proximity'],
    description: 'Majiwada is a prime crossroads and residential powerhouse in Thane, home to mega townships, corporate hubs, and retail centers.',
    localContext: 'Heavy density of modern 2BHK, 3BHK, and 4BHK apartments utilizing high-efficiency inverter split systems.',
    residentialContext: 'Major residential complexes (Lodha Paradise, Ashar, Sheth Avalon) and highway corporate parks.',
    commonIssues: ['Inverter PCB circuit faults', 'Outdoor unit airflow choking in multi-story duct shafts', 'Refrigerant micro-leaks'],
    nearbyLocalities: ['Kapurbawdi', 'Balkum', 'Dhokali', 'Rustomjee Urbania', 'Panch Pakhadi', 'Thane West'],
    faqs: [
      { question: 'Do you service ACs in Lodha Paradise and Majiwada high-rise towers?', answer: 'Yes, our technicians frequently service Split and Inverter ACs in all major Majiwada residential societies.' },
      { question: 'How do you clean outdoor AC units installed in building duct shafts in Majiwada?', answer: 'We use compact high-pressure jet pumps with long wand nozzles and safety harnesses for narrow shaft spaces.' }
    ]
  },
  {
    slug: 'ac-service-in-balkum',
    name: 'Balkum',
    zone: 'Ghodbunder Road',
    pincode: '400608',
    landmarks: ['Dosti West County', 'Piramal Vaikunth', 'Balkum Naka', 'Kalwa Creek link'],
    description: 'Balkum is a rapidly expanding luxury residential destination in Thane featuring expansive township developments.',
    localContext: 'Large modern gated complexes with state-of-the-art inverter AC installations and smart climate controls.',
    residentialContext: 'High-rise luxury townships (Dosti West County, Piramal Vaikunth, Runwal Eirene).',
    commonIssues: ['False ceiling condensate drain clogging', 'Inverter PCB error codes', 'Gas pressure drop during hot summers'],
    nearbyLocalities: ['Majiwada', 'Dhokali', 'Kolshet', 'Kapurbawdi', 'Kalwa'],
    faqs: [
      { question: 'Do you service ACs in Dosti West County and Piramal Vaikunth in Balkum?', answer: 'Yes, we provide doorstep Split AC maintenance, repair, and installation for residents of Balkum townships.' },
      { question: 'Can you install copper piping for new ACs in Balkum flats?', answer: 'Yes, we install high-grade insulated copper pipes, drain pipes, and wiring for new residential setups.' }
    ]
  },
  {
    slug: 'ac-service-in-dhokali',
    name: 'Dhokali',
    zone: 'Ghodbunder Road',
    pincode: '400607 / 400608',
    landmarks: ['Highland Park', 'Pride Palms', 'Kolshet Road link', 'Shriram Temple'],
    description: 'Dhokali is a flourishing residential sector situated between Majiwada and Kolshet Road, lined with modern gated communities.',
    localContext: 'Suburban development with strong demand for routine pre-summer AC tune-ups and coil deep washing.',
    residentialContext: 'Multi-storey gated societies and modern apartment towers.',
    commonIssues: ['Water dripping from indoor AC unit', 'Low cooling due to choked air filters', 'Capacitor breakdown'],
    nearbyLocalities: ['Kolshet', 'Balkum', 'Majiwada', 'Kapurbawdi', 'Manpada'],
    faqs: [
      { question: 'Do you provide same-day AC service in Dhokali, Thane?', answer: 'Yes, we offer fast doorstep appointments across Dhokali for repairs, gas charging, and servicing.' }
    ]
  },
  {
    slug: 'ac-service-in-kolshet',
    name: 'Kolshet',
    zone: 'Ghodbunder Road',
    pincode: '400607',
    landmarks: ['Lodha Amara', 'Kalpataru Sunrise', 'Kolshet Creek', 'Grand Central Park'],
    description: 'Kolshet is a premier residential destination in Thane West, home to Thane Grand Central Park and massive residential townships.',
    localContext: 'Proximity to the creek and open parklands means air conditioning runs continuously in summer, requiring regular filter wash and gas pressure checks.',
    residentialContext: 'Large luxury townships with thousands of modern 1BHK, 2BHK, 3BHK, and deck apartments.',
    commonIssues: ['High runtime compressor wear', 'Inverter electronic sensor issues', 'Drain line blockages in multi-story apartments'],
    nearbyLocalities: ['Kolshet Road', 'Lodha Amara', 'Dhokali', 'Balkum', 'Brahmand', 'Kapurbawdi'],
    faqs: [
      { question: 'Do you provide AC servicing in Kolshet residential towers?', answer: 'Yes, we are the trusted AC service provider for thousands of families living in Kolshet complexes.' },
      { question: 'Can you fix AC not cooling in Kolshet during peak summer heat?', answer: 'Yes, our technician tests gas pressure, compressor draw, and coil cleanout to restore maximum cooling.' }
    ]
  },
  {
    slug: 'ac-service-in-kolshet-road',
    name: 'Kolshet Road',
    zone: 'Ghodbunder Road',
    pincode: '400607',
    landmarks: ['Grand Central Park entrance', 'Everest World', 'Lodha Sterling', 'Airforce Station'],
    description: 'Kolshet Road is a major residential spine hosting luxury residential developments, open green spaces, and retail centers.',
    localContext: 'High concentration of modern multi-split and inverter air conditioning units.',
    residentialContext: 'Luxury gated townships and boutique apartment communities.',
    commonIssues: ['Micro gas leaks', 'Sensor calibration faults', 'Indoor water overflow'],
    nearbyLocalities: ['Kolshet', 'Dhokali', 'Balkum', 'Kapurbawdi', 'Brahmand'],
    faqs: [
      { question: 'Do you service Multi-Split and Inverter ACs on Kolshet Road?', answer: 'Yes, we specialize in advanced inverter multi-split system diagnostic and servicing.' }
    ]
  },
  {
    slug: 'ac-service-in-brahmand',
    name: 'Brahmand',
    zone: 'Ghodbunder Road',
    pincode: '400607',
    landmarks: ['Brahmand Phase 1 to 8', 'D-Mart Brahmand', 'Regency Heights', 'Hiranandani Estate border'],
    description: 'Brahmand is a well-established, sprawling residential township along Ghodbunder Road with over 8 phases and bustling markets.',
    localContext: 'High density of residential households requiring regular servicing, capacitor checks, and gas recharging before hot summer months.',
    residentialContext: 'Established multi-phase cooperative societies and modern high-rise additions.',
    commonIssues: ['Aging copper flare leaks', 'Indoor blower fan squeaks', 'Capacitor failure', 'Water drainage clogging'],
    nearbyLocalities: ['Hiranandani Estate', 'Patlipada', 'Kolshet', 'Manpada', 'Kavesar'],
    faqs: [
      { question: 'Do you service all phases of Brahmand in Thane?', answer: 'Yes, our technicians cover Phase 1 through Phase 8 and surrounding complexes daily.' },
      { question: 'Can you refill R32 and R410A gas for Split ACs in Brahmand?', answer: 'Yes, we provide pressure-tested authentic gas charging with nitrogen leak checks.' }
    ]
  },
  {
    slug: 'ac-service-in-hiranandani-estate',
    name: 'Hiranandani Estate',
    zone: 'Ghodbunder Road',
    pincode: '400607',
    landmarks: ['The Walk High Street', 'Rodas Enclave', 'Arcadia Shopping Centre', 'TCS Olympus Annex'],
    description: 'Hiranandani Estate is Thane’s premier neo-classical township, hosting luxury towers, high-street retail, and corporate office parks.',
    localContext: 'Architectural facade restrictions and high-rise ledge configurations require specialized, clean, mess-free indoor jet service and outdoor handling.',
    residentialContext: 'Luxury high-rise apartments, penthouses, and corporate offices utilizing inverter split and VRV systems.',
    commonIssues: ['Inverter PCB communication errors', 'Concealed copper line insulation decay', 'Drainage line backflow in high-rises', 'Filter clogging from high airflow use'],
    nearbyLocalities: ['Hiranandani Meadows', 'Brahmand', 'Patlipada', 'Waghbil', 'Kavesar', 'Ghodbunder Road'],
    faqs: [
      { question: 'Do your technicians follow society guidelines and cleanliness protocols in Hiranandani Estate?', answer: 'Yes, our technicians carry floor covers, wear shoe protectors, and use high-end collection jackets for a clean, mess-free service.' },
      { question: 'Can you service Inverter ACs and VRV units in Rodas Enclave and Hiranandani Estate?', answer: 'Yes, we are highly experienced in servicing luxury brand inverter and multi-split ACs.' },
      { question: 'How can I book a weekend AC servicing slot in Hiranandani Estate?', answer: 'Call +91 7021455426 or reserve your preferred date and time online for weekend appointments.' }
    ]
  },
  {
    slug: 'ac-service-in-hiranandani-meadows',
    name: 'Hiranandani Meadows',
    zone: 'Ghodbunder Road',
    pincode: '400610',
    landmarks: ['Meadows Club House', 'Pokhran Road 2 connection', 'Vasant Vihar border', 'Gladiola & Magnolia Towers'],
    description: 'Hiranandani Meadows is an upscale, picturesque residential enclave nestled between Pokhran Road 2 and Manpada.',
    localContext: 'Premium residences with concealed air conditioning ducting and multi-split units requiring meticulous care.',
    residentialContext: 'Luxury residential towers and penthouses.',
    commonIssues: ['Concealed drain line algae blockage', 'Inverter compressor sensor issues', 'Fine dust on evaporator fins'],
    nearbyLocalities: ['Hiranandani Estate', 'Vasant Vihar', 'Pokhran Road No. 2', 'Manpada', 'Gandhi Nagar'],
    faqs: [
      { question: 'Do you provide specialized Split AC repair in Hiranandani Meadows?', answer: 'Yes, we provide comprehensive diagnostics, PCB repairs, and deep foam washing in Hiranandani Meadows.' }
    ]
  },
  {
    slug: 'ac-service-in-patlipada',
    name: 'Patlipada',
    zone: 'Ghodbunder Road',
    pincode: '400607',
    landmarks: ['Patlipada Flyover', 'Rosa Gardenia', 'D-Mart proximity', 'Ghodbunder Highway'],
    description: 'Patlipada is a major junction and residential zone on Ghodbunder Road, connecting Manpada, Brahmand, and Waghbil.',
    localContext: 'Highway dust exposure requires regular outdoor coil jet pump washing to avoid compressor overheating.',
    residentialContext: 'Gated high-rise complexes and highway-facing commercial showrooms.',
    commonIssues: ['Highway dust choking condenser coils', 'Compressor tripping on high thermal load', 'Refrigerant gas leakage'],
    nearbyLocalities: ['Manpada', 'Brahmand', 'Waghbil', 'Hiranandani Estate', 'Kavesar'],
    faqs: [
      { question: 'How quickly can I get AC gas refilling in Patlipada?', answer: 'We offer same-day gas filling service with leak testing across Patlipada.' }
    ]
  },
  {
    slug: 'ac-service-in-waghbil',
    name: 'Waghbil',
    zone: 'Ghodbunder Road',
    pincode: '400607 / 400615',
    landmarks: ['Waghbil Naka Flyover', 'Vijay Nagari', 'Suraj Water Park link', 'Ghodbunder Highway'],
    description: 'Waghbil is a thriving residential sector on Ghodbunder Road with major complexes like Vijay Nagari.',
    localContext: 'Heavy residential density with continuous summer cooling demands.',
    residentialContext: 'Large multi-tower gated societies and commercial retail shops.',
    commonIssues: ['Water dripping from indoor unit', 'Low gas pressure', 'Blower fan noise'],
    nearbyLocalities: ['Patlipada', 'Kavesar', 'Brahmand', 'Kasarvadavali', 'Hiranandani Estate'],
    faqs: [
      { question: 'Do you service ACs in Vijay Nagari and Waghbil societies?', answer: 'Yes, our technicians visit Waghbil daily for routine servicing and repairs.' }
    ]
  },
  {
    slug: 'ac-service-in-kavesar',
    name: 'Kavesar',
    zone: 'Ghodbunder Road',
    pincode: '400615',
    landmarks: ['Suraj Water Park proximity', 'Rosa Classico', 'Ghodbunder Highway corridor'],
    description: 'Kavesar is a scenic residential pocket situated between Waghbil and Kasarvadavali on Ghodbunder Road.',
    localContext: 'Residents enjoy quiet surroundings but need regular AC maintenance due to high summer humidity.',
    residentialContext: 'Modern residential towers and township complexes.',
    commonIssues: ['Indoor coil mold growth', 'Capacitor failure', 'Drain pipe choking'],
    nearbyLocalities: ['Waghbil', 'Kasarvadavali', 'Brahmand', 'Patlipada', 'Anand Nagar'],
    faqs: [
      { question: 'Can you fix AC water leakage inside bedrooms in Kavesar?', answer: 'Yes, we flush the drain tray and unclog the exterior drain hose to fix water leaks.' }
    ]
  },
  {
    slug: 'ac-service-in-kasarvadavali',
    name: 'Kasarvadavali',
    zone: 'Ghodbunder Road',
    pincode: '400615',
    landmarks: ['Kasarvadavali Metro Station area', 'Hypercity / Big Shopping Centre', 'AP Shah Institute', 'Ghodbunder Road'],
    description: 'Kasarvadavali is a bustling commercial and residential hub on Ghodbunder Road, featuring colleges, hypermarkets, and large residential complexes.',
    localContext: 'Rapid infrastructure expansion creates dust exposure that necessitates frequent air filter and condenser servicing.',
    residentialContext: 'High-rise residential townships, student hostels, and retail commercial complexes.',
    commonIssues: ['Dust accumulation on outdoor heat exchanger', 'Inverter PCB voltage fluctuations', 'Capacitor replacement'],
    nearbyLocalities: ['Kavesar', 'Anand Nagar', 'Owale', 'Bhayandarpada', 'Waghbil'],
    faqs: [
      { question: 'Do you provide Split AC installation in Kasarvadavali new apartments?', answer: 'Yes, we provide complete professional installation with vacuuming and bracket mounting.' },
      { question: 'How much does AC gas charging cost in Kasarvadavali?', answer: 'Pricing depends on the refrigerant type (R32, R410A, R22) and leak testing; we offer clear, upfront estimates.' }
    ]
  },
  {
    slug: 'ac-service-in-anand-nagar',
    name: 'Anand Nagar',
    zone: 'Ghodbunder Road',
    pincode: '400615',
    landmarks: ['Anand Nagar Bus Depot', 'Ghodbunder Road checkpost corridor', 'Cosmos Lounge area'],
    description: 'Anand Nagar is a major residential hub on northern Ghodbunder Road with dozens of multi-storey residential towers.',
    localContext: 'High concentration of families using Split and Inverter AC units daily.',
    residentialContext: 'Multi-storey cooperative housing societies and high-rise apartments.',
    commonIssues: ['Low cooling during humid months', 'Indoor unit water dripping', 'Remote sensor failure'],
    nearbyLocalities: ['Kasarvadavali', 'Owale', 'Bhayandarpada', 'Gaimukh'],
    faqs: [
      { question: 'Can I book doorstep AC repair in Anand Nagar, Ghodbunder Road?', answer: 'Yes, our technicians are stationed nearby for rapid response across Anand Nagar.' }
    ]
  },
  {
    slug: 'ac-service-in-gaimukh',
    name: 'Gaimukh',
    zone: 'Ghodbunder Road',
    pincode: '400615',
    landmarks: ['Gaimukh Waterfront / Chowpatty', 'Gaimukh Creek', 'Vasai Creek outlook', 'Ghodbunder Toll Link'],
    description: 'Gaimukh is situated along the scenic waterfront of Vasai Creek at the northern boundary of Thane.',
    localContext: 'Creek breeze and humidity accelerate outdoor unit corrosion, requiring anti-rust checks and high-pressure washing.',
    residentialContext: 'Waterfront residential societies, restaurants, and resort facilities.',
    commonIssues: ['Corrosion on outdoor condenser coils', 'Gas leakage from saline air exposure', 'Blower motor moisture faults'],
    nearbyLocalities: ['Anand Nagar', 'Bhayandarpada', 'Owale', 'Ghodbandar'],
    faqs: [
      { question: 'Do you offer anti-corrosive treatment or coil care in Gaimukh near the creek?', answer: 'Yes, we clean and inspect coastal outdoor units to prevent premature rust and refrigerant leakage.' }
    ]
  },
  {
    slug: 'ac-service-in-owale',
    name: 'Owale',
    zone: 'Ghodbunder Road',
    pincode: '400615',
    landmarks: ['Owale Signal', 'Purandare Hospital', 'Ghodbunder Road corridor'],
    description: 'Owale is a developing residential locality on Ghodbunder Road surrounded by hills and new residential towers.',
    localContext: 'Rapid residential growth with high demand for new AC installation and routine jet servicing.',
    residentialContext: 'New high-rise residential towers and standalone buildings.',
    commonIssues: ['Dust buildup from ongoing development', 'Capacitor wear', 'Slow cooling performance'],
    nearbyLocalities: ['Kasarvadavali', 'Anand Nagar', 'Bhayandarpada', 'Gaimukh'],
    faqs: [
      { question: 'Do you provide AC jet pump servicing in Owale, Thane?', answer: 'Yes, we provide deep jet washing with foam spray for Split and Inverter ACs in Owale.' }
    ]
  },
  {
    slug: 'ac-service-in-bhayandarpada',
    name: 'Bhayandarpada',
    zone: 'Ghodbunder Road',
    pincode: '400615',
    landmarks: ['Rosa Bella', 'Cosmos Jewels', 'Ghodbunder Highway'],
    description: 'Bhayandarpada is an emerging residential belt on Ghodbunder Road with major township complexes.',
    localContext: 'Modern residential communities requiring dependable pre-summer servicing and gas pressure checks.',
    residentialContext: 'Gated residential townships (Cosmos Jewels, Rosa Bella) and commercial shops.',
    commonIssues: ['Refrigerant pressure drop', 'Outdoor fan motor squeaking', 'Water leakage in rooms'],
    nearbyLocalities: ['Owale', 'Anand Nagar', 'Kasarvadavali', 'Gaimukh', 'Ghodbandar'],
    faqs: [
      { question: 'Can I get AC repair in Cosmos Jewels and Bhayandarpada?', answer: 'Yes, our technicians service all residential societies across Bhayandarpada.' }
    ]
  },
  {
    slug: 'ac-service-in-ghodbandar',
    name: 'Ghodbandar',
    zone: 'Ghodbunder Road',
    pincode: '400615',
    landmarks: ['Ghodbunder Fort area', 'Creek viewpoint', 'Northern highway stretch'],
    description: 'Ghodbandar is the historic northern coastal tip of Thane, overlooking the creek and surrounding hills.',
    localContext: 'Coastal humidity requires regular coil care and anti-rust checks for optimal AC lifespan.',
    residentialContext: 'Residential houses, resorts, and commercial highway stops.',
    commonIssues: ['Coil corrosion', 'Gas depletion', 'Thermostat sensor errors'],
    nearbyLocalities: ['Gaimukh', 'Bhayandarpada', 'Owale', 'Anand Nagar'],
    faqs: [
      { question: 'Do you provide doorstep AC repair in Ghodbandar village and fort area?', answer: 'Yes, we send certified technicians for all Split and Window AC repairs in Ghodbandar.' }
    ]
  },

  // 4. THANE EAST / KALWA SIDE (6 LOCALITIES)
  {
    slug: 'ac-service-in-kisan-nagar',
    name: 'Kisan Nagar',
    zone: 'Thane East & Kalwa',
    pincode: '400604',
    landmarks: ['Kisan Nagar No. 1, 2, 3', 'Wagle Estate border', 'Road No. 16 access'],
    description: 'Kisan Nagar is a densely populated residential neighborhood situated between Wagle Estate and Thane East.',
    localContext: 'High density of Split and Window AC installations requiring budget-friendly, dependable repair and maintenance.',
    residentialContext: 'Residential housing societies, multi-storey buildings, and retail markets.',
    commonIssues: ['Window AC vibrating noise', 'Capacitor burnout from summer load', 'Gas leaks in older copper lines'],
    nearbyLocalities: ['Wagle Estate', 'Shree Nagar', 'Chendani', 'Kopri', 'Kalwa'],
    faqs: [
      { question: 'Do you repair Window ACs in Kisan Nagar 1, 2, and 3?', answer: 'Yes, we repair and service Window and Split ACs across all parts of Kisan Nagar.' },
      { question: 'How much do you charge for AC capacitor replacement in Kisan Nagar?', answer: 'We offer standard, upfront rates for capacitors based on rating (36/45/50/60 MFD) with genuine replacement parts.' }
    ]
  },
  {
    slug: 'ac-service-in-chendani',
    name: 'Chendani',
    zone: 'Thane East & Kalwa',
    pincode: '400601 / 400603',
    landmarks: ['Chendani Koliwada', 'Thane Station East exit', 'CIDCO bus terminal proximity'],
    description: 'Chendani is a historic locality situated close to Thane Railway Station, blending traditional communities with modern housing.',
    localContext: 'Proximity to transit hubs and coastal air means air filters need regular clearing.',
    residentialContext: 'Residential housing societies and commercial establishments.',
    commonIssues: ['Dust clogged air filters', 'Water dripping from AC indoor unit', 'Low cooling'],
    nearbyLocalities: ['Kopri', 'Thane East', 'Charai', 'Naupada', 'Koliwada'],
    faqs: [
      { question: 'Can you provide emergency AC repair near Thane Station East in Chendani?', answer: 'Yes, our local technicians provide fast doorstep service in Chendani.' }
    ]
  },
  {
    slug: 'ac-service-in-daighar',
    name: 'Daighar',
    zone: 'Thane East & Kalwa',
    pincode: '400612',
    landmarks: ['Shilphata-Kalyan Highway link', 'Daighar Naka', 'Palava proximity'],
    description: 'Daighar is a developing residential and commercial zone connecting Thane to Kalyan-Shilphata corridor.',
    localContext: 'Fast-growing residential developments requiring complete AC installation, copper piping, and pre-monsoon servicing.',
    residentialContext: 'New residential complexes, commercial showrooms, and standalone buildings.',
    commonIssues: ['High ambient heat compressor tripping', 'Gas leakage from road vibration stress', 'Airflow restriction from construction dust'],
    nearbyLocalities: ['Kalwa', 'Kisan Nagar', 'Rustomjee Urbania', 'Runwal Garden'],
    faqs: [
      { question: 'Do you service ACs in Daighar and Shilphata road area?', answer: 'Yes, we provide full AC service and repair across Daighar and adjoining sectors.' }
    ]
  },
  {
    slug: 'ac-service-in-koliwada',
    name: 'Koliwada',
    zone: 'Thane East & Kalwa',
    pincode: '400601',
    landmarks: ['Thane Creek waterfront', 'Chendani Koliwada', 'Old Thane settlement'],
    description: 'Koliwada is a traditional coastal residential settlement along the Thane Creek waterfront.',
    localContext: 'Saline creek humidity makes anti-rust checks and jet pump cleaning essential for preserving AC condenser coils.',
    residentialContext: 'Cooperative housing societies and independent residences.',
    commonIssues: ['Coil corrosion', 'Gas leaks', 'Indoor blower dampness'],
    nearbyLocalities: ['Chendani', 'Kopri', 'Thane East', 'Kalwa'],
    faqs: [
      { question: 'Do you fix copper pipe gas leaks in Koliwada, Thane?', answer: 'Yes, we provide nitrogen pressure leak testing, brazing, and gas recharging.' }
    ]
  },
  {
    slug: 'ac-service-in-raghunath-nagar',
    name: 'Raghunath Nagar',
    zone: 'Thane East & Kalwa',
    pincode: '400604',
    landmarks: ['Wagle Estate proximity', 'Raghunath Nagar Ground', 'Bhatia Compound'],
    description: 'Raghunath Nagar is a residential neighborhood bordering Wagle Estate and Thane West.',
    localContext: 'Families rely on timely AC servicing to maintain energy efficiency and cool comfort.',
    residentialContext: 'Residential apartment societies and small local businesses.',
    commonIssues: ['Capacitor failure', 'AC not cooling properly', 'Water dripping inside rooms'],
    nearbyLocalities: ['Wagle Estate', 'Shree Nagar', 'Kisan Nagar', 'Louis Wadi'],
    faqs: [
      { question: 'Do you provide Split AC servicing in Raghunath Nagar?', answer: 'Yes, we offer complete jet pump cleaning, gas checks, and electrical diagnostic service.' }
    ]
  },
  {
    slug: 'ac-service-in-kalwa',
    name: 'Kalwa',
    zone: 'Thane East & Kalwa',
    pincode: '400605',
    landmarks: ['Kalwa Railway Station', 'Old & New Kalwa Bridge', 'Chatrapati Shivaji Maharaj Hospital', 'Manisha Nagar'],
    description: 'Kalwa is a major satellite township directly across the Thane Creek, featuring bustling residential colonies, healthcare institutions, and commercial markets.',
    localContext: 'High population density with extensive use of Split and Window AC units in both residential societies and healthcare facilities.',
    residentialContext: 'High-density residential apartments, independent housing societies, and clinics/hospitals.',
    commonIssues: ['Window AC compressor humming without starting', 'Split AC gas leakage at flare joints', 'Indoor unit water dripping due to algae choked drain pipe', 'Low cooling in top-floor flats'],
    nearbyLocalities: ['Thane East', 'Kopri', 'Balkum', 'Kisan Nagar', 'Chendani', 'Rustomjee Urbania'],
    faqs: [
      { question: 'Do you provide doorstep AC repair in Kalwa West and East?', answer: 'Yes, we provide prompt doorstep AC servicing and repair across all areas of Kalwa including Manisha Nagar and Kharegaon.' },
      { question: 'Can you fix Split AC water leaking inside the room in Kalwa?', answer: 'Yes, our technician flushes out the blocked drain pipe and levels the indoor unit to stop water leaks permanently.' },
      { question: 'What is the cost of AC servicing in Kalwa?', answer: 'Our standard jet pump foam servicing starts at transparent rates with no hidden charges.' },
      { question: 'Do you repair Inverter ACs in Kalwa residential societies?', answer: 'Yes, we repair Inverter AC circuit boards (PCB), sensors, BLDC fan motors, and compressors.' },
      { question: 'How do I book an AC technician visit in Kalwa?', answer: 'You can book instantly by calling +91 7021455426 or using our WhatsApp booking link.' }
    ]
  },

  // 5. PREMIUM RESIDENTIAL / PROJECT AREAS (4 PROJECTS)
  {
    slug: 'ac-service-in-runwal-garden',
    name: 'Runwal Garden',
    zone: 'Premium Project Areas',
    pincode: '400612',
    landmarks: ['Runwal Garden City Township', 'Kalyan-Shil Corridor', 'Central Park Runwal', 'Township Clubhouse'],
    description: 'Runwal Garden is a massive 115-acre integrated residential township with modern high-rise towers, multi-tier security, and clubhouse amenities.',
    localContext: 'Modern multi-story apartment layouts with dedicated AC ledges requiring professional, safety-compliant servicing and certified inverter care.',
    residentialContext: 'Premium 1BHK, 2BHK, and 3BHK modern high-rise apartments and penthouses.',
    commonIssues: ['Inverter BLDC motor communication faults', 'Internal drain line choking in concealed bathroom drops', 'High summer load cooling drop', 'Filter dust buildup from developing township areas'],
    nearbyLocalities: ['Daighar', 'Rustomjee Urbania', 'Lodha Amara', 'Kalwa', 'Thane West'],
    faqs: [
      { question: 'Do your technicians service ACs inside Runwal Garden township?', answer: 'Yes, our technicians routinely service Split and Inverter ACs for residents throughout Runwal Garden.' },
      { question: 'Do you handle Inverter Split AC maintenance in Runwal Garden apartments?', answer: 'Yes, we provide full jet pump deep wash, electrical sensor inspection, and gas pressure verification.' },
      { question: 'Can you resolve AC water leakage damaging walls in Runwal Garden?', answer: 'Yes, we use pressure flushing to unclog concealed drain lines and ensure smooth water drainage.' },
      { question: 'Do you provide weekend AC service slots for Runwal Garden residents?', answer: 'Yes, we offer flexible weekend and evening slots to accommodate working professionals.' },
      { question: 'What brands of ACs do you service in Runwal Garden?', answer: 'We service all major brands including Daikin, LG, Voltas, Bluestar, Samsung, Panasonic, and Hitachi.' }
    ]
  },
  {
    slug: 'ac-service-in-rustomjee-urbania',
    name: 'Rustomjee Urbania',
    zone: 'Premium Project Areas',
    pincode: '400601',
    landmarks: ['Rustomjee Azziano', 'Rustomjee Aurelia', 'Rustomjee Urbania Clubhouse', 'Majiwada Junction proximity'],
    description: 'Rustomjee Urbania is a signature 127-acre mega residential township in Majiwada, Thane, renowned for its architectural high-rises and sustainable design.',
    localContext: 'Multi-storey towers with specific society security protocols and ledge configurations requiring expert technicians equipped with high-rise safety gear.',
    residentialContext: 'Luxury 2BHK and 3BHK high-rise residential towers (Azziano, Aurelia, Atelier).',
    commonIssues: ['High-rise wind resistance causing outdoor fan strain', 'Inverter error codes (E1/E6/sensor errors)', 'Concealed copper line gas pressure drop', 'Drainage line microbial slime buildup'],
    nearbyLocalities: ['Majiwada', 'Balkum', 'Kapurbawdi', 'Kalwa', 'Lodha Amara', 'Thane West'],
    faqs: [
      { question: 'Do you provide AC service for residents in Rustomjee Azziano and Aurelia?', answer: 'Yes, our certified technicians regularly service Split and Inverter ACs across all towers of Rustomjee Urbania.' },
      { question: 'How do you clean AC indoor units without spilling water on wooden flooring in Urbania flats?', answer: 'We utilize specialized waterproof funnel jackets with drain tubes that guide all wash runoff directly into containers.' },
      { question: 'Can you diagnose Inverter AC PCB sensor issues in Rustomjee Urbania?', answer: 'Yes, we carry digital multi-meters and diagnostic tools to troubleshoot electronic inverter boards on-site.' },
      { question: 'Do you provide AC gas charging with nitrogen testing in Rustomjee Urbania?', answer: 'Yes, we test system integrity with nitrogen pressure before refilling authentic R32 or R410A refrigerant.' }
    ]
  },
  {
    slug: 'ac-service-in-lodha-amara',
    name: 'Lodha Amara',
    zone: 'Premium Project Areas',
    pincode: '400607',
    landmarks: ['Amara 40-Acre Forest Oasis', 'Kolshet Road', 'Grand Central Park proximity', 'Amara Clubhouse'],
    description: 'Lodha Amara is a flagship 40-acre residential township on Kolshet Road, Thane, featuring thousands of modern high-rise apartments and verdant canopy landscaping.',
    localContext: 'Residents expect whisper-quiet cooling performance, rapid same-day response, and highly professional service without disturbance.',
    residentialContext: 'Modern 1BHK, 2BHK, and 3BHK high-rise towers with energy-efficient 5-star inverter ACs.',
    commonIssues: ['Fine dust and pollen accumulation on indoor cooling fins', 'Inverter compressor modulation lag during humid afternoons', 'Condensate drainage trap blockages in modern bathrooms', 'Refrigerant pressure drop'],
    nearbyLocalities: ['Kolshet', 'Kolshet Road', 'Lodha Luxuria', 'Dhokali', 'Brahmand', 'Kapurbawdi'],
    faqs: [
      { question: 'Do you provide doorstep AC servicing for Lodha Amara towers on Kolshet Road?', answer: 'Yes, we have technicians visiting Lodha Amara daily for Split AC maintenance, repairs, and gas top-ups.' },
      { question: 'Can you fix Split AC not cooling properly in Lodha Amara apartments?', answer: 'Yes, we check gas pressure, clean clogged cooling coils with jet foam, and inspect compressor capacitors.' },
      { question: 'Do you provide emergency AC repair in Lodha Amara during weekends?', answer: 'Yes, our service operates 7 days a week with convenient Saturday and Sunday appointment slots.' },
      { question: 'What is included in your Deep Jet AC Service for Lodha Amara residents?', answer: 'Evaporator coil foam jet wash, blower wheel sanitization, outdoor condenser wash, drain line flushing, and electrical test.' }
    ]
  },
  {
    slug: 'ac-service-in-lodha-luxuria',
    name: 'Lodha Luxuria',
    zone: 'Premium Project Areas',
    pincode: '400601',
    landmarks: ['Majiwada Junction', 'Lodha Luxuria Priva', 'Eastern Express Highway link', 'Viviana Mall proximity'],
    description: 'Lodha Luxuria is a premier luxury gated community in Majiwada, Thane, featuring exclusive towers with high-specification climate control systems.',
    localContext: 'High-end apartments requiring precision maintenance, careful handling of interior decor, and multi-split cooling optimization.',
    residentialContext: 'Luxury residential high-rise towers and penthouses.',
    commonIssues: ['Multi-split indoor unit temperature sync errors', 'Concealed drainage choking', 'Inverter circuit communication faults', 'Outdoor unit high thermal cut-off'],
    nearbyLocalities: ['Majiwada', 'Lodha Amara', 'Kapurbawdi', 'Rustomjee Urbania', 'Panch Pakhadi'],
    faqs: [
      { question: 'Do you service luxury Inverter Split ACs in Lodha Luxuria, Majiwada?', answer: 'Yes, our experienced technicians handle high-end Inverter and Multi-Split AC systems in Lodha Luxuria.' },
      { question: 'How can I schedule an AC technician visit for Lodha Luxuria?', answer: 'Call +91 7021455426 or reserve your appointment online through our quick booking form.' },
      { question: 'Do you provide nitrogen leak detection and R32 gas charging in Lodha Luxuria?', answer: 'Yes, we conduct comprehensive pressure leak testing and top-tier gas charging with warranty on workmanship.' }
    ]
  }
];

export const LOCATIONS_DATA: LocationData[] = BASE_LOCATIONS_DATA.map(loc => {
  const seo = AREA_SEO_METADATA[loc.name];
  return {
    ...loc,
    metaTitle: seo ? seo.metaTitle : `AC Services in ${loc.name} | AC Repair in ${loc.name}`,
    metaDescription: seo ? seo.metaDescription : `Get reliable AC services in ${loc.name} for AC repair, installation and maintenance. Book trusted local AC technicians for quick service.`
  };
});

export const TOTAL_LOCATIONS_COUNT = LOCATIONS_DATA.length; // Exactly 59 locations!

export const ZONES_LIST = [
  'All Localities (59)',
  'Thane West / Central',
  'Ghodbunder Road',
  'Thane East & Kalwa',
  'Premium Project Areas'
] as const;

export function getLocationBySlug(slug: string): LocationData | undefined {
  const cleanSlug = slug.replace(/^\//, '').replace(/\/$/, '');
  return LOCATIONS_DATA.find(loc => loc.slug === cleanSlug || loc.slug === `ac-service-in-${cleanSlug}`);
}

export function searchLocations(query: string, zone?: string): LocationData[] {
  const q = query.toLowerCase().trim();
  return LOCATIONS_DATA.filter(loc => {
    const matchesZone = !zone || zone.startsWith('All') || loc.zone === zone;
    const matchesQuery = !q || 
      loc.name.toLowerCase().includes(q) || 
      loc.slug.toLowerCase().includes(q) ||
      loc.landmarks.some(l => l.toLowerCase().includes(q)) ||
      loc.pincode.includes(q);
    return matchesZone && matchesQuery;
  });
}
