
"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Clock3,
    Compass,
    HeartHandshake,
    Home,
    Leaf,
    MapPin,
    Navigation,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";

import ReferralFormButton from "../components/ReferralFormButton";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.65, ease },
};

const priorities = [
    {
        icon: ShieldCheck,
        title: "Safety & Comfort",
        description:
            "A welcoming environment where residents can feel secure, respected, and supported.",
    },
    {
        icon: Users,
        title: "Community & Connection",
        description:
            "A shared living environment designed to encourage belonging, accountability, and meaningful relationships.",
    },
    {
        icon: Navigation,
        title: "Access to Resources",
        description:
            "Thoughtful consideration of transportation, employment opportunities, healthcare, and essential community services.",
    },
    {
        icon: Leaf,
        title: "Room to Grow",
        description:
            "A setting that encourages personal development, independence, and renewed hope.",
    },
];

export default function LocationPage() {
    return (
        <main className="overflow-hidden bg-[#fffdf8] text-[#173d29]">
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#f4f6ed] pb-24 pt-[155px] sm:pt-[180px] lg:pb-32 lg:pt-[215px]">
                <div className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-[#dbe9d4]/60 blur-[110px]" />
                <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#e8dfbe]/45 blur-[100px]" />

                <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-9 bg-[#b8954f]" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#52745a]">
                                Our Future Home
                            </span>
                        </div>

                        <h1 className="font-serif text-[55px] leading-[0.99] tracking-[-0.045em] sm:text-[76px] lg:text-[84px] xl:text-[94px]">
                            Rooted in
                            <br />
                            Hope.
                            <br />
                            <span className="italic text-[#b18b46]">
                                Growing on
                                <br />
                                Long Island.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-[590px] text-[16px] leading-[1.85] text-[#617064] sm:text-[18px]">
                            Eben-Ezer House of Hope is preparing for its next
                            chapter on Long Island, New York. We are currently
                            exploring properties that can become a welcoming,
                            supportive home for individuals seeking stability,
                            community, and a fresh beginning.
                        </p>

                        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d6dfcc] bg-white/80 px-5 py-3 shadow-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b8954f] opacity-30" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#b8954f]" />
                            </span>
                            <span className="text-[12px] font-bold text-[#47634e]">
                                Location Search in Progress
                            </span>
                        </div>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#map"
                                className="group inline-flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#0b512f] px-8 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(11,81,47,0.15)] transition-all hover:-translate-y-1 hover:bg-[#073d23]"
                            >
                                Explore Long Island
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>

                            <ReferralFormButton
                                label="Contact Our Team"
                                className="!h-[58px] !min-h-0 !px-8 !py-0 !text-[15px]"
                            />
                        </div>
                    </motion.div>

                    {/* EDITORIAL CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.85, delay: 0.12, ease }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-[36px] bg-[#103d29] p-9 text-white shadow-[0_30px_80px_rgba(10,50,30,0.18)] sm:p-12">
                            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
                            <div className="pointer-events-none absolute -right-8 -top-10 h-56 w-56 rounded-full border border-white/10" />

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                                <Home className="h-8 w-8 text-[#dfc584]" />
                            </div>

                            <p className="mt-12 text-[11px] font-bold uppercase tracking-[0.23em] text-[#dfc584]">
                                A Place to Belong
                            </p>

                            <h2 className="mt-5 font-serif text-[39px] leading-[1.12] sm:text-[49px]">
                                Not just
                                <br />
                                a house.
                                <br />
                                <span className="italic text-[#dfc584]">
                                    A foundation
                                    <br />
                                    for the future.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-[390px] text-[15px] leading-8 text-white/70">
                                We are thoughtfully seeking a space where
                                dignity, structure, and supportive community
                                can come together to help lives move forward.
                            </p>

                            <div className="mt-12 flex items-center gap-4 border-t border-white/15 pt-7">
                                <MapPin className="h-6 w-6 text-[#dfc584]" />
                                <div>
                                    <p className="text-[14px] font-semibold">
                                        Long Island, New York
                                    </p>
                                    <p className="mt-1 text-[12px] text-white/55">
                                        Nassau & Suffolk Counties under consideration
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* MAP */}
            <section id="map" className="scroll-mt-32 py-24 lg:py-32">
                <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16">
                    <motion.div {...reveal} className="max-w-[800px]">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-9 bg-[#b8954f]" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-[#52745a]">
                                Exploring Our Community
                            </span>
                        </div>

                        <h2 className="mt-6 font-serif text-[45px] leading-[1.1] tracking-[-0.035em] sm:text-[62px]">
                            Our search is
                            <span className="italic text-[#b18b46]">
                                {" "}underway.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[680px] text-[16px] leading-8 text-[#657168]">
                            We are exploring potential locations across Long
                            Island. The map below provides a general view of
                            the region and does not represent a confirmed
                            residential property.
                        </p>
                    </motion.div>

                    <motion.div
                        {...reveal}
                        className="mt-12 overflow-hidden rounded-[30px] border border-[#e1e8dc] bg-white shadow-[0_20px_65px_rgba(16,61,41,0.08)]"
                    >
                        <div className="flex flex-col gap-5 border-b border-[#e6ece2] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f0e4] text-[#0b512f]">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-[15px] font-bold text-[#173d29]">
                                        Long Island, New York
                                    </p>
                                    <p className="mt-1 text-[12px] text-[#718075]">
                                        General search region
                                    </p>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Long+Island+New+York"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cddbc9] px-5 py-3 text-[12px] font-bold text-[#0b512f] transition hover:bg-[#edf3e8]"
                            >
                                Open Google Maps
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>

                        <div className="relative h-[380px] w-full sm:h-[480px] lg:h-[560px]">
                            <iframe
                                title="Long Island New York regional map"
                                src="https://maps.google.com/maps?q=Long%20Island%2C%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"
                                className="h-full w-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>

                        <div className="flex items-start gap-3 bg-[#f5f8f2] px-6 py-5 sm:px-8">
                            <Compass className="mt-0.5 h-5 w-5 shrink-0 text-[#a68a4d]" />
                            <p className="text-[12px] leading-6 text-[#657168]">
                                <strong className="text-[#173d29]">
                                    Location update:
                                </strong>{" "}
                                Our permanent address has not yet been
                                established. This map is for regional
                                reference only; directions to a residence
                                will be provided once a location is confirmed.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SEARCH AREA */}
            <section className="bg-[#f4f7f0] py-24 lg:py-32">
                <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16">
                    <motion.div {...reveal} className="mx-auto max-w-[780px] text-center">
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-[#b8954f]" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#52745a]">
                                Our Search Area
                            </span>
                            <span className="h-px w-8 bg-[#b8954f]" />
                        </div>

                        <h2 className="mt-6 font-serif text-[43px] leading-[1.12] sm:text-[60px]">
                            Exploring possibilities
                            <span className="italic text-[#b18b46]">
                                {" "}across Long Island.
                            </span>
                        </h2>

                        <p className="mt-6 text-[16px] leading-8 text-[#657168]">
                            We are considering communities where residents
                            can access supportive services, transportation,
                            and opportunities for personal growth.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2">
                        {[
                            {
                                name: "Nassau County",
                                subtitle: "Western Long Island",
                                description:
                                    "Exploring communities with access to public transportation, healthcare, veteran services, and local employment opportunities.",
                            },
                            {
                                name: "Suffolk County",
                                subtitle: "Central & Eastern Long Island",
                                description:
                                    "Considering locations that offer a supportive residential environment and connections to regional community resources.",
                            },
                        ].map((county, index) => (
                            <motion.div
                                key={county.name}
                                {...reveal}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease,
                                }}
                                className="rounded-[28px] border border-[#e1e8dc] bg-white p-9 shadow-[0_12px_40px_rgba(16,61,41,0.035)]"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f0e4]">
                                    <MapPin className="h-7 w-7 text-[#0b512f]" />
                                </div>

                                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a68a4d]">
                                    {county.subtitle}
                                </p>

                                <h3 className="mt-3 font-serif text-[33px]">
                                    {county.name}
                                </h3>

                                <p className="mt-5 text-[14px] leading-8 text-[#657168]">
                                    {county.description}
                                </p>

                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                        county.name + ", New York"
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-[#0b512f] hover:text-[#a18445]"
                                >
                                    Explore the Area
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOCATION PRIORITIES */}
            <section className="py-24 lg:py-32">
                <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16">
                    <motion.div {...reveal} className="max-w-[800px]">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-9 bg-[#b8954f]" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#52745a]">
                                What Matters Most
                            </span>
                        </div>

                        <h2 className="mt-6 font-serif text-[44px] leading-[1.1] sm:text-[61px]">
                            Thoughtfully choosing
                            <span className="italic text-[#b18b46]">
                                {" "}a place to call home.
                            </span>
                        </h2>
                    </motion.div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {priorities.map((priority, index) => {
                            const Icon = priority.icon;

                            return (
                                <motion.div
                                    key={priority.title}
                                    {...reveal}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.07,
                                        ease,
                                    }}
                                    className="rounded-[25px] border border-[#e4e9df] bg-[#fafbf7] p-7"
                                >
                                    <div className="flex h-13 w-13 h-[52px] items-center justify-center rounded-2xl bg-[#e6efe2]">
                                        <Icon className="h-6 w-6 text-[#0b512f]" />
                                    </div>

                                    <h3 className="mt-7 font-serif text-[24px]">
                                        {priority.title}
                                    </h3>

                                    <p className="mt-4 text-[13px] leading-7 text-[#657168]">
                                        {priority.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden bg-[#103d29] py-24 text-white lg:py-32">
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#6b946c]/15 blur-[90px]" />

                <motion.div
                    {...reveal}
                    className="relative mx-auto max-w-[850px] px-6 text-center"
                >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                        <HeartHandshake className="h-8 w-8 text-[#dfc584]" />
                    </div>

                    <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.23em] text-[#dfc584]">
                        Stay Connected
                    </p>

                    <h2 className="mt-6 font-serif text-[45px] leading-[1.1] tracking-[-0.035em] sm:text-[66px]">
                        Our doors are
                        <br />
                        not open yet.
                        <br />
                        <span className="italic text-[#dfc584]">
                            But our vision is.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[630px] text-[16px] leading-8 text-white/70">
                        We welcome inquiries from prospective residents,
                        community partners, and those who share our vision
                        for a supportive home on Long Island.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <ReferralFormButton
                            label="Get in Touch"
                            className="!h-[60px] !min-h-0 !bg-[#dfc584] !px-9 !py-0 !text-[15px] !text-[#103d29] hover:!bg-[#eed7a4]"
                        />
                    </div>

                    <p className="mt-6 text-[12px] text-white/50">
                        Location and residency availability are pending confirmation.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
