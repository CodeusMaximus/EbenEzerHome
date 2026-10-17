import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpen, Clock3, Feather } from "lucide-react";

interface Post {
  id?: string;
  slug?: string;
  title: string;
  excerpt?: string;
  content?: string;
  date?: string;
  image?: string;
  readTime?: string;
}

const BASE_URL = (process.env.SITE_URL || "https://ebenezerhouseofhope.com").replace(/\/$/, "");

type Props = { params: Promise<{ id: string }> };

async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/get-posts?slug=${encodeURIComponent(slug)}`, { cache: "no-store" });
    if (!response.ok) return null;
    const data = await response.json();
    return data?.success && Array.isArray(data.posts) ? (data.posts[0] ?? null) : null;
  } catch (error) {
    console.error("Unable to load Eben-Ezer article:", error);
    return null;
  }
}

function formatDate(date?: string) {
  if (!date) return "";
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) return { title: "Article Not Found", robots: { index: false } };
  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} in The Hope Journal.`,
    alternates: { canonical: `/blog/${encodeURIComponent(post.slug || id)}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${encodeURIComponent(post.slug || id)}`,
      ...(post.image ? { images: [{ url: post.image.startsWith("http") || post.image.startsWith("/") ? post.image : `/${post.image}` }] } : {}),
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();
  const imageSrc = post.image && (post.image.startsWith("http") || post.image.startsWith("/") ? post.image : `/${post.image}`);

  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#173d29]">
      <header className="relative overflow-hidden bg-[#f1f5ec] px-6 pb-16 pt-40 sm:px-10 lg:pt-48">
        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#dce9d4] blur-[90px]" />
        <div className="relative mx-auto max-w-5xl">
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-full text-sm font-bold text-[#0b512f] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#b8954f]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to The Hope Journal
          </Link>
          <p className="mt-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a18445]"><Feather className="h-4 w-4" aria-hidden="true" /> The Hope Journal</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.08] tracking-[-0.035em] sm:text-6xl lg:text-[76px]">{post.title}</h1>
          {post.excerpt && <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5e7061]">{post.excerpt}</p>}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#607366]">
            {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
            {post.readTime && <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" aria-hidden="true" />{post.readTime} read</span>}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        {imageSrc ? (
          <div className="relative -mt-1 mb-14 aspect-[16/9] overflow-hidden rounded-b-[30px] bg-[#e7eee3] shadow-[0_20px_65px_rgba(16,61,41,0.09)] sm:mt-12 sm:rounded-[30px]">
            <Image src={imageSrc} alt={post.title} fill priority sizes="(max-width: 1200px) 100vw, 1152px" className="object-cover" />
          </div>
        ) : <div className="py-8" />}

        <article className="mx-auto max-w-3xl text-[17px] leading-[1.95] text-[#405a49] [&_a]:font-semibold [&_a]:text-[#0b512f] [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:my-8 [&_blockquote]:rounded-r-xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#b8954f] [&_blockquote]:bg-[#f2f5ec] [&_blockquote]:px-6 [&_blockquote]:py-5 [&_blockquote]:italic [&_h1]:mb-5 [&_h1]:mt-10 [&_h1]:font-serif [&_h1]:text-4xl [&_h1]:text-[#103d29] [&_h2]:mb-5 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-[#103d29] [&_h3]:mb-4 [&_h3]:mt-9 [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:text-[#103d29] [&_li]:mb-2 [&_ol]:mb-7 [&_ol]:list-decimal [&_ol]:pl-7 [&_p]:mb-7 [&_strong]:text-[#103d29] [&_ul]:mb-7 [&_ul]:list-disc [&_ul]:pl-7">
          <ReactMarkdown>{post.content || post.excerpt || ""}</ReactMarkdown>
        </article>

        <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-5 border-t border-[#dce5d8] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><BookOpen className="h-6 w-6 text-[#b8954f]" aria-hidden="true" /><span className="font-serif text-2xl">Keep exploring hope.</span></div>
          <Link href="/blog" className="inline-flex items-center gap-2 self-start rounded-full bg-[#0b512f] px-6 py-3 text-sm font-bold text-white hover:bg-[#073d23] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#b8954f]">All Articles <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </main>
    </div>
  );
}
