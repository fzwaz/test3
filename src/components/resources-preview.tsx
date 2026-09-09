"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";
import { ARTICLES } from "@/features/blog/data/posts";
import { ArticleCard } from "@/features/blog/components/blog/ArticleCard";

export default function ResourcesPreview() {
  const router = useRouter();
  const posts = ARTICLES.slice(0, 3);

  return (
    <section className="w-full bg-black border-t border-white/[0.06] py-16 md:py-20">
      <Reveal className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" delay={0.05}>
        {/* Header */}
        <div className="mb-8 md:mb-10 text-center">
          <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/30" />
            <span className="text-[#f36734] text-xs font-mono font-bold tracking-[0.22em] uppercase px-2">
              Resources
            </span>
            <div className="flex-1 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-white/30 via-white/20 to-[#f36734]" />
              <ArrowRight className="w-3.5 h-3.5 text-[#f36734] -ml-0.5 flex-shrink-0" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Latest insights.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} onReadPost={() => router.push("/resources")} />
          ))}
        </div>

        {/* View more */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/resources"
            className="group inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl bg-black/70 text-white font-semibold text-sm border border-[#f97316]/60 hover:border-orange-400 shadow-[0_0_16px_rgba(243,103,52,0.15)] hover:shadow-[0_0_24px_rgba(243,103,52,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>View more</span>
            <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
