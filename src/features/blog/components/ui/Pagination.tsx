import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Pagination Component Props interface.
 */
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * Pagination Controls Component.
 * Displays page numbers with active highlighted orange square state matching Image 2 screenshot.
 * 
 * @param currentPage - Currently active page index (1-based)
 * @param totalPages - Total available pages
 * @param onPageChange - Callback function when user selects a page
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 6,
  onPageChange,
}) => {
  const getPages = (): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const items: (number | string)[] = [1];
    if (currentPage > 3) {
      items.push('...-start');
    }
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      if (!items.includes(i)) {
        items.push(i);
      }
    }
    if (currentPage < totalPages - 2) {
      items.push('...-end');
    }
    if (!items.includes(totalPages)) {
      items.push(totalPages);
    }
    return items;
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-center gap-2 mt-12 mb-6">
      {pages.map((page, index) => {
        if (typeof page === 'string') {
          return (
            <span key={`ellipsis-${index}`} className="px-2 text-zinc-500 font-medium select-none">
              ...
            </span>
          );
        }

        const isActive = currentPage === page;

        return (
          <button
            key={`page-${page}-${index}`}
            onClick={() => onPageChange(page)}
            className={cn(
              'w-9 h-9 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center',
              isActive
                ? 'bg-[#ff5500] text-white shadow-sm shadow-orange-500/30'
                : 'bg-[#09090b] text-zinc-400 hover:bg-[#141418] hover:text-white border border-[#27272a]'
            )}
          >
            {page}
          </button>
        );
      })}

      {/* Next Page Arrow Button */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage >= totalPages}
        className="w-9 h-9 rounded-lg bg-[#09090b] border border-[#27272a] text-zinc-400 hover:bg-[#141418] hover:text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next Page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
