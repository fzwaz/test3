"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

interface FaqEntry {
  question: string;
  answer: string;
}

const CATEGORIES: Record<string, string> = {
  risknox: "Risknox",
  fortress: "Fortress",
  compass: "Compass",
  pulse: "Pulse",
  accord: "Accord",
  dmarc: "DMARC",
};

const FAQ_DATA: Record<string, FaqEntry[]> = {
  risknox: [
    {
      question: "What is Risknox?",
      answer:
        "Risknox is an AI-powered cyber risk intelligence platform that helps organizations understand, monitor, quantify, and manage cyber risk through one connected ecosystem.",
    },
    {
      question: "How is Risknox different from traditional cybersecurity tools?",
      answer:
        "Traditional tools often generate technical alerts and security scores. Risknox connects technical risk with business impact, helping organizations understand what risks matter most and what actions should be prioritized.",
    },
    {
      question: "Who is Risknox built for?",
      answer:
        "Risknox supports enterprises, security teams, risk leaders, insurers, brokers, and organizations that need better visibility into cybersecurity, compliance, and financial exposure.",
    },
    {
      question: "Can Risknox work with our existing security infrastructure?",
      answer:
        "Yes. Risknox is designed to work alongside existing security, cloud, IT, and enterprise environments, bringing relevant signals together into a more unified view of risk.",
    },
    {
      question: "Why does Risknox focus on business impact?",
      answer:
        "Cybersecurity decisions affect more than technical systems—they affect revenue, operations, reputation, and financial exposure. Risknox helps translate complex security information into insights that technical teams, executives, and decision-makers can act on.",
    },
  ],
  fortress: [
    {
      question: "What is Fortress?",
      answer:
        "Fortress is Risknox's cyber risk quantification platform. It helps organizations translate technical cyber exposure into measurable financial and business risk.",
    },
    {
      question: "How does Fortress quantify cyber risk?",
      answer:
        "Fortress combines security exposure, vulnerabilities, threat intelligence, and risk modeling to estimate potential financial impact and prioritize risks based on their potential consequences.",
    },
    {
      question: "Can Fortress help executives and boards understand cyber risk?",
      answer:
        "Yes. Fortress transforms complex technical security data into clearer, board-ready insights that help leadership understand exposure, potential loss, and remediation priorities.",
    },
    {
      question: "How does Fortress help prioritize vulnerabilities?",
      answer:
        "Instead of treating every vulnerability as equally important, Fortress helps identify which exposures could create the greatest business and financial impact, allowing teams to focus their resources more effectively.",
    },
    {
      question: "Who should use Fortress?",
      answer:
        "Fortress is particularly valuable for CISOs, CFOs, enterprise risk teams, executives, and boards that need to connect cybersecurity decisions with measurable business outcomes.",
    },
  ],
  compass: [
    {
      question: "What is Compass?",
      answer:
        "Compass is Risknox's underwriting intelligence platform, designed to transform cybersecurity data into meaningful risk insights for insurers, brokers, and insurance decision-makers.",
    },
    {
      question: "How does Compass improve cyber insurance decisions?",
      answer:
        "Compass provides more data-driven visibility into an organization's cyber posture, helping insurers and brokers evaluate exposure with stronger technical context.",
    },
    {
      question: "Can Compass help replace traditional security questionnaires?",
      answer:
        "Compass is designed to supplement static, self-reported information with more objective security signals, helping create a clearer and more current understanding of cyber risk.",
    },
    {
      question: "Does Compass support risk scoring and exposure analysis?",
      answer:
        "Yes. Compass helps evaluate cyber exposure, model potential loss scenarios, and provide structured risk intelligence that can support underwriting decisions.",
    },
    {
      question: "Who is Compass designed for?",
      answer:
        "Compass is built primarily for cyber insurance carriers, underwriters, brokers, MGAs, and organizations involved in evaluating or transferring cyber risk.",
    },
  ],
  pulse: [
    {
      question: "What is Pulse?",
      answer:
        "Pulse is Risknox's continuous monitoring and threat detection platform, designed to provide ongoing visibility into emerging risks, anomalies, and potential security issues.",
    },
    {
      question: "What does Pulse continuously monitor?",
      answer:
        "Pulse can provide visibility across internet-facing assets, cloud environments, infrastructure, security signals, and emerging threats to help organizations maintain awareness of their changing attack surface.",
    },
    {
      question: "How does Pulse reduce alert fatigue?",
      answer:
        "Pulse helps prioritize meaningful signals by adding context and focusing attention on risks that require action, rather than overwhelming teams with large volumes of low-priority alerts.",
    },
    {
      question: "Can Pulse help identify threats before they become incidents?",
      answer:
        "Pulse is designed to detect anomalies, exposures, and emerging threat indicators early, helping security teams investigate and respond before risks escalate.",
    },
    {
      question: "Who should use Pulse?",
      answer:
        "Pulse is particularly useful for CISOs, security operations teams, SOC analysts, cloud teams, DevOps professionals, and organizations that require continuous security visibility.",
    },
  ],
  accord: [
    {
      question: "What is Accord?",
      answer:
        "Accord is Risknox's AI governance and compliance platform, designed to help organizations manage the risks associated with deploying AI systems.",
    },
    {
      question: "Why is AI governance important?",
      answer:
        "As organizations deploy AI across business operations, they need visibility into issues such as security, privacy, fairness, compliance, accountability, and model-related risk.",
    },
    {
      question: "What frameworks can Accord support?",
      answer:
        "Accord is designed to support AI governance through alignment with frameworks and regulations such as the EU AI Act and NIST AI Risk Management Framework.",
    },
    {
      question: "Can Accord help us understand the risks of our AI systems?",
      answer:
        "Yes. Accord helps organizations evaluate AI-related risks across areas such as data privacy, model behavior, governance controls, safety, and operational accountability.",
    },
    {
      question: "Who should use Accord?",
      answer:
        "Accord is designed for organizations deploying AI, including AI leaders, GRC teams, legal and compliance professionals, and AI/ML engineering teams.",
    },
  ],
  dmarc: [
    {
      question: "What is DMARC Monitoring?",
      answer:
        "DMARC Monitoring helps organisations analyse email authentication activity, understand legitimate sending sources, and identify unauthorised attempts to send email using their domain.",
    },
    {
      question: "What is the difference between SPF, DKIM and DMARC?",
      answer:
        "SPF identifies authorised sending servers, DKIM helps verify message authenticity through cryptographic signatures, and DMARC applies policy and reporting around authentication alignment.",
    },
    {
      question: "Can DMARC Monitoring identify unauthorised senders?",
      answer:
        "Yes. DMARC Monitoring analyses sending sources to isolate rogue or unauthorised mail servers attempting domain impersonation.",
    },
    {
      question: "Should we immediately set DMARC to p=reject?",
      answer:
        "Not necessarily. Organisations should first understand their legitimate email sources before enforcing strict policies — a guided transition from p=none toward p=reject avoids disrupting legitimate business mail.",
    },
    {
      question: "Does DMARC help protect against phishing and impersonation?",
      answer:
        "DMARC enforcement can help reduce unauthorised use of a domain in email by applying policy to messages that fail authentication checks, making it an important layer in domain anti-spoofing protection.",
    },
  ],
};

const FAQHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="relative z-10 flex flex-col items-center justify-center text-center">
    <span className="mb-4 text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#f36734]">
      {subtitle}
    </span>
    <h2 className="mb-2 text-4xl sm:text-5xl font-bold tracking-tight text-white">{title}</h2>
    <span className="absolute -top-[350px] left-[50%] -z-10 h-[500px] w-[600px] max-w-full -translate-x-[50%] rounded-full bg-[radial-gradient(closest-side,rgba(243,103,52,0.12),transparent)] blur-3xl" />
  </div>
);

const FAQTabs = ({
  categories,
  selected,
  setSelected,
}: {
  categories: Record<string, string>;
  selected: string;
  setSelected: (key: string) => void;
}) => (
  <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap rounded-xl border px-5 py-2.5 text-sm  transition-colors duration-300 cursor-pointer",
          selected === key
            ? "border-[#f36734] text-[#080808]"
            : "border-white/[0.12] bg-transparent text-slate-400 hover:text-white hover:border-white/25",
        )}
      >
        <span className="relative z-10">{label}</span>
        <AnimatePresence>
          {selected === key && (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "backIn" }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-[#f36734] to-[#ff8c52] shadow-[0_0_20px_rgba(243,103,52,0.45)]"
            />
          )}
        </AnimatePresence>
      </button>
    ))}
  </div>
);

export const BlurredStagger = ({ text, active }: { text: string; active: boolean }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.02 },
    },
  };

  const word: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.012 } },
  };

  const letter: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate={active ? "show" : "hidden"}
      className="max-w-3xl text-sm sm:text-base leading-relaxed text-slate-400 break-words"
    >
      {text.split(" ").map((w, wi) => (
        <motion.span key={wi} variants={word} className="inline-block whitespace-nowrap">
          {w.split("").map((char, ci) => (
            <motion.span
              key={ci}
              variants={letter}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {"\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
};

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqEntry & { isOpen: boolean; onToggle: () => void }) => {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="border-b border-white/[0.14]"
    >
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
};

const FAQList = ({ faqData, selected }: { faqData: Record<string, FaqEntry[]>; selected: string }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  useEffect(() => {
    setOpenIndex(0);
  }, [selected]);

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <AnimatePresence mode="wait">
        {Object.entries(faqData).map(([category, questions]) => {
          if (selected === category) {
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "backIn" }}
                className="space-y-0"
              >
                {questions.map((faq, index) => (
                  <FAQItem
                    key={index}
                    {...faq}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(index)}
                  />
                ))}
              </motion.div>
            );
          }
          return null;
        })}
      </AnimatePresence>
    </div>
  );
};

export default function FaqSection({ defaultCategory }: { defaultCategory?: string }) {
  const categoryKeys = Object.keys(CATEGORIES);
  const initial = defaultCategory && defaultCategory in CATEGORIES ? defaultCategory : categoryKeys[0];
  const [selectedCategory, setSelectedCategory] = useState(initial);

  return (
    <section className="relative overflow-hidden bg-black border-t border-white/[0.06] px-4 py-20 md:py-28 text-white">
      <Reveal>
        <FAQHeader title="Frequently Asked Questions" subtitle="Let's answer some questions" />
      </Reveal>
      <FAQTabs categories={CATEGORIES} selected={selectedCategory} setSelected={setSelectedCategory} />
      <FAQList faqData={FAQ_DATA} selected={selectedCategory} />
    </section>
  );
}
