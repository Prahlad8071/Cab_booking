
import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ChevronDown, CheckCircle2 } from 'lucide-react';
import { saveRideRequest } from '../services/geminiService';

const Hero: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSeePrices = async () => {
    if (pickup && dropoff) {
      await saveRideRequest(pickup, dropoff);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Go anywhere with Uber
            </h1>
            
            <div className="bg-white rounded-lg space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <button className="bg-zinc-100 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  Pickup now
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="relative space-y-2">
                <div className="absolute left-6 top-8 bottom-8 w-px bg-zinc-300 z-0"></div>
                
                <div className="relative flex items-center group">
                  <div className="absolute left-4 z-10 group-focus-within:text-black text-zinc-400">
                    <div className="w-4 h-4 rounded-full border-2 border-current"></div>
                  </div>
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter pickup location"
                    className="w-full pl-12 pr-12 py-4 bg-zinc-100 border-2 border-transparent focus:border-black focus:bg-white rounded-lg outline-none transition-all"
                  />
                  <button className="absolute right-4 text-zinc-400 hover:text-black">
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative flex items-center group">
                  <div className="absolute left-4 z-10 group-focus-within:text-black text-zinc-400">
                    <div className="w-4 h-4 bg-current"></div>
                  </div>
                  <input
                    type="text"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    placeholder="Enter destination"
                    className="w-full pl-12 pr-12 py-4 bg-zinc-100 border-2 border-transparent focus:border-black focus:bg-white rounded-lg outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button 
                  onClick={handleSeePrices}
                  className="w-full sm:w-auto bg-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  See prices
                </button>
                {isSaved && (
                  <span className="flex items-center gap-2 text-green-600 text-sm font-medium animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4" />
                    Request saved to DB
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="rounded-2xl overflow-hidden aspect-[1/1] shadow-2xl">
               <img 
                 src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=672/height=672/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hM2NmODU2NC1lMmE2LTQxOGMtYjliMC02NWRkMjg1YzEwMGIuanBn" 
                 alt="Ride background"
                 className="w-full h-full object-cover"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
