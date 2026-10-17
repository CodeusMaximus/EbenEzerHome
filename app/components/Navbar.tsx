"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ReferralFormButton from "./ReferralFormButton";
import { usePathname } from "next/navigation";
import {
    ArrowRight,
    Mail,
    Menu,
    Phone,
    X,
} from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Our Program", href: "/#program" },
    { label: "Admissions", href: "/admissions" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
    { label: "Location", href: "/location" },
];

/*
 * Replace these when the client provides
 * the real contact information.
 */
const phoneDisplay = "(516) 962-1123";
const phoneHref = "tel:+15169621123";

const emailDisplay = "support@ebenezerhouseofhope.com";
const emailHref = "mailto:support@ebenezerhouseofhope.com";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const lastScrollY = useRef(0);

    /* =========================================================
       NAVBAR SCROLL BEHAVIOR
    ========================================================= */

    useEffect(() => {
        let lastY = Math.max(0, window.scrollY);

        lastScrollY.current = lastY;

        const handleScroll = () => {
            const currentY = Math.max(0, window.scrollY);

            // Always show at top of page
            if (currentY <= 100) {
                setNavVisible(true);
                lastY = currentY;
                lastScrollY.current = currentY;
                return;
            }

            // Never hide while mobile menu is open
            if (mobileOpen) {
                setNavVisible(true);
                lastY = currentY;
                lastScrollY.current = currentY;
                return;
            }

            const difference = currentY - lastY;

            // Ignore tiny mobile scroll jitter
            if (Math.abs(difference) < 3) return;

            // Show on scroll up, hide on scroll down
            if (difference < 0) {
                setNavVisible(true);
            } else {
                setNavVisible(false);
            }

            lastY = currentY;
            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [mobileOpen]);

    /* =========================================================
       LOCK BODY WHEN MOBILE MENU IS OPEN
    ========================================================= */

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            {/* =====================================================
          COMPLETE NAVBAR
      ====================================================== */}

            <motion.header
                initial={false}
                animate={{
                    y: navVisible ? 0 : -150,
                    opacity: navVisible ? 1 : 0,
                }}
                transition={{
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
          fixed
          left-0
          top-0
          z-50
          w-full
          border-b
          border-[#173d29]/[0.07]
          bg-[#fffdf8]/95
          shadow-[0_4px_25px_rgba(12,62,38,0.06)]
          backdrop-blur-xl
          will-change-transform
        "
            >
                {/* ===================================================
            DESKTOP CONTACT BAR
        ==================================================== */}

                <div
                    className="
            hidden
            h-[38px]
            border-b
            border-white/10
            bg-[#073d27]
            text-white
            lg:block
          "
                >
                    <div
                        className="
              mx-auto
              flex
              h-full
              max-w-[1500px]
              items-center
              justify-between
              px-12
              xl:px-16
            "
                    >
                        {/* LEFT MESSAGE */}

                        <p
                            className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/65
              "
                        >
                            A foundation for recovery, independence & renewed hope
                        </p>

                        {/* CONTACT INFO */}

                        <div className="flex h-full items-center">
                            <a
                                href={phoneHref}
                                className="
                  group
                  flex
                  h-full
                  items-center
                  gap-2
                  border-l
                  border-white/10
                  px-5
                  text-[11px]
                  font-medium
                  text-white/80
                  transition-colors
                  hover:text-[#dfc584]
                "
                            >
                                <Phone
                                    className="
                    h-3.5
                    w-3.5
                    text-[#dfc584]
                  "
                                />

                                <span>{phoneDisplay}</span>
                            </a>

                            <a
                                href={emailHref}
                                className="
                  group
                  flex
                  h-full
                  items-center
                  gap-2
                  border-l
                  border-white/10
                  px-5
                  text-[11px]
                  font-medium
                  text-white/80
                  transition-colors
                  hover:text-[#dfc584]
                "
                            >
                                <Mail
                                    className="
                    h-3.5
                    w-3.5
                    text-[#dfc584]
                  "
                                />

                                <span>{emailDisplay}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ===================================================
            MAIN NAVIGATION
        ==================================================== */}

                <nav
                    className="
            mx-auto
            flex
            h-[94px]
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-4
            sm:px-6
            lg:h-[104px]
            lg:px-10
            xl:px-14
          "
                >
                    {/* =================================================
              LOGO
          ================================================== */}

                    <Link
                        href="/"
                        aria-label="Eben-Ezer House of Hope home"
                        className="
              relative
              z-10
              flex
              shrink-0
              items-center
            "
                    >
                        <img
                            src="/images/eben-ezer-logo.png"
                            alt="Eben-Ezer House of Hope - Stone of Hope"
                            className="
                h-[82px]
                w-auto
                max-w-[190px]
                object-contain
                sm:h-[88px]
                sm:max-w-[220px]
                lg:h-[98px]
                lg:max-w-[230px]
                xl:h-[102px]
                xl:max-w-[250px]
              "
                        />
                    </Link>

                    {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden items-center gap-0.5 lg:flex xl:gap-1">
                        {navLinks.map((link) => {
                            const active =
                                link.href === "/"
                                    ? pathname === "/"
                                    : !link.href.includes("#") &&
                                    (pathname === link.href ||
                                        pathname.startsWith(`${link.href}/`));

                            return (
                                <DesktopNavLink
                                    key={link.label}
                                    href={link.href}
                                    active={active}
                                >
                                    {link.label}
                                </DesktopNavLink>
                            );
                        })}
                    </div>

                    {/* =================================================
              DESKTOP CTA
          ================================================== */}

                    <div className="hidden shrink-0 lg:flex">
                        <ReferralFormButton
                            label="Apply for Housing"
                            className="!h-[42px] !min-h-0 !px-5 !py-0 !text-[13px]"
                        />
                    </div>
                    {/* =================================================
              MOBILE CONTACT + MENU
          ================================================== */}

                    <div className="flex items-center gap-2 lg:hidden">
                        {/* PHONE */}

                        <a
                            href={phoneHref}
                            aria-label="Call Eben-Ezer House of Hope"
                            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#0b512f]/10
                bg-[#edf3e8]
                text-[#0b512f]
                transition
                hover:bg-[#dfeada]
              "
                        >
                            <Phone className="h-[18px] w-[18px]" />
                        </a>

                        {/* EMAIL */}

                        <a
                            href={emailHref}
                            aria-label="Email Eben-Ezer House of Hope"
                            className="
                hidden
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#0b512f]/10
                bg-[#edf3e8]
                text-[#0b512f]
                transition
                hover:bg-[#dfeada]
                sm:flex
              "
                        >
                            <Mail className="h-[18px] w-[18px]" />
                        </a>

                        {/* MENU */}

                        <button
                            type="button"
                            aria-label="Open navigation menu"
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen(true)}
                            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#0b512f]
                text-white
                shadow-[0_8px_22px_rgba(11,81,47,0.18)]
                transition
                hover:bg-[#073d23]
              "
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* OVERLAY */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setMobileOpen(false)}
                            className="
                fixed
                inset-0
                z-[80]
                bg-[#071c12]/45
                backdrop-blur-sm
              "
                        />

                        {/* =================================================
                DRAWER
            ================================================== */}

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 28,
                                stiffness: 260,
                            }}
                            className="
                fixed
                right-0
                top-0
                z-[90]
                h-full
                w-[90%]
                max-w-[410px]
                overflow-y-auto
                bg-[#fffdf8]
                px-7
                pb-10
                pt-5
                shadow-[-20px_0_60px_rgba(4,39,22,0.16)]
              "
                        >
                            {/* =================================================
                  MOBILE HEADER
              ================================================== */}

                            <div
                                className="
                  mb-6
                  flex
                  items-center
                  justify-between
                "
                            >
                                <Link
                                    href="/"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center"
                                >
                                    <img
                                        src="/images/eben-ezer-logo.png"
                                        alt="Eben-Ezer House of Hope"
                                        className="
                      h-[86px]
                      w-auto
                      max-w-[205px]
                      object-contain
                    "
                                    />
                                </Link>

                                <button
                                    type="button"
                                    aria-label="Close navigation menu"
                                    onClick={() => setMobileOpen(false)}
                                    className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#edf3e8]
                    text-[#0b512f]
                    transition
                    hover:bg-[#dfeada]
                  "
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* =================================================
                  MOBILE CONTACT BAR
              ================================================== */}

                            <div
                                className="
                  mb-7
                  overflow-hidden
                  rounded-[20px]
                  bg-[#073d27]
                  p-2
                "
                            >
                                <a
                                    href={phoneHref}
                                    className="
                    flex
                    items-center
                    gap-4
                    rounded-[15px]
                    px-3
                    py-3
                    transition
                    hover:bg-white/[0.06]
                  "
                                >
                                    <div
                                        className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-[#dfc584]
                    "
                                    >
                                        <Phone className="h-4 w-4" />
                                    </div>

                                    <div>
                                        <p
                                            className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-[#dfc584]
                      "
                                        >
                                            Call Us
                                        </p>

                                        <p
                                            className="
                        mt-0.5
                        text-[13px]
                        font-medium
                        text-white
                      "
                                        >
                                            {phoneDisplay}
                                        </p>
                                    </div>
                                </a>

                                <div className="mx-3 h-px bg-white/10" />

                                <a
                                    href={emailHref}
                                    className="
                    flex
                    items-center
                    gap-4
                    rounded-[15px]
                    px-3
                    py-3
                    transition
                    hover:bg-white/[0.06]
                  "
                                >
                                    <div
                                        className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-[#dfc584]
                    "
                                    >
                                        <Mail className="h-4 w-4" />
                                    </div>

                                    <div className="min-w-0">
                                        <p
                                            className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-[#dfc584]
                      "
                                        >
                                            Email Us
                                        </p>

                                        <p
                                            className="
                        mt-0.5
                        truncate
                        text-[12px]
                        font-medium
                        text-white
                      "
                                        >
                                            {emailDisplay}
                                        </p>
                                    </div>
                                </a>
                            </div>

                            {/* =================================================
                  LABEL
              ================================================== */}

                            <div className="mb-3">
                                <p
                                    className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.26em]
                    text-[#82946f]
                  "
                                >
                                    Stone of Hope
                                </p>
                            </div>

                            {/* =================================================
                  MOBILE LINKS
              ================================================== */}

                            <div>
                                {navLinks.map((link) => (
                                    <MobileNavLink
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </MobileNavLink>
                                ))}
                            </div>

                            {/* =================================================
                  MOBILE CTA
              ================================================== */}

                            <div className="mt-6 w-full">
                                <ReferralFormButton
                                    label="Apply for Housing"
                                    className="
            !h-[64px]
            !min-h-0
            !w-full
            !px-8
            !py-0
            !text-[17px]
            !font-bold
        "
                                />
                            </div>

                            {/* =================================================
                  MISSION
              ================================================== */}

                            <div
                                className="
                  mt-8
                  rounded-[22px]
                  border
                  border-[#dfe8d8]
                  bg-[#f4f7ef]
                  p-5
                "
                            >
                                <p
                                    className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#71825f]
                  "
                                >
                                    Our Mission
                                </p>

                                <p
                                    className="
                    mt-3
                    font-serif
                    text-[22px]
                    leading-[1.15]
                    text-[#103d29]
                  "
                                >
                                    People Restored.
                                    <br />
                                    Lives Transformed.
                                </p>

                                <p
                                    className="
                    mt-3
                    text-[13px]
                    leading-6
                    text-[#5b685d]
                  "
                                >
                                    Empowering individuals in recovery to rebuild their
                                    lives through structure, community, and renewed hope.
                                </p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function DesktopNavLink({
    href,
    children,
    active = false,
}: {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}) {
    return (
        <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className={`
                group relative inline-flex h-[42px]
                shrink-0 items-center justify-center
                whitespace-nowrap rounded-full
                px-2.5 xl:px-3
                text-[11px] xl:text-[12px]
                font-semibold tracking-[0.01em]
                transition-all duration-300
                hover:-translate-y-[1px]
                ${active
                    ? "bg-[#eaf1e7] text-[#0b512f]"
                    : "text-[#344d3d] hover:bg-[#f0f3e9] hover:text-[#0b512f]"
                }
            `}
        >
            {children}

            <span
                className={`
                    absolute bottom-[6px] left-1/2
                    h-[2px] -translate-x-1/2
                    rounded-full bg-[#b8954f]
                    transition-all duration-300
                    ${active
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                    }
                `}
            />
        </Link>
    );
}

/* =========================================================
   MOBILE NAV LINK
========================================================= */

function MobileNavLink({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="
        group
        flex
        items-center
        justify-between
        border-b
        border-[#e5eadf]
        py-4
        text-[17px]
        font-semibold
        text-[#173d29]
        transition-colors
        hover:text-[#0b512f]
      "
        >
            {children}

            <ArrowRight
                className="
          h-4
          w-4
          text-[#8da17a]
          transition-transform
          duration-300
          group-hover:translate-x-1
          group-hover:text-[#0b512f]
        "
            />
        </Link>
    );
}