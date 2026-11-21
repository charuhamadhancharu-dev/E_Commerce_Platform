import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const ToastContainer = () => {
  const { toasts, removeToast } = useShop();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';
        const isInfo = toast.type === 'info';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all duration-300 animate-in slide-in-from-bottom-5 ${
              isSuccess
                ? 'bg-[#101b2c]/95 border-emerald-500/40 text-emerald-100 shadow-[0_8px_30px_rgba(16,185,129,0.25)]'
                : isError
                ? 'bg-[#27101a]/95 border-rose-500/40 text-rose-100 shadow-[0_8px_30px_rgba(244,63,94,0.25)]'
                : 'bg-[#121631]/95 border-purple-500/40 text-purple-100 shadow-[0_8px_30px_rgba(168,85,247,0.25)]'
            }`}
          >
            <div className="mt-0.5 flex-shrink-0">
              {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
              {isError && <AlertCircle className="w-5 h-5 text-rose-400" />}
              {isInfo && <Info className="w-5 h-5 text-purple-400" />}
            </div>

            <div className="flex-1 min-w-0">
              <h5 className="text-xs font-bold tracking-wide">
                {toast.title}
              </h5>
              <p className="text-xs text-slate-300/90 mt-0.5 leading-snug">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
