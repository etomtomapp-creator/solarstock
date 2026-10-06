import React from 'react';
import { Sun } from 'lucide-react';

interface AnimatedLogoProps {
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  variant = 'light',
  showSubtitle = true,
  size = 'md',
  className = ''
}) => {
  // Letters in brand name "SolarStock"
  // S - o - l - a - r - S - t - o - c - k (10 letters)
  const letters = ['S', 'o', 'l', 'a', 'r', 'S', 't', 'o', 'c', 'k'];

  // Animation configuration:
  // 1.0s total wave animation across all letters, followed by 3.0s pause before repeating (4.0s total loop)
  // Each letter animates for 0.35s with a 0.072s staggered delay
  const STAGGER_STEP = 0.072; // in seconds

  const iconSizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl'
  }[size];

  const sunIconSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }[size];

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }[size];

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric Sun Icon Mark with synchronized pulse */}
      <div
        className={`${iconSizeClasses} flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-105 ${
          isLight
            ? 'bg-slate-950 border-slate-800 text-amber-400'
            : 'bg-slate-900 border-slate-800 text-amber-400'
        }`}
      >
        <div className="logo-sun-pulse flex items-center justify-center">
          <Sun className={`${sunIconSize} stroke-[2.2]`} />
        </div>
      </div>

      {/* Brand Text with Staggered Letter Wave Animation */}
      <div className="flex flex-col">
        <div
          className={`${textSizeClasses} font-bold tracking-tight font-heading leading-tight flex items-baseline`}
          aria-label="SolarStock"
        >
          {letters.map((char, index) => {
            const delayInSeconds = (index * STAGGER_STEP).toFixed(3);
            return (
              <span
                key={index}
                className={isLight ? 'logo-letter-wave-light' : 'logo-letter-wave-dark'}
                style={{
                  animationDelay: `${delayInSeconds}s`,
                  // Add subtle kerning adjustment between 'Solar' and 'Stock' if desired
                  marginRight: index === 4 ? '1px' : '0px'
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        {showSubtitle && (
          <span
            className={`text-[10px] uppercase tracking-wider font-medium ${
              isLight ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Energy Systems
          </span>
        )}
      </div>
    </div>
  );
};
