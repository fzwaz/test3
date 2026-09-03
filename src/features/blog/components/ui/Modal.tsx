import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Modal Backdrop & Dialog Props interface.
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

/**
 * Reusable Overlay Modal Component.
 * Locks background scroll on open, supports escape key closing, and renders smooth entry backdrop.
 * 
 * @param isOpen - Controls modal visibility state
 * @param onClose - Trigger callback to close modal
 * @param title - Optional modal header title
 * @param children - Inner dialog content
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  // Handle escape key listener and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dimmed Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Body */}
      <div className="relative w-full max-w-3xl bg-[#09090b] border border-[#1f1f23] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f1f23] bg-[#111114]">
          <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.08] rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-slate-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
