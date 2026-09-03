import React from 'react';
import { BlogPost } from '../../types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { ArticleIsometric } from './Illustrations';
import { formatDate } from '../../lib/utils';
import { Calendar, Clock } from 'lucide-react';

/**
 * ArticleCard Component Props interface.
 */
export interface ArticleCardProps {
  post: BlogPost;
  onReadPost: (post: BlogPost) => void;
}

/**
 * Article Card Component.
 * Individual grid card displaying post isometric illustration, category badge, title, excerpt, date, and read time.
 * 
 * @param post - Blog post data
 * @param onReadPost - Click handler for article preview
 */
export const ArticleCard: React.FC<ArticleCardProps> = ({ post, onReadPost }) => {
  return (
    <Card
      variant="default"
      className="flex flex-col h-full cursor-pointer group hover:border-[#ff5500]/50 transition-all duration-300"
      onClick={() => onReadPost(post)}
    >
      {/* 3D Isometric Visual Top Banner */}
      <div className="w-full border-b border-[#1f1f23] bg-[#0c0c10]">
        <ArticleIsometric type={post.illustrationType} />
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          
          {/* Category Pill Tag */}
          <Badge variant="orange" dot={false} className="text-[10px]">
            {post.category.name}
          </Badge>

          {/* Post Title */}
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ff5500] transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt Summary */}
          <p className="text-xs text-zinc-400 font-normal leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

        </div>

        {/* Footer Meta Details: Calendar Date & Read Time */}
        <div className="pt-4 border-t border-[#1f1f23] flex items-center justify-between text-xs text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>{post.readTime}</span>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default ArticleCard;
