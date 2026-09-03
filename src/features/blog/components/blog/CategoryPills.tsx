import React from 'react';
import { Shield, Radar, FileText, Cpu, TrendingUp } from 'lucide-react';
import { CATEGORIES } from '../../data/posts';
import { cn } from '../../lib/utils';

/**
 * CategoryPills Component Props interface.
 */
export interface CategoryPillsProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

/**
 * Category Shortcut Row Component.
 * Displays 5 styled category shortcut pills with theme icons and descriptions matching Image 1.
 * 
 * @param selectedCategory - Currently active category ID filter
 * @param onSelectCategory - Category selection callback handler
 */
export const CategoryPills: React.FC<CategoryPillsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  // Map icon names to Lucide Icon components
  const getCategoryIcon = (iconName: string, theme: string) => {
    const iconClasses = {
      orange: 'text-[#ff5500] bg-orange-500/10 border border-orange-500/20',
      blue: 'text-blue-400 bg-blue-500/10 border border-blue-500/20',
      green: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
      purple: 'text-purple-400 bg-purple-500/10 border border-purple-500/20',
      peach: 'text-amber-400 bg-amber-500/10 border border-amber-500/20',
    }[theme] || 'text-zinc-400 bg-zinc-800 border border-zinc-700';

    const props = { className: 'w-4 h-4' };

    switch (iconName) {
      case 'shield': return <div className={cn('p-2 rounded-lg', iconClasses)}><Shield {...props} /></div>;
      case 'radar': return <div className={cn('p-2 rounded-lg', iconClasses)}><Radar {...props} /></div>;
      case 'file-text': return <div className={cn('p-2 rounded-lg', iconClasses)}><FileText {...props} /></div>;
      case 'cpu': return <div className={cn('p-2 rounded-lg', iconClasses)}><Cpu {...props} /></div>;
      case 'trending-up': return <div className={cn('p-2 rounded-lg', iconClasses)}><TrendingUp {...props} /></div>;
      default: return <div className={cn('p-2 rounded-lg', iconClasses)}><Shield {...props} /></div>;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? null : cat.id)}
              className={cn(
                'flex items-center gap-3 p-3 sm:p-3.5 min-h-[48px] rounded-xl border transition-all duration-200 text-left group active:scale-[0.98]',
                isSelected
                  ? 'bg-[#140e0a] border-[#ff5500] shadow-[0_0_20px_rgba(255,85,0,0.2)] ring-1 ring-[#ff5500]'
                  : 'bg-[#09090b] hover:bg-[#111114] border-[#1f1f23] hover:border-[#2f2f36] shadow-[0_4px_16px_rgba(0,0,0,0.5)]'
              )}
            >
              {/* Category Icon */}
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-200">
                {getCategoryIcon(cat.iconName, cat.colorTheme)}
              </div>

              {/* Title & Subtitle */}
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff5500] transition-colors line-clamp-1">
                  {cat.name}
                </h4>
                <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5 font-normal">
                  {cat.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryPills;
