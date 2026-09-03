import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Card Component Props interface.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  variant?: 'default' | 'featured' | 'dark';
  children: React.ReactNode;
}

/**
 * Card Container Component.
 * Encapsulates blog post items, widgets, and feature sections with sleek borders and shadow effects.
 * 
 * @param hoverable - Enables lift and highlight animation on hover
 * @param variant - Custom background style variant ('default', 'featured', 'dark')
 * @param className - Optional CSS class extensions
 * @param children - Inner JSX element content
 */
export const Card: React.FC<CardProps> = ({
  hoverable = true,
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 overflow-hidden';
  
  const variants = {
    // Standard dark cyber card
    default: 'bg-[#09090b] border border-[#1f1f23] text-white shadow-[0_4px_24px_rgba(0,0,0,0.7)]',
    
    // Featured Article Card with subtle warm dark gradient
    featured: 'bg-gradient-to-br from-[#120d09] via-[#09090b] to-[#070709] border border-orange-500/30 shadow-[0_4px_30px_rgba(249,115,22,0.08)]',
    
    // Dark CTA Banner Container
    dark: 'bg-[#050507] text-white border border-[#27272a] shadow-2xl',
  };

  const hoverStyles = hoverable ? 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.9)] hover:border-orange-500/40 hover:-translate-y-0.5' : '';

  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
