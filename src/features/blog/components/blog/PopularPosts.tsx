import React from 'react';
import { POPULAR_POSTS } from '../../data/posts';
import Card from '../ui/Card';
import { formatDate } from '../../lib/utils';
import { ArrowRight, Layers, ShieldAlert, BarChart3 } from 'lucide-react';

/**
 * PopularPosts Component Props interface.
 */
export interface PopularPostsProps {
  onSelectPost?: (slug: string) => void;
}

/**
 * Popular Posts Sidebar Widget Component.
 * Displays top read posts with theme icons, titles, metadata, and "View all posts" arrow link matching Image 2.
 * 
 * @param onSelectPost - Callback when a popular article is clicked
 */
export const PopularPosts: React.FC<PopularPostsProps> = ({ onSelectPost }) => {
  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case 'blue':
        return (
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
        );
      case 'purple':
        return (
          <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
        );
      case 'orange':
      default:
        return (
          <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#ff5500] flex items-center justify-center shrink-0">
            <BarChart3 className="w-4 h-4" />
          </div>
        );
    }
  };

  return (
    <Card variant="default" className="p-6 space-y-6">
      {/* Widget Title */}
      <h4 className="text-base font-bold text-white font-sans">
        Popular posts
      </h4>

      {/* Posts List */}
      <div className="space-y-4">
        {POPULAR_POSTS.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectPost && onSelectPost(item.slug)}
            className="flex items-start gap-3.5 group cursor-pointer p-1.5 -mx-1.5 rounded-xl hover:bg-white/[0.04] transition-colors"
          >
            {/* Thumbnail Icon */}
            {getThemeIcon(item.categoryTheme)}

            {/* Post Metadata */}
            <div className="min-w-0 flex-1 space-y-1">
              <h5 className="text-xs font-bold text-zinc-200 group-hover:text-[#ff5500] transition-colors leading-snug line-clamp-2">
                {item.title}
              </h5>
              <p className="text-[11px] text-zinc-500 font-medium">
                {formatDate(item.publishedAt)} • {item.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Posts Link */}
      <div className="pt-2 border-t border-[#1f1f23]">
        <button className="flex items-center gap-1 text-xs font-bold text-[#ff5500] hover:underline transition-all cursor-pointer">
          <span>View all posts</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </Card>
  );
};

export default PopularPosts;
