import React from 'react';
import { BlogPost } from '../../types';
import ArticleCard from './ArticleCard';
import Pagination from '../ui/Pagination';
import { ArrowRight } from 'lucide-react';

/**
 * ArticleGrid Component Props interface.
 */
export interface ArticleGridProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onReadPost: (post: BlogPost) => void;
  onResetFilters?: () => void;
}

/**
 * Main Article Feed Grid Component.
 * Displays grid header, responsive 3-column article cards, empty fallback state, and pagination navigation.
 * 
 * @param posts - Array of blog posts to render
 * @param currentPage - Currently active page
 * @param totalPages - Total available pagination pages
 * @param onPageChange - Page switch callback
 * @param onReadPost - Click handler for article preview
 * @param onResetFilters - Optional filter reset callback
 */
export const ArticleGrid: React.FC<ArticleGridProps> = ({
  posts,
  currentPage,
  totalPages,
  onPageChange,
  onReadPost,
  onResetFilters,
}) => {
  return (
    <div className="space-y-6">
      
      {/* Grid Section Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white tracking-tight font-sans">
          Latest articles
        </h3>

        {/* View All Posts Link */}
        <button
          onClick={onResetFilters}
          className="flex items-center gap-1.5 text-xs font-bold text-[#ff5500] hover:underline transition-all cursor-pointer"
        >
          <span>View all posts</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Empty Filter State */}
      {posts.length === 0 ? (
        <div className="bg-[#09090b] rounded-2xl border border-[#1f1f23] p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-orange-500/10 text-[#ff5500] flex items-center justify-center mx-auto border border-orange-500/20">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-white">No articles found</h4>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            We couldn&apos;t find any articles matching your search query or selected category.
          </p>
          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="px-4 py-2 bg-[#ff5500] text-white rounded-lg text-xs font-bold shadow-sm hover:bg-[#ff661a] transition-colors cursor-pointer"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        /* 6 Article Cards Grid (2 rows of 3) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} onReadPost={onReadPost} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {posts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}

    </div>
  );
};

export default ArticleGrid;
