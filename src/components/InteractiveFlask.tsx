import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  scale: number;
}

interface InteractiveFlaskProps {
  language: 'el' | 'en';
}

interface Reagent {
  name: {
    el: string;
    en: string;
  };
  liquid: string;
  glow: string;
  smoke: string;
}

const REAGENT_COLORS: Reagent[] = [
  {
    name: {
      el: 'Διάλυμα Cu²⁺',
      en: 'Cu²⁺ Solution',
    },
    liquid: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.4)',
    smoke: '#38bdf8',
  },
  {
    name: {
      el: 'Υπερμαγγανικό Κάλιο (KMnO₄)',
      en: 'Potassium Permanganate (KMnO₄)',
    },
    liquid: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.4)',
    smoke: '#c084fc',
  },
  {
    name: {
      el: 'Σύμπλοκο Ni²⁺ / Χλωροφύλλη',
      en: 'Ni²⁺ Complex / Chlorophyll',
    },
    liquid: '#10b981',
    glow: 'rgba(16, 185, 129, 0.4)',
    smoke: '#34d399',
  },
  {
    name: {
      el: 'Διάλυμα Fe³⁺ / Βρώμιο',
      en: 'Fe³⁺ Solution / Bromine',
    },
    liquid: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.4)',
    smoke: '#fbbf24',
  },
];

