import React, { useEffect } from 'react';
import { X, Play, Volume2, Maximize2, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const VideoModal = () => {
  const { isVideoModalOpen, setIsVideoModalOpen } = useShop();

  // Close on ESC key (FR-PDP / Section 3.9 Modal focus trap & ESC)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsVideoModalOpen(false);
    };
    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen, setIsVideoModalOpen]);

  if (!isVideoModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity"
      onClick={() => setIsVideoModalOpen(false)}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0f1428] border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 glow-ring-purple animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0c1020]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-bold text-white tracking-wide">
              ShopNext 2026: The Cyber Hardware Showcase
            </h3>
          </div>
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Canvas */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {/* Futuristic ambient video simulation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-slate-900/80 to-cyan-900/40" />
          <img 
            src="/assets/products/hero_earbuds.png" 
            alt="Product Teaser" 
            className="w-80 h-80 object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.7)] animate-float"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent">
            <div className="w-20 h-20 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-glow-purple group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 ml-1" />
            </div>
            <p className="text-lg font-bold text-white mt-6 drop-shadow">
              Spatial Sound & Adaptive Active Noise Cancellation
            </p>
            <p className="text-xs text-purple-300 mt-1 max-w-md">
              Experience dynamic head tracking, bespoke biocellulose acoustic drivers, and high-fidelity lossless streaming.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <Play className="w-4 h-4 text-purple-400 cursor-pointer" />
              <span>01:14 / 02:45</span>
            </div>
            <div className="flex items-center gap-3">
              <Volume2 className="w-4 h-4 cursor-pointer" />
              <Maximize2 className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
