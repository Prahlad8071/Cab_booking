
import React from 'react';
import { FOOTER_LINKS } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="mb-12">
          <a href="#" className="text-2xl font-semibold block mb-8">Uber</a>
          <a href="#" className="text-sm hover:underline">Visit Help Center</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold mb-6">{group.title}</h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-zinc-800 gap-8">
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-zinc-400"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-zinc-400"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="hover:text-zinc-400"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-zinc-400"><Linkedin className="w-5 h-5" /></a>
          </div>
          
          <div className="flex gap-6">
            <button className="flex items-center gap-2 text-sm hover:text-zinc-400">
              <Globe className="w-4 h-4" /> English
            </button>
            <button className="flex items-center gap-2 text-sm hover:text-zinc-400">
              <MapPin className="w-4 h-4" /> Paris
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 gap-4 text-xs text-zinc-500">
          <p>© 2024 Uber Technologies Inc. Replication</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
