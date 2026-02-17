
import React, { useState } from 'react';
import { MAIN_NAV } from '../constants';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-16">
        {/* Left Side */}
        <div className="flex items-center space-x-8">
          <a href="#" className="text-2xl font-semibold tracking-tighter">Uber</a>
          <nav className="hidden lg:flex items-center space-x-6">
            {MAIN_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:bg-zinc-800 px-3 py-2 rounded-full transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="flex items-center gap-2 text-sm font-medium hover:bg-zinc-800 px-3 py-2 rounded-full">
            <Globe className="w-4 h-4" />
            EN
          </button>
          <a href="#" className="text-sm font-medium hover:bg-zinc-800 px-3 py-2 rounded-full">Help</a>
          <a href="#" className="text-sm font-medium hover:bg-zinc-800 px-3 py-2 rounded-full">Log in</a>
          <a href="#" className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
            Sign up
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a href="#" className="text-sm font-medium">Log in</a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black px-6 pt-4 pb-8 space-y-4">
          {MAIN_NAV.map((item) => (
            <a key={item.label} href={item.href} className="block text-xl font-semibold py-2">
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-800 flex flex-col space-y-4">
            <button className="flex items-center gap-2 text-sm font-medium">
              <Globe className="w-4 h-4" /> EN
            </button>
            <a href="#" className="bg-white text-black text-center text-sm font-semibold px-4 py-3 rounded-md">
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
