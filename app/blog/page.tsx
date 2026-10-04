import Link from "next/link";
import Image from "next/image";
import BlogSearch from "../components/BlogSearch";
import {
    ArrowRight,
    BookOpen,
    Clock3,
    Sparkles,
} from "lucide-react";

interface Post {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    readTime: string;
    slug: string;
}

const SITE_URL =
    process.env.SITE_URL ||
    "https://transcending-yzat.vercel.app";

/* =========================================================
   IMAGE URL
========================================================= */

const normalizeImageUrl = (url: string): string => {
    if (!url) {
        return "/images/blog-placeholder.jpg";
    }

    if (
        url.startsWith("http://") ||
        url.startsWith("https://")
    ) {
        return url;
    }

    if (url.startsWith("/")) {
        return url;
    }

    return `/${url}`;
};

/* =========================================================
   DATE
========================================================= */

function formatDate(date: string) {
    if (!date) return "";

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) {
        return "";
    }

    return parsed.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

/* =========================================================
   GET PUBLISHED POSTS
========================================================= */

async function getPosts(): Promise<Post[]> {
    try {
        const response = await fetch(
            `${SITE_URL}/api/get-posts`,
            {
                cache: "no-store",
            }
        );

        if (!response.ok) {
            console.error(
                "Failed to fetch Transcending Psychiatry posts:",
                response.status
            );

            return [];
        }

        const data = await response.json();

        if (
            !data.success ||
            !Array.isArray(data.posts)
        ) {
            console.error(
                "Invalid Transcending Psychiatry posts response:",
                data
            );

            return [];
        }

        return [...data.posts].sort(
            (a: Post, b: Post) =>
                new Date(b.date).getTime() -
                new Date(a.date).getTime()
        );
    } catch (error) {
        console.error(
            "Error fetching Transcending Psychiatry posts:",
            error
        );

        return [];
    }
}

/* =========================================================
   BLOG PAGE
========================================================= */

