import React, { useState } from 'react';

export const CvButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 rounded-full border border-solar-accent/40 text-solar-accent text-sm font-semibold hover:bg-solar-accent/10 transition-colors duration-300 whitespace-nowrap"
      >
        Ver CV
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-solar-dark/80 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl h-[85vh] bg-solar-surface rounded-2xl overflow-hidden glass-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-solar-primary/20">
              <span className="text-solar-light font-serif">Mi CV</span>
              <div className="flex items-center gap-3">
                <a
                  href="/cv.pdf"
                  download="CV-Simon.pdf"
                  className="px-4 py-1.5 rounded-full bg-solar-accent text-solar-dark text-sm font-semibold hover:bg-solar-leaf transition-colors duration-300"
                >
                  Descargar
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Cerrar vista previa"
                  className="text-solar-light/70 hover:text-solar-light text-xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>
            <iframe
              src="/cv.pdf"
              title="Vista previa del CV"
              className="w-full h-[calc(100%-49px)] bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
};
