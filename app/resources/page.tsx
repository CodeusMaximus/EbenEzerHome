
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    CheckCircle2,
    ExternalLink,
    HeartHandshake,
    HeartPulse,
    Leaf,
    MapPin,
    Phone,
    Search,
    ShieldCheck,
    Sparkles,
    Users,
    Utensils,
    X,
} from "lucide-react";

import ReferralFormButton from "../components/ReferralFormButton";

type Category = "food" | "employment" | "support";
type Filter = "all" | Category;

type Resource = {
    name: string;
    program: string;
    category: Category;
    location: string;
    description: string;
    services: string[];
    website: string;
    phone?: string;
    featured?: boolean;
};

const resources: Resource[] = [
    {
        name: "Island Harvest",
        program: "Operation: HOPE",
        category: "food",
        location: "Nassau & Suffolk Counties",
        description:
            "A veteran-serving-veteran food assistance program providing mobile markets, home deliveries, and community food distributions for veterans, active-duty personnel, and military families.",
        services: [
            "Veterans food assistance",
            "Mobile markets",
            "Home deliveries",
        ],
        website: "https://www.islandharvest.org/veterans/",
        phone: "631-873-4775",
        featured: true,
    },
    {
        name: "Nassau County Veterans Food Pantry",
        program: "Nassau County VetMart",
        category: "food",
        location: "2201 Hempstead Turnpike, Building Q, East Meadow, NY",
        description:
            "County-supported food assistance for eligible veterans and military families. Contact the Veterans Service Agency to confirm distribution arrangements and availability.",
        services: [
            "Veteran food pantry",
            "Food assistance",
            "County resources",
        ],
        website:
            "https://www.nassaucountyny.gov/5042/Food-Resources-in-Nassau-County",
        phone: "516-572-6526",
    },
    {
        name: "Long Island Cares",
        program: "Harry Chapin Food Bank — Veterans Project",
        category: "food",
        location: "10 Davids Drive, Hauppauge, NY",
        description:
            "Food assistance, personal care essentials, veteran outreach, and referrals to supportive services across Nassau and Suffolk Counties.",
        services: [
            "Emergency food",
            "Veterans Project",
            "Personal care essentials",
        ],
        website: "https://www.licares.org/our-programs/veterans/",
        phone: "631-582-3663",
    },
    {
        name: "Northport VA",
        program: "Vocational Rehabilitation & Employment Support",
        category: "employment",
        location: "79 Middleville Road, Northport, NY",
        description:
            "VA healthcare and rehabilitation resources for eligible veterans. Ask the VA team about available vocational rehabilitation, employment assistance, and Compensated Work Therapy referrals.",
        services: [
            "Veteran rehabilitation",
            "Employment guidance",
            "VA services",
        ],
        website:
            "https://www.va.gov/northport-health-care/health-services/",
    },
    {
        name: "United Way of Long Island",
        program: "Mission United & VetsBuild",
        category: "employment",
        location: "819 Grand Boulevard, Deer Park, NY",
        description:
            "Veteran-focused career training through the VetsBuild program, including green construction, building science, energy-efficiency skills, and potential employment connections.",
        services: [
            "Career training",
            "Veterans workforce support",
            "Green construction skills",
        ],
        website: "https://www.unitedwayli.org/vetsbuild",
        phone: "631-940-3700",
        featured: true,
    },
    {
        name: "Suffolk County One-Stop Employment Center",
        program: "Department of Labor",
        category: "employment",
        location: "725 Veterans Memorial Highway, Hauppauge, NY",
        description:
            "Career services including job-search assistance, resume development, job fairs, workshops, and employment resources.",
        services: [
            "Job placement assistance",
            "Resume support",
            "Career workshops",
        ],
        website:
            "https://www.suffolkcountyny.gov/Departments/Labor/Employment-Center",
        phone: "631-853-6600",
    },
    {
        name: "Nassau County Veterans Service Agency",
        program: "Veteran Benefits & Employment Guidance",
        category: "employment",
        location: "2201 Hempstead Turnpike, Building Q, East Meadow, NY",
        description:
            "Advocacy and guidance for veterans and dependents concerning benefits, education, employment counseling, vocational rehabilitation, and VA-related referrals.",
        services: [
            "Benefits advocacy",
            "Employment counseling",
            "Veteran referrals",
        ],
        website:
            "https://www.nassaucountyny.gov/1945/Veterans-Service-Agency",
        phone: "516-572-6565",
    },
    {
        name: "NYS Domestic & Sexual Violence Hotline",
        program: "Confidential Crisis Support",
        category: "support",
        location: "New York State — Statewide",
        description:
            "Confidential assistance for individuals experiencing domestic or sexual violence, including safety planning and connections to appropriate local services.",
        services: [
            "Crisis assistance",
            "Safety planning",
            "Confidential support",
        ],
        website: "https://opdv.ny.gov/",
        phone: "800-942-6906",
        featured: true,
    },
    {
        name: "Economic Opportunity Council of Suffolk",
        program: "Community & Family Support",
        category: "support",
        location: "31 West Main Street, Patchogue, NY",
        description:
            "Community-based assistance focused on helping individuals and families achieve stability through supportive services and connections to food, housing, and other resources.",
        services: [
            "Family support",
            "Community assistance",
            "Resource navigation",
        ],
        website: "https://eoc-suffolk.com/",
        phone: "631-289-2124",
    },
];

