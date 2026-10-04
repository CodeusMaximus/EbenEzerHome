"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Anchor,
    ChevronLeft,
    ChevronRight,
    Heart,
    Quote,
    ShieldCheck,
    Sparkles,
    Star,
} from "lucide-react";

/*
 * ============================================================
 * DEVELOPMENT PLACEHOLDERS
 * ============================================================
 *
 * Eben-Ezer House of Hope is establishing its first location.
 * Do NOT present fictional resident stories as real testimonials.
 *
 * Replace these with authentic, client-approved testimonials
 * once they become available.
 */

const testimonials = [
    {
        quote:
            "Future resident story — this space is reserved for authentic feedback about recovery, growth, community, and renewed hope.",
        name: "Resident Story",
        detail: "Coming Soon",
    },
    {
        quote:
            "This space will share a genuine experience from someone whose journey was strengthened through structure, accountability, fellowship, and support.",
        name: "Resident Story",
        detail: "Coming Soon",
    },
    {
        quote:
            "Authentic stories from residents or alumni can be shared here as Eben-Ezer House of Hope begins serving the Brooklyn community.",
        name: "Resident Story",
        detail: "Coming Soon",
    },
    {
        quote:
            "Every recovery journey is different. This space will eventually honor the real voices, experiences, and milestones of the people we serve.",
        name: "Resident Story",
        detail: "Coming Soon",
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const current = testimonials[currentIndex];

    const nextTestimonial = () => {
        setDirection(1);

        setCurrentIndex((previous) =>
            previous === testimonials.length - 1 ? 0 : previous + 1
        );
    };

    const previousTestimonial = () => {
        setDirection(-1);

        setCurrentIndex((previous) =>
            previous === 0 ? testimonials.length - 1 : previous - 1
        );
    };

    const goToTestimonial = (index: number) => {
        if (index === currentIndex) return;

        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    /*
     * Automatically rotate testimonials every 7 seconds.
     */

    useEffect(() => {
        const timer = window.setInterval(() => {
            setDirection(1);

            setCurrentIndex((previous) =>
                previous === testimonials.length - 1 ? 0 : previous + 1
            );
        }, 7000);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <section
            id="testimonials"
            className="
        relative
        overflow-hidden
        bg-[#f7f6ed]
        py-20
        sm:py-24
        lg:py-32
      "
        >
            {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

            <div
                className="
          pointer-events-none
          absolute
          -left-[200px]
          top-[4%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#dfe9da]/60
          blur-[110px]
        "
            />

            <div
                className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[-100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d9c594]/20
          blur-[110px]
        "
            />

            {/* Decorative rings */}

            <div
                aria-hidden="true"
                className="
          pointer-events-none
          absolute
          -right-24
          top-10
          hidden
          h-[380px]
          w-[480px]
          opacity-[0.08]
          md:block
        "
            >
                <svg
                    viewBox="0 0 480 380"
                    className="h-full w-full"
                >
                    <circle
                        cx="165"
                        cy="190"
                        r="135"
                        fill="none"
                        stroke="#0B512F"
                        strokeWidth="2"
                    />

                    <circle
                        cx="240"
                        cy="190"
                        r="135"
                        fill="none"
                        stroke="#82946F"
                        strokeWidth="2"
                    />

                    <circle
                        cx="315"
                        cy="190"
                        r="135"
                        fill="none"
                        stroke="#B68A37"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            {/* Anchor watermark */}

            <Anchor
                strokeWidth={0.6}
                className="
          pointer-events-none
          absolute
          -left-20
          bottom-4
          hidden
          h-[330px]
          w-[330px]
          text-[#0b512f]/[0.025]
          lg:block
        "
            />

            {/* =====================================================
          CONTENT
      ====================================================== */}

            <div
                className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
            >
                {/* =====================================================
            HEADER
        ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.65,
                    }}
                    className="
            mx-auto
            max-w-[820px]
            text-center
          "
                >
                    {/* EYEBROW */}

                    <div
                        className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#0b512f]/15
              bg-white/75
              px-4
              py-2
              shadow-sm
              backdrop-blur
            "
                    >
                        <Heart
                            className="
                h-4
                w-4
                text-[#b28c42]
              "
                            fill="currentColor"
                        />

                        <span
                            className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#315f45]
              "
                        >
                            Stories of Hope
                        </span>
                    </div>

                    {/* HEADING */}

                    <h2
                        className="
              font-serif
              text-[40px]
              font-medium
              leading-[1.05]
              tracking-[-0.035em]
              text-[#123d29]
              sm:text-[51px]
              lg:text-[61px]
            "
                    >
                        Every journey has{" "}

                        <span className="italic text-[#b28c42]">
                            a story.
                        </span>
                    </h2>

                    {/* DESCRIPTION */}

                    <p
                        className="
              mx-auto
              mt-6
              max-w-[690px]
              text-[16px]
              leading-8
              text-[#687269]
              sm:text-[17px]
            "
                    >
                        Recovery is deeply personal. As Eben-Ezer House of Hope
                        grows, this space will share authentic stories from
                        individuals whose lives have been strengthened through
                        community, accountability, support, and renewed hope.
                    </p>
                </motion.div>

                {/* =====================================================
            TESTIMONIAL EXPERIENCE
        ====================================================== */}

                <div
                    className="
            relative
            mx-auto
            mt-12
            max-w-[1080px]
            sm:mt-14
            lg:mt-16
          "
                >
                    {/* GOLD TOP ACCENT */}

                    <div
                        className="
              absolute
              left-1/2
              top-0
              z-20
              h-[4px]
              w-[94px]
              -translate-x-1/2
              rounded-full
              bg-[#b28c42]
            "
                    />

                    {/* MAIN CARD */}

                    <div
                        className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-[#123d29]/[0.08]
              bg-white/90
              shadow-[0_30px_80px_rgba(34,66,46,0.10)]
              backdrop-blur-xl
              sm:rounded-[36px]
            "
                    >
                        {/* Decorative watermark */}

                        <div
                            aria-hidden="true"
                            className="
                pointer-events-none
                absolute
                -bottom-28
                -left-28
                h-[350px]
                w-[440px]
                opacity-[0.045]
              "
                        >
                            <svg
                                viewBox="0 0 440 350"
                                className="h-full w-full"
                            >
                                <circle
                                    cx="145"
                                    cy="175"
                                    r="125"
                                    fill="none"
                                    stroke="#0B512F"
                                    strokeWidth="3"
                                />

                                <circle
                                    cx="220"
                                    cy="175"
                                    r="125"
                                    fill="none"
                                    stroke="#82946F"
                                    strokeWidth="3"
                                />

                                <circle
                                    cx="295"
                                    cy="175"
                                    r="125"
                                    fill="none"
                                    stroke="#B68A37"
                                    strokeWidth="3"
                                />
                            </svg>
                        </div>

                        {/* BIG QUOTE WATERMARK */}

                        <Quote
                            strokeWidth={1}
                            className="
                pointer-events-none
                absolute
                -right-4
                -top-7
                h-[150px]
                w-[150px]
                rotate-180
                text-[#0b512f]/[0.045]
                sm:h-[210px]
                sm:w-[210px]
                lg:right-8
              "
                        />

                        {/* SLIDER */}

                        <div
                            className="
                relative
                flex
                min-h-[480px]
                items-center
                px-6
                py-12
                sm:min-h-[450px]
                sm:px-12
                sm:py-14
                lg:min-h-[455px]
                lg:px-20
              "
                        >
                            <AnimatePresence
                                mode="wait"
                                custom={direction}
                            >
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    initial={{
                                        opacity: 0,
                                        x: direction > 0 ? 35 : -35,
                                        y: 5,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: direction > 0 ? -35 : 35,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                    mx-auto
                    w-full
                    max-w-[820px]
                    text-center
                  "
                                >
                                    {/* QUOTE ICON */}

                                    <div
                                        className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0b512f]
                      text-[#dfc584]
                      shadow-[0_12px_28px_rgba(11,81,47,0.20)]
                    "
                                    >
                                        <Quote
                                            className="h-6 w-6"
                                            fill="currentColor"
                                        />
                                    </div>

                                    {/* COMING SOON STATUS

                      Once REAL testimonials are available,
                      replace this with the five-star block below.
                  */}

                                    <div
                                        className="
                      mx-auto
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#edf3e8]
                      px-4
                      py-2
                    "
                                    >
                                        <Sparkles className="h-3.5 w-3.5 text-[#b28c42]" />

                                        <span
                                            className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#315f45]
                      "
                                        >
                                            Stories Coming Soon
                                        </span>
                                    </div>

                                    {/* =====================================================
                      REAL TESTIMONIAL STAR BLOCK

                      UNCOMMENT THIS ONCE YOU HAVE REAL REVIEWS.

                  <div
                    className="mt-6 flex justify-center gap-1"
                    aria-label="Five star testimonial"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 text-[#b28c42]"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  ====================================================== */}

                                    {/* QUOTE */}

                                    <blockquote
                                        className="
                      mx-auto
                      mt-7
                      max-w-[780px]
                      font-serif
                      text-[23px]
                      font-medium
                      leading-[1.5]
                      tracking-[-0.02em]
                      text-[#173d2a]
                      sm:text-[29px]
                      lg:text-[32px]
                      lg:leading-[1.42]
                    "
                                    >
                                        “{current.quote}”
                                    </blockquote>

                                    {/* GOLD LINE */}

                                    <div
                                        className="
                      mx-auto
                      mt-7
                      h-px
                      w-12
                      bg-[#b28c42]
                    "
                                    />

                                    {/* PERSON */}

                                    <div className="mt-5">
                                        <p
                                            className="
                        text-[15px]
                        font-bold
                        text-[#123d29]
                      "
                                        >
                                            {current.name}
                                        </p>

                                        <p
                                            className="
                        mt-1
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#8a948c]
                      "
                                        >
                                            {current.detail}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* =====================================================
              DESKTOP ARROWS
          ====================================================== */}

                    <button
                        type="button"
                        onClick={previousTestimonial}
                        aria-label="Previous testimonial"
                        className="
              absolute
              left-[-22px]
              top-1/2
              z-30
              hidden
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#123d29]/10
              bg-white
              text-[#123d29]
              shadow-[0_10px_30px_rgba(34,66,46,0.12)]
              transition-all
              hover:-translate-x-1
              hover:border-[#0b512f]
              hover:bg-[#0b512f]
              hover:text-white
              lg:flex
            "
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                        type="button"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                        className="
              absolute
              right-[-22px]
              top-1/2
              z-30
              hidden
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#123d29]/10
              bg-white
              text-[#123d29]
              shadow-[0_10px_30px_rgba(34,66,46,0.12)]
              transition-all
              hover:translate-x-1
              hover:border-[#0b512f]
              hover:bg-[#0b512f]
              hover:text-white
              lg:flex
            "
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* =====================================================
              MOBILE CONTROLS
          ====================================================== */}

                    <div
                        className="
              mt-6
              flex
              items-center
              justify-center
              gap-3
              lg:hidden
            "
                    >
                        <button
                            type="button"
                            onClick={previousTestimonial}
                            aria-label="Previous testimonial"
                            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#123d29]/10
                bg-white
                text-[#123d29]
                shadow-sm
                transition
                hover:border-[#0b512f]
                hover:bg-[#0b512f]
                hover:text-white
              "
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#123d29]/10
                bg-white
                text-[#123d29]
                shadow-sm
                transition
                hover:border-[#0b512f]
                hover:bg-[#0b512f]
                hover:text-white
              "
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    {/* =====================================================
              DOTS
          ====================================================== */}

                    <div
                        className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
            "
                    >
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goToTestimonial(index)}
                                aria-label={`View testimonial ${index + 1}`}
                                aria-current={
                                    currentIndex === index
                                        ? "true"
                                        : undefined
                                }
                                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  duration-300
                  ${currentIndex === index
                                        ? "w-8 bg-[#b28c42]"
                                        : "w-2.5 bg-[#0b512f]/15 hover:bg-[#0b512f]/40"
                                    }
                `}
                            />
                        ))}
                    </div>
                </div>

                {/* =====================================================
            TRUST MESSAGE
        ====================================================== */}

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
                        amount: 0.4,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1,
                    }}
                    className="
            mx-auto
            mt-12
            flex
            max-w-[900px]
            flex-col
            items-center
            justify-center
            gap-5
            rounded-[25px]
            border
            border-[#123d29]/[0.08]
            bg-white/80
            px-6
            py-6
            text-center
            shadow-[0_14px_40px_rgba(34,66,46,0.05)]
            backdrop-blur
            sm:flex-row
            sm:text-left
          "
                >
                    {/* ICON */}

                    <div
                        className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-[#0b512f]
              text-[#dfc584]
            "
                    >
                        <ShieldCheck className="h-6 w-6" />
                    </div>

                    {/* TEXT */}

                    <div className="flex-1">
                        <div
                            className="
                flex
                items-center
                justify-center
                gap-2
                sm:justify-start
              "
                        >
                            <Sparkles className="h-4 w-4 text-[#b28c42]" />

                            <p
                                className="
                  text-[14px]
                  font-bold
                  text-[#123d29]
                "
                            >
                                Every story deserves dignity.
                            </p>
                        </div>

                        <p
                            className="
                mt-1
                text-[12px]
                leading-5
                text-[#747e76]
              "
                        >
                            Resident experiences will only be shared with
                            appropriate permission. We are committed to treating
                            every individual&apos;s story with dignity, respect,
                            and care.
                        </p>
                    </div>
                </motion.div>

                {/* =====================================================
            DEVELOPMENT WARNING
            DELETE THIS WHEN REAL TESTIMONIALS ARE ADDED
        ====================================================== */}

                <p
                    className="
            mx-auto
            mt-5
            max-w-[760px]
            text-center
            text-[10px]
            leading-5
            text-[#9aa199]
          "
                >
                    Development note: the stories shown above are placeholders
                    only. Replace them with authentic, approved resident or
                    alumni testimonials before presenting them as real
                    experiences.
                </p>
            </div>
        </section>
    );
}