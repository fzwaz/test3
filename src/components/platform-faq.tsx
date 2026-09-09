"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";
import { BlurredStagger } from "@/components/faq-section";

export interface PlatformFaqEntry {
  question: string;
  answer: string;
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: PlatformFaqEntry & { isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div animate={isOpen ? "open" : "closed"} className="border-b border-white/[0.14]">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer"
      >
        <span
          className={cn(
            "text-base sm:text-lg font-normal tracking-tight transition-colors",
            isOpen ? "text-white" : "text-slate-100 group-hover:text-white",
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "180deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.25 }}
          className={cn(
            "shrink-0 transition-colors",
            isOpen ? "text-[#f36734]" : "text-slate-300 group-hover:text-white",
          )}
        >
          <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "24px" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <BlurredStagger text={answer} active={isOpen} />
      </motion.div>
    </motion.div>
  );
}

export default function PlatformFaq({
  eyebrow,
  title,
  faqs,
}: {
  eyebrow: string;
  title: string;
  faqs: PlatformFaqEntry[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-black border-t border-white/[0.06] px-4 py-20 md:py-28 text-white">
      <Reveal>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <span className="mb-4 text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#f36734]">
            {eyebrow}
          </span>
          <h2 className="mb-2 text-4xl sm:text-5xl font-bold tracking-tight text-white">{title}</h2>
          <span className="absolute -top-[350px] left-[50%] -z-10 h-[500px] w-[600px] max-w-full -translate-x-[50%] rounded-full bg-[radial-gradient(closest-side,rgba(243,103,52,0.12),transparent)] blur-3xl" />
        </div>
      </Reveal>
      <div className="relative z-10 mx-auto mt-10 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key="faqs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "backIn" }}
          >
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                {...faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(index)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
