
import React, { useState, useEffect } from 'react';
import { getTravelAdvice, getAdviceHistory } from '../services/geminiService';
import { Sparkles, Send, X, Loader2, History, MessageCircle } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'history'>('chat');
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    const data = await getAdviceHistory();
    setHistory(data);
  };

  useEffect(() => {
    if (isOpen && activeTab === 'history') {
      fetchHistory();
    }
  }, [isOpen, activeTab]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    setResponse(null);
    const advice = await getTravelAdvice(input);
    setResponse(advice || "No advice found.");
    setLoading(false);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <Sparkles className="w-6 h-6 group-hover:text-yellow-400 transition-colors" />
          <span className="hidden sm:inline font-medium">Uber AI Advisor</span>
        </button>
      ) : (
        <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden flex flex-col max-h-[550px]">
          <div className="bg-black p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Smart Travel Hub</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>

          <div className="flex border-b border-zinc-100">
            <button 
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'chat' ? 'border-b-2 border-black text-black' : 'text-zinc-400'}`}
            >
              <MessageCircle className="w-4 h-4" /> Ask
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'history' ? 'border-b-2 border-black text-black' : 'text-zinc-400'}`}
            >
              <History className="w-4 h-4" /> History
            </button>
          </div>
          
          <div className="p-4 overflow-y-auto flex-1 bg-zinc-50 min-h-[250px] max-h-[350px]">
            {activeTab === 'chat' ? (
              <>
                {response ? (
                  <div className="bg-white p-4 rounded-xl border border-zinc-200 prose prose-sm text-zinc-800 whitespace-pre-wrap animate-in fade-in slide-in-from-bottom-2">
                    {response}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-100">
                      <Sparkles className="w-6 h-6 text-zinc-300" />
                    </div>
                    <p className="text-zinc-500 text-sm">Where are you heading next?</p>
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-3">
                {history.length > 0 ? history.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-zinc-200 shadow-sm">
                    <p className="text-xs font-bold text-black mb-1 uppercase tracking-wider">{item.destination}</p>
                    <p className="text-xs text-zinc-500 line-clamp-2">{item.response}</p>
                    <p className="text-[10px] text-zinc-400 mt-2">{new Date(item.timestamp).toLocaleDateString()}</p>
                  </div>
                )) : (
                  <p className="text-center text-zinc-400 text-sm py-8">No history found in database.</p>
                )}
              </div>
            )}
            {loading && <div className="flex justify-center py-4"><Loader2 className="animate-spin" /></div>}
          </div>

          {activeTab === 'chat' && (
            <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-100 flex gap-2 bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a destination (e.g. Paris)"
                className="flex-1 bg-zinc-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white p-2 rounded-lg hover:bg-zinc-800 disabled:bg-zinc-400 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
