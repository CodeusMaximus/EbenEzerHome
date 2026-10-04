"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Check,
    HeartHandshake,
    Home,
    ShieldCheck,
    Users,
    CalendarCheck,
    BriefcaseBusiness,
} from "lucide-react";

const programFeatures = [
    "Safe, substance-free living environment",
    "Structured daily routines",
    "Peer accountability and fellowship",
    "Recovery-focused expectations",
    "Support toward employment and independence",
    "A community built on dignity and respect",
];

const pillars = [
    {
        icon: Home,
        title: "Safe & Structured Living",
        text: "A stable, substance-free environment designed to support consistency, responsibility, and recovery.",
    },
    {
        icon: Users,
        title: "Community & Fellowship",
        text: "Residents are surrounded by peers who understand the journey and encourage one another toward progress.",
    },
    {
        icon: CalendarCheck,
        title: "Routine & Accountability",
        text: "Clear expectations and healthy daily routines help residents strengthen the habits needed for independent living.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Independent Living",
        text: "Our goal is forward movement—helping residents build confidence, responsibility, and a foundation for their future.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
    return (
        <section
            id="program"
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
            {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div
                    className="
            absolute
            -right-[220px]
            top-[20px]
            h-[560px]
            w-[560px]
            rounded-full
            border
            border-[#0b512f]/[0.06]
          "
                />

                <div
                    className="
            absolute
            -right-[100px]
            top-[20px]
            h-[560px]
            w-[560px]
            rounded-full
            border
            border-[#b8954f]/[0.07]
          "
                />

                <div
                    className="
            absolute
            -left-40
            bottom-[-180px]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#78916d]/[0.08]
            blur-3xl
          "
                />
            </div>

            <div
                className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
            >
                {/* =====================================================
            INTRO
        ====================================================== */}

                <div
                    className="
            grid
            gap-9
            lg:grid-cols-[1.05fr_0.75fr]
            lg:items-end
            lg:gap-20
          "
                >
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#b28c42]" />

                            <p
                                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#315f45]
                  sm:text-[12px]
                "
                            >
                                Our Program
                            </p>
                        </div>

                        <h2
                            className="
                max-w-[800px]
                font-serif
                text-[43px]
                font-medium
                leading-[1.02]
                tracking-[-0.035em]
                text-[#123d29]
                sm:text-[55px]
                lg:text-[66px]
              "
                        >
                            More Than Housing —
                            <br />

                            <span className="italic text-[#b28c42]">
                                A Path to Independence.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <p
                            className="
                max-w-[570px]
                text-[16px]
                leading-[1.85]
                text-[#5d685f]
                sm:text-[17px]
              "
                        >
                            Recovery is about more than having a place to stay.
                            Eben-Ezer House of Hope provides structure, community,
                            accountability, and encouragement so residents can
                            strengthen their recovery and build toward a healthy,
                            purpose-driven, independent life.
                        </p>
                    </motion.div>
                </div>

                {/* =====================================================
            FEATURE SECTION
        ====================================================== */}

                <div
                    className="
            mt-14
            grid
            overflow-hidden
            rounded-[34px]
            border
            border-[#123d29]/10
            bg-white
            shadow-[0_25px_70px_rgba(34,66,46,0.08)]
            lg:mt-20
            lg:grid-cols-[0.92fr_1.08fr]
          "
                >
                    {/* LEFT — IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="
              relative
              min-h-[420px]
              overflow-hidden
              sm:min-h-[500px]
              lg:min-h-[650px]
            "
                    >
                        <img
                            src="/images/eben-ezer-program.png"
                            alt="Supportive sober living community"
                            className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
                        />

                        <div
                            className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#062d1d]/65
                via-[#073d27]/10
                to-transparent
              "
                        />

                        {/* IMAGE LABEL */}

                        <div
                            className="
                absolute
                bottom-7
                left-7
                right-7
                rounded-[24px]
                border
                border-white/20
                bg-[#073d27]/70
                p-6
                text-white
                shadow-xl
                backdrop-blur-xl
                sm:bottom-9
                sm:left-9
                sm:right-auto
                sm:max-w-[390px]
              "
                        >
                            <HeartHandshake
                                className="
                  mb-4
                  h-8
                  w-8
                  text-[#e0c17c]
                "
                                strokeWidth={1.7}
                            />

                            <p
                                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#e0c17c]
                "
                            >
                                Recovery With Purpose
                            </p>

                            <p
                                className="
                  mt-3
                  font-serif
                  text-[24px]
                  leading-[1.3]
                  text-white
                  sm:text-[28px]
                "
                            >
                                Building a strong foundation for the life ahead.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT — CONTENT */}

                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.08,
                        }}
                        className="
              relative
              flex
              flex-col
              justify-center
              p-7
              sm:p-10
              lg:p-12
              xl:p-16
            "
                    >
                        {/* decorative leaf */}

                        <div
                            className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                opacity-[0.05]
              "
                        >
                            <LeafDecor />
                        </div>

                        <div className="relative z-10">
                            <div
                                className="
                  flex
                  h-[62px]
                  w-[62px]
                  items-center
                  justify-center
                  rounded-[20px]
                  bg-[#edf3e9]
                  text-[#0b512f]
                "
                            >
                                <ShieldCheck
                                    className="h-7 w-7"
                                    strokeWidth={1.7}
                                />
                            </div>

                            <p
                                className="
                  mt-7
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#a77f35]
                "
                            >
                                A Foundation for Growth
                            </p>

                            <h3
                                className="
                  mt-3
                  max-w-[570px]
                  font-serif
                  text-[34px]
                  font-medium
                  leading-[1.12]
                  tracking-[-0.025em]
                  text-[#123d29]
                  sm:text-[42px]
                "
                            >
                                Structure today.
                                <br />
                                <span className="italic text-[#71825f]">
                                    Independence tomorrow.
                                </span>
                            </h3>

                            <p
                                className="
                  mt-5
                  max-w-[600px]
                  text-[15px]
                  leading-[1.8]
                  text-[#667068]
                  sm:text-[16px]
                "
                            >
                                We believe lasting recovery grows stronger when
                                individuals have clear expectations, meaningful
                                support, personal responsibility, and a community
                                that believes in their ability to move forward.
                            </p>

                            {/* CHECK LIST */}

                            <div
                                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-2
                "
                            >
                                {programFeatures.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.04,
                                        }}
                                        className="
                      flex
                      items-start
                      gap-3
                      rounded-[16px]
                      bg-[#f7f8f2]
                      px-4
                      py-3.5
                    "
                                    >
                                        <span
                                            className="
                        mt-[1px]
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0b512f]
                        text-white
                      "
                                        >
                                            <Check
                                                className="h-3.5 w-3.5"
                                                strokeWidth={2.5}
                                            />
                                        </span>

                                        <span
                                            className="
                        text-[13px]
                        font-medium
                        leading-6
                        text-[#46544a]
                        sm:text-[14px]
                      "
                                        >
                                            {feature}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            <Link
                                href="/#admissions"
                                className="
                  group
                  mt-9
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#0b512f]
                  px-7
                  py-4
                  text-[14px]
                  font-semibold
                  text-white
                  shadow-[0_12px_30px_rgba(11,81,47,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#073d23]
                "
                            >
                                Learn About Admissions

                                <ArrowRight
                                    className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                                />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
            FOUR PROGRAM PILLARS
        ====================================================== */}

                <div
                    className="
            mt-6
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;

                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.07,
                                }}
                                className="
                  group
                  rounded-[26px]
                  border
                  border-[#123d29]/[0.08]
                  bg-white/80
                  p-6
                  shadow-[0_12px_35px_rgba(34,66,46,0.045)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(34,66,46,0.08)]
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
                    rounded-[16px]
                    bg-[#edf3e9]
                    text-[#0b512f]
                    transition-all
                    duration-300
                    group-hover:bg-[#0b512f]
                    group-hover:text-white
                  "
                                >
                                    <Icon
                                        className="h-[22px] w-[22px]"
                                        strokeWidth={1.7}
                                    />
                                </div>

                                <h4
                                    className="
                    mt-5
                    font-serif
                    text-[21px]
                    font-semibold
                    leading-[1.2]
                    text-[#163d29]
                  "
                                >
                                    {pillar.title}
                                </h4>

                                <p
                                    className="
                    mt-3
                    text-[13px]
                    leading-6
                    text-[#687269]
                  "
                                >
                                    {pillar.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="
            mt-12
            flex
            flex-col
            items-start
            justify-between
            gap-6
            rounded-[30px]
            bg-[#e9efe3]
            px-7
            py-7
            sm:px-9
            sm:py-8
            lg:mt-16
            lg:flex-row
            lg:items-center
            lg:px-11
          "
                >
                    <div>
                        <p
                            className="
                font-serif
                text-[24px]
                font-semibold
                tracking-[-0.02em]
                text-[#153d29]
                sm:text-[29px]
              "
                        >
                            Ready to build your next chapter?
                        </p>

                        <p
                            className="
                mt-2
                max-w-[680px]
                text-[14px]
                leading-6
                text-[#617065]
                sm:text-[15px]
              "
                        >
                            Begin with a conversation. We&apos;ll help you
                            understand the admissions process and determine
                            whether Eben-Ezer House of Hope may be the right fit.
                        </p>
                    </div>

                    <Link
                        href="/apply"
                        className="
              group
              inline-flex
              min-h-[54px]
              w-full
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#0b512f]
              px-7
              py-4
              text-[14px]
              font-semibold
              text-white
              shadow-[0_12px_30px_rgba(11,81,47,0.20)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#073d23]
              sm:w-auto
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
            </div>
        </section>
    );
}

/* =========================================================
   DECORATIVE LEAF
========================================================= */

function LeafDecor() {
    return (
        <svg
            viewBox="0 0 240 330"
            fill="none"
            aria-hidden="true"
            className="h-[310px] w-[225px]"
        >
            <path
                d="M113 326C110 251 115 176 145 101C160 64 181 32 209 8"
                stroke="#376e48"
                strokeWidth="4"
                strokeLinecap="round"
            />

            <path
                d="M144 108C109 98 81 76 65 45C98 42 128 60 144 108Z"
                fill="#376e48"
            />

            <path
                d="M131 146C92 144 59 126 36 97C74 88 110 105 131 146Z"
                fill="#376e48"
            />

            <path
                d="M122 190C82 195 46 184 16 159C52 143 94 154 122 190Z"
                fill="#376e48"
            />

            <path
                d="M154 83C159 47 177 21 207 4C213 37 194 68 154 83Z"
                fill="#376e48"
            />

            <path
                d="M137 128C162 97 193 81 228 80C216 115 183 133 137 128Z"
                fill="#376e48"
            />

            <path
                d="M124 176C153 148 186 138 221 144C202 177 168 188 124 176Z"
                fill="#376e48"
            />
        </svg>
    );
}