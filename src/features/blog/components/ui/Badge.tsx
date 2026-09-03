import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Badge Component Props interface.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'orange' | 'blue' | 'green' | 'purple' | 'peach' | 'dark';
  dot?: boolean;
  children: React.ReactNode;
}

/**
 * Category Tag Badge Component.
 * Displays uppercase category pills with colored dots matching design mockups.
 * 
 * @param variant - Color palette scheme matching category themes
 * @param dot - Whether to render a leading bullet dot
 * @param className - Class overrides
 * @param children - Badge label text
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'orange',
  dot = true,
  className,
  children,
  ...props
}) => {
  // Theme color maps matching exact screenshot aesthetics
  const themes = {
    orange: 'bg-[#ff5500]/10 text-[#ff5500] border-[#ff5500]/30',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    peach: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    dark: 'bg-[#18181b] text-zinc-300 border-[#27272a]',
  };

  const dotColors = {
    orange: 'bg-[#ff5500]',
    blue: 'bg-blue-400',
    green: 'bg-emerald-400',
    purple: 'bg-purple-400',
    peach: 'bg-amber-400',
    dark: 'bg-zinc-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full border',
        themes[variant],
        className
      )}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])} />}
      {children}
    </span>
  );
};

export default Badge;
