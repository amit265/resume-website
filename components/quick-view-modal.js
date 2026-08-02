"use client";

import { X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function QuickViewModal({ url, onClose }) {
  const [loading, setLoading] = useState(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Allow body to be scrollable by removing the overflow hidden logic
  useEffect(() => {
    // Intentionally empty so page remains scrollable
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300 pointer-events-auto overflow-y-auto"
    >
      <div className="min-h-[100dvh] w-full flex items-center justify-center p-4 py-20">
        
        {/* Close button placed fixed to the screen */}
        <button 
          onClick={onClose}
          className="fixed top-4 right-4 md:top-8 md:right-8 z-[60] p-3 md:p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all shadow-2xl cursor-pointer"
          aria-label="Close Quick View"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Pure Portrait Container with RIGID hardcoded dimensions matching a typical iPhone (375x812) */}
        <div 
          onClick={(e) => e.stopPropagation()} // Prevent clicking the phone from closing the modal
          className="relative z-10 mx-auto border-[8px] border-slate-900 rounded-[2.5rem] bg-slate-900 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col w-[375px] h-[812px] shrink-0"
        >
          <div className="w-full h-full bg-white relative rounded-[1.8rem] overflow-y-auto">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-0">
              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-4" />
              <p className="text-slate-500 text-sm font-medium animate-pulse">Loading App...</p>
            </div>
          )}
          <iframe 
            src={url} 
            className="w-full h-full border-none relative z-10 bg-white overflow-y-auto"
            scrolling="yes"
            onLoad={() => setLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