export const InteractiveFlask: React.FC<InteractiveFlaskProps> = ({ language }) => {
  const [isErupting, setIsErupting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  const currentColor = REAGENT_COLORS[colorIndex];

  const handleErupt = () => {
    if (isErupting) return;
    setIsErupting(true);

    // Spawn 30 erupting droplets and bubbles bursting upwards out of the flask neck
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => {
      const angle = (Math.PI / 2) + (Math.random() - 0.5) * 1.35; // mostly upwards (60° to 120°)
      const speed = 70 + Math.random() * 110;
      return {
        id: Date.now() + i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed,
        size: 5 + Math.random() * 9,
        color: Math.random() > 0.3 ? currentColor.smoke : '#ffffff',
        alpha: 0.9,
        scale: 1,
      };
    });

    setParticles(newParticles);

    // Switch to the next reagent color after eruption (cycles 0 -> 1 -> 2 -> 3 -> 0)
    setTimeout(() => {
      setColorIndex((prev) => (prev + 1) % REAGENT_COLORS.length);
    }, 800);

    setTimeout(() => {
      setIsErupting(false);
      setParticles([]);
    }, 1800);
  };

  return (
    <div className="relative rounded-2xl bg-white/90 dark:bg-[#131f36]/90 border border-stone-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-sm backdrop-blur-xs flex flex-col items-center justify-center text-center overflow-hidden min-h-[360px] group select-none">
      
      {/* Background chemical ambient glow */}
      <div
        className="absolute w-44 h-44 rounded-full blur-3xl transition-colors duration-700 pointer-events-none opacity-40 dark:opacity-50"
        style={{ backgroundColor: currentColor.glow }}
      />

      {/* Top Reaction Counter / Prompt Pill */}
      <div className="px-3.5 py-1 rounded-full bg-stone-100 dark:bg-slate-800/80 border border-stone-200/80 dark:border-slate-700/80 text-[11px] font-mono text-stone-600 dark:text-slate-300 mb-4 z-10">
        <span>
          {language === 'el'
            ? 'Κάνε κλικ για αλλαγή αντιδραστηρίου!'
            : 'Click to change the reagent!'}
        </span>
      </div>

      {/* Main Interactive Flask Stage */}
      <div
        onClick={handleErupt}
        className="relative w-48 h-56 flex items-center justify-center cursor-pointer transition-transform active:scale-95 hover:scale-105 z-10"
        title={language === 'el' ? 'Κάνε κλικ στη φιάλη' : 'Click the flask'}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleErupt();
          }
        }}
      >
        {/* SVG Erlenmeyer Flask */}
        <svg
          viewBox="0 0 160 200"
          className="w-full h-full drop-shadow-md overflow-visible"
        >
          <defs>
            {/* Liquid gradient */}
            <linearGradient id="flaskLiquid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={currentColor.smoke} stopOpacity="0.85" />
              <stop offset="100%" stopColor={currentColor.liquid} stopOpacity="0.95" />
            </linearGradient>

            {/* Glass reflection */}
            <linearGradient id="glassReflect" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
            </linearGradient>

            <clipPath id="flaskBodyClip">
              <path d="M 68 36 L 68 82 L 24 165 C 20 174 26 186 38 186 L 122 186 C 134 186 140 174 136 165 L 92 82 L 92 36 Z" />
            </clipPath>
          </defs>

          {/* Liquid Layer with Boiling Bubbles */}
          <g clipPath="url(#flaskBodyClip)">
            {/* Liquid container rect */}
            <motion.path
              animate={{
                d: isErupting
                  ? 'M 18 100 Q 80 75 142 100 L 142 190 L 18 190 Z'
                  : 'M 18 118 Q 80 112 142 118 L 142 190 L 18 190 Z',
              }}
              transition={{ duration: 0.3, repeat: isErupting ? 5 : 0, repeatType: 'reverse' }}
              fill="url(#flaskLiquid)"
            />

            {/* Interior bubbles floating up */}
            <motion.circle
              cx="54"
              cy="160"
              r="4"
              fill="#ffffff"
              opacity="0.6"
              animate={{ y: [-5, -45, -5], opacity: [0.3, 0.8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="102"
              cy="168"
              r="3"
              fill="#ffffff"
              opacity="0.6"
              animate={{ y: [-2, -50, -2], opacity: [0.2, 0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            />
            <motion.circle
              cx="78"
              cy="150"
              r="5"
              fill="#ffffff"
              opacity="0.5"
              animate={{ y: [0, -40, 0], opacity: [0.3, 0.9, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Violent boiling bubbles when erupting */}
            {isErupting && (
              <>
                <motion.circle
                  cx="70"
                  cy="130"
                  r="7"
                  fill="#ffffff"
                  animate={{ y: [-10, -80], scale: [1, 1.4], opacity: [0.8, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <motion.circle
                  cx="90"
                  cy="125"
                  r="6"
                  fill="#ffffff"
                  animate={{ y: [-5, -75], scale: [1, 1.5], opacity: [0.8, 0] }}
                  transition={{ duration: 0.45, repeat: Infinity, delay: 0.1 }}
                />
              </>
            )}

            {/* Measurement Graduations / Lines */}
            <line x1="88" y1="130" x2="104" y2="130" stroke="currentColor" strokeWidth="1.5" className="text-stone-300 dark:text-slate-600 opacity-60" />
            <line x1="94" y1="145" x2="114" y2="145" stroke="currentColor" strokeWidth="1.5" className="text-stone-300 dark:text-slate-600 opacity-60" />
            <line x1="88" y1="160" x2="124" y2="160" stroke="currentColor" strokeWidth="1.5" className="text-stone-300 dark:text-slate-600 opacity-60" />
          </g>

          {/* Glass Contour & Highlights */}
          {/* Outer Flask Outline */}
          <path
            d="M 64 24 L 96 24 L 96 32 C 96 34 94 36 92 36 L 92 82 L 136 165 C 141 174 135 186 123 186 L 37 186 C 25 186 19 174 24 165 L 68 82 L 68 36 C 66 36 64 34 64 32 Z"
            fill="url(#glassReflect)"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="text-stone-400 dark:text-slate-500"
          />

          {/* Flask Lip / Rim */}
          <rect
            x="60"
            y="20"
            width="40"
            height="8"
            rx="3"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-stone-300 dark:text-slate-600"
          />

          {/* Curved Specular Reflection on the glass */}
          <path
            d="M 36 168 L 74 96 L 74 46"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.45"
            fill="none"
          />
        </svg>

        {/* Eruption Particles System */}
        <AnimatePresence>
          {isErupting &&
            particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{
                  x: 0,
                  y: -50,
                  scale: 0.4,
                  opacity: 1,
                }}
                animate={{
                  x: p.vx * 0.9,
                  y: -50 + p.vy * 0.95,
                  scale: [0.5, 1.4, 0.2],
                  opacity: [1, 0.9, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.color,
                  boxShadow: `0 0 10px ${currentColor.glow}`,
                }}
                className="absolute rounded-full pointer-events-none"
              />
            ))}
        </AnimatePresence>

        {/* Dynamic Vapor Cloud when erupting */}
        <AnimatePresence>
          {isErupting && (
            <motion.div
              initial={{ scale: 0.2, opacity: 0, y: -45 }}
              animate={{
                scale: [0.3, 1.8, 2.2],
                opacity: [0, 0.8, 0],
                y: [-45, -120, -150],
              }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              className="absolute pointer-events-none rounded-full blur-md"
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: currentColor.smoke,
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Reagent Name below flask */}
      <div className="mt-4 z-10">
        <p className="font-serif text-sm font-semibold text-stone-800 dark:text-slate-100 flex items-center justify-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: currentColor.liquid }}
          />
          {currentColor.name[language]}
        </p>
      </div>

    </div>
  );
};
