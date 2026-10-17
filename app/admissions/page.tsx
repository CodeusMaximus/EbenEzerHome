
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    CalendarCheck2,
    Check,
    CheckCircle2,
    ChevronDown,
    ClipboardCheck,
    ClipboardList,
    FileCheck2,
    FileText,
    HandHeart,
    HeartHandshake,
    Home,
    IdCard,
    Leaf,
    MapPin,
    MessageCircle,
    PhoneCall,
    ShieldCheck,
    Sparkles,
    Stethoscope,
    Users,
    Wallet,
    BriefcaseBusiness,
    HeartPulse,
    Target,
    Clock3,
} from "lucide-react";

import ReferralFormButton from "../components/ReferralFormButton";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.65, ease },
};

const steps = [
    {
        number: "01",
        title: "Referral & Initial Inquiry",
        subtitle: "Every new beginning starts with a conversation.",
        icon: MessageCircle,
        description:
            "Applicants, case managers, and community partners can begin by contacting our admissions team. We start with a brief, respectful conversation to understand housing needs and preliminary eligibility.",
        details: [
            "Self-referrals and individual inquiries",
            "County social services and community organizations",
            "Veteran support networks and referral partners",
            "Initial eligibility and housing needs screening",
        ],
    },
    {
        number: "02",
        title: "Application & Documentation",
        subtitle: "Helping you prepare with clarity.",
        icon: FileText,
        description:
            "Applicants or their designated case managers complete an intake packet and provide documentation needed for admissions review. Our team helps clarify what is required.",
        details: [
            "Government-issued identification and supporting records",
            "Income or benefit verification, when applicable",
            "Veteran documentation for veteran-specific referrals",
            "Relevant health or psychosocial documentation, as requested",
        ],
    },
    {
        number: "03",
        title: "Intake Interview & Assessment",
        subtitle: "Getting to know the person, not just the paperwork.",
        icon: Users,
        description:
            "An intake coordinator or house manager meets privately with the applicant, in person or through a secure virtual meeting, to discuss goals, support needs, and expectations for communal living.",
        details: [
            "Current housing circumstances and immediate concerns",
            "Program expectations and community guidelines",
            "Personal stability goals and support preferences",
            "Barriers involving employment, healthcare, or basic needs",
        ],
    },
    {
        number: "04",
        title: "Application Review & Placement",
        subtitle: "A thoughtful decision with clear next steps.",
        icon: ClipboardCheck,
        description:
            "Our admissions team reviews the completed application, available accommodations, and the program's ability to meet the applicant's support needs.",
        details: [
            "Admissions and eligibility review",
            "Confirmation of available placement",
            "Move-in coordination when a space is available",
            "Waitlist consideration and follow-up when full",
        ],
    },
    {
        number: "05",
        title: "Move-In & Welcome",
        subtitle: "A new chapter begins with community.",
        icon: Home,
        description:
            "Once admitted, residents receive an orientation to their new living environment and begin building an individualized plan for stability, connection, and personal growth.",
        details: [
            "Housing agreement and community orientation",
            "Safety procedures and shared living expectations",
            "Basic needs and resource connection",
            "Development of an initial 30-day stability plan",
        ],
    },
];

const documents = [
    {
        icon: IdCard,
        title: "Identification",
        items: [
            "Government-issued photo identification",
            "Social Security card or other requested identity records",
            "DD-214 or other veteran-status documentation, if applicable",
        ],
    },
    {
        icon: Wallet,
        title: "Income & Benefits",
        items: [
            "Employment or income verification, if available",
            "SSI, SSDI, or VA benefit documentation, if applicable",
            "Other relevant benefit or financial records",
        ],
    },
    {
        icon: Stethoscope,
        title: "Health & Support Records",
        items: [
            "Recent psychosocial evaluation, when required",
            "Medical clearance or physical examination documentation",
            "Tuberculosis screening documentation, when required",
        ],
    },
];

