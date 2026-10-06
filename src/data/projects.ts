import { ProjectCaseStudy } from '../types';

export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'gazipur-textile-cni-5mw',
    title: '5.2 MW Commercial Rooftop & 2.4 MWh Battery Peak Shaving System',
    client: 'Apex Spinning & Garments Ltd.',
    location: 'Gazipur Industrial Zone',
    country: 'Bangladesh',
    capacity: '5.2 MWp Solar + 2.4 MWh BESS',
    year: 2025,
    sector: 'Commercial & Industrial',
    description: 'A flagship high-voltage commercial installation across 6 textile production sheds. Features 620W N-type bifacial dual-glass modules integrated with Deye C&I energy storage cabinets to eliminate factory grid outages and peak-tariff surcharges.',
    annualGeneration: '7,480 MWh / Year',
    co2Offset: '5,820 Tons CO2e / Year',
    equipmentUsed: [
      { sku: 'Tongwei N-Type Bifacial 620W (TW-620W-NT-DG)', qty: '8,380 Modules', category: 'Solar Panel' },
      { sku: 'Deye SUN-20K-SG05LP3-EU Hybrid Inverters', qty: '48 Inverters', category: 'Hybrid Inverter' },
      { sku: 'Deye ORION W GB-W Indoor C&I ESS (120kWh)', qty: '20 Cabinets', category: 'C&I Storage' },
      { sku: 'EP EFX5-381 3.8T Electric Forklifts', qty: '4 Units', category: 'Logistics Fleet' }
    ],
    keyHighlights: [
      'Levelized Cost of Electricity reduced from $0.124 to $0.038 / kWh',
      'Zero diesel generator startup delays during afternoon textile spinning batches',
      'Payback period calculated at 3.6 years under local industrial tariffs'
    ]
  },
  {
    id: 'samut-prakan-cold-storage-1-8mw',
    title: '1.8 MW Cold Storage Logistics Depot with 80V Electric MHE Fleet',
    client: 'Siam Pacific Cold Chain Logistics',
    location: 'Bang Phli Logistics Corridor, Samut Prakan',
    country: 'Thailand',
    capacity: '1.8 MWp Rooftop PV + 12-Unit Lithium MHE Fleet',
    year: 2025,
    sector: 'Commercial & Industrial',
    description: 'Turnkey solarization and warehouse material handling overhaul for a temperature-controlled seafood storage depot. Solar rooftop feeds direct daytime compressor cooling while charging a dedicated fleet of EP Equipment 80V forklifts and F4 pallet jacks.',
    annualGeneration: '2,620 MWh / Year',
    co2Offset: '1,960 Tons CO2e / Year',
    equipmentUsed: [
      { sku: 'JA Solar 625W N-Type Bifacial (JAM66D45 LB)', qty: '2,880 Modules', category: 'Solar Panel' },
      { sku: 'Deye SUN-12K-G06P3-EU 3-Phase Grid Inverters', qty: '15 Inverters', category: 'On-Grid Inverter' },
      { sku: 'EP EFX5-301 3-Ton 80V Electric Forklifts', qty: '6 Units', category: 'Forklift' },
      { sku: 'EP MINI F4 1.5T Lithium Pallet Trucks', qty: '8 Units', category: 'Pallet Truck' }
    ],
    keyHighlights: [
      'Eliminated 100% of indoor diesel exhaust emissions inside cold storage halls',
      'Midday solar peak perfectly aligns with refrigeration compressor cooling peaks',
      'Reduced warehouse facility operating electrical expenditure by 44%'
    ]
  },
  {
    id: 'rangpur-agricultural-solar-pumping-350',
    title: '350-Well Solar Agricultural Deep Borehole Pumping Initiative',
    client: 'Barind Integrated Water Resources Board',
    location: 'Northern Agriculture District (Rangpur & Dinajpur)',
    country: 'Bangladesh',
    capacity: '1.4 MW Cumulative Pumping Capacity across 350 Sites',
    year: 2024,
    sector: 'Solar Irrigation',
    description: 'Replacing dirty, noisy diesel-powered tube wells with automated SAJ solar pump VFD controllers and Difful stainless steel submersible pumps. Delivers clean irrigation to over 12,000 smallholder rice and maize farmers.',
    annualGeneration: 'Over 2.1 Billion Liters Pumped Annually',
    co2Offset: '2,400 Tons CO2e (Avoided Diesel Fuel)',
    equipmentUsed: [
      { sku: 'SAJ PDS33-4T004 4kW Solar Pump VFD Controllers', qty: '210 Controllers', category: 'Variable Frequency Drive' },
      { sku: 'SAJ PDS33-4T2R2 2.2kW Solar Pump VFD Controllers', qty: '140 Controllers', category: 'Variable Frequency Drive' },
      { sku: 'Difful 4-inch AC/DC Hybrid Submersible Pumps', qty: '350 Submersible Pumps', category: 'Solar Pump' },
      { sku: 'Tongwei N-Type Bifacial 620W Modules', qty: '2,800 Modules', category: 'Solar Panel' }
    ],
    keyHighlights: [
      'Cut farmers water irrigation cost from $42/acre per season to zero fuel cost',
      'Automatic dry-run protection prevents borehole aquifer depletion',
      'Dynamic MPPT provides reliable pumping even during morning low-irradiance hours'
    ]
  },
  {
    id: 'rakhine-island-microgrid-750kw',
    title: '750 kW Hybrid Island Microgrid with Lithium Rack Storage',
    client: 'Island Rural Electrification Cooperative',
    location: 'Bay Island Community District',
    country: 'Southeast Asia',
    capacity: '750 kW PV + 1.2 MWh LiFePO4 Storage + Diesel Sync',
    year: 2025,
    sector: 'Microgrid',
    description: 'An off-grid hybrid power plant providing 24/7 continuous electricity to 3 coastal fishing villages, cold storage facilities, and a rural clinic. Features Deye three-phase hybrid inverters paralleled with automated diesel generator orchestration.',
    annualGeneration: '1,120 MWh / Year',
    co2Offset: '910 Tons CO2e / Year',
    equipmentUsed: [
      { sku: 'Deye SUN-20K-SG05LP3-EU Hybrid Inverters', qty: '12 Paralleled Units', category: 'Hybrid Inverter' },
      { sku: 'Deye SE-G5.1 5.12kWh LiFePO4 Rack Modules', qty: '234 Rack Units (1.19MWh)', category: 'ESS Rack' },
      { sku: 'Tongwei N-Type Bifacial 620W Modules', qty: '1,210 Modules', category: 'Solar Panel' },
      { sku: 'Solarstock SS-LPS1000C Advanced Backup Units', qty: '15 Clinic Backup Units', category: 'LPS' }
    ],
    keyHighlights: [
      'Sub-10ms automatic transfer switch guarantees continuous power for village clinic vaccines',
      'Diesel generator runtime reduced from 24 hours/day down to under 2 hours on cloudy days',
      'Centralized remote cloud EMS monitoring via satellite telemetry'
    ]
  }
];
