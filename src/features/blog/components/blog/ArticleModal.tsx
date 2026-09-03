import React from 'react';
import { BlogPost } from '../../types';
import Modal from '../ui/Modal';
import Badge from '../ui/Badge';
import { formatDate } from '../../lib/utils';
import { Calendar, Clock, Share2 } from 'lucide-react';

/**
 * ArticleModal Component Props interface.
 */
export interface ArticleModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Interactive Article Preview Reader Modal Component.
 * Opens full article text with styled markdown typography, author bio, metadata badges, and share button.
 * 
 * @param post - Currently selected article object
 * @param isOpen - Visibility state
 * @param onClose - Modal close handler
 */
export const ArticleModal: React.FC<ArticleModalProps> = ({ post, isOpen, onClose }) => {
  if (!post) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={post.title}>
      <div className="space-y-6">
        
        {/* Category Badge & Meta Information */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1f1f23]">
          <Badge variant="orange" dot={true}>
            {post.category.name}
          </Badge>

          <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
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

        {/* Article Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          {post.title}
        </h1>

        {/* Excerpt Lead */}
        <p className="text-base text-zinc-300 font-medium italic border-l-4 border-[#ff5500] pl-4 py-2 bg-orange-500/10 rounded-r-lg">
          {post.excerpt}
        </p>

        {/* Author Bio Banner */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-[#111114] border border-[#1f1f23]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] text-[#ff5500] flex items-center justify-center font-bold text-sm">
              R
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{post.author.name}</h4>
              <p className="text-[11px] text-zinc-400">{post.author.role || 'Cybersecurity Researcher'}</p>
            </div>
          </div>

          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }
            }}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors border border-transparent hover:border-[#27272a] cursor-pointer"
            title="Share Article"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="max-w-none text-sm sm:text-base text-zinc-300 leading-relaxed space-y-4 pt-2">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('# ')) {
              return <h2 key={idx} className="text-xl font-bold text-white pt-2">{paragraph.replace('# ', '')}</h2>;
            }
            if (paragraph.startsWith('## ')) {
              return <h3 key={idx} className="text-lg font-bold text-white pt-2">{paragraph.replace('## ', '')}</h3>;
            }
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote key={idx} className="p-4 bg-orange-500/10 border-l-4 border-[#ff5500] font-medium text-orange-200 rounded-r-lg">
                  {paragraph.replace('> ', '')}
                </blockquote>
              );
            }
            return <p key={idx} className="text-zinc-300">{paragraph}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-[#1f1f23] flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-zinc-400">Tags:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-zinc-300 text-xs font-medium">
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </Modal>
  );
};

export default ArticleModal;