const supportAreas = [
    {
        icon: HandHeart,
        title: "Immediate Essentials",
        description:
            "Support with toiletries, clothing, food access, and settling into a safe and structured environment.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Employment & Income",
        description:
            "Connections to vocational services, job readiness resources, and available benefits assistance.",
    },
    {
        icon: HeartPulse,
        title: "Health & Wellness",
        description:
            "Referrals to appropriate healthcare, behavioral health, veteran, and peer-support services.",
    },
    {
        icon: Target,
        title: "Personal Stability Planning",
        description:
            "A resident-centered 30-day plan focused on immediate priorities and achievable next steps.",
    },
];

const faqs = [
    {
        question: "Who may apply for residency?",
        answer:
            "The proposed admissions criteria prioritize adult women and female military veterans experiencing homelessness, housing instability, or displacement who are willing to participate in a structured, supportive communal living environment. Final eligibility is determined through the admissions review.",
    },
    {
        question: "Can a case manager or organization submit a referral?",
        answer:
            "Yes. Social workers, discharge planners, veteran service organizations, county agencies, and community partners may initiate a referral on behalf of an applicant.",
    },
    {
        question: "What happens if no rooms are available?",
        answer:
            "Applicants may be considered for a waitlist, with follow-up coordinated by the admissions team. Placement is subject to availability and eligibility.",
    },
    {
        question: "Do I need every document before making an inquiry?",
        answer:
            "No. You can begin with an initial inquiry. The admissions team can explain which documents are needed before a complete application can be reviewed.",
    },
    {
        question: "What happens after I am accepted?",
        answer:
            "The team coordinates move-in, reviews the housing agreement and community guidelines, assesses immediate needs, and begins a personalized 30-day stability plan.",
    },
];

