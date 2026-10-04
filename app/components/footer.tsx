"use client";

import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
    Heart,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";

/* =========================================================
   SOCIAL MEDIA
   Replace # with real URLs when available
========================================================= */

const socials = [
    {
        name: "Facebook",
        href: "#",
        icon: FaFacebookF,
    },
    {
        name: "Instagram",
        href: "#",
        icon: FaInstagram,
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: FaLinkedinIn,
    },
];

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
    ["Home", "/"],
    ["About Us", "/#about"],
    ["Our Program", "/#program"],
    ["Admissions", "/#admissions"],
    ["Resources", "/resources"],
    ["FAQ", "/#faq"],
    ["Contact", "/#contact"],
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
    return (
        <footer
            id="contact"
            className="
        relative
        overflow-hidden
        bg-[#073d27]
        text-white
      "
        >
            {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

            <div
                aria-hidden="true"
                className="
          pointer-events-none
          absolute
          -right-[170px]
          -top-[180px]
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-[#d1ad63]/10
        "
            />

            <div
                aria-hidden="true"
                className="
          pointer-events-none
          absolute
          -right-[70px]
          -top-[80px]
          h-[340px]
          w-[340px]
          rounded-full
          border
          border-[#d1ad63]/10
        "
            />

            {/* GOLD GLOW */}

            <div
                aria-hidden="true"
                className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#c5a15c]/10
          blur-[120px]
        "
            />

            {/* LEAF DECORATION */}

            <div
                className="
          pointer-events-none
          absolute
          -bottom-20
          right-[-40px]
          opacity-[0.06]
        "
            >
                <FooterLeaf />
            </div>

            <div
                className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
          px-6
          pb-8
          pt-16
          sm:px-8
          sm:pt-20
          lg:px-12
          xl:px-16
        "
            >
                {/* =====================================================
            TOP CTA
        ====================================================== */}

                <div
                    className="
            mb-14
            flex
            flex-col
            gap-8
            border-b
            border-white/10
            pb-12
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
                >
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#d2ad61]" />

                            <p
                                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#d9b76e]
                  sm:text-[11px]
                "
                            >
                                YOUR NEXT CHAPTER CAN BEGIN HERE
                            </p>
                        </div>

                        <h2
                            className="
                max-w-[760px]
                font-serif
                text-[37px]
                font-medium
                leading-[1.08]
                tracking-[-0.025em]
                text-white
                sm:text-[46px]
                lg:text-[52px]
              "
                        >
                            A brighter tomorrow
                            <br className="hidden sm:block" />{" "}
                            <span className="italic text-[#d9b76e]">
                                can start today.
                            </span>
                        </h2>

                        <p
                            className="
                mt-5
                max-w-[620px]
                text-[14px]
                leading-7
                text-white/65
                sm:text-[15px]
              "
                        >
                            Take the first step toward a safe, structured, and
                            supportive environment where recovery can take root
                            and a new life can begin.
                        </p>
                    </div>

                    <Link
                        href="/apply"
                        className="
              group
              inline-flex
              min-h-[56px]
              w-fit
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#d1ad63]
              px-8
              py-4
              text-[14px]
              font-bold
              text-[#073d27]
              shadow-[0_14px_35px_rgba(0,0,0,0.15)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#e1c27d]
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
                </div>

                {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

                <div
                    className="
            grid
            gap-12
            border-b
            border-white/10
            pb-14
            md:grid-cols-2
            lg:grid-cols-[1.45fr_0.7fr_1fr_1.25fr]
            lg:gap-12
          "
                >
                    {/* =================================================
              BRAND
          ================================================= */}

                    <div>
                        <Link
                            href="/"
                            aria-label="Eben-Ezer House of Hope home"
                            className="inline-block"
                        >
                            <img
                                src="/images/eben-ezer-logo.png"
                                alt="Eben-Ezer House of Hope"
                                className="
                  h-auto
                  w-[190px]
                  brightness-0
                  invert
                  opacity-95
                  sm:w-[215px]
                "
                            />
                        </Link>

                        <p
                            className="
                mt-6
                max-w-[390px]
                text-[14px]
                leading-7
                text-white/65
              "
                        >
                            Empowering individuals in recovery to rebuild their
                            lives on solid ground through structure, community,
                            and renewed hope.
                        </p>

                        {/* SCRIPTURE */}

                        <div
                            className="
                mt-7
                max-w-[370px]
                border-l
                border-[#d1ad63]/60
                pl-5
              "
                        >
                            <p
                                className="
                  font-serif
                  text-[15px]
                  italic
                  leading-7
                  text-white/80
                "
                            >
                                “He has helped us to this point.”
                            </p>

                            <p
                                className="
                  mt-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#d9b76e]
                "
                            >
                                1 Samuel 7:12
                            </p>
                        </div>

                        {/* SOCIALS */}

                        <div className="mt-7">
                            <p
                                className="
                  mb-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#d9b76e]
                "
                            >
                                Connect With Us
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-white/[0.05]
                        text-white/70
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#d1ad63]
                        hover:bg-[#d1ad63]
                        hover:text-[#073d27]
                      "
                                        >
                                            <Icon className="h-[17px] w-[17px]" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* =================================================
              QUICK LINKS
          ================================================= */}

                    <div>
                        <FooterHeading>Quick Links</FooterHeading>

                        <div className="mt-6 flex flex-col gap-4">
                            {quickLinks.map(([label, href]) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-1.5
                    text-[14px]
                    text-white/65
                    transition
                    hover:text-white
                  "
                                >
                                    {label}

                                    <ArrowUpRight
                                        className="
                      h-3
                      w-3
                      opacity-0
                      text-[#d9b76e]
                      transition-all
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* =================================================
              OUR MISSION
          ================================================= */}

                    <div>
                        <FooterHeading>Our Mission</FooterHeading>

                        <p
                            className="
                mt-6
                text-[14px]
                leading-7
                text-white/65
              "
                        >
                            To provide a structured, compassionate, and
                            supportive sober living environment where individuals
                            can strengthen their recovery and build a foundation
                            for independent living.
                        </p>

                        <div className="mt-7 flex items-start gap-3">
                            <span
                                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#d1ad63]/10
                  text-[#d9b76e]
                "
                            >
                                <Heart className="h-4 w-4" />
                            </span>

                            <div>
                                <p
                                    className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#d9b76e]
                  "
                                >
                                    Built on
                                </p>

                                <p
                                    className="
                    mt-1
                    font-serif
                    text-[17px]
                    italic
                    text-white/85
                  "
                                >
                                    Faith, dignity & hope.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
              CONTACT
          ================================================= */}

                    <div>
                        <FooterHeading>Contact</FooterHeading>

                        <p
                            className="
                mt-6
                max-w-[300px]
                text-[14px]
                leading-7
                text-white/60
              "
                        >
                            Have questions about admissions or availability?
                            Reach out to our team.
                        </p>

                        <div className="mt-6 space-y-5">
                            {/* PHONE */}

                            <a
                                href="tel:+10000000000"
                                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-[14px]
                  text-white/70
                  transition
                  hover:text-white
                "
                            >
                                <ContactIcon>
                                    <Phone className="h-4 w-4" />
                                </ContactIcon>

                                <span>
                                    <span
                                        className="
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-white/35
                    "
                                    >
                                        Call Us
                                    </span>

                                    <span className="mt-1 block">
                                        (000) 000-0000
                                    </span>
                                </span>
                            </a>

                            {/* EMAIL */}

                            <a
                                href="mailto:info@ebenezerhouseofhope.com"
                                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-[14px]
                  text-white/70
                  transition
                  hover:text-white
                "
                            >
                                <ContactIcon>
                                    <Mail className="h-4 w-4" />
                                </ContactIcon>

                                <span className="min-w-0">
                                    <span
                                        className="
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-white/35
                    "
                                    >
                                        Email
                                    </span>

                                    <span
                                        className="
                      mt-1
                      block
                      break-all
                    "
                                    >
                                        info@ebenezerhouseofhope.com
                                    </span>
                                </span>
                            </a>

                            {/* LOCATION */}

                            <div
                                className="
                  flex
                  items-start
                  gap-3
                  text-[14px]
                  text-white/70
                "
                            >
                                <ContactIcon>
                                    <MapPin className="h-4 w-4" />
                                </ContactIcon>

                                <span>
                                    <span
                                        className="
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-white/35
                    "
                                    >
                                        Serving
                                    </span>

                                    <span className="mt-1 block leading-6">
                                        Recovery communities
                                        <br />
                                        with dignity & care
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =====================================================
            LOWER FOOTER
        ====================================================== */}

                <div
                    className="
            flex
            flex-col
            gap-5
            pt-8
            text-[11px]
            text-white/40
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
                >
                    <p>
                        © {new Date().getFullYear()} Eben-Ezer House of Hope.
                        All rights reserved.
                    </p>

                    <div
                        className="
              flex
              flex-wrap
              gap-x-6
              gap-y-2
            "
                    >
                        <Link
                            href="/privacy"
                            className="transition hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition hover:text-white"
                        >
                            Terms of Use
                        </Link>

                        <Link
                            href="/accessibility"
                            className="transition hover:text-white"
                        >
                            Accessibility
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <h3
            className="
        text-[10px]
        font-bold
        uppercase
        tracking-[0.24em]
        text-[#d9b76e]
      "
        >
            {children}
        </h3>
    );
}

/* =========================================================
   CONTACT ICON
========================================================= */

function ContactIcon({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <span
            className="
        flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-white/[0.055]
        text-[#d9b76e]
        transition
        group-hover:bg-[#d1ad63]/15
      "
        >
            {children}
        </span>
    );
}

/* =========================================================
   DECORATIVE LEAF
========================================================= */

function FooterLeaf() {
    return (
        <svg
            viewBox="0 0 320 430"
            fill="none"
            aria-hidden="true"
            className="h-[500px] w-[370px]"
        >
            <path
                d="M150 425C145 330 151 230 191 132C211 83 239 42 277 10"
                stroke="#ffffff"
                strokeWidth="5"
                strokeLinecap="round"
            />

            <path
                d="M190 140C143 127 105 98 84 57C128 53 169 76 190 140Z"
                fill="#ffffff"
            />

            <path
                d="M173 190C121 187 76 164 46 126C97 115 145 137 173 190Z"
                fill="#ffffff"
            />

            <path
                d="M161 250C108 256 60 241 20 207C68 186 124 200 161 250Z"
                fill="#ffffff"
            />

            <path
                d="M156 310C105 327 56 323 10 300C54 268 113 272 156 310Z"
                fill="#ffffff"
            />

            <path
                d="M203 108C210 60 234 26 274 4C282 48 257 89 203 108Z"
                fill="#ffffff"
            />

            <path
                d="M181 168C214 127 256 105 303 104C286 151 242 176 181 168Z"
                fill="#ffffff"
            />

            <path
                d="M165 232C204 195 248 181 295 190C270 233 224 248 165 232Z"
                fill="#ffffff"
            />

            <path
                d="M156 294C198 264 243 259 288 274C257 313 209 321 156 294Z"
                fill="#ffffff"
            />
        </svg>
    );
}