
"use client";

import { useState, type FormEvent } from "react";
import {
    ArrowUpRight,
    CheckCircle2,
    Loader2,
    LockKeyhole,
    Mail,
    MessageSquareText,
    Send,
    Sparkles,
} from "lucide-react";

type FormState = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

const initialState: FormState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

export default function FooterContactForm() {
    const [form, setForm] = useState<FormState>(initialState);
    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");

    const update = (field: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (status === "sending") return;

        setStatus("sending");

        try {
            // Convert footer fields to the existing referral API format.
            const payload = {
                name: form.name.trim(),
                email: form.email.trim(),
                phone: form.phone.trim(),
                organization: "",
                reason: form.subject,
                message: form.message.trim(),
            };

            const response = await fetch("/api/referrals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok || result?.success !== true) {
                throw new Error(
                    result?.error || "Unable to send message"
                );
            }

            setStatus("success");
            setForm(initialState);
        } catch (error) {
            console.error("Footer contact form error:", error);
            setStatus("error");
        }
    };

    return (
        <section
            aria-labelledby="footer-contact-heading"
            className="relative mb-20 overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.055] shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        >
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d9b76e]/10 blur-[80px]" />

            <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
                {/* LEFT INTRO */}
                <div className="flex flex-col justify-between border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#d9b76e]/25 bg-[#d9b76e]/10 px-4 py-2">
                            <Sparkles className="h-3.5 w-3.5 text-[#d9b76e]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e7ca8b]">
                                We'd Love to Hear From You
                            </span>
                        </div>

                        <h2
                            id="footer-contact-heading"
                            className="mt-8 font-serif text-[40px] leading-[1.08] tracking-[-0.035em] text-white sm:text-[53px]"
                        >
                            Have a question?
                            <br />
                            <span className="italic text-[#d9b76e]">
                                Let's connect.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[410px] text-[15px] leading-8 text-white/65">
                            Whether you're exploring housing, connecting
                            someone with support, or simply looking for more
                            information, we're here to listen.
                        </p>

                        <div className="mt-10 space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d9b76e]">
                                    <MessageSquareText className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[14px] font-semibold text-white">
                                        Thoughtful Communication
                                    </p>
                                    <p className="mt-1 text-[12px] leading-6 text-white/55">
                                        Every inquiry deserves care and attention.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d9b76e]">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[14px] font-semibold text-white">
                                        Admissions & General Questions
                                    </p>
                                    <p className="mt-1 text-[12px] leading-6 text-white/55">
                                        A simple way to begin the conversation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-white/10 pt-6">
                        <p className="font-serif text-[20px] italic text-[#d9b76e]">
                            People Restored. Lives Transformed.
                        </p>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="p-7 sm:p-10 lg:p-12">
                    {status === "success" ? (
                        <div
                            role="status"
                            className="flex min-h-[430px] flex-col items-center justify-center text-center"
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#d9b76e]/15">
                                <CheckCircle2 className="h-10 w-10 text-[#d9b76e]" />
                            </div>

                            <h3 className="mt-7 font-serif text-[35px] text-white">
                                Message Received
                            </h3>

                            <p className="mt-4 max-w-[350px] text-[14px] leading-7 text-white/65">
                                Thank you for reaching out. Your message
                                has been submitted successfully.
                            </p>

                            <button
                                type="button"
                                onClick={() => setStatus("idle")}
                                className="mt-8 rounded-full border border-[#d9b76e]/40 px-7 py-3 text-[13px] font-semibold text-[#d9b76e] transition hover:bg-[#d9b76e]/10"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="mb-8">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d9b76e]">
                                    Send Us a Message
                                </p>
                                <p className="mt-3 text-[13px] leading-6 text-white/55">
                                    Fill out the form below to get in touch.
                                </p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <Field
                                    label="Full Name"
                                    required
                                    value={form.name}
                                    onChange={(value) => update("name", value)}
                                    placeholder="Your full name"
                                />

                                <Field
                                    label="Email Address"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(value) => update("email", value)}
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <Field
                                    label="Phone Number"
                                    type="tel"
                                    value={form.phone}
                                    onChange={(value) => update("phone", value)}
                                    placeholder="(000) 000-0000"
                                />

                                <div>
                                    <label
                                        htmlFor="footer-contact-subject"
                                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.13em] text-white/70"
                                    >
                                        I'm Reaching Out About
                                    </label>

                                    <select
                                        id="footer-contact-subject"
                                        required
                                        value={form.subject}
                                        onChange={(event) =>
                                            update("subject", event.target.value)
                                        }
                                        className="h-[54px] w-full rounded-xl border border-white/15 bg-[#174a34] px-4 text-[13px] text-white outline-none transition focus:border-[#d9b76e] focus:ring-2 focus:ring-[#d9b76e]/15"
                                    >
                                        <option value="" disabled>
                                            Select a topic
                                        </option>
                                        <option value="General Inquiry">
                                            General Inquiry
                                        </option>
                                        <option value="Housing & Admissions">
                                            Housing & Admissions
                                        </option>
                                        <option value="Professional Referral">
                                            Professional Referral
                                        </option>
                                        <option value="Community Partnership">
                                            Community Partnership
                                        </option>
                                        <option value="Volunteering">
                                            Volunteering
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="footer-contact-message"
                                    className="mb-2 block text-[11px] font-bold uppercase tracking-[0.13em] text-white/70"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="footer-contact-message"
                                    required
                                    minLength={10}
                                    maxLength={3000}
                                    rows={5}
                                    value={form.message}
                                    onChange={(event) =>
                                        update("message", event.target.value)
                                    }
                                    placeholder="Tell us a little about how we can help..."
                                    className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.06] px-4 py-4 text-[14px] leading-7 text-white outline-none transition placeholder:text-white/35 focus:border-[#d9b76e] focus:ring-2 focus:ring-[#d9b76e]/15"
                                />
                            </div>

                            <p className="flex items-start gap-2 text-[11px] leading-6 text-white/45">
                                <LockKeyhole className="mt-1 h-3.5 w-3.5 shrink-0 text-[#d9b76e]" />
                                Please do not include Social Security numbers,
                                medical records, diagnoses, or other sensitive
                                personal information in this general contact form.
                            </p>

                            {status === "error" && (
                                <p role="alert" className="text-[13px] text-red-200">
                                    We couldn't send your message. Please try
                                    again or contact us by email.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="group flex h-[60px] w-full items-center justify-center gap-3 rounded-full bg-[#d9b76e] px-7 text-[15px] font-bold text-[#073d27] shadow-[0_14px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#edcf8b] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {status === "sending" ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Your Message
                                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

function Field({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    required = false,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
    required?: boolean;
}) {
    const id = `footer-${label.toLowerCase().replace(/\W+/g, "-")}`;

    return (
        <div>
            <label
                htmlFor={id}
                className="mb-2 block text-[11px] font-bold uppercase tracking-[0.13em] text-white/70"
            >
                {label}
                {required && <span className="ml-1 text-[#d9b76e]">*</span>}
            </label>

            <input
                id={id}
                type={type}
                required={required}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                maxLength={type === "email" ? 254 : 120}
                className="h-[54px] w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-[14px] text-white outline-none transition placeholder:text-white/35 focus:border-[#d9b76e] focus:ring-2 focus:ring-[#d9b76e]/15"
            />
        </div>
    );
}
