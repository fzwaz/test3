"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/features/blog/components/blog/Hero";
import ArticleGrid from "@/features/blog/components/blog/ArticleGrid";
import ArticleCard from "@/features/blog/components/blog/ArticleCard";
import Sidebar from "@/features/blog/components/blog/Sidebar";
import ArticleModal from "@/features/blog/components/blog/ArticleModal";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import { ARTICLES, FEATURED_ARTICLE, POPULAR_POSTS } from "@/features/blog/data/posts";
import { BlogPost } from "@/features/blog/types";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModalPost, setActiveModalPost] = useState<BlogPost | null>(null);

  const postsPerPage = 6;

  // All combined posts
  const allPosts = useMemo(() => [FEATURED_ARTICLE, ...ARTICLES], []);

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      // Category filter
      if (selectedCategory && post.category.id !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchesCategory = post.category.name.toLowerCase().includes(q);
        const matchesTags = post.tags.some((t) => t.toLowerCase().includes(q));
        return matchesTitle || matchesExcerpt || matchesCategory || matchesTags;
      }

      return true;
    });
  }, [allPosts, searchQuery, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  const showPopular = !searchQuery.trim() && !selectedCategory;

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      {/* 1. Header Navigation */}
      <Header currentPath="/resources" />

      <main className="flex-grow relative z-10 font-sans">
        {/* 2. Particle Canvas Hero Section */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setCurrentPage(1);
          }}
        />

        {/* 3. Main Feed Section (Scrollable Left Articles + Sticky Right Category Sidebar) */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Content Column: Scrollable Articles Grid (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Popular posts — same cards as latest articles, above the feed */}
              {showPopular && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                    Popular posts
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {POPULAR_POSTS.map((post) => (
                      <ArticleCard key={post.id} post={post} onReadPost={(p) => setActiveModalPost(p)} />
                    ))}
                  </div>
                </div>
              )}
              <ArticleGrid
                posts={paginatedPosts}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(p) => {
                  setCurrentPage(p);
                  window.scrollTo({ top: 480, behavior: "smooth" });
                }}
                onReadPost={(post) => setActiveModalPost(post)}
                onResetFilters={handleResetFilters}
              />
            </div>

            {/* Right Column: Sticky Category Sidebar (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
              <Sidebar
                selectedCategory={selectedCategory}
                onSelectCategory={(catId) => {
                  setSelectedCategory(catId);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </section>

        {/* 4. Solution CTA Section */}
        <div className="pb-12 md:pb-16">
          <SolutionCTA />
        </div>
      </main>

      {/* 6. Article Reader Modal Dialog */}
      <ArticleModal
        post={activeModalPost}
        isOpen={Boolean(activeModalPost)}
        onClose={() => setActiveModalPost(null)}
      />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

