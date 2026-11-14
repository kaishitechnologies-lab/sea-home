import React from 'react';
import { 
  Star, 
  MapPin, 
  Sparkles, 
  TrendingUp, 
  Wifi, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';

export default function PrimeDestination() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-white font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <p className="text-[#1e6091] text-xs font-bold tracking-widest uppercase mb-2">
            Featured Prime Destination
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f4c81]">
            Southern Coast & UNESCO Fort Galle
          </h1>
        </div>
        <div className="flex items-center text-slate-600 text-sm font-medium">
          <Sparkles className="w-5 h-5 mr-2 text-[#1e6091]" />
          <span>Recommended for Long-Stay Nomads & Families</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
        
        {/* Left Column - Image */}
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[500px] group">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1586523646887-94b06b06d106?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Galle Fort Sri Lanka" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="flex items-center bg-[#1e6091] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
              <Star className="w-3.5 h-3.5 mr-1.5 fill-white" />
              TOP EXPAT PICK ★ 4.9
            </span>
            <span className="bg-white text-slate-800 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
              48 Verified Homes
            </span>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="flex items-center text-sm font-medium mb-2 text-white/90">
              <MapPin className="w-4 h-4 mr-1.5" />
              Galle Fort, Unawatuna, Weligama & Ahangama
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              The Epicenter of Ocean Living & Creative Expat Life
            </h2>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="flex flex-col justify-center">
          
          {/* Description */}
          <div className="mb-6">
            <p className="flex items-center text-[#1e6091] text-xs font-bold tracking-wider uppercase mb-2">
              <TrendingUp className="w-4 h-4 mr-1.5" />
              Fastest Growing Foreign Community
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Galle combines Dutch colonial heritage, world-class surf breaks, and buzzing coworking cafes. 
              With clean breezes and foreigner-friendly lease registrations, it remains the top coastal residential choice.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {/* Stat 1 */}
            <div className="bg-[#f0f4f8] p-4 rounded-xl">
              <div className="flex items-center text-slate-500 text-xs font-medium mb-1">
                <Building2 className="w-3.5 h-3.5 mr-1.5" />
                Average Rent
              </div>
              <div className="text-lg font-bold text-[#0f4c81]">LKR 130k - 260k</div>
              <div className="text-slate-500 text-xs mt-0.5">$420 - $850 / mo</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#f0f4f8] p-4 rounded-xl">
              <div className="flex items-center text-slate-500 text-xs font-medium mb-1">
                <Wifi className="w-3.5 h-3.5 mr-1.5" />
                Connectivity
              </div>
              <div className="text-lg font-bold text-[#0f4c81]">300+ Mbps</div>
              <div className="text-slate-500 text-xs mt-0.5">Fiber WiFi & 5G Base</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#f0f4f8] p-4 rounded-xl">
              <div className="flex items-center text-slate-500 text-xs font-medium mb-1">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                Safety Index
              </div>
              <div className="text-lg font-bold text-[#0f4c81]">Ranked #1</div>
              <div className="text-slate-500 text-xs mt-0.5">Tourist Police Support</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-[#f0f4f8] p-4 rounded-xl">
              <div className="flex items-center text-slate-500 text-xs font-medium mb-1">
                <Building2 className="w-3.5 h-3.5 mr-1.5" />
                Available Units
              </div>
              <div className="text-lg font-bold text-[#0f4c81]">48 Rentals</div>
              <div className="text-slate-500 text-xs mt-0.5">Villas & Apartments</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              'Historic UNESCO Fort', 
              'Ahangama Surf Breaks', 
              'Boutique Cafes', 
              'Coworking Hubs'
            ].map((tag) => (
              <span 
                key={tag} 
                className="bg-[#f0f4f8] text-slate-700 px-3 py-1.5 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full bg-[#0f4c81] hover:bg-[#0a3a63] text-white font-bold py-3.5 px-6 rounded-full transition-colors duration-300 shadow-md flex items-center justify-center">
            Explore 48 Rentals in Galle & South Coast →
          </button>

        </div>
      </div>
    </section>
  );
}