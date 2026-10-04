"use client";

import { motion } from "framer-motion";
import {
    Anchor,
    Eye,
    Heart,
    MapPin,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";

const values = [
    {
        icon: Anchor,
        title: "Faith & Foundational Hope",
        text: "Rooted in the spirit of Eben-Ezer — the Stone of Help — we believe true restoration begins with faith, hope, and steady support.",
    },
    {
        icon: ShieldCheck,
        title: "Accountability & Integrity",
        text: "Clear expectations, healthy routines, personal responsibility, and transparent living help residents strengthen character and self-reliance.",
    },
    {
        icon: Users,
        title: "Community & Fellowship",
        text: "Recovery grows stronger in community. Residents encourage one another, share in the journey, and build healthy, supportive relationships.",
    },
    {
        icon: Heart,
        title: "Compassion & Dignity",
        text: "Every individual deserves to be treated with respect. We meet residents where they are while encouraging them toward where they can go.",
    },
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
        >
            {/* =====================================================
          BACKGROUND
      ====================================================== */}

            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div className="absolute -left-40 top-24 h-[430px] w-[430px] rounded-full border border-[#0b512f]/[0.05]" />
                <div className="absolute -left-24 top-24 h-[430px] w-[430px] rounded-full border border-[#b28c42]/[0.06]" />

                <div className="absolute -right-[220px] top-[30%] h-[600px] w-[600px] rounded-full bg-[#edf3e8] blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

                {/* =====================================================
            ABOUT INTRO
        ====================================================== */}

                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">

                    {/* IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div className="absolute -left-5 -top-5 h-full w-full rounded-[34px] bg-[#edf3e8] sm:-left-7 sm:-top-7" />

                        <div
                            className="
    relative
    min-h-[480px]
    overflow-hidden
    rounded-[32px]
    bg-[#0b512f]
    shadow-[0_30px_80px_rgba(28,65,43,0.14)]
    sm:min-h-[600px]
  "
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
    "
                            >
                                <source
                                    src="/videos/eben-ezer-about.mp4"
                                    type="video/mp4"
                                />
                            </video>

                            {/* darkens bottom so Brooklyn card remains readable */}
                            <div
                                className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-t
      from-[#052b1b]/80
      via-[#073d27]/10
      to-black/5
    "
                            />

                            {/* subtle brand treatment */}
                            <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                                <div
                                    className="
        rounded-full
        border
        border-white/20
        bg-black/15
        px-4
        py-2
        backdrop-blur-md
      "
                                >
                                    <p
                                        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.24em]
          text-white/90
        "
                                    >
                                        A Place to Rebuild
                                    </p>
                                </div>
                            </div>

                            {/* BROOKLYN BADGE */}

                            <div
                                className="
      absolute
      bottom-6
      left-6
      right-6
      rounded-[24px]
      border
      border-white/20
      bg-[#073d27]/80
      p-6
      text-white
      shadow-xl
      backdrop-blur-xl
      sm:bottom-8
      sm:left-8
      sm:right-auto
      sm:max-w-[390px]
    "
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#d4b36c]
          text-[#073d27]
        "
                                    >
                                        <MapPin className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p
                                            className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-[#dfc584]
          "
                                        >
                                            Our Beginning
                                        </p>

                                        <p className="mt-1 font-serif text-[21px] text-white">
                                            Brooklyn, New York
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-[13px] leading-6 text-white/75">
                                    The beginning of a community built around recovery,
                                    responsibility, fellowship, and hope.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ABOUT COPY */}

                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#b28c42]" />

                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#315f45] sm:text-[12px]">
                                About Eben-Ezer
                            </p>
                        </div>

                        <h2 className="max-w-[720px] font-serif text-[43px] font-medium leading-[1.02] tracking-[-0.035em] text-[#123d29] sm:text-[54px] lg:text-[62px]">
                            People Restored.
                            <br />

                            <span className="italic text-[#b28c42]">
                                Lives Transformed.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[680px] text-[16px] leading-8 text-[#626d64] sm:text-[17px]">
                            Eben-Ezer House of Hope was created from a belief that
                            recovery deserves more than a temporary place to stay.
                            It deserves a strong foundation — a place where
                            individuals can rebuild their lives with structure,
                            encouragement, accountability, and hope.
                        </p>

                        <p className="mt-5 max-w-[680px] text-[16px] leading-8 text-[#626d64] sm:text-[17px]">
                            With our first sober living home planned for Brooklyn,
                            New York, our goal is to create a supportive,
                            substance-free community where residents can strengthen
                            their recovery, develop healthy routines, rebuild
                            confidence, and prepare for greater independence.
                        </p>

                        <p className="mt-5 max-w-[680px] text-[16px] leading-8 text-[#626d64] sm:text-[17px]">
                            The name Eben-Ezer reflects the idea of a
                            <span className="font-semibold text-[#123d29]">
                                {" "}“Stone of Help”{" "}
                            </span>
                            — a reminder of how far someone has come and the
                            foundation upon which the next chapter can be built.
                        </p>

                        {/* LOCATION */}

                        <div className="mt-8 flex flex-wrap gap-4 border-t border-[#123d29]/10 pt-7">
                            <div className="flex items-center gap-3 rounded-full bg-[#f3f6ef] px-5 py-3 text-[#315f45]">
                                <MapPin className="h-4 w-4 text-[#b28c42]" />

                                <span className="text-[13px] font-semibold">
                                    Brooklyn, New York
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-full bg-[#f3f6ef] px-5 py-3 text-[#315f45]">
                                <Sparkles className="h-4 w-4 text-[#b28c42]" />

                                <span className="text-[13px] font-semibold">
                                    Our First House of Hope
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
            MISSION + VISION
        ====================================================== */}

                <div className="mt-24 grid gap-5 lg:mt-32 lg:grid-cols-2">

                    {/* MISSION */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden rounded-[32px] bg-[#0b512f] p-8 text-white sm:p-10 lg:p-12"
                    >
                        <div className="absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border border-white/10" />
                        <div className="absolute -right-8 -top-8 h-[200px] w-[200px] rounded-full border border-[#d4b36c]/20" />

                        <div className="relative z-10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#dfc584]">
                                <Anchor className="h-5 w-5" />
                            </div>

                            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.27em] text-[#dfc584]">
                                Our Mission
                            </p>

                            <p className="mt-5 max-w-[600px] font-serif text-[25px] leading-[1.5] text-white sm:text-[29px]">
                                Empowering individuals in recovery to rebuild their
                                lives on solid ground through structure, community,
                                and renewed hope.
                            </p>
                        </div>
                    </motion.div>

                    {/* VISION */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.08,
                        }}
                        className="relative overflow-hidden rounded-[32px] border border-[#123d29]/10 bg-[#f2f5ed] p-8 sm:p-10 lg:p-12"
                    >
                        <div className="relative z-10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0b512f] shadow-sm">
                                <Eye className="h-5 w-5" />
                            </div>

                            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.27em] text-[#98752f]">
                                Our Vision
                            </p>

                            <p className="mt-5 max-w-[620px] font-serif text-[23px] leading-[1.5] text-[#173d2a] sm:text-[27px]">
                                To be a beacon of hope and a recognized standard for
                                transformational sober living, where every resident
                                builds an unshakable foundation to lead a healthy,
                                purpose-driven, and fully independent life.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
            CORE VALUES
        ====================================================== */}

                <div className="mt-24 lg:mt-32">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-[760px] text-center"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-[#b28c42]" />

                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#315f45]">
                                What Guides Us
                            </p>

                            <span className="h-px w-8 bg-[#b28c42]" />
                        </div>

                        <h2 className="mt-5 font-serif text-[40px] font-medium tracking-[-0.03em] text-[#123d29] sm:text-[50px]">
                            Our Core Values
                        </h2>

                        <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#69736b] sm:text-[16px]">
                            The principles behind the environment, expectations,
                            and community we are building at Eben-Ezer House of Hope.
                        </p>
                    </motion.div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => {
                            const Icon = value.icon;

                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.07,
                                    }}
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className="group rounded-[28px] border border-[#123d29]/[0.08] bg-[#fafbf7] p-7 transition-all duration-300 hover:bg-white hover:shadow-[0_22px_55px_rgba(34,66,46,0.09)]"
                                >
                                    <div className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-[17px] bg-[#e9f0e5] text-[#0b512f] transition-all duration-300 group-hover:bg-[#0b512f] group-hover:text-white">
                                        <Icon
                                            className="h-6 w-6"
                                            strokeWidth={1.7}
                                        />
                                    </div>

                                    <h3 className="mt-6 font-serif text-[21px] font-semibold leading-[1.25] text-[#163d29]">
                                        {value.title}
                                    </h3>

                                    <p className="mt-4 text-[14px] leading-7 text-[#687269]">
                                        {value.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="relative mt-20 overflow-hidden rounded-[34px] bg-[#f0f4eb] px-7 py-12 text-center sm:px-10 sm:py-14 lg:mt-28"
                >
                    <div className="relative z-10 mx-auto max-w-[850px]">
                        <Anchor className="mx-auto h-7 w-7 text-[#b28c42]" />

                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#56715d]">
                            Stone of Hope
                        </p>

                        <h3 className="mt-5 font-serif text-[31px] font-medium leading-[1.25] tracking-[-0.025em] text-[#123d29] sm:text-[40px]">
                            Recovery is not where the story ends.
                            <br className="hidden sm:block" />

                            <span className="italic text-[#b28c42]">
                                {" "}It&apos;s where a new one begins.
                            </span>
                        </h3>

                        <p className="mx-auto mt-6 max-w-[680px] text-[15px] leading-7 text-[#687269] sm:text-[16px]">
                            At Eben-Ezer House of Hope, our purpose is to help
                            residents build the foundation for what comes next —
                            stability, responsibility, meaningful relationships,
                            purpose, and independence.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}