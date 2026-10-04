"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Mail,
    Minus,
    Phone,
    Plus,
    HeartHandshake,
} from "lucide-react";

const faqs = [
    {
        question: "What is Eben-Ezer House of Hope?",
        answer:
            "Eben-Ezer House of Hope is a structured sober living environment designed to support individuals as they strengthen their recovery and rebuild their lives. Our focus is on accountability, community, dignity, personal responsibility, and developing a strong foundation for independent living.",
    },
    {
        question: "Who is a good fit for sober living?",
        answer:
            "Sober living may be appropriate for individuals who are committed to maintaining sobriety and are ready to live in a structured, substance-free environment. Each potential resident is considered individually through our admissions and screening process.",
    },
    {
        question: "How does the admissions process work?",
        answer:
            "The process begins with an initial inquiry. Our team will then complete a screening to learn more about the individual's needs, recovery goals, and readiness for sober living. If the program is an appropriate fit and space is available, we will discuss admission and orientation.",
    },
    {
        question: "Do residents have to remain sober?",
        answer:
            "Yes. Eben-Ezer House of Hope is committed to maintaining a substance-free environment. Residents are expected to support the safety and recovery of the community by following house expectations regarding alcohol and substance use.",
    },
    {
        question: "What is expected of residents?",
        answer:
            "Residents are expected to participate in the community, respect others, follow house guidelines, maintain their living space, honor established routines, and take responsibility for their recovery and personal growth. Specific expectations are reviewed during the admissions and orientation process.",
    },
    {
        question: "How long can someone stay?",
        answer:
            "Length of stay can vary depending on the resident's individual circumstances, progress, goals, and program requirements. Our focus is not simply on time spent in sober living, but on helping residents develop the stability and skills needed to move toward greater independence.",
    },
    {
        question: "Can residents work while living at Eben-Ezer?",
        answer:
            "Employment, education, volunteering, and other productive activities can be important parts of rebuilding independence. Individual expectations and schedules are discussed with residents as part of their recovery and personal development goals.",
    },
    {
        question: "Is Eben-Ezer House of Hope a treatment facility?",
        answer:
            "Eben-Ezer House of Hope provides sober living and recovery-supportive housing. It is not a substitute for medical, psychiatric, detoxification, or emergency treatment. Residents may participate in appropriate outside treatment and recovery services based on their individual needs.",
    },
    {
        question: "Can residents take prescribed medications?",
        answer:
            "Medication needs are reviewed during the admissions process. Residents should disclose prescribed medications so that applicable house policies can be discussed. Medication decisions and medical treatment remain between residents and their licensed healthcare providers.",
    },
    {
        question: "What should I bring when I move in?",
        answer:
            "Our team will provide specific move-in guidance before admission. Residents should generally plan to bring appropriate clothing, personal hygiene items, identification, necessary documents, approved medications, and other permitted personal essentials.",
    },
    {
        question: "How much does sober living cost?",
        answer:
            "Program fees and payment arrangements can vary. Please contact Eben-Ezer House of Hope directly for current information regarding costs, availability, deposits, and any other financial requirements associated with admission.",
    },
    {
        question: "How do I get started?",
        answer:
            "Start by contacting Eben-Ezer House of Hope or submitting an application for housing. Our team can answer your initial questions, discuss availability, and guide you through the next steps of the screening and admissions process.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="
        relative
        scroll-mt-28
        overflow-hidden
        bg-[#f7f6ed]
        py-20
        sm:py-24
        lg:py-32
      "
        >
            {/* BACKGROUND DECORATION */}

            <div
                className="
          pointer-events-none
          absolute
          -left-52
          top-20
          hidden
          h-[480px]
          w-[480px]
          rounded-full
          border
          border-[#0b512f]/[0.06]
          lg:block
        "
                aria-hidden="true"
            />

            <div
                className="
          pointer-events-none
          absolute
          -left-32
          top-40
          hidden
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-[#b28c42]/[0.08]
          lg:block
        "
                aria-hidden="true"
            />

            <div
                className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#e8efe2]
          blur-[110px]
        "
            />

            <div
                className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1380px]
          gap-14
          px-6
          sm:px-8
          lg:grid-cols-[0.72fr_1.28fr]
          lg:gap-20
          lg:px-12
          xl:px-16
        "
            >
                {/* =====================================================
            LEFT
        ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.65,
                    }}
                    className="lg:sticky lg:top-32 lg:self-start"
                >
                    {/* EYEBROW */}

                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#b28c42]" />

                        <p
                            className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#315f45]
                sm:text-[12px]
              "
                        >
                            Frequently Asked Questions
                        </p>
                    </div>

                    {/* TITLE */}

                    <h2
                        className="
              mt-6
              max-w-[510px]
              font-serif
              text-[43px]
              font-medium
              leading-[1.04]
              tracking-[-0.035em]
              text-[#123d29]
              sm:text-[54px]
              lg:text-[60px]
            "
                    >
                        Questions?
                        <br />

                        <span className="italic text-[#b28c42]">
                            We&apos;re here to help.
                        </span>
                    </h2>

                    <p
                        className="
              mt-6
              max-w-[440px]
              text-[16px]
              leading-8
              text-[#637067]
            "
                    >
                        Find answers to common questions about sober living,
                        admissions, house expectations, recovery, and taking
                        the next step with Eben-Ezer House of Hope.
                    </p>

                    {/* CONTACT CARD */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.55,
                            delay: 0.15,
                        }}
                        className="
              mt-9
              max-w-[430px]
              overflow-hidden
              rounded-[28px]
              border
              border-[#123d29]/[0.08]
              bg-white
              p-6
              shadow-[0_20px_55px_rgba(34,66,46,0.06)]
              sm:p-7
            "
                    >
                        <div
                            className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#edf3e9]
                text-[#0b512f]
              "
                        >
                            <HeartHandshake className="h-5 w-5" />
                        </div>

                        <p
                            className="
                mt-5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#a77f35]
              "
                        >
                            Still Have Questions?
                        </p>

                        <p
                            className="
                mt-3
                text-[14px]
                leading-6
                text-[#637067]
              "
                        >
                            Our team can help answer questions about
                            availability, admissions, house expectations,
                            and getting started.
                        </p>

                        {/* PHONE — replace placeholder */}

                        <a
                            href="tel:+10000000000"
                            className="
                group
                mt-6
                flex
                items-center
                gap-3
                text-[14px]
                font-semibold
                text-[#123d29]
                transition
                hover:text-[#b28c42]
              "
                        >
                            <span
                                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#edf3e9]
                  text-[#0b512f]
                "
                            >
                                <Phone className="h-4 w-4" />
                            </span>

                            (000) 000-0000
                        </a>

                        {/* EMAIL — replace when client gives you email */}

                        <a
                            href="mailto:info@ebenezerhouseofhope.com"
                            className="
                group
                mt-3
                flex
                items-start
                gap-3
                text-[13px]
                font-medium
                text-[#637067]
                transition
                hover:text-[#b28c42]
              "
                        >
                            <span
                                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#edf3e9]
                  text-[#0b512f]
                "
                            >
                                <Mail className="h-4 w-4" />
                            </span>

                            <span className="break-all pt-2">
                                info@ebenezerhouseofhope.com
                            </span>
                        </a>

                        <Link
                            href="/apply"
                            className="
                group
                mt-6
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#0b512f]
                px-6
                py-3.5
                text-[13px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#073d23]
              "
                        >
                            Apply for Housing

                            <ArrowRight
                                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                "
                            />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* =====================================================
            RIGHT — FAQ ACCORDION
        ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    transition={{
                        duration: 0.65,
                        delay: 0.08,
                    }}
                    className="
            overflow-hidden
            rounded-[30px]
            border
            border-[#123d29]/[0.08]
            bg-white
            px-6
            shadow-[0_24px_65px_rgba(34,66,46,0.055)]
            sm:px-8
            lg:px-10
          "
                >
                    {faqs.map((faq, index) => {
                        const open = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className="
                  border-b
                  border-[#123d29]/[0.08]
                  last:border-b-0
                "
                            >
                                <button
                                    type="button"
                                    aria-expanded={open}
                                    onClick={() =>
                                        setOpenIndex(open ? null : index)
                                    }
                                    className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    py-6
                    text-left
                    sm:py-7
                  "
                                >
                                    <div className="flex items-start gap-4 sm:gap-5">
                                        <span
                                            className={`
                        mt-1
                        hidden
                        text-[11px]
                        font-bold
                        tracking-[0.12em]
                        transition-colors
                        sm:block
                        ${open
                                                    ? "text-[#b28c42]"
                                                    : "text-[#aeb7af]"
                                                }
                      `}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span
                                            className={`
                        text-[18px]
                        font-semibold
                        leading-7
                        tracking-[-0.02em]
                        transition-colors
                        sm:text-[21px]
                        ${open
                                                    ? "text-[#0b512f]"
                                                    : "text-[#253c2e] group-hover:text-[#0b512f]"
                                                }
                      `}
                                        >
                                            {faq.question}
                                        </span>
                                    </div>

                                    <span
                                        className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      ${open
                                                ? "bg-[#0b512f] text-white shadow-[0_8px_22px_rgba(11,81,47,0.20)]"
                                                : "bg-[#edf3e9] text-[#0b512f] group-hover:bg-[#0b512f] group-hover:text-white"
                                            }
                    `}
                                    >
                                        {open ? (
                                            <Minus className="h-4 w-4" />
                                        ) : (
                                            <Plus className="h-4 w-4" />
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div
                                                className="
                          pb-7
                          pr-4
                          sm:pl-9
                          sm:pr-14
                        "
                                            >
                                                <p
                                                    className="
                            max-w-[760px]
                            text-[15px]
                            leading-7
                            text-[#637067]
                            sm:text-[16px]
                            sm:leading-8
                          "
                                                >
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}