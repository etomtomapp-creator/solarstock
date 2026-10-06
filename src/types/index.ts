export type ProductCategory =
  | 'ESS'
  | 'Inverter'
  | 'Hybrid Inverter'
  | 'Off-Grid Inverter'
  | 'On-Grid Inverter'
  | 'LPS'
  | 'Material Handling Equipment (MHE)'
  | 'Forklift'
  | 'Pallet Truck'
  | 'Stacker'
  | 'Portable Power Station'
  | 'Protection Device'
  | 'Solar Panel'
  | 'Solar Pump'
  | 'Variable Frequency Drive (VFD)';

export type BrandName =
  | 'Deye'
  | 'SAJ'
  | 'Difful'
  | 'EP Equipment'
  | 'JA Solar'
  | 'Solarstock'
  | 'TW solar'
  | 'YOUYO'
  | 'Daran'
  | 'NEOZL'
  | 'Projoy Electric';

export interface ProductSpec {
  label: string;
  value: string;
  category?: 'Electrical' | 'Mechanical' | 'Battery & Storage' | 'Environmental & Standards';
}

export interface HubInventory {
  hub: 'Dhaka Warehouse' | 'Bangkok Depot' | 'Shenzhen Global Hub';
  quantity: number;
  status: 'In Stock' | 'Allocated / Limited' | 'Factory Container Batch';
  leadDays: string;
}

export interface Product {
  id: string;
  itemNumber: number;
  title: string;
  brand: BrandName;
  category: ProductCategory;
  model: string;
  powerRating?: string;
  voltageRating?: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  specs: ProductSpec[];
  inStock: boolean;
  leadTime: string;
  warrantyYears: number;
  inventories?: HubInventory[];
  compatibleIds?: string[];
  artType:
    | 'inverter_hybrid'
    | 'inverter_string'
    | 'inverter_offgrid'
    | 'battery_rack'
    | 'battery_cni'
    | 'lps_compact'
    | 'solar_panel'
    | 'forklift'
    | 'pallet_truck'
    | 'stacker'
    | 'portable_power'
    | 'solar_pump_submersible'
    | 'solar_pump_surface'
    | 'vfd_controller';
}

export interface Article {
  id: string;
  title: string;
  category: 'Field Updates' | 'Market Analysis' | 'Technical Whitepapers' | 'Deployment Guide';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  tags: string[];
}

export interface BrandInfo {
  name: BrandName;
  tagline: string;
  description: string;
  categories: ProductCategory[];
  origin: string;
  partnerTier: 'Tier 1 Global' | 'Authorized Distributor' | 'OEM / In-House Brand';
  activeSkus: number;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  country: string;
  capacity: string;
  year: number;
  sector: 'Commercial & Industrial' | 'Solar Irrigation' | 'Microgrid' | 'Logistics Fleet';
  description: string;
  annualGeneration: string;
  co2Offset: string;
  equipmentUsed: {
    sku: string;
    qty: string;
    category: string;
  }[];
  keyHighlights: string[];
}

export interface SystemSizingInput {
  application: 'cni' | 'residential' | 'offgrid' | 'pumping';
  dailyConsumptionKWh: number;
  peakLoadKW: number;
  sunHoursDaily: number;
  backupHours: number;
  boreholeDepthMeters?: number;
  dailyWaterCubicMeters?: number;
}