export default function AdmissionsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="overflow-hidden bg-[#fffdf8] text-[#173d29]">
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#f5f5eb] pt-[155px] pb-20 sm:pt-[175px] lg:pt-[215px] lg:pb-28">
                <div className="pointer-events-none absolute -right-24 top-20 h-[440px] w-[440px] rounded-full bg-[#dce9d4]/60 blur-[100px]" />
                <div className="pointer-events-none absolute -left-40 bottom-0 h-[340px] w-[340px] rounded-full bg-[#e9dfbf]/40 blur-[90px]" />

                <div className="relative mx-auto grid max-w-[1450px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:px-16 xl:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <div className="mb-7 inline-flex items-center gap-3">
                            <span className="h-px w-9 bg-[#b8954f]" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#52745a]">
                                Admissions & Eligibility
                            </span>
                        </div>

                        <h1 className="max-w-[750px] font-serif text-[55px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#103d29] sm:text-[75px] lg:text-[82px] xl:text-[92px]">
                            Your Next
                            <br />
                            Chapter
                            <br />
                            <span className="italic text-[#b18b46]">
                                Starts Here.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-[590px] text-[16px] leading-[1.85] text-[#536358] sm:text-[18px]">
                            Finding stable housing is an important step toward
                            rebuilding your future. Our admissions process is
                            designed to provide clarity, compassion, and
                            personalized guidance from your first inquiry to
                            your first day in our community.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <ReferralFormButton
                                label="Begin Your Inquiry"
                                className="!h-[58px] !min-h-0 !px-8 !py-0 !text-[15px]"
                            />

                            <a
                                href="#process"
                                className="group inline-flex h-[58px] items-center justify-center gap-3 rounded-full border border-[#9eb3a0] px-7 text-[15px] font-semibold text-[#173d29] transition-all hover:border-[#0b512f] hover:bg-white"
                            >
                                Explore the Process
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] font-semibold text-[#5b705e]">
                            <span className="flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-[#b8954f]" />
                                Respectful screening
                            </span>
                            <span className="flex items-center gap-2">
                                <HeartHandshake className="h-4 w-4 text-[#b8954f]" />
                                Supportive guidance
                            </span>
                            <span className="flex items-center gap-2">
                                <Leaf className="h-4 w-4 text-[#b8954f]" />
                                A path toward stability
                            </span>
                        </div>
                    </motion.div>

                    {/* EDITORIAL HERO PANEL */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.85, delay: 0.15, ease }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-[36px] bg-[#103d29] px-8 py-12 text-white shadow-[0_30px_80px_rgba(11,60,36,0.18)] sm:px-12 sm:py-16">
                            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
                            <div className="pointer-events-none absolute -right-8 -top-10 h-56 w-56 rounded-full border border-white/10" />
                            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#4c8060]/20 blur-3xl" />

                            <div className="relative">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d9bd7c]/35 bg-white/10">
                                    <Sparkles className="h-7 w-7 text-[#dfc584]" />
                                </div>

                                <p className="mt-12 text-[11px] font-bold uppercase tracking-[0.25em] text-[#dfc584]">
                                    Our Commitment
                                </p>

                                <h2 className="mt-5 font-serif text-[38px] leading-[1.12] sm:text-[48px]">
                                    More than
                                    <br />
                                    a place to stay.
                                    <br />
                                    <span className="italic text-[#dfc584]">
                                        A place to begin.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-[350px] text-[15px] leading-8 text-white/75">
                                    We believe every individual deserves to be
                                    treated with dignity, supported through
                                    transition, and encouraged to move forward
                                    with purpose.
                                </p>

                                <div className="mt-12 border-t border-white/15 pt-7">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dfc584]/15">
                                            <HeartHandshake className="h-5 w-5 text-[#dfc584]" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-semibold">
                                                Compassion at every step
                                            </p>
                                            <p className="mt-1 text-[12px] text-white/55">
                                                Guided admissions and community support
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#e7e9db] bg-white px-6 py-4 shadow-xl sm:block">
                            <span className="flex items-center gap-2 text-[12px] font-semibold text-[#315a3e]">
                                <CheckCircle2 className="h-5 w-5 text-[#b8954f]" />
                                A structured path forward
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INTRO / ELIGIBILITY */}
            <section className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16">
                    <motion.div {...reveal} className="mx-auto max-w-[780px] text-center">
                        <SectionEyebrow label="Who We Serve" />
                        <h2 className="mt-5 font-serif text-[43px] leading-[1.12] tracking-[-0.035em] sm:text-[58px]">
                            A community built on
                            <span className="italic text-[#b18b46]">
                                {" "}understanding.
                            </span>
                        </h2>
                        <p className="mt-6 text-[16px] leading-8 text-[#657168]">
                            Our proposed admissions criteria focus on
                            individuals who can benefit from a stable,
                            supportive, and structured living environment.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-5 md:grid-cols-3">
                        {[
                            {
                                icon: Users,
                                title: "Adult Women",
                                description:
                                    "Women seeking a supportive transitional living environment.",
                            },
                            {
                                icon: BadgeCheck,
                                title: "Female Veterans",
                                description:
                                    "Women who have served in the military and are navigating housing instability or transition.",
                            },
                            {
                                icon: Home,
                                title: "Housing Instability",
                                description:
                                    "Individuals experiencing homelessness, displacement, or unstable housing circumstances.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    {...reveal}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                        ease,
                                    }}
                                    className="group rounded-[28px] border border-[#e5e9df] bg-[#fafbf6] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#cad8c7] hover:shadow-[0_20px_45px_rgba(16,61,41,0.07)]"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5eee2] text-[#0b512f] transition-colors group-hover:bg-[#d8e7d5]">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-7 font-serif text-[27px] font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-[14px] leading-7 text-[#657168]">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-7 flex items-start gap-4 rounded-[22px] border border-[#e8e6d8] bg-[#fbf9ef] p-6 sm:items-center">
                        <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#a9863d] sm:mt-0" />
                        <p className="text-[14px] leading-7 text-[#526358]">
                            Applicants should be willing to participate in a
                            communal living environment with shared
                            expectations, safety guidelines, and supportive
                            structure. Eligibility and placement are reviewed
                            individually.
                        </p>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section id="process" className="scroll-mt-32 bg-[#f5f7f0] py-24 lg:py-32">
                <div className="mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-16">
                    <motion.div {...reveal} className="max-w-[800px]">
                        <SectionEyebrow label="The Admission Journey" />
                        <h2 className="mt-5 font-serif text-[44px] leading-[1.1] tracking-[-0.035em] sm:text-[62px]">
                            Five steps toward
                            <br />
                            <span className="italic text-[#b18b46]">
                                a fresh beginning.
                            </span>
                        </h2>
                        <p className="mt-6 max-w-[680px] text-[16px] leading-8 text-[#657168]">
                            Our step-by-step process helps applicants and
                            referral partners understand what comes next,
                            reducing uncertainty and making the journey easier
                            to navigate.
                        </p>
                    </motion.div>

                    <div className="relative mt-16">
                        <div className="absolute bottom-16 left-[29px] top-8 hidden w-px bg-[#c9d7c5] md:block" />

                        <div className="space-y-6">
                            {steps.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <motion.div
                                        key={step.number}
                                        {...reveal}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.05,
                                            ease,
                                        }}
                                        className="relative md:pl-24"
                                    >
                                        <div className="absolute left-0 top-9 z-10 hidden h-[58px] w-[58px] items-center justify-center rounded-full border-4 border-[#f5f7f0] bg-[#0b512f] font-serif text-[18px] text-white shadow-md md:flex">
                                            {step.number}
                                        </div>

                                        <div className="grid gap-8 rounded-[28px] border border-[#e1e8db] bg-white p-7 shadow-[0_10px_30px_rgba(20,60,40,0.025)] sm:p-9 lg:grid-cols-[1fr_0.85fr] lg:gap-12 lg:p-11">
                                            <div>
                                                <div className="mb-5 flex items-center gap-3">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f0e5] text-[#0b512f]">
                                                        <Icon className="h-6 w-6" />
                                                    </div>
                                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a48a51]">
                                                        Step {step.number}
                                                    </span>
                                                </div>

                                                <h3 className="font-serif text-[30px] font-semibold leading-[1.15] sm:text-[36px]">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-3 text-[14px] font-semibold italic text-[#a18445]">
                                                    {step.subtitle}
                                                </p>

                                                <p className="mt-5 text-[14px] leading-8 text-[#657168]">
                                                    {step.description}
                                                </p>
                                            </div>

                                            <div className="rounded-[20px] bg-[#f7f9f4] p-6">
                                                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.17em] text-[#52745a]">
                                                    What to Expect
                                                </p>

                                                <div className="space-y-4">
                                                    {step.details.map((detail) => (
                                                        <div
                                                            key={detail}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#4b8862]" />
                                                            <span className="text-[13px] leading-6 text-[#526358]">
                                                                {detail}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* DOCUMENTS */}
            <section className="py-24 lg:py-32">
                <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16">
                    <motion.div {...reveal} className="mx-auto max-w-[780px] text-center">
                        <SectionEyebrow label="Getting Prepared" />
                        <h2 className="mt-5 font-serif text-[44px] leading-[1.12] tracking-[-0.035em] sm:text-[60px]">
                            What you'll need
                            <span className="italic text-[#b18b46]">
                                {" "}to apply.
                            </span>
                        </h2>
                        <p className="mt-6 text-[16px] leading-8 text-[#657168]">
                            These documents help our admissions team understand
                            eligibility and prepare for a safe, supported
                            transition. Requirements may vary by applicant.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-3">
                        {documents.map((document, index) => {
                            const Icon = document.icon;

                            return (
                                <motion.div
                                    key={document.title}
                                    {...reveal}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                        ease,
                                    }}
                                    className="rounded-[28px] border border-[#e4e9e0] bg-white p-8 shadow-[0_12px_40px_rgba(16,61,41,0.035)]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f0e5] text-[#0b512f]">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <span className="font-serif text-[36px] italic text-[#e0e7da]">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="mt-7 font-serif text-[27px] font-semibold">
                                        {document.title}
                                    </h3>

                                    <div className="mt-7 space-y-5">
                                        {document.items.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3"
                                            >
                                                <FileCheck2 className="mt-1 h-4 w-4 shrink-0 text-[#a78a48]" />
                                                <p className="text-[13px] leading-7 text-[#657168]">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-9 flex flex-col items-start justify-between gap-6 rounded-[25px] bg-[#edf3e9] p-7 sm:flex-row sm:items-center sm:p-9">
                        <div>
                            <p className="font-serif text-[25px] font-semibold">
                                Not sure where to start?
                            </p>
                            <p className="mt-2 text-[14px] leading-7 text-[#657168]">
                                Begin with an inquiry. Our team can explain the
                                application and documentation process.
                            </p>
                        </div>

                        <ReferralFormButton
                            label="Ask About Admissions"
                            className="!h-[54px] !min-h-0 !px-7 !py-0 !text-[14px]"
                        />
                    </div>
                </div>
            </section>

            {/* SUPPORT AFTER ADMISSION */}
            <section className="bg-[#103d29] py-24 text-white lg:py-32">
                <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16">
                    <motion.div {...reveal} className="max-w-[820px]">
                        <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#dfc584]">
                            Beyond the Application
                        </span>

                        <h2 className="mt-6 font-serif text-[44px] leading-[1.12] tracking-[-0.035em] sm:text-[62px]">
                            Support doesn't end
                            <br />
                            <span className="italic text-[#dfc584]">
                                at move-in.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[650px] text-[16px] leading-8 text-white/70">
                            Our resident intake and resource connection
                            approach is designed to help individuals build a
                            foundation for greater independence through
                            practical support and community connections.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2">
                        {supportAreas.map((area, index) => {
                            const Icon = area.icon;

                            return (
                                <motion.div
                                    key={area.title}
                                    {...reveal}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                        ease,
                                    }}
                                    className="rounded-[25px] border border-white/15 bg-white/[0.055] p-8 transition-colors hover:bg-white/[0.085]"
                                >
                                    <div className="flex h-13 w-13 h-[52px] items-center justify-center rounded-2xl bg-white/10">
                                        <Icon className="h-6 w-6 text-[#dfc584]" />
                                    </div>

                                    <h3 className="mt-7 font-serif text-[27px]">
                                        {area.title}
                                    </h3>

                                    <p className="mt-4 max-w-[470px] text-[14px] leading-8 text-white/65">
                                        {area.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        {...reveal}
                        className="mt-12 flex flex-col gap-5 rounded-[24px] border border-[#dfc584]/25 bg-[#dfc584]/10 p-7 sm:flex-row sm:items-center sm:p-9"
                    >
                        <CalendarCheck2 className="h-9 w-9 shrink-0 text-[#dfc584]" />

                        <div>
                            <h3 className="font-serif text-[24px]">
                                Your First 30 Days
                            </h3>
                            <p className="mt-2 text-[14px] leading-7 text-white/70">
                                Residents work with the support team to
                                establish personal goals, identify immediate
                                priorities, and develop an individualized
                                housing stability plan.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* REFERRAL PARTNERS */}
            <section className="bg-[#fffdf8] py-24 lg:py-32">
                <div className="mx-auto grid max-w-[1350px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
                    <motion.div {...reveal}>
                        <SectionEyebrow label="For Referral Partners" />

                        <h2 className="mt-5 font-serif text-[44px] leading-[1.12] tracking-[-0.035em] sm:text-[59px]">
                            Working together
                            <br />
                            <span className="italic text-[#b18b46]">
                                to create change.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[560px] text-[15px] leading-8 text-[#657168]">
                            We welcome inquiries from social workers,
                            hospitals, discharge planners, veteran service
                            organizations, county agencies, and community
                            partners supporting individuals through housing
                            transitions.
                        </p>

                        <p className="mt-5 max-w-[560px] text-[15px] leading-8 text-[#657168]">
                            Our intake workflow is intended to support
                            coordinated communication, appropriate eligibility
                            review, and thoughtful placement planning.
                        </p>

                        <div className="mt-9">
                            <ReferralFormButton
                                label="Make a Referral"
                                className="!h-[56px] !min-h-0 !px-8 !py-0 !text-[15px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        {...reveal}
                        className="rounded-[30px] border border-[#e5e9df] bg-[#f6f8f2] p-8 sm:p-11"
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <ClipboardList className="h-6 w-6 text-[#0b512f]" />
                            <h3 className="font-serif text-[28px]">
                                Referral Coordination
                            </h3>
                        </div>

                        {[
                            "Begin with an initial referral or inquiry.",
                            "Discuss preliminary eligibility and housing needs.",
                            "Coordinate required application documentation.",
                            "Schedule an intake interview and assessment.",
                            "Receive placement or waitlist next steps.",
                        ].map((item, index) => (
                            <div
                                key={item}
                                className="flex gap-4 border-t border-[#e0e7db] py-5"
                            >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e2ecde] text-[12px] font-bold text-[#0b512f]">
                                    {index + 1}
                                </span>
                                <p className="pt-1 text-[14px] leading-7 text-[#526358]">
                                    {item}
                                </p>
                            </div>
                        ))}

                        <p className="mt-5 text-[12px] leading-6 text-[#758075]">
                            Please avoid including sensitive medical or
                            identifying documents in a general inquiry form.
                            Our team can advise on an appropriate submission
                            method when documentation is needed.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#f5f7f0] py-24 lg:py-32">
                <div className="mx-auto max-w-[1000px] px-6 sm:px-10">
                    <motion.div {...reveal} className="mb-12 text-center">
                        <SectionEyebrow label="Helpful Answers" />
                        <h2 className="mt-5 font-serif text-[44px] leading-[1.1] sm:text-[60px]">
                            Admissions
                            <span className="italic text-[#b18b46]">
                                {" "}questions.
                            </span>
                        </h2>
                    </motion.div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="overflow-hidden rounded-[20px] border border-[#e2e8dd] bg-white"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFaq(isOpen ? null : index)
                                        }
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8"
                                    >
                                        <span className="text-[15px] font-semibold text-[#173d29] sm:text-[17px]">
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen
                                                ? "bg-[#0b512f] text-white"
                                                : "bg-[#edf3e8] text-[#0b512f]"
                                                }`}
                                        >
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-7 text-[14px] leading-8 text-[#657168] sm:px-8">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden bg-[#fffdf8] py-24 lg:py-32">
                <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-3/4 -translate-x-1/2 rounded-full bg-[#e6eddf]/55 blur-[90px]" />

                <motion.div
                    {...reveal}
                    className="relative mx-auto max-w-[900px] px-6 text-center"
                >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8efe3]">
                        <Leaf className="h-8 w-8 text-[#0b512f]" />
                    </div>

                    <h2 className="mt-8 font-serif text-[47px] leading-[1.08] tracking-[-0.04em] sm:text-[68px]">
                        Every new beginning
                        <br />
                        <span className="italic text-[#b18b46]">
                            starts with hope.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[600px] text-[16px] leading-8 text-[#657168]">
                        Whether you're seeking housing or helping someone
                        navigate their next steps, we're here to begin the
                        conversation.
                    </p>

                    <div className="mt-9 flex justify-center">
                        <ReferralFormButton
                            label="Start the Admissions Process"
                            className="!h-[60px] !min-h-0 !px-9 !py-0 !text-[15px]"
                        />
                    </div>

                    <p className="mt-6 flex items-center justify-center gap-2 text-[12px] text-[#849086]">
                        <ShieldCheck className="h-4 w-4" />
                        Your inquiry will be handled with care and respect.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}

function SectionEyebrow({ label }: { label: string }) {
    return (
        <div className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#54775a] lg:justify-start">
            <span className="h-px w-8 bg-[#b8954f]" />
            {label}
            <span className="h-px w-8 bg-[#b8954f]" />
        </div>
    );
}
