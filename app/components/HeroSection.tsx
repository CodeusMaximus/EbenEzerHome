"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Heart,
    Leaf,
    Sunrise,
    Users,
} from "lucide-react";

const values = [
    {
        title: "FAITH",
        description: "A brighter tomorrow",
        icon: BookOpen,
    },
    {
        title: "COMMUNITY",
        description: "Stronger together",
        icon: Users,
    },
    {
        title: "ACCOUNTABILITY",
        description: "Building character and independence",
        icon: Leaf,
    },
    {
        title: "DIGNITY",
        description: "Respect for every individual",
        icon: Heart,
    },
    {
        title: "HOPE",
        description: "A new beginning is possible",
        icon: Sunrise,
    },
];

export default function HeroSection() {
    return (
        <>
            {/* ======================================================
          HERO
      ====================================================== */}
            <section
                className="
          relative
          min-h-[760px]
          overflow-hidden
          bg-[#f6f4e9]
          pt-[84px]
          lg:min-h-[720px]
          lg:pt-[92px]
        "
            >
                {/* ==================================================
    BACKGROUND VIDEO
================================================== */}

                <div
                    className="
    absolute
    bottom-0
    left-0
    right-0
    top-[84px]
    overflow-hidden
    bg-[#173d29]
    lg:top-[92px]
  "
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="https://lobrvzg9tvicyf5j.public.blob.vercel-storage.com/10131065-uhd_4096_2160_25fps.mp4"
                        aria-hidden="true"
                        className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
    "
                    >
                        <source
                            src="https://lobrvzg9tvicyf5j.public.blob.vercel-storage.com/10131065-uhd_4096_2160_25fps.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* subtle video treatment */}
                    <div
                        className="
      pointer-events-none
      absolute
      inset-0
      bg-[#0b512f]/[0.04]
    "
                    />
                </div>

                {/* ==================================================
            DESKTOP LEFT GRADIENT
        ================================================== */}
                {/* ==================================================
    SOFT VIDEO OVERLAY / LEFT GRADIENT
================================================== */}

                <div
                    className="
    pointer-events-none
    absolute
    bottom-0
    left-0
    right-0
    top-[84px]
    lg:top-[92px]
  "
                    style={{
                        background: `
      linear-gradient(
        90deg,
        rgba(248,247,237,1) 0%,
        rgba(248,247,237,0.99) 18%,
        rgba(248,247,237,0.96) 30%,
        rgba(248,247,237,0.88) 40%,
        rgba(248,247,237,0.72) 50%,
        rgba(248,247,237,0.52) 60%,
        rgba(248,247,237,0.32) 70%,
        rgba(248,247,237,0.16) 80%,
        rgba(248,247,237,0.06) 90%,
        rgba(248,247,237,0) 100%
      )
    `,
                    }}
                />


                {/* ==================================================
            DECORATIVE LEAVES - LEFT
        ================================================== */}
                <div
                    className="
            pointer-events-none
            absolute
            -left-14
            bottom-[-25px]
            z-[5]
            hidden
            opacity-[0.17]
            lg:block
          "
                >
                    <LeafDecor />
                </div>

                {/* ==================================================
            HERO CONTENT
        ================================================== */}
                <div
                    className="
            relative
            z-10
            mx-auto
            flex
            min-h-[676px]
            w-full
            max-w-[1500px]
            items-center
            px-6
            pb-16
            pt-14
            sm:px-10
            lg:min-h-[628px]
            lg:px-16
            lg:pb-16
            lg:pt-10
            xl:px-20
          "
                >
                    <div className="w-full max-w-[720px]">

                        {/* EYEBROW */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-4 flex items-center gap-3"
                        >
                            <span className="h-px w-8 bg-[#b18b3f]" />

                            <p
                                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.38em]
                  text-[#315f45]
                  sm:text-[12px]
                "
                            >
                                EBEN-EZER HOUSE OF HOPE
                            </p>
                        </motion.div>

                        {/* ==================================================
                MAIN HEADING
            ================================================== */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.75,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <h1
                                className="
                  font-serif
                  text-[58px]
                  font-semibold
                  leading-[0.84]
                  tracking-[-0.045em]
                  text-[#073d27]
                  sm:text-[76px]
                  lg:text-[86px]
                  xl:text-[94px]
                "
                            >
                                RECOVERY
                            </h1>

                            {/* Built on */}
                            <div
                                className="
                  relative
                  -my-1
                  flex
                  items-center
                  gap-4
                  pl-5
                  sm:pl-10
                "
                            >
                                <span
                                    className="
                    font-serif
                    text-[43px]
                    italic
                    leading-none
                    text-[#b68a37]
                    sm:text-[56px]
                    lg:text-[62px]
                  "
                                    style={{
                                        fontFamily: "Georgia, 'Times New Roman', serif",
                                    }}
                                >
                                    Built on
                                </span>

                                <span
                                    className="
                    mt-4
                    hidden
                    h-px
                    w-28
                    bg-[#b68a37]/55
                    sm:block
                  "
                                />
                            </div>

                            <h2
                                className="
                  font-serif
                  text-[52px]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.045em]
                  text-[#073d27]
                  sm:text-[69px]
                  lg:text-[78px]
                  xl:text-[84px]
                "
                            >
                                SOLID GROUND.
                            </h2>
                        </motion.div>

                        {/* ==================================================
                DESCRIPTION
            ================================================== */}
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.65,
                                delay: 0.25,
                            }}
                            className="
                mt-7
                max-w-[600px]
                text-[16px]
                font-medium
                leading-[1.65]
                text-[#33483a]
                sm:text-[17px]
                lg:text-[18px]
              "
                        >
                            Empowering individuals in recovery to rebuild their lives
                            through structure, community, and renewed hope.
                        </motion.p>

                        {/* ==================================================
                BUTTONS
            ================================================== */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.65,
                                delay: 0.35,
                            }}
                            className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
                        >
                            <Link
                                href="/apply"
                                className="
                  group
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
                  shadow-[0_14px_35px_rgba(11,81,47,0.23)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#073d23]
                "
                            >
                                Apply for Housing

                                <ArrowRight
                                    className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                                />
                            </Link>

                            <Link
                                href="/#program"
                                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#315f45]
                  bg-[#fffef7]/75
                  px-7
                  py-4
                  text-[14px]
                  font-semibold
                  text-[#173f2a]
                  shadow-[0_10px_28px_rgba(23,63,42,0.07)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                "
                            >
                                Learn About Our Program

                                <ArrowRight
                                    className="
                    h-4
                    w-4
                    text-[#0b512f]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                                />
                            </Link>
                        </motion.div>
                    </div>

                    {/* ==================================================
              SCRIPTURE - DESKTOP
          ================================================== */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.7,
                        }}
                        className="
              absolute
              bottom-10
              right-12
              hidden
              max-w-[330px]
              text-right
              text-white
              drop-shadow-[0_2px_7px_rgba(0,0,0,0.55)]
              lg:block
              xl:right-20
            "
                    >
                        <p
                            className="
                font-serif
                text-[19px]
                font-semibold
                italic
                leading-relaxed
              "
                        >
                            “He has helped us to this point.”
                        </p>

                        <p
                            className="
                mt-1
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
              "
                        >
                            1 Samuel 7:12
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ======================================================
          VALUES STRIP
      ====================================================== */}
            <section
                className="
          relative
          z-20
          overflow-hidden
          border-y
          border-[#dce4d6]
          bg-[#fffef9]
        "
            >
                {/* Decorative leaves */}
                <div className="pointer-events-none absolute -left-10 bottom-[-60px] opacity-[0.13]">
                    <LeafDecor small />
                </div>

                <div className="pointer-events-none absolute -right-10 bottom-[-60px] scale-x-[-1] opacity-[0.13]">
                    <LeafDecor small />
                </div>

                <div
                    className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1450px]
            grid-cols-2
            px-5
            py-8
            sm:px-8
            md:grid-cols-5
            lg:px-12
            lg:py-9
          "
                >
                    {values.map((value, index) => {
                        const Icon = value.icon;

                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.4,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className={`
                  flex
                  min-h-[125px]
                  flex-col
                  items-center
                  justify-center
                  px-4
                  py-4
                  text-center

                  ${index !== 0
                                        ? "md:border-l md:border-[#d8dfd3]"
                                        : ""
                                    }

                  ${index === values.length - 1
                                        ? "col-span-2 md:col-span-1"
                                        : ""
                                    }
                `}
                            >
                                <Icon
                                    strokeWidth={2}
                                    className="
                    mb-3
                    h-8
                    w-8
                    text-[#0b512f]
                    lg:h-9
                    lg:w-9
                  "
                                />

                                <h3
                                    className="
                    text-[12px]
                    font-extrabold
                    tracking-[0.03em]
                    text-[#163d29]
                    lg:text-[13px]
                  "
                                >
                                    {value.title}
                                </h3>

                                <p
                                    className="
                    mt-1
                    max-w-[180px]
                    text-[11px]
                    leading-[1.45]
                    text-[#526157]
                    lg:text-[12px]
                  "
                                >
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

/* =========================================================
   DECORATIVE LEAF
========================================================= */

function LeafDecor({
    small = false,
}: {
    small?: boolean;
}) {
    return (
        <svg
            viewBox="0 0 240 330"
            fill="none"
            aria-hidden="true"
            className={
                small
                    ? "h-[250px] w-[180px]"
                    : "h-[380px] w-[275px]"
            }
        >
            <path
                d="M113 326C110 251 115 176 145 101C160 64 181 32 209 8"
                stroke="#376e48"
                strokeWidth="4"
                strokeLinecap="round"
            />

            <path
                d="M144 108C109 98 81 76 65 45C98 42 128 60 144 108Z"
                fill="#8fac7d"
            />

            <path
                d="M131 146C92 144 59 126 36 97C74 88 110 105 131 146Z"
                fill="#6f9565"
            />

            <path
                d="M122 190C82 195 46 184 16 159C52 143 94 154 122 190Z"
                fill="#8fac7d"
            />

            <path
                d="M118 235C80 248 43 245 8 228C41 204 86 207 118 235Z"
                fill="#719867"
            />

            <path
                d="M154 83C159 47 177 21 207 4C213 37 194 68 154 83Z"
                fill="#6f9565"
            />

            <path
                d="M137 128C162 97 193 81 228 80C216 115 183 133 137 128Z"
                fill="#8fac7d"
            />

            <path
                d="M124 176C153 148 186 138 221 144C202 177 168 188 124 176Z"
                fill="#6f9565"
            />

            <path
                d="M117 222C148 200 182 196 216 207C193 236 157 242 117 222Z"
                fill="#8fac7d"
            />
        </svg>
    );
}