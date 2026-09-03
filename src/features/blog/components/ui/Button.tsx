import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Reusable Button component props supporting multiple visual variants and sizes.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Custom Button Component.
 * Implements Risknox Fortress design styling with smooth hover transitions and rounded corners.
 * 
 * @param variant - Visual style variant ('primary', 'outline', 'dark', etc.)
 * @param size - Button size dimensions ('sm', 'md', 'lg')
 * @param className - Optional additional CSS class overrides
 * @param props - HTML button attributes
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  // Base classes for consistent alignment, font weight, and transition
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  // Variant mappings matching screenshot styles
  const variants = {
    // Vibrant Orange pill button (e.g., "Start for free →", active page state)
    primary: 'bg-[#F95722] hover:bg-[#E04815] text-white rounded-full shadow-sm hover:shadow',
    
    // Light gray/peach rounded button
    secondary: 'bg-orange-50 text-[#F95722] hover:bg-orange-100 rounded-lg',
    
    // Subtle border pill button (e.g., "Sign In" header button)
    outline: 'border border-gray-200 hover:border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-full',
    
    // Text link style without background
    ghost: 'text-gray-600 hover:text-[#F95722] p-0',
    
    // Solid dark black rounded button (e.g., Newsletter "Subscribe" button)
    dark: 'bg-[#0D0D0F] hover:bg-black text-white rounded-lg shadow-sm',
  };

  // Size padding variations
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base font-semibold',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
