
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    HeartHandshake,
    LoaderCircle,
    X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

type ReferralFormModalProps = {
    open: boolean;
    onClose: () => void;
};

const inputClass =
    "mt-2 w-full rounded-xl border border-[#153d29]/15 bg-[#fafbf7] px-4 py-3.5 text-sm text-[#24382b] outline-none transition placeholder:text-[#8a968b] focus:border-[#0b512f]/50 focus:bg-white focus:ring-4 focus:ring-[#0b512f]/5";

const labelClass =
    "block text-sm font-semibold text-[#263c2c]";

export default function ReferralFormModal({
    open,
    onClose,
}: ReferralFormModalProps) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    useEffect(() => {
        if (open) {
            setSubmitted(false);
            setError("");
        }
    }, [open]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            organization: String(formData.get("organization") ?? "").trim(),
            phone: String(formData.get("phone") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            reason: String(formData.get("reason") ?? ""),
            message: String(formData.get("message") ?? "").trim(),
        };

        try {
            const response = await fetch("/api/referrals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const result = await response.json().catch(() => null);
                throw new Error(
                    result?.error ||
                    "We couldn't send your message. Please try again."
                );
            }

            setSubmitted(true);
            form.reset();
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.button
                        type="button"
                        aria-label="Close referral form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[300] cursor-default bg-[#102319]/70 backdrop-blur-sm"
                    />

                    <div className="pointer-events-none fixed inset-0 z-[310] overflow-y-auto overscroll-contain px-3 py-4 sm:px-6 sm:py-8">
                        <div className="flex min-h-full items-start justify-center sm:items-center">
                            <motion.section
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="referral-title"
                                initial={{ opacity: 0, y: 22, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 15, scale: 0.98 }}
                                transition={{ duration: 0.25 }}
                                className="pointer-events-auto relative my-auto w-full max-w-[720px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
                            >
                                <div className="relative overflow-hidden bg-[#123d29] px-6 py-7 text-white sm:px-9 sm:py-8">
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-3 -top-16 h-52 w-52 rounded-full border border-[#b8954f]/30"
                                    />

                                    <button
                                        type="button"
                                        onClick={onClose}
                                        aria-label="Close form"
                                        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-[#123d29] sm:right-6 sm:top-6"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>

                                    <div className="relative z-[1] flex items-center gap-3">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#e0c17c]">
                                            <HeartHandshake className="h-6 w-6" />
                                        </span>

                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e0c17c]">
                                            Eben-Ezer House of Hope
                                        </span>
                                    </div>

                                    <h2
                                        id="referral-title"
                                        className="relative z-[1] mt-5 max-w-[520px] pr-8 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
                                    >
                                        {submitted
                                            ? "Message Received"
                                            : "Referral Form & Quick Message"}
                                    </h2>

                                    <p className="relative z-[1] mt-3 max-w-[540px] text-sm leading-6 text-white/75">
                                        {submitted
                                            ? "Thank you for reaching out. Your message has been submitted."
                                            : "Connect with our team about a referral, partnership, or general inquiry."}
                                    </p>
                                </div>

                                {submitted ? (
                                    <div className="px-6 py-12 text-center sm:px-10 sm:py-14">
                                        <CheckCircle2 className="mx-auto h-14 w-14 text-[#0b512f]" />

                                        <h3 className="mt-5 font-serif text-2xl font-semibold text-[#153d29]">
                                            Thank you for contacting us.
                                        </h3>

                                        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#687269]">
                                            We appreciate your interest in Eben-Ezer House of Hope.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="mt-7 min-h-12 rounded-full bg-[#0b512f] px-8 font-semibold text-white transition hover:bg-[#073d23]"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="p-6 sm:p-9">
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <label className={labelClass}>
                                                Name <span className="text-red-600">*</span>
                                                <input
                                                    required
                                                    name="name"
                                                    autoComplete="name"
                                                    maxLength={120}
                                                    className={inputClass}
                                                    placeholder="Your full name"
                                                />
                                            </label>

                                            <label className={labelClass}>
                                                Organization
                                                <span className="mt-1 block text-xs font-normal text-[#7b867d]">
                                                    Hospital, case management, community partner, or other
                                                </span>
                                                <input
                                                    name="organization"
                                                    autoComplete="organization"
                                                    maxLength={180}
                                                    className={inputClass}
                                                    placeholder="Organization name"
                                                />
                                            </label>

                                            <label className={labelClass}>
                                                Phone <span className="text-red-600">*</span>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    autoComplete="tel"
                                                    maxLength={40}
                                                    className={inputClass}
                                                    placeholder="Your phone number"
                                                />
                                            </label>

                                            <label className={labelClass}>
                                                Email <span className="text-red-600">*</span>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    autoComplete="email"
                                                    maxLength={254}
                                                    className={inputClass}
                                                    placeholder="you@example.com"
                                                />
                                            </label>

                                            <label className={`${labelClass} sm:col-span-2`}>
                                                Reason for Contact{" "}
                                                <span className="text-red-600">*</span>
                                                <select
                                                    required
                                                    name="reason"
                                                    defaultValue=""
                                                    className={inputClass}
                                                >
                                                    <option value="" disabled>
                                                        Select a reason
                                                    </option>
                                                    <option value="Referral">Referral</option>
                                                    <option value="Partnership">Partnership</option>
                                                    <option value="General Inquiry">
                                                        General Inquiry
                                                    </option>
                                                </select>
                                            </label>

                                            <label className={`${labelClass} sm:col-span-2`}>
                                                Message <span className="text-red-600">*</span>
                                                <textarea
                                                    required
                                                    name="message"
                                                    rows={5}
                                                    maxLength={5000}
                                                    className={`${inputClass} resize-y`}
                                                    placeholder="How can our team help you?"
                                                />
                                            </label>
                                        </div>

                                        <p className="mt-4 text-xs leading-5 text-[#7b867d]">
                                            Please avoid including sensitive personal or medical
                                            information in this general inquiry form.
                                        </p>

                                        {error && (
                                            <p
                                                role="alert"
                                                className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                                            >
                                                {error}
                                            </p>
                                        )}

                                        <div className="mt-6 border-t border-[#153d29]/10 pt-6">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="group inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#0b512f] px-7 text-sm font-bold text-white shadow-[0_12px_28px_rgba(11,81,47,0.18)] transition hover:bg-[#073d23] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[220px]"
                                            >
                                                {loading ? (
                                                    <>
                                                        <LoaderCircle className="h-5 w-5 animate-spin" />
                                                        Sending Message...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Message
                                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                    </>
                                                )}
                                            </button>

                                            <p className="mt-4 text-[11px] leading-5 text-[#8a938b]">
                                                Your message will be handled by the Eben-Ezer House
                                                of Hope team.
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </motion.section>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
