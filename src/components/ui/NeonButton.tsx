import React from 'react';
import { cn } from '@/lib/utils';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient' | 'neon' | 'cyber';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  pulse?: boolean;
  glow?: boolean;
  icon?: React.ReactNode;
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', pulse = false, glow = false, icon, ...props }, ref) => {
    const variants = {
      primary: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-0',
      secondary: 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-300',
      gradient: 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white border-0',
      neon: 'bg-black text-cyan-400 border-2 border-cyan-400 shadow-lg shadow-cyan-400/50',
      cyber: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white border-0'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-12 py-6 text-xl'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95',
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity',
          variants[variant],
          sizes[size],
          pulse && 'animate-pulse',
          glow && 'animate-glow',
          className
        )}
        {...props}
      >
        <span className="relative flex items-center gap-2">
          {icon && <span className="animate-pulse">{icon}</span>}
          {children}
        </span>
      </button>
    );
  }
);

NeonButton.displayName = 'NeonButton';

export default NeonButton;
