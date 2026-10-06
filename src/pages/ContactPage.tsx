import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building, Globe, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    desk: 'Bangladesh Regional Desk',
    marketNeed: 'Commercial & Industrial Solar',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            REGIONAL DESKS & ENGINEERING INQUIRIES
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 font-heading">
            Contact SolarStock
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Reach our engineering teams directly for project single-line verifications, equipment allocations, proforma invoicing, or physical warehouse inspections in Bangkok and Dhaka.
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Bangladesh Desk */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Bangladesh Regional Desk
              </h3>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Gulshan-2 Commercial Area, Dhaka-1212, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="font-mono font-medium text-slate-800">+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>dhaka@solarstock.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Sun–Thu: 9:00 AM – 6:00 PM (GMT+6)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-700 font-medium">
              Regional warehouse stock in Gazipur / Chittagong Port.
            </div>
          </div>

          {/* Thailand Desk */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Thailand Regional Desk
              </h3>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Bangna-Trad Road, KM. 19, Bang Phli, Samut Prakan, Bangkok 10540, Thailand</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="font-mono font-medium text-slate-800">+66 2XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>bangkok@solarstock.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon–Fri: 8:30 AM – 5:30 PM (GMT+7)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-700 font-medium">
              ASEAN Logistics & Cross-border Freight Hub.
            </div>
          </div>

          {/* Headquarters / China Supply Hub */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Headquarters & Supply Hub
              </h3>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Nanshan High-Tech Industrial Park, Shenzhen 518057, China</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="font-mono font-medium text-slate-800">+86 755-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>contact@solarstock.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon–Fri: 9:00 AM – 6:30 PM (GMT+8)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-700 font-medium">
              Global R&D, Container Freight & Factory QA Depot.
            </div>
          </div>

        </div>

        {/* Contact Form and Regional Network Map Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-slate-950 font-heading">
                Send an Inquiry to Our Regional Desk
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Typical reply time: Under 4 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  Message Dispatched Successfully
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your message has been routed to our <span className="font-semibold text-slate-900">{formData.desk}</span> team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Ahmed"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Solar Energy Ltd."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Select Target Regional Desk
                    </label>
                    <select
                      value={formData.desk}
                      onChange={(e) => setFormData({ ...formData, desk: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Bangladesh Regional Desk">Bangladesh Desk (Dhaka)</option>
                      <option value="Thailand Regional Desk">Thailand Desk (Bangkok)</option>
                      <option value="Headquarter Supply Hub">Shenzhen Global Supply Hub</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Market / Need
                    </label>
                    <select
                      value={formData.marketNeed}
                      onChange={(e) => setFormData({ ...formData, marketNeed: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Commercial & Industrial Solar">Commercial & Industrial Solar</option>
                      <option value="Utility Solar Procurement">Utility Solar Procurement</option>
                      <option value="Battery Energy Storage (BESS)">Battery Energy Storage (BESS)</option>
                      <option value="Solar Water Pumping">Solar Water Pumping & Irrigation</option>
                      <option value="Electric Material Handling (MHE)">Electric Forklifts & Pallet Trucks</option>
                      <option value="Dealership / Distribution Inquiry">Dealership / Distribution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inquiry Message & Technical Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project size (e.g. 500kW rooftop, 2MW microgrid), equipment quantities, target installation date, or shipping destination..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    We respect your privacy. Non-disclosure agreements available upon request.
                  </span>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center gap-1.5 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-lg shadow-sm transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Sending...' : 'Transmit Inquiry'}</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right: Regional Hub Logistics Visualization */}
          <div className="lg:col-span-5 bg-slate-950 text-white p-8 rounded-3xl border border-slate-900 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <Globe className="w-3.5 h-3.5" />
                <span>PHYSICAL WAREHOUSE ROUTING</span>
              </div>
              <h3 className="text-xl font-bold font-heading">
                Direct Buffer Stock & Logistics Corridor
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                SolarStock operates dedicated container handling logistics corridors directly from deep-water ports into our regional buffer depots, cutting standard delivery lead times by up to 60%.
              </p>
            </div>

            {/* Visual Route Schematics */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between font-mono text-[11px] text-emerald-400 border-b border-slate-800 pb-2">
                <span>PORT ROUTE</span>
                <span>AVERAGE TRANSIT</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shenzhen ➔ Bangkok (Road/Sea)</span>
                <span className="font-mono text-slate-400">3 - 5 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shenzhen ➔ Chittagong (Ocean)</span>
                <span className="font-mono text-slate-400">10 - 12 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Dhaka Warehouse ➔ Project Site</span>
                <span className="font-mono text-emerald-400">Same-Day / 24h</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bangkok Depot ➔ ASEAN Region</span>
                <span className="font-mono text-emerald-400">24h - 48h</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-900">
              In-person site visits for factory audits and warehouse equipment inspections are welcomed by advance appointment.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
