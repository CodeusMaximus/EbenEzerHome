import Link from "next/link";
import type { ReactNode } from "react";

type Section = { id: string; title: string; content: ReactNode };

export default function LegalPageLayout({ eyebrow, title, intro, updated, sections }: { eyebrow: string; title: string; intro: string; updated: string; sections: Section[] }) {
  return (
    <main className="bg-[#fffdf8] text-[#173d29]">
      <section className="bg-[#103d29] px-6 pb-20 pt-40 text-white sm:px-10 lg:pt-48">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-[#dfc584]">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight tracking-tight sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">{intro}</p>
          <p className="mt-8 text-xs text-white/60">Last updated: {updated}</p>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[240px_1fr] lg:py-24">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#a68b50]">On this page</p>
          <nav aria-label="On this page" className="flex flex-col gap-3 border-l border-[#d9e2d6] pl-4">
            {sections.map(s => <a key={s.id} href={`#${s.id}`} className="text-sm text-[#526c58] transition hover:text-[#0b512f]">{s.title}</a>)}
          </nav>
        </aside>
        <div className="min-w-0 space-y-12">
          {sections.map(s => (
            <section id={s.id} key={s.id} className="scroll-mt-32 border-b border-[#e4e9df] pb-10 last:border-0">
              <h2 className="font-serif text-3xl sm:text-4xl">{s.title}</h2>
              <div className="mt-5 space-y-4 text-[15px] leading-8 text-[#596b5e] [&_a]:font-semibold [&_a]:text-[#0b512f] [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">{s.content}</div>
            </section>
          ))}
          <div className="rounded-3xl bg-[#f1f5ec] p-7 text-sm leading-7 text-[#536857]">
            Questions about this page? Use the <Link href="/#contact" className="font-bold underline">contact section</Link> to reach the organization. Please do not include sensitive medical information in general inquiries.
          </div>
        </div>
      </div>
    </main>
  );
}
