"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useClerk, useUser } from "@clerk/nextjs";
import CreatePost from "../components/createpost";

import {
  BarChart3,
  FileText,
  Settings,
  LogOut,
  PlusCircle,
  Search,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Menu,
  X,
  ExternalLink,
  LayoutDashboard,
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  status: "draft" | "published" | "scheduled";
  createdAt: string;
  publishedAt?: string | null;
  views?: number;
  author: string;
}

type Tab = "overview" | "posts" | "analytics" | "settings";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [loading, setLoading] = useState(true);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /*
   * -------------------------------------------------------
   * FETCH POSTS
   * -------------------------------------------------------
   */

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/get-posts?admin=true", {
        cache: "no-store",
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setPosts(data.posts || []);
      } else {
        console.error("Failed to fetch posts:", data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchPosts();
    }

    if (isLoaded && !isSignedIn) {
      setLoading(false);
    }
  }, [isLoaded, isSignedIn]);

  /*
   * -------------------------------------------------------
   * SIGN OUT
   * -------------------------------------------------------
   */

  const handleSignOut = async () => {
    await signOut({
      redirectUrl: "/",
    });
  };

  /*
   * -------------------------------------------------------
   * PUBLISH
   * -------------------------------------------------------
   */

  const handlePublishPost = async (postId: string) => {
    try {
      const response = await fetch(
        `/api/dashpost?postId=${postId}&action=publish`,
        {
          method: "PUT",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to publish post");
        return;
      }

      setPosts((currentPosts) =>
        currentPosts.map((post) =>
          post.id === postId
            ? {
              ...post,
              status: "published",
              publishedAt: new Date().toISOString(),
            }
            : post
        )
      );
    } catch (error) {
      console.error("Error publishing post:", error);
      alert("An error occurred while publishing the post");
    }
  };

  /*
   * -------------------------------------------------------
   * UNPUBLISH
   * -------------------------------------------------------
   */

  const handleUnpublishPost = async (postId: string) => {
    try {
      const response = await fetch(
        `/api/dashpost?postId=${postId}&action=unpublish`,
        {
          method: "PUT",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to unpublish post");
        return;
      }

      setPosts((currentPosts) =>
        currentPosts.map((post) =>
          post.id === postId
            ? {
              ...post,
              status: "draft",
              publishedAt: null,
            }
            : post
        )
      );
    } catch (error) {
      console.error("Error unpublishing post:", error);
      alert("An error occurred while unpublishing the post");
    }
  };

  /*
   * -------------------------------------------------------
   * DELETE
   * -------------------------------------------------------
   */

  const handleDeletePost = async (postId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/dashpost?postId=${postId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to delete post");
        return;
      }

      setPosts((currentPosts) =>
        currentPosts.filter((post) => post.id !== postId)
      );
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("An error occurred while deleting the post");
    }
  };

  /*
   * -------------------------------------------------------
   * DERIVED DATA
   * -------------------------------------------------------
   */

  const publishedPosts = posts.filter(
    (post) => post.status === "published"
  );

  const draftPosts = posts.filter(
    (post) => post.status === "draft"
  );

  const totalViews = posts.reduce(
    (total, post) => total + (post.views || 0),
    0
  );

  const filteredPosts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) return posts;

    return posts.filter((post) =>
      post.title.toLowerCase().includes(search)
    );
  }, [posts, searchTerm]);

  /*
   * -------------------------------------------------------
   * LOADING
   * -------------------------------------------------------
   */

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#faf9f7]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-11 w-11 animate-spin rounded-full border-4 border-[#eee7e1] border-t-[#ff7426]" />

          <p className="text-sm font-medium text-[#777]">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  /*
   * proxy.ts should normally prevent this state,
   * but this gives us a safe fallback.
   */

  if (!isSignedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#faf9f7] px-6">
        <div className="max-w-md text-center">
          <h1 className="mb-3 text-3xl font-semibold text-[#242424]">
            Authentication required
          </h1>

          <p className="text-[#777]">
            Please sign in through the website administrator login.
          </p>
        </div>
      </div>
    );
  }

  /*
   * -------------------------------------------------------
   * NAVIGATION
   * -------------------------------------------------------
   */

  const navigation = [
    {
      id: "overview" as Tab,
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      id: "posts" as Tab,
      label: "Blog Posts",
      icon: FileText,
    },
    {
      id: "analytics" as Tab,
      label: "Analytics",
      icon: BarChart3,
    },
    {
      id: "settings" as Tab,
      label: "Settings",
      icon: Settings,
    },
  ];

  const pageTitle = {
    overview: "Dashboard Overview",
    posts: "Blog Posts",
    analytics: "Analytics",
    settings: "Settings",
  }[activeTab];

  /*
   * -------------------------------------------------------
   * SIDEBAR
   * -------------------------------------------------------
   */

  const SidebarContent = () => (
    <>
      <div className="border-b border-[#eee9e5] px-6 py-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff7426] text-lg font-bold text-white shadow-sm">
            T
          </div>

          <div>
            <p className="text-[15px] font-bold leading-tight text-[#242424]">
              Transcending
            </p>

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a8f87]">
              Psychiatry
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa09a]">
          Website
        </p>

        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`
                                    flex
                                    w-full
                                    items-center
                                    gap-3
                                    rounded-xl
                                    px-3
                                    py-3
                                    text-left
                                    text-sm
                                    font-semibold
                                    transition-all
                                    ${active
                    ? "bg-[#fff0e7] text-[#e85f18]"
                    : "text-[#6f6965] hover:bg-[#f7f4f1] hover:text-[#242424]"
                  }
                                `}
              >
                <Icon
                  className={`h-[18px] w-[18px] ${active
                    ? "text-[#ff7426]"
                    : "text-[#99918b]"
                    }`}
                />

                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-[#eee9e5] p-4">
        <div className="mb-4 flex items-center gap-3 rounded-xl bg-[#faf8f6] p-3">
          {user.imageUrl ? (
            <Image
              src={user.imageUrl}
              alt="Profile"
              width={42}
              height={42}
              className="rounded-full"
            />
          ) : (
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#ff7426] font-semibold text-white">
              {user.firstName?.charAt(0) || "A"}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-[#2d2b29]">
              {user.fullName ||
                user.firstName ||
                "Administrator"}
            </p>

            <p className="truncate text-[11px] text-[#928b86]">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-[#e8e1dc]
                        bg-white
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-[#625d59]
                        transition
                        hover:border-[#ff7426]
                        hover:bg-[#fff6f0]
                        hover:text-[#e85f18]
                    "
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#242424]">
      {/* =====================================================
                DESKTOP SIDEBAR
            ===================================================== */}

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[270px] flex-col border-r border-[#eee9e5] bg-white lg:flex">
        <SidebarContent />
      </aside>

      {/* =====================================================
                MOBILE HEADER
            ===================================================== */}

      <div className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[#eee9e5] bg-white/95 px-5 backdrop-blur lg:hidden">
        <div>
          <p className="font-bold text-[#242424]">
            Transcending
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9a8f87]">
            Psychiatry
          </p>
        </div>

        <button
          onClick={() =>
            setMobileMenuOpen((current) => !current)
          }
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eee6e0] bg-white"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* =====================================================
                MOBILE SIDEBAR
            ===================================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="fixed inset-y-0 left-0 z-50 flex w-[285px] flex-col bg-white shadow-2xl lg:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

      <main className="lg:ml-[270px]">
        <div className="mx-auto max-w-[1500px] px-5 py-7 md:px-8 lg:px-10 lg:py-10">
          {/* HEADER */}

          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#ff7426]">
                Website Administration
              </p>

              <h1 className="text-2xl font-semibold tracking-tight text-[#262422] md:text-3xl">
                {pageTitle}
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-[#e7dfda]
                                    bg-white
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-[#625d59]
                                    shadow-sm
                                    transition
                                    hover:border-[#ff7426]
                                    hover:text-[#e85f18]
                                "
              >
                View Website
                <ExternalLink className="h-4 w-4" />
              </a>

              <button
                onClick={() => setIsCreatingPost(true)}
                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-[#ff7426]
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-sm
                                    transition
                                    hover:-translate-y-0.5
                                    hover:bg-[#e85f18]
                                    hover:shadow-md
                                "
              >
                <PlusCircle className="h-4 w-4" />
                New Post
              </button>
            </div>
          </div>

          {/* =================================================
                        CREATE POST MODAL
                    ================================================= */}

          <AnimatePresence>
            {isCreatingPost && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[24px] bg-white shadow-2xl"
                >
                  <button
                    onClick={() =>
                      setIsCreatingPost(false)
                    }
                    className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#e9e2dd] bg-white shadow-sm transition hover:bg-[#fff1e8]"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <CreatePost
                    onPostCreated={() => {
                      setIsCreatingPost(false);
                      fetchPosts();
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =================================================
                        OVERVIEW
                    ================================================= */}

          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* STATS */}

              <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  title="Total Posts"
                  value={posts.length}
                  icon={<FileText className="h-5 w-5" />}
                />

                <StatCard
                  title="Published"
                  value={publishedPosts.length}
                  icon={<Eye className="h-5 w-5" />}
                />

                <StatCard
                  title="Drafts"
                  value={draftPosts.length}
                  icon={<Pencil className="h-5 w-5" />}
                />

                <StatCard
                  title="Total Views"
                  value={totalViews.toLocaleString()}
                  icon={<BarChart3 className="h-5 w-5" />}
                />
              </div>

              {/* RECENT POSTS */}

              <div className="overflow-hidden rounded-[22px] border border-[#eee8e4] bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-[#f0ebe7] px-6 py-5">
                  <div>
                    <h2 className="font-semibold text-[#292725]">
                      Recent Posts
                    </h2>

                    <p className="mt-1 text-xs text-[#99918b]">
                      Recently created blog content
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setActiveTab("posts")
                    }
                    className="text-sm font-semibold text-[#e85f18] hover:underline"
                  >
                    View All
                  </button>
                </div>

                <PostsTable
                  posts={posts.slice(0, 5)}
                  onPublish={handlePublishPost}
                  onUnpublish={handleUnpublishPost}
                  onDelete={handleDeletePost}
                />
              </div>
            </motion.div>
          )}

          {/* =================================================
                        POSTS
                    ================================================= */}

          {activeTab === "posts" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-[22px] border border-[#eee8e4] bg-white shadow-sm"
            >
              <div className="flex flex-col justify-between gap-4 border-b border-[#f0ebe7] p-6 md:flex-row md:items-center">
                <div>
                  <h2 className="font-semibold text-[#292725]">
                    Blog Posts
                  </h2>

                  <p className="mt-1 text-xs text-[#99918b]">
                    Create, edit, publish and manage website content.
                  </p>
                </div>

                <div className="relative w-full md:w-[300px]">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#aaa19b]" />

                  <input
                    value={searchTerm}
                    onChange={(event) =>
                      setSearchTerm(
                        event.target.value
                      )
                    }
                    placeholder="Search posts..."
                    className="
                                            w-full
                                            rounded-full
                                            border
                                            border-[#e8e1dc]
                                            bg-[#fcfbfa]
                                            py-3
                                            pl-11
                                            pr-4
                                            text-sm
                                            outline-none
                                            transition
                                            focus:border-[#ff7426]
                                            focus:bg-white
                                            focus:ring-2
                                            focus:ring-[#ff7426]/10
                                        "
                  />
                </div>
              </div>

              <PostsTable
                posts={filteredPosts}
                onPublish={handlePublishPost}
                onUnpublish={handleUnpublishPost}
                onDelete={handleDeletePost}
              />
            </motion.div>
          )}

          {/* =================================================
                        ANALYTICS
                    ================================================= */}

          {activeTab === "analytics" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[22px] border border-[#eee8e4] bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e7] text-[#ff7426]">
                <BarChart3 className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-semibold">
                Website Analytics
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#817a75]">
                Analytics can be connected here later without
                storing patient or clinical information in this
                dashboard.
              </p>
            </motion.div>
          )}

          {/* =================================================
                        SETTINGS
                    ================================================= */}

          {activeTab === "settings" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[22px] border border-[#eee8e4] bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e7] text-[#ff7426]">
                <Settings className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-semibold">
                Account Settings
              </h2>

              <div className="mt-7 max-w-xl rounded-2xl border border-[#eee7e2] bg-[#faf8f6] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#9a918b]">
                  Signed in as
                </p>

                <p className="mt-2 font-semibold text-[#2d2a28]">
                  {user.fullName ||
                    user.firstName ||
                    "Administrator"}
                </p>

                <p className="mt-1 text-sm text-[#77706b]">
                  {
                    user.primaryEmailAddress
                      ?.emailAddress
                  }
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

/*
 * ==========================================================
 * STAT CARD
 * ==========================================================
 */

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[20px] border border-[#eee8e4] bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm font-medium text-[#817a75]">
          {title}
        </p>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e7] text-[#ff7426]">
          {icon}
        </div>
      </div>

      <p className="text-3xl font-semibold tracking-tight text-[#272523]">
        {value}
      </p>
    </div>
  );
}

/*
 * ==========================================================
 * POSTS TABLE
 * ==========================================================
 */

function PostsTable({
  posts,
  onPublish,
  onUnpublish,
  onDelete,
}: {
  posts: Post[];
  onPublish: (id: string) => void;
  onUnpublish: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  if (posts.length === 0) {
    return (
      <div className="flex min-h-[250px] flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e7] text-[#ff7426]">
          <FileText className="h-5 w-5" />
        </div>

        <h3 className="font-semibold text-[#332f2c]">
          No posts found
        </h3>

        <p className="mt-1 text-sm text-[#918984]">
          Your blog posts will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px]">
        <thead>
          <tr className="border-b border-[#f0ebe7] bg-[#fcfbfa] text-left">
            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#99918b]">
              Title
            </th>

            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#99918b]">
              Status
            </th>

            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#99918b]">
              Created
            </th>

            <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#99918b]">
              Views
            </th>

            <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-[0.1em] text-[#99918b]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#f1ece8]">
          {posts.map((post) => (
            <tr
              key={post.id}
              className="transition hover:bg-[#fdfbf9]"
            >
              <td className="px-6 py-5">
                <p className="max-w-[350px] truncate text-sm font-semibold text-[#302d2b]">
                  {post.title}
                </p>

                <p className="mt-1 text-xs text-[#a09892]">
                  {post.author || "Transcending Psychiatry"}
                </p>
              </td>

              <td className="px-6 py-5">
                <StatusBadge status={post.status} />
              </td>

              <td className="px-6 py-5 text-sm text-[#77706b]">
                {new Date(
                  post.createdAt
                ).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </td>

              <td className="px-6 py-5 text-sm text-[#77706b]">
                {(post.views || 0).toLocaleString()}
              </td>

              <td className="px-6 py-5">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => {
                      window.location.href =
                        `/Dashboard/edit/${post.id}`;
                    }}
                    title="Edit post"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e9e2dd] text-[#77706b] transition hover:border-[#ff7426] hover:bg-[#fff1e8] hover:text-[#e85f18]"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>

                  {post.status === "published" ? (
                    <button
                      onClick={() =>
                        onUnpublish(post.id)
                      }
                      title="Unpublish post"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e9e2dd] text-[#77706b] transition hover:border-[#ff7426] hover:bg-[#fff1e8] hover:text-[#e85f18]"
                    >
                      <EyeOff className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        onPublish(post.id)
                      }
                      title="Publish post"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e9e2dd] text-[#77706b] transition hover:border-[#ff7426] hover:bg-[#fff1e8] hover:text-[#e85f18]"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  )}

                  <button
                    onClick={() =>
                      onDelete(post.id)
                    }
                    title="Delete post"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e9e2dd] text-[#a65b50] transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*
 * ==========================================================
 * STATUS BADGE
 * ==========================================================
 */

function StatusBadge({
  status,
}: {
  status: Post["status"];
}) {
  const styles = {
    published:
      "bg-emerald-50 text-emerald-700 border-emerald-100",
    draft:
      "bg-amber-50 text-amber-700 border-amber-100",
    scheduled:
      "bg-blue-50 text-blue-700 border-blue-100",
  };

  return (
    <span
      className={`
                inline-flex
                rounded-full
                border
                px-3
                py-1
                text-[11px]
                font-bold
                capitalize
                ${styles[status]}
            `}
    >
      {status}
    </span>
  );
}

export default Dashboard;