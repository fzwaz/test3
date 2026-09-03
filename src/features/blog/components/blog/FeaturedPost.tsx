import React from 'react';
import { BlogPost } from '../../types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { FeaturedIsometric } from './Illustrations';
import { formatDate } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

/**
 * FeaturedPost Component Props interface.
 */
export interface FeaturedPostProps {
  post: BlogPost;
  onReadPost: (post: BlogPost) => void;
}

/**
 * Featured Article Highlight Card Component.
 * Displays top featured blog post with category badge, author metadata, summary, and isometric monitor illustration matching Image 2.
 * 
 * @param post - Featured article data item
 * @param onReadPost - Click handler to open post detail view/modal
 */
export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, onReadPost }) => {
  return (
    <div className="space-y-4">
      {/* Section Section Header */}
      <h3 className="text-xs sm:text-sm font-bold tracking-wider text-[#ff5500] uppercase font-sans">
        Featured article
      </h3>

      {/* Featured Card */}
      <Card
        variant="featured"
        className="p-6 sm:p-8 cursor-pointer group hover:border-[#ff5500]/60 transition-all duration-300"
        onClick={() => onReadPost(post)}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Article Info Column (7 Cols) */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Category Tag Badge */}
            <Badge variant="orange" dot={true}>
              {post.category.name}
            </Badge>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#ff5500] transition-colors leading-tight">
              {post.title}
            </h2>

            {/* Excerpt Summary */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {post.excerpt}
            </p>

            {/* Meta Row: Author, Date, Read Time, & Read More */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#1f1f23]">
              
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#ff5500] font-extrabold text-xs">
                  R
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white block">{post.author.name}</span>
                  <span className="text-zinc-400 font-medium">
                    {formatDate(post.publishedAt)} • {post.readTime}
                  </span>
                </div>
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-1.5 text-sm font-bold text-[#ff5500] group-hover:translate-x-1 transition-transform">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4" />
              </div>

            </div>

          </div>

          {/* Right Isometric Graphic Column (5 Cols) */}
          <div className="md:col-span-5 flex justify-center">
            <FeaturedIsometric className="w-full" />
          </div>

        </div>
      </Card>
    </div>
  );
};

export default FeaturedPost;
