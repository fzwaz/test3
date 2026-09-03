import React from 'react';
import Card from '../ui/Card';
import Newsletter from './Newsletter';
import PopularPosts from './PopularPosts';
import { CATEGORIES } from '../../data/posts';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

/**
 * Sidebar Component Props interface.
 */
export interface SidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  onSelectPopularPost?: (slug: string) => void;
}

/**
 * Blog Right Sidebar Layout Component.
 * Contains Categories List with post counts, Newsletter Subscription Widget, and Popular Posts list.
 * 
 * @param selectedCategory - Active category filter ID
 * @param onSelectCategory - Category switch handler
 * @param onSelectPopularPost - Popular article click handler
 */
export const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectPopularPost,
}) => {
  const totalPostsCount = 32;

  return (
    <aside className="space-y-8">
      
      {/* Categories List Widget */}
      <Card variant="default" className="p-5 sm:p-6 space-y-4 border border-[#1f1f23] bg-[#09090b]/95 backdrop-blur-xl">
        <div className="flex items-center justify-between pb-3 border-b border-[#1f1f23]">
          <h4 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span>Categories</span>
          </h4>
          <span className="text-[11px] text-zinc-500 font-mono uppercase">
            Filter Feed
          </span>
        </div>

        <div className="space-y-1.5">
          {/* All Posts option */}
          <button
            onClick={() => onSelectCategory(null)}
            className={cn(
              'w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border',
              selectedCategory === null
                ? 'bg-orange-500/15 text-[#ff5500] border-orange-500/40 shadow-[0_0_15px_rgba(255,85,0,0.15)]'
                : 'text-zinc-300 hover:text-white hover:bg-white/[0.04] border-transparent'
            )}
          >
            <div className="flex items-center gap-2.5">
              <span className={cn(
                'w-1.5 h-1.5 rounded-full',
                selectedCategory === null ? 'bg-[#ff5500]' : 'bg-zinc-600'
              )} />
              <span>All Categories</span>
            </div>
            <span className={cn(
              'px-2 py-0.5 rounded-md text-[10px] font-bold',
              selectedCategory === null ? 'bg-[#ff5500] text-white' : 'bg-[#18181b] text-zinc-400'
            )}>
              {totalPostsCount}
            </span>
          </button>

          {/* Individual Category options */}
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  'w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer border',
                  isSelected
                    ? 'bg-orange-500/15 text-[#ff5500] font-bold border-orange-500/40 shadow-[0_0_15px_rgba(255,85,0,0.15)]'
                    : 'text-zinc-400 hover:bg-white/[0.04] hover:text-white border-transparent'
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span className={cn(
                    'w-1.5 h-1.5 rounded-full',
                    isSelected ? 'bg-[#ff5500]' : 'bg-zinc-600'
                  )} />
                  <span className="truncate">{cat.name}</span>
                </div>
                <span className={cn(
                  'px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0',
                  isSelected ? 'bg-[#ff5500] text-white' : 'bg-[#18181b] text-zinc-500'
                )}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clear Filter / View All Link */}
        {selectedCategory && (
          <div className="pt-2 border-t border-[#1f1f23]">
            <button
              onClick={() => onSelectCategory(null)}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold text-[#ff5500] hover:text-orange-400 hover:underline transition-all cursor-pointer"
            >
              <span>Reset to all categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </Card>

      {/* Newsletter Subscription Widget */}
      <Newsletter />

      {/* Popular Posts Widget */}
      <PopularPosts onSelectPost={onSelectPopularPost} />
    </aside>
  );
};

export default Sidebar;
