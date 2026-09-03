import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Input Component Props interface.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

/**
 * Reusable Form Input Component.
 * Supports embedded search icons, sleek borders, and focus rings.
 * 
 * @param icon - Optional icon element positioned inside the right or left of input
 * @param className - Class overrides
 * @param props - Standard input HTML attributes
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-[#09090b] text-white border border-[#27272a] rounded-xl text-sm placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] focus:ring-2 focus:ring-[#ff5500]/20 transition-all duration-200',
            icon ? 'pr-11' : '',
            className
          )}
          {...props}
        />
        {icon && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