const categories = [
    {
        id: "food" as const,
        number: "01",
        label: "Food & Essentials",
        subtitle: "Nourishment and everyday needs",
        icon: Utensils,
        description:
            "Food banks, veteran-specific pantries, mobile distributions, and access to essential supplies.",
    },
    {
        id: "employment" as const,
        number: "02",
        label: "Employment & Training",
        subtitle: "Building a path to independence",
        icon: BriefcaseBusiness,
        description:
            "Workforce development, vocational rehabilitation, career coaching, and veteran employment programs.",
    },
    {
        id: "support" as const,
        number: "03",
        label: "Women & Family Support",
        subtitle: "Compassionate community connections",
        icon: HeartHandshake,
        description:
            "Safety resources, family support, crisis assistance, and connections to community services.",
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.6 },
};

export default function ResourcesPage() {
    const [filter, setFilter] = useState<Filter>("all");
    const [search, setSearch] = useState("");

    const filteredResources = useMemo(() => {
        const query = search.trim().toLowerCase();

        return resources.filter((resource) => {
            const matchesCategory =
                filter === "all" || resource.category === filter;

            const searchableText = [
                resource.name,
                resource.program,
                resource.location,
                resource.description,
                ...resource.services,
            ]
                .join(" ")
                .toLowerCase();

            return (
                matchesCategory &&
                (!query || searchableText.includes(query))
            );
        });
    }, [filter, search]);

    const chooseCategory = (category: Filter) => {
        setFilter(category);
        document.getElementById("directory")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <main className="overflow-hidden bg-[#fffdf8] text-[#173d29]">
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#f5f6ed] pb-24 pt-[155px] sm:pt-[180px] lg:pb-32 lg:pt-[215px]">
                <div className="pointer-events-none absolute -right-32 top-20 h-[480px] w-[480px] rounded-full bg-[#dce8d3]/60 blur-[110px]" />
                <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#e9dfbd]/40 blur-[100px]" />

                <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                    >
                        <Eyebrow>Community Resource Directory</Eyebrow>

                        <h1 className="mt-7 font-serif text-[55px] leading-[0.99] tracking-[-0.045em] sm:text-[76px] lg:text-[85px] xl:text-[94px]">
                            Support for
                            <br />
                            Every Step
                            <br />
                            <span className="italic text-[#b18b46]">
                                Forward.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-[590px] text-[16px] leading-[1.85] text-[#627066] sm:text-[18px]">
                            A new beginning takes more than a place to call
                            home. Explore organizations helping individuals,
                            veterans, and families access nourishment,
                            employment opportunities, and essential support
                            throughout Long Island.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#directory"
                                className="group inline-flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#0b512f] px-8 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(11,81,47,0.16)] transition-all hover:-translate-y-1 hover:bg-[#073d23]"
                            >
                                Explore Resources
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>

                            <ReferralFormButton
                                label="Request Guidance"
                                className="!h-[58px] !min-h-0 !px-8 !py-0 !text-[15px]"
                            />
                        </div>

                        <div className="mt-10 flex flex-wrap gap-5 text-[12px] font-semibold text-[#617264]">
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-[#a88b4b]" />
                                Veteran resources
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-[#a88b4b]" />
                                Community services
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-[#a88b4b]" />
                                Practical next steps
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.85, delay: 0.12 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-[36px] bg-[#103d29] p-9 text-white shadow-[0_30px_80px_rgba(10,50,30,0.18)] sm:p-12">
                            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
                            <div className="pointer-events-none absolute -right-8 -top-10 h-56 w-56 rounded-full border border-white/10" />

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#dfc584]">
                                <Sparkles className="h-7 w-7" />
                            </div>

                            <p className="mt-12 text-[11px] font-bold uppercase tracking-[0.23em] text-[#dfc584]">
                                Our Philosophy
                            </p>

                            <h2 className="mt-5 font-serif text-[37px] leading-[1.12] sm:text-[48px]">
                                Connection
                                <br />
                                creates
                                <br />
                                <span className="italic text-[#dfc584]">
                                    possibility.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-[380px] text-[15px] leading-8 text-white/70">
                                The right support at the right time can make
                                a meaningful difference. We believe in
                                connecting people with resources that
                                strengthen stability, dignity, and hope.
                            </p>

                            <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/15 pt-8">
                                {[
                                    ["01", "Nourishment"],
                                    ["02", "Opportunity"],
                                    ["03", "Community"],
                                ].map(([number, label]) => (
                                    <div key={number}>
                                        <p className="font-serif text-[26px] text-[#dfc584]">
                                            {number}
                                        </p>
                                        <p className="mt-2 text-[10px] leading-5 text-white/65 sm:text-[12px]">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CATEGORY OVERVIEW */}
            <section className="py-24 lg:py-28">
                <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16">
                    <motion.div {...fadeUp} className="max-w-[780px]">
                        <Eyebrow>Find the Right Support</Eyebrow>
                        <h2 className="mt-5 font-serif text-[43px] leading-[1.1] tracking-[-0.035em] sm:text-[60px]">
                            Resources for
                            <span className="italic text-[#b18b46]">
                                {" "}real-life needs.
                            </span>
                        </h2>
                        <p className="mt-6 text-[16px] leading-8 text-[#657168]">
                            Explore services by category and connect directly
                            with organizations providing assistance.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-5 md:grid-cols-3">
                        {categories.map((category) => {
                            const Icon = category.icon;

                            return (
                                <motion.button
                                    key={category.id}
                                    type="button"
                                    {...fadeUp}
                                    onClick={() => chooseCategory(category.id)}
                                    className="group rounded-[28px] border border-[#e2e8dc] bg-[#f8faf5] p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#b6cbb5] hover:shadow-[0_20px_45px_rgba(16,61,41,0.07)]"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5eee1] text-[#0b512f]">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <span className="font-serif text-[35px] italic text-[#d7e2d3]">
                                            {category.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-8 font-serif text-[27px] font-semibold">
                                        {category.label}
                                    </h3>

                                    <p className="mt-2 text-[12px] font-semibold text-[#a48a51]">
                                        {category.subtitle}
                                    </p>

                                    <p className="mt-5 min-h-[90px] text-[14px] leading-7 text-[#657168]">
                                        {category.description}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-[13px] font-bold text-[#0b512f]">
                                        View Resources
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* DIRECTORY */}
            <section
                id="directory"
                className="scroll-mt-32 bg-[#f4f7f0] py-24 lg:py-32"
            >
                <div className="mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-16">
                    <motion.div {...fadeUp}>
                        <Eyebrow>Explore Our Directory</Eyebrow>
                        <h2 className="mt-5 font-serif text-[44px] leading-[1.1] tracking-[-0.035em] sm:text-[62px]">
                            Find your next
                            <span className="italic text-[#b18b46]">
                                {" "}connection.
                            </span>
                        </h2>
                        <p className="mt-5 max-w-[650px] text-[15px] leading-8 text-[#657168]">
                            Search organizations by name, service, or
                            location, or select a category below.
                        </p>
                    </motion.div>

                    <div className="mt-11 flex flex-col gap-5">
                        <div className="relative max-w-[550px]">
                            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7e9180]" />
                            <input
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search resources, services, locations..."
                                aria-label="Search community resources"
                                className="h-[58px] w-full rounded-2xl border border-[#dce6d9] bg-white pl-13 pr-12 text-[14px] text-[#173d29] outline-none transition-all placeholder:text-[#97a397] focus:border-[#7ca184] focus:ring-4 focus:ring-[#0b512f]/5"
                                style={{ paddingLeft: "52px" }}
                            />
                            {search && (
                                <button
                                    type="button"
                                    onClick={() => setSearch("")}
                                    aria-label="Clear search"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#819083] hover:text-[#0b512f]"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {[
                                { id: "all" as Filter, label: "All Resources" },
                                { id: "food" as Filter, label: "Food & Essentials" },
                                { id: "employment" as Filter, label: "Employment" },
                                { id: "support" as Filter, label: "Women & Families" },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setFilter(item.id)}
                                    aria-pressed={filter === item.id}
                                    className={`rounded-full border px-5 py-3 text-[12px] font-semibold transition-all ${filter === item.id
                                        ? "border-[#0b512f] bg-[#0b512f] text-white"
                                        : "border-[#dbe5d7] bg-white text-[#526358] hover:border-[#8aaa91] hover:text-[#0b512f]"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                        <p className="text-[13px] text-[#718075]">
                            Showing{" "}
                            <span className="font-bold text-[#0b512f]">
                                {filteredResources.length}
                            </span>{" "}
                            {filteredResources.length === 1
                                ? "resource"
                                : "resources"}
                        </p>
                    </div>

                    {filteredResources.length > 0 ? (
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {filteredResources.map((resource) => (
                                <ResourceCard
                                    key={resource.name}
                                    resource={resource}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-6 rounded-[28px] border border-[#e2e8dc] bg-white px-8 py-20 text-center">
                            <Search className="mx-auto h-9 w-9 text-[#a5b5a2]" />
                            <h3 className="mt-5 font-serif text-[28px]">
                                No matching resources
                            </h3>
                            <p className="mt-3 text-[14px] text-[#718075]">
                                Try a different search or category.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearch("");
                                    setFilter("all");
                                }}
                                className="mt-6 rounded-full bg-[#0b512f] px-6 py-3 text-[13px] font-semibold text-white"
                            >
                                Show All Resources
                            </button>
                        </div>
                    )}

                    <p className="mt-9 text-[12px] leading-6 text-[#7c897e]">
                        This directory is provided for general information.
                        Services, program eligibility, locations, schedules,
                        and availability may change. Please contact each
                        organization directly before visiting or applying.
                        Listing an organization does not imply a formal
                        partnership or guaranteed referral.
                    </p>
                </div>
            </section>

            {/* SAFETY RESOURCE */}
            <section className="py-20 lg:py-24">
                <div className="mx-auto max-w-[1250px] px-6 sm:px-10 lg:px-16">
                    <div className="grid items-center gap-8 rounded-[30px] border border-[#e8e6d7] bg-[#fbf8ee] p-8 sm:p-11 lg:grid-cols-[1fr_auto]">
                        <div className="flex items-start gap-5">
                            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#f0e8d3] p-3 text-[#9a7939]">
                                <ShieldCheck className="h-7 w-7" />
                            </div>

                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9a7939]">
                                    Safety & Crisis Assistance
                                </p>
                                <h3 className="mt-3 font-serif text-[29px] leading-tight">
                                    Help is available when safety cannot wait.
                                </h3>
                                <p className="mt-4 max-w-[720px] text-[14px] leading-8 text-[#687268]">
                                    If you or someone you know is experiencing
                                    domestic violence, the New York State
                                    Domestic & Sexual Violence Hotline provides
                                    confidential assistance. Call 800-942-6906
                                    or visit the state's official website.
                                    If you are in immediate danger, call 911.
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://opdv.ny.gov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#103d29] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-[#0b512f]"
                        >
                            Get Support
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden bg-[#103d29] py-24 text-white lg:py-32">
                <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#5b8b63]/15 blur-[90px]" />

                <motion.div
                    {...fadeUp}
                    className="relative mx-auto max-w-[900px] px-6 text-center"
                >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                        <Leaf className="h-8 w-8 text-[#dfc584]" />
                    </div>

                    <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.24em] text-[#dfc584]">
                        Eben-Ezer House of Hope
                    </p>

                    <h2 className="mt-6 font-serif text-[45px] leading-[1.1] tracking-[-0.035em] sm:text-[67px]">
                        You don't have to
                        <br />
                        navigate the journey
                        <br />
                        <span className="italic text-[#dfc584]">
                            alone.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[630px] text-[16px] leading-8 text-white/70">
                        Whether you're seeking a stable living environment,
                        supporting a loved one, or making a professional
                        referral, the first step is simply reaching out.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <ReferralFormButton
                            label="Connect With Our Team"
                            className="!h-[60px] !min-h-0 !bg-[#dfc584] !px-9 !py-0 !text-[15px] !text-[#103d29] hover:!bg-[#eed7a4]"
                        />
                    </div>
                </motion.div>
            </section>
        </main>
    );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#b8954f]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#52745a]">
                {children}
            </span>
        </div>
    );
}

function ResourceCard({ resource }: { resource: Resource }) {
    const category = categories.find(
        (item) => item.id === resource.category
    );

    const Icon = category?.icon ?? Users;

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="group flex h-full flex-col rounded-[28px] border border-[#e0e8dc] bg-white p-7 shadow-[0_8px_30px_rgba(16,61,41,0.025)] transition-shadow duration-300 hover:shadow-[0_22px_55px_rgba(16,61,41,0.08)] sm:p-9"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex h-13 w-13 h-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#e8f0e4] text-[#0b512f]">
                    <Icon className="h-6 w-6" />
                </div>

                {resource.featured && (
                    <span className="rounded-full bg-[#f4edda] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#96783a]">
                        Featured Resource
                    </span>
                )}
            </div>

            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.14em] text-[#a18a54]">
                {category?.label}
            </p>

            <h3 className="mt-3 font-serif text-[27px] font-semibold leading-[1.2] text-[#173d29] sm:text-[30px]">
                {resource.name}
            </h3>

            <p className="mt-2 text-[13px] font-semibold text-[#53735a]">
                {resource.program}
            </p>

            <p className="mt-5 flex items-start gap-2 text-[12px] leading-6 text-[#7a877c]">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#a78c50]" />
                {resource.location}
            </p>

            <p className="mt-5 flex-1 text-[14px] leading-8 text-[#647166]">
                {resource.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
                {resource.services.map((service) => (
                    <span
                        key={service}
                        className="rounded-full border border-[#e1e9dd] bg-[#f7faf5] px-3 py-2 text-[11px] font-medium text-[#55715c]"
                    >
                        {service}
                    </span>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e8ede5] pt-6">
                <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0b512f] transition-colors hover:text-[#a18445]"
                >
                    Visit Website
                    <ArrowUpRight className="h-4 w-4" />
                </a>

                {resource.phone && (
                    <a
                        href={`tel:${resource.phone.replace(/\D/g, "")}`}
                        className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#637568] hover:text-[#0b512f]"
                    >
                        <Phone className="h-4 w-4" />
                        {resource.phone}
                    </a>
                )}
            </div>
        </motion.article>
    );
}
