"use client";

import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="border border-[var(--color-accent)] rounded-2xl shadow-lg w-full max-w-lg p-6 animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
          <h2 className="text-lg font-bold text-[var(--color-text)]">{title || "Modal Title"}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 text-[var(--text-color)]">{children}</div>

        {/* Footer
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-bold hover:from-[var(--color-primary-hover)] transition"
          >
            Confirm
          </button>
        </div> */}
      </div>
    </div>
  );
}