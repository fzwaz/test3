"use client";

import React, { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  initials: string;
  stars: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aman S",
      role: "Operations Head",
      quote:
        "Risknox's automation capabilities have transformed our follow-up processes. Nothing gets missed anymore, making our operations more efficient and reliable.",
      initials: "AS",
      stars: 5,
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Security Consultant",
      quote:
        "The Risknox platform offers deep visibility into enterprise security risks. Its actionable intelligence helps address critical vulnerabilities, strengthen defenses, and ensure comprehensive protection across the organization.",
      initials: "MS",
      stars: 5,
    },
    {
      id: 3,
      name: "Abid Sherrif",
      role: "CIO, SP Medifort Hospital",
      quote:
        "Risknox delivers clear, actionable insights that significantly enhance our cybersecurity approach. The data-driven recommendations enable better decision-making and help us prioritize security initiatives more effectively.",
      initials: "AS",
      stars: 5,
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.8;

    const scrollLoop = () => {
      if (!isHovered && !isDragging && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scrollPrev = () => scrollRef.current?.scrollBy({ left: -380, behavior: "smooth" });
  const scrollNext = () => scrollRef.current?.scrollBy({ left: 380, behavior: "smooth" });

  const displayTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      style={{
        background: "#000000",
        padding: "64px 0 80px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <style>{`
        .testimonial-scroll-track::-webkit-scrollbar {
          display: none;
        }
        .testimonial-card {
          transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: none;
        }
        .testimonial-card:hover {
          border-color: rgba(243,103,52,0.55);
          box-shadow: 0 0 32px rgba(243,103,52,0.22), 0 8px 40px rgba(0,0,0,0.7);
          transform: translateY(-4px);
        }
      `}</style>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10 w-full relative z-10">
        {/* -- Header Section -- */}
        <div style={{ marginBottom: "36px" }}>
          {/* Badge */}
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(243,103,52,0.35)",
                borderRadius: "999px",
                padding: "6px 16px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#f36734",
                background: "rgba(243,103,52,0.08)",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#f36734",
                  boxShadow: "0 0 8px 2px rgba(243,103,52,0.6)",
                  display: "inline-block",
                }}
              />
              OUR TESTIMONIALS
            </span>
          </div>

          {/* Heading + Nav Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                maxWidth: "750px",
                margin: 0,
              }}
            >
              Trusted by Clients &amp; Partners{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f36734 0%, #fb923c 60%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Worldwide
              </span>
            </h2>

            {/* Navigation Arrows */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                onClick={scrollPrev}
                aria-label="Previous testimonial"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "transparent",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(243,103,52,0.12)";
                  e.currentTarget.style.borderColor = "rgba(243,103,52,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              >
                <ChevronLeft width={20} height={20} />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next testimonial"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "transparent",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(243,103,52,0.12)";
                  e.currentTarget.style.borderColor = "rgba(243,103,52,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              >
                <ChevronRight width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -- Single-Row Carousel Container with Side Fade Edges -- */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {/* Left Fade Effect */}
        <div
          className="hidden sm:block"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #000000 25%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Right Fade Effect */}
        <div
          className="hidden sm:block"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #000000 25%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="testimonial-scroll-track"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          style={{
            display: "flex",
            gap: "18px",
            overflowX: "scroll",
            scrollBehavior: isDragging ? "auto" : "smooth",
            cursor: isDragging ? "grabbing" : "grab",
            padding: "16px 20px 24px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          {displayTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="testimonial-card w-[84vw] max-w-[380px] min-w-[280px] sm:min-w-[380px] p-6 sm:p-8 rounded-[20px] bg-black flex flex-col justify-between min-h-[290px] sm:min-h-[310px] shrink-0"
            >
              {/* Top Row: Stars + Quote Icon */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  {/* Stars */}
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} width={18} height={18} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "rgba(220,230,245,0.8)",
                    fontStyle: "italic",
                    marginBottom: "28px",
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Footer: Avatar + Author Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: "20px",
                }}
              >
                {/* Initials Avatar */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #f36734 0%, #c44618 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#ffffff",
                    boxShadow: "0 4px 12px rgba(243,103,52,0.35)",
                    flexShrink: 0,
                  }}
                >
                  {item.initials}
                </div>

                {/* Author Name and Role */}
                <div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(180,190,210,0.6)",
                      margin: 0,
                      marginTop: "2px",
                    }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