export default async function Blog() {
    const posts = await getPosts();

    const featuredPost = posts[0] ?? null;
    const regularPosts = posts.slice(1);

    return (
        <div className="min-h-screen overflow-hidden bg-[#fffaf6]">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative overflow-hidden px-5 pb-16 pt-40 sm:px-8 lg:pb-24 lg:pt-48">

                {/* Background atmosphere */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#ff7426]/[0.07] blur-3xl" />

                    <div className="absolute -right-40 top-24 h-[500px] w-[500px] rounded-full bg-[#ffb98f]/[0.13] blur-3xl" />

                    <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff7426]/20 to-transparent" />
                </div>

                <div className="relative mx-auto max-w-[1400px]">

                    <div className="mx-auto max-w-4xl text-center">

                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#ffd8c1] bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
                            <Sparkles className="h-4 w-4 text-[#ff7426]" />

                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d95c19]">
                                Insights & Resources
                            </span>
                        </div>

                        <h1 className="text-[46px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#25211e] sm:text-6xl lg:text-[82px]">
                            Thoughts for a
                            <span className="block text-[#ff7426]">
                                healthier mind.
                            </span>
                        </h1>

                        <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-8 text-[#716862] sm:text-lg">
                            Thoughtful guidance on mental health,
                            emotional wellness, treatment, and the
                            everyday journey toward feeling more like
                            yourself.
                        </p>

                        {/* SEARCH */}
                        <div className="mx-auto mt-9 max-w-2xl">
                            <BlogSearch posts={posts} />
                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <main className="relative mx-auto max-w-[1400px] px-5 pb-28 sm:px-8 lg:px-10">

                {posts.length === 0 ? (

                    /* =================================================
                       EMPTY STATE
                    ================================================= */

                    <section className="mx-auto max-w-3xl py-16">
                        <div className="relative overflow-hidden rounded-[36px] border border-[#eee2da] bg-white px-7 py-16 text-center shadow-[0_25px_80px_rgba(65,45,30,0.08)] sm:px-12">

                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ff7426]/10 blur-3xl" />

                            <div className="relative">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff0e6] text-[#ff7426]">
                                    <BookOpen className="h-7 w-7" />
                                </div>

                                <h2 className="mt-7 text-3xl font-semibold tracking-tight text-[#25211e]">
                                    New insights are on the way.
                                </h2>

                                <p className="mx-auto mt-4 max-w-xl leading-7 text-[#77706b]">
                                    We're preparing thoughtful mental
                                    health resources and articles from
                                    Transcending Psychiatry. Check back
                                    soon.
                                </p>
                            </div>
                        </div>
                    </section>

                ) : (
                    <>

                        {/* =================================================
                            FEATURED ARTICLE
                        ================================================= */}

                        {featuredPost && (
                            <section className="mb-24">

                                <div className="mb-7 flex items-end justify-between">
                                    <div>
                                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#e86620]">
                                            Featured Story
                                        </p>

                                        <h2 className="text-2xl font-semibold tracking-tight text-[#28231f] sm:text-3xl">
                                            From the journal
                                        </h2>
                                    </div>

                                    <div className="hidden h-px flex-1 bg-[#e8ddd6] sm:ml-10 sm:block" />
                                </div>

                                <Link
                                    href={`/blog/${featuredPost.slug ||
                                        featuredPost.id
                                        }`}
                                    className="group block"
                                >
                                    <article className="relative grid overflow-hidden rounded-[34px] border border-[#eadfd8] bg-white shadow-[0_28px_90px_rgba(57,39,28,0.10)] lg:grid-cols-[1.15fr_0.85fr]">

                                        {/* IMAGE */}

                                        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[470px] lg:min-h-[620px]">

                                            <Image
                                                src={normalizeImageUrl(
                                                    featuredPost.image
                                                )}
                                                alt={featuredPost.title}
                                                fill
                                                priority
                                                sizes="(max-width: 1024px) 100vw, 58vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/[0.04]" />

                                            <div className="absolute left-6 top-6 rounded-full border border-white/40 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e75f18] shadow-lg backdrop-blur-xl">
                                                Featured
                                            </div>
                                        </div>

                                        {/* CONTENT */}

                                        <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-14 xl:p-16">

                                            <div className="absolute right-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-[#ff7426]/[0.07] blur-3xl" />

                                            <div className="relative">

                                                <div className="mb-6 flex flex-wrap items-center gap-4 text-[12px] font-medium text-[#8a817b]">

                                                    <span>
                                                        {formatDate(
                                                            featuredPost.date
                                                        )}
                                                    </span>

                                                    <span className="h-1 w-1 rounded-full bg-[#ff7426]" />

                                                    <span className="flex items-center gap-1.5">
                                                        <Clock3 className="h-3.5 w-3.5" />
                                                        {featuredPost.readTime ||
                                                            "5 min"}{" "}
                                                        read
                                                    </span>
                                                </div>

                                                <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#25211e] transition-colors group-hover:text-[#e85f18] sm:text-4xl xl:text-[52px]">
                                                    {featuredPost.title}
                                                </h2>

                                                <p className="mt-6 line-clamp-4 text-[16px] leading-8 text-[#746c66]">
                                                    {featuredPost.excerpt}
                                                </p>

                                                <div className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ff7426] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,116,38,0.25)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#e85f18]">
                                                    Read the article

                                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </div>

                                            </div>
                                        </div>

                                    </article>
                                </Link>
                            </section>
                        )}

                        {/* =================================================
                            ARTICLE GRID
                        ================================================= */}

                        {regularPosts.length > 0 && (
                            <section>

                                <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                                    <div>
                                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#e86620]">
                                            Explore More
                                        </p>

                                        <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#25211e] sm:text-4xl">
                                            Latest insights
                                        </h2>
                                    </div>

                                    <p className="max-w-md text-sm leading-6 text-[#837a74]">
                                        Practical perspectives on
                                        emotional wellness, psychiatric
                                        care, and healthier living.
                                    </p>

                                </div>

                                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

                                    {regularPosts.map((post) => (
                                        <Link
                                            href={`/blog/${post.slug ||
                                                post.id
                                                }`}
                                            key={post.id}
                                            className="group"
                                        >
                                            <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[#eadfd8] bg-white shadow-[0_14px_45px_rgba(56,39,29,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(56,39,29,0.12)]">

                                                {/* IMAGE */}

                                                <div className="relative h-[260px] overflow-hidden bg-[#f3ede9]">

                                                    <Image
                                                        src={normalizeImageUrl(
                                                            post.image
                                                        )}
                                                        alt={post.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />

                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />

                                                    <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e75f18] shadow-md backdrop-blur-xl">
                                                        Wellness
                                                    </div>

                                                </div>

                                                {/* CONTENT */}

                                                <div className="flex flex-1 flex-col p-7">

                                                    <div className="mb-4 flex items-center gap-3 text-[11px] font-medium text-[#938a84]">

                                                        <span>
                                                            {formatDate(
                                                                post.date
                                                            )}
                                                        </span>

                                                        <span className="h-1 w-1 rounded-full bg-[#ff7426]" />

                                                        <span>
                                                            {post.readTime ||
                                                                "5 min"}{" "}
                                                            read
                                                        </span>

                                                    </div>

                                                    <h3 className="text-[23px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#28231f] transition-colors duration-300 group-hover:text-[#e85f18]">
                                                        {post.title}
                                                    </h3>

                                                    <p className="mt-4 line-clamp-3 flex-1 text-[14px] leading-7 text-[#776f69]">
                                                        {post.excerpt}
                                                    </p>

                                                    <div className="mt-7 flex items-center gap-2 text-[13px] font-bold text-[#e85f18]">
                                                        Read article

                                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                                    </div>

                                                </div>

                                            </article>
                                        </Link>
                                    ))}

                                </div>

                            </section>
                        )}

                        {/* =================================================
                            BOTTOM CTA
                        ================================================= */}

                        <section className="relative mt-24 overflow-hidden rounded-[36px] bg-[#28211d] px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-16">

                            <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#ff7426]/25 blur-[90px]" />

                            <div className="absolute -bottom-48 left-1/4 h-[360px] w-[360px] rounded-full bg-[#ff9b58]/10 blur-[80px]" />

                            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                                <div className="max-w-2xl">
                                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff9b62]">
                                        Transcending Psychiatry
                                    </p>

                                    <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                                        You don't have to navigate
                                        mental health alone.
                                    </h2>

                                    <p className="mt-5 max-w-xl leading-7 text-white/65">
                                        Personalized psychiatric care
                                        designed around your individual
                                        needs, goals, and journey.
                                    </p>
                                </div>

                                <Link
                                    href="/#contact"
                                    className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#ff7426] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(255,116,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1641e] lg:self-auto"
                                >
                                    Get Started
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                            </div>
                        </section>

                    </>
                )}

            </main>
        </div>
    );
}