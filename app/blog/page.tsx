import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Clock3, Feather, HeartHandshake, MapPin } from "lucide-react";

interface Post {
  id?: string;
  _id?: string;
  slug?: string;
  title: string;
  excerpt?: string;
  date?: string;
  image?: string;
  readTime?: string;
}

const BASE_URL = process.env.SITE_URL || "https://ebenezerhouseofhope.com";

export const metadata: Metadata = {
  title: "The Hope Journal | Recovery, Community & New Beginnings",
  description: "Stories and practical resources about recovery, supportive housing, community, resilience, and new beginnings from Eben-Ezer House of Hope.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Hope Journal | Eben-Ezer House of Hope",
    description: "Encouragement, practical resources, and perspectives on rebuilding with hope.",
    url: "/blog",
    type: "website",
  },
};

async function getPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${BASE_URL.replace(/\/$/, "")}/api/get-posts`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("Eben-Ezer blog API error:", response.status);
      return [];
    }
    const data = await response.json();
    if (!data?.success || !Array.isArray(data.posts)) return [];
    return (data.posts as Post[]).sort(
      (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
    );
  } catch (error) {
    console.error("Unable to load Eben-Ezer posts:", error);
    return [];
  }
}

function postHref(post: Post) {
  return `/blog/${encodeURIComponent(post.slug || post.id || post._id || "")}`;
}

function formatDate(date?: string) {
  if (!date) return "";
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
}

function Cover({ post, priority = false }: { post: Post; priority?: boolean }) {
  if (!post.image) {
    return (
      <div className="flex h-full min-h-[250px] w-full items-center justify-center bg-gradient-to-br from-[#1a5a39] via-[#103d29] to-[#082d1d]">
        <div className="text-center text-[#e8d4a0]">
          <Feather className="mx-auto h-12 w-12" aria-hidden="true" />
          <span className="mt-5 block font-serif text-3xl italic">The Hope Journal</span>
        </div>
      </div>
    );
  }
  const src = /^(https?:\/\/|\/)/.test(post.image) ? post.image : `/${post.image}`;
  return (
    <Image
      src={src}
      alt={post.title}
      fill
      priority={priority}
      sizes={priority ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
    />
  );
}

export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts[0];
  const others = posts.slice(1);

  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#173d29]">
      <section className="relative overflow-hidden bg-[#f1f5ec] px-6 pb-24 pt-40 sm:px-10 lg:pt-48">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#dce9d4] blur-[90px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#e9e0c4]/70 blur-[85px]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#d7e3d1] bg-white/80 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#446d4e]">
            <Feather className="h-4 w-4 text-[#b28e4b]" aria-hidden="true" />
            Stories • Guidance • Community
          </div>
          <h1 className="mt-8 font-serif text-6xl leading-[1.04] tracking-[-0.04em] sm:text-7xl lg:text-[96px]">
            The Hope <span className="italic text-[#b28e4b]">Journal.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#5d7061] sm:text-lg">
            Reflections, practical resources, and meaningful conversations about recovery,
            belonging, and building a brighter tomorrow.
          </p>
          <div className="mx-auto mt-9 flex max-w-xl flex-wrap items-center justify-center gap-3 text-sm text-[#52745a]">
            <span className="rounded-full border border-[#cfdcca] bg-white px-4 py-2">Recovery & resilience</span>
            <span className="rounded-full border border-[#cfdcca] bg-white px-4 py-2">Community support</span>
            <span className="rounded-full border border-[#cfdcca] bg-white px-4 py-2">New beginnings</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1350px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        {posts.length === 0 ? (
          <section className="mx-auto max-w-3xl rounded-[32px] border border-[#e0e8dc] bg-white px-8 py-16 text-center shadow-[0_20px_65px_rgba(16,61,41,0.06)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e9f1e6] text-[#0b512f]">
              <BookOpen className="h-8 w-8" aria-hidden="true" />
            </div>
            <h2 className="mt-7 font-serif text-4xl">Every story begins somewhere.</h2>
            <p className="mx-auto mt-5 max-w-lg leading-8 text-[#627365]">
              Our journal is taking shape. Soon, we’ll share articles on recovery,
              supportive living, community resources, and finding hope in new beginnings.
            </p>
            <Link href="/resources" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b512f] px-7 py-4 font-semibold text-white hover:bg-[#073d23] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#b8954f]">
              Explore Resources <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        ) : (
          <>
            {featured && (
              <section aria-labelledby="featured-heading">
                <div className="mb-8 flex items-end gap-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a18445]">Editor's Selection</p>
                    <h2 id="featured-heading" className="mt-2 font-serif text-4xl">Featured story</h2>
                  </div>
                  <div className="mb-2 hidden h-px flex-1 bg-[#dce5d8] sm:block" />
                </div>
                <Link href={postHref(featured)} className="group block rounded-[32px] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#b8954f]">
                  <article className="grid overflow-hidden rounded-[32px] border border-[#dce5d8] bg-white shadow-[0_22px_70px_rgba(16,61,41,0.09)] lg:grid-cols-[1.12fr_0.88fr]">
                    <div className="relative min-h-[310px] overflow-hidden sm:min-h-[440px] lg:min-h-[540px]">
                      <Cover post={featured} priority />
                      <span className="absolute left-6 top-6 rounded-full bg-[#fffdf8]/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0b512f]">Featured</span>
                    </div>
                    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#657568]">
                        <span>{formatDate(featured.date)}</span>
                        {featured.readTime && <><span aria-hidden="true">•</span><span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4" aria-hidden="true" />{featured.readTime} read</span></>}
                      </div>
                      <h3 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] transition-colors group-hover:text-[#92713a] xl:text-5xl">{featured.title}</h3>
                      <p className="mt-6 line-clamp-4 text-base leading-8 text-[#627365]">{featured.excerpt}</p>
                      <span className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#0b512f] px-6 py-3.5 text-sm font-semibold text-white">
                        Read the story <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </article>
                </Link>
              </section>
            )}

            {others.length > 0 && (
              <section className="mt-24" aria-labelledby="more-stories-heading">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a18445]">From the Journal</p>
                <h2 id="more-stories-heading" className="mt-2 font-serif text-4xl sm:text-5xl">More stories to explore</h2>
                <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {others.map((post, index) => (
                    <Link key={post.id || post._id || post.slug || index} href={postHref(post)} className="group rounded-[27px] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#b8954f]">
                      <article className="flex h-full flex-col overflow-hidden rounded-[27px] border border-[#e0e8dc] bg-white shadow-[0_12px_40px_rgba(16,61,41,0.05)] transition-shadow hover:shadow-[0_20px_55px_rgba(16,61,41,0.11)]">
                        <div className="relative h-[245px] overflow-hidden"><Cover post={post} /></div>
                        <div className="flex flex-1 flex-col p-7">
                          <div className="flex flex-wrap gap-3 text-xs text-[#657568]"><span>{formatDate(post.date)}</span>{post.readTime && <span>{post.readTime} read</span>}</div>
                          <h3 className="mt-4 font-serif text-[27px] leading-snug transition-colors group-hover:text-[#92713a]">{post.title}</h3>
                          <p className="mt-4 line-clamp-3 flex-1 text-sm leading-7 text-[#627365]">{post.excerpt}</p>
                          <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0b512f]">Read article <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        <section className="relative mt-24 overflow-hidden rounded-[32px] bg-[#103d29] px-8 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dfc584]"><HeartHandshake className="h-4 w-4" aria-hidden="true" /> Eben-Ezer House of Hope</div>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">A place to belong. <span className="italic text-[#dfc584]">A future to build.</span></h2>
              <p className="mt-5 leading-8 text-white/75">Learn about our vision for supportive recovery housing on Long Island and how to stay connected as our home takes shape.</p>
            </div>
            <Link href="/location" className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#dfc584] px-7 py-4 text-sm font-bold text-[#103d29] hover:bg-[#efd9a7] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Our Future Location <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
