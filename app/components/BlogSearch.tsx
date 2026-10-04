"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Search,
    X,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";

interface Post {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    readTime: string;
    slug?: string;
}

export default function BlogSearch({
    posts,
}: {
    posts: Post[];
}) {
    const [searchTerm, setSearchTerm] = useState("");

    const query = searchTerm.trim().toLowerCase();

    const filtered = query
        ? posts.filter(
            (post) =>
                post.title
                    ?.toLowerCase()
                    .includes(query) ||
                post.excerpt
                    ?.toLowerCase()
                    .includes(query)
        )
        : [];

    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <div className="relative mx-auto w-full max-w-2xl">

            {/* =====================================================
                SEARCH FIELD
            ===================================================== */}

            <form
                onSubmit={(e) => e.preventDefault()}
                className="relative"
            >
                <div
                    className="
                        group
                        relative
                        flex
                        min-h-[64px]
                        items-center
                        overflow-hidden
                        rounded-full
                        border
                        border-[#e7ddd6]
                        bg-white/90
                        shadow-[0_14px_45px_rgba(63,43,30,0.07)]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        focus-within:border-[#ffb487]
                        focus-within:shadow-[0_18px_55px_rgba(255,116,38,0.13)]
                    "
                >
                    {/* Search Icon */}

                    <div className="ml-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff3eb] text-[#ff7426] transition-colors duration-300 group-focus-within:bg-[#ff7426] group-focus-within:text-white">
                        <Search className="h-[19px] w-[19px]" />
                    </div>

                    {/* Input */}

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                        placeholder="Search mental health articles..."
                        aria-label="Search articles"
                        className="
                            min-w-0
                            flex-1
                            bg-transparent
                            px-4
                            py-5
                            text-[15px]
                            font-medium
                            text-[#28231f]
                            outline-none
                            placeholder:font-normal
                            placeholder:text-[#a39a94]
                            sm:text-[16px]
                        "
                    />

                    {/* Clear */}

                    {searchTerm && (
                        <button
                            type="button"
                            onClick={clearSearch}
                            aria-label="Clear search"
                            className="
                                mr-3
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                text-[#948b85]
                                transition-all
                                duration-200
                                hover:bg-[#fff1e8]
                                hover:text-[#e85f18]
                            "
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>
            </form>

            {/* =====================================================
                SEARCH RESULTS
            ===================================================== */}

            {searchTerm.trim() && (
                <div
                    className="
                        absolute
                        left-0
                        right-0
                        top-[76px]
                        z-40
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-[#e9dfd8]
                        bg-white/95
                        p-3
                        text-left
                        shadow-[0_30px_80px_rgba(48,34,24,0.16)]
                        backdrop-blur-2xl
                    "
                >
                    {/* Header */}

                    <div className="flex items-center justify-between px-4 pb-3 pt-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-3.5 w-3.5 text-[#ff7426]" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d95c19]">
                                Search Results
                            </span>
                        </div>

                        {filtered.length > 0 && (
                            <span className="text-[11px] text-[#9a918b]">
                                {filtered.length}{" "}
                                {filtered.length === 1
                                    ? "article"
                                    : "articles"}
                            </span>
                        )}
                    </div>

                    {/* No Results */}

                    {filtered.length === 0 ? (
                        <div className="rounded-[20px] bg-[#fff8f3] px-6 py-8 text-center">
                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#ff7426] shadow-sm">
                                <Search className="h-5 w-5" />
                            </div>

                            <p className="mt-4 font-semibold text-[#302a26]">
                                No articles found
                            </p>

                            <p className="mt-1 text-sm text-[#8b827c]">
                                Try another search for &ldquo;
                                {searchTerm}&rdquo;
                            </p>
                        </div>
                    ) : (
                        /* Results */

                        <div className="max-h-[430px] space-y-1 overflow-y-auto">
                            {filtered.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug || post.id
                                        }`}
                                    onClick={clearSearch}
                                    className="
                                        group/result
                                        flex
                                        items-center
                                        justify-between
                                        gap-5
                                        rounded-[18px]
                                        px-4
                                        py-4
                                        transition-all
                                        duration-200
                                        hover:bg-[#fff5ee]
                                    "
                                >
                                    <div className="min-w-0">

                                        <h3
                                            className="
                                                line-clamp-1
                                                text-[15px]
                                                font-semibold
                                                text-[#2d2824]
                                                transition-colors
                                                group-hover/result:text-[#e85f18]
                                            "
                                        >
                                            {post.title}
                                        </h3>

                                        <p className="mt-1 line-clamp-1 text-[12px] leading-5 text-[#8b827c]">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-2 flex items-center gap-2 text-[10px] font-medium text-[#a09690]">
                                            {post.readTime && (
                                                <span>
                                                    {post.readTime} read
                                                </span>
                                            )}
                                        </div>

                                    </div>

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#eee3dc]
                                            bg-white
                                            text-[#ff7426]
                                            transition-all
                                            duration-300
                                            group-hover/result:border-[#ff7426]
                                            group-hover/result:bg-[#ff7426]
                                            group-hover/result:text-white
                                        "
                                    >
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}