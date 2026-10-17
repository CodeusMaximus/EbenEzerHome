
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    HeartHandshake,
    LoaderCircle,
    X,
} from "lucide-react";
import {
    useEffect,
    useRef,
    useState,
    type FormEvent,
} from "react";
import { createPortal } from "react-dom";

type ReferralFormModalProps = {
    open: boolean;
    onClose: () => void;
};

const inputClass =
    "mt-2 w-full rounded-xl border border-[#153d29]/15 bg-[#fafbf7] px-4 py-3.5 text-base text-[#24382b] outline-none transition placeholder:text-[#8a968b] focus:border-[#0b512f] focus:bg-white focus:ring-4 focus:ring-[#0b512f]/10";

const labelClass =
    "block text-sm font-semibold text-[#263c2c]";

export default function ReferralFormModal({
    open,
    onClose,
}: ReferralFormModalProps) {
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const dialogRef = useRef<HTMLElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!open) return;

        previouslyFocusedRef.current =
            document.activeElement instanceof HTMLElement
                ? document.activeElement
                : null;

        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight =
            document.body.style.paddingRight;

        const scrollbarWidth =
            window.innerWidth -
            document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";

        if (scrollbarWidth > 0) {
            document.body.style.paddingRight =
                `${scrollbarWidth}px`;
        }

        const focusFrame = requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                event.preventDefault();
                onClose();
                return;
            }

            if (event.key !== "Tab") return;

            const dialog = dialogRef.current;
            if (!dialog) return;

            const focusable = Array.from(
                dialog.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            ).filter(
                (element) =>
                    element.getClientRects().length > 0
            );

            if (focusable.length === 0) {
                event.preventDefault();
                dialog.focus();
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;

            if (
                !dialog.contains(active) ||
                (event.shiftKey && active === first)
            ) {
                if (event.shiftKey || !dialog.contains(active)) {
                    event.preventDefault();
                    (event.shiftKey ? last : first).focus();
                }
            } else if (!event.shiftKey && active === last) {
                event.preventDefault();
                first.focus();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            cancelAnimationFrame(focusFrame);
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight =
                previousPaddingRight;

            previouslyFocusedRef.current?.focus();
        };
    }, [open, onClose]);

    useEffect(() => {
        if (open) {
            setSubmitted(false);
            setError("");
        }
    }, [open]);

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        if (loading) return;

        setLoading(true);
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            organization: String(
                formData.get("organization") ?? ""
            ).trim(),
            phone: String(formData.get("phone") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            reason: String(formData.get("reason") ?? ""),
            message: String(
                formData.get("message") ?? ""
            ).trim(),
        };

        try {
            const response = await fetch("/api/referrals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response
                .json()
                .catch(() => null);

            if (!response.ok || result?.success !== true) {
                throw new Error(
                    result?.error ||
                    "We couldn't send your message. Please try again."
                );
            }

            setSubmitted(true);
            form.reset();

            requestAnimationFrame(() => {
                dialogRef.current?.scrollTo({
                    top: 0,
                    behavior: "instant",
                });

                closeButtonRef.current?.focus();
            });
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

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-6"
                    style={{
                        height: "100dvh",
                    }}
                >
                    {/* BACKDROP */}
                    <motion.div
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#102319]/75 backdrop-blur-md"
                    />

                    {/* MODAL */}
                    <motion.section
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="referral-title"
                        aria-describedby="referral-description"
                        tabIndex={-1}
                        initial={{
                            opacity: 0,
                            y: 24,
                            scale: 0.98,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 16,
                            scale: 0.98,
                        }}
                        transition={{ duration: 0.25 }}
                        className="
              relative z-10 flex w-full max-w-[720px]
              flex-col overflow-hidden rounded-[24px]
              bg-white
              shadow-[0_30px_100px_rgba(0,0,0,0.30)]
              outline-none
            "
                        style={{
                            maxHeight: "calc(100dvh - 16px)",
                        }}
                    >
                        {/* FIXED HEADER */}
                        <div className="relative shrink-0 overflow-hidden bg-[#123d29] px-5 py-5 text-white sm:px-9 sm:py-8">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10"
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-3 -top-16 h-52 w-52 rounded-full border border-[#b8954f]/30"
                            />

                            {/* CLOSE BUTTON */}
                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={onClose}
                                aria-label="Close referral form"
                                className="
                  absolute right-4 top-4 z-30
                  flex h-11 w-11 items-center
                  justify-center rounded-full
                  border border-white/20 bg-white/10
                  text-white shadow-sm transition
                  hover:bg-white hover:text-[#123d29]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-white
                "
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="relative z-[1] flex items-center gap-3 pr-12">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e0c17c]">
                                    <HeartHandshake className="h-6 w-6" />
                                </span>

                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e0c17c]">
                                    Eben-Ezer House of Hope
                                </span>
                            </div>

                            <h2
                                id="referral-title"
                                className="relative z-[1] mt-4 max-w-[520px] pr-4 font-serif text-2xl font-semibold tracking-tight sm:mt-5 sm:text-4xl"
                            >
                                {submitted
                                    ? "Message Received"
                                    : "Referral Form & Quick Message"}
                            </h2>

                            <p
                                id="referral-description"
                                className="relative z-[1] mt-2 max-w-[540px] text-sm leading-6 text-white/80"
                            >
                                {submitted
                                    ? "Thank you for reaching out. Your message has been submitted."
                                    : "Connect with our team about a referral, partnership, or general inquiry."}
                            </p>
                        </div>

                        {/* SCROLLABLE CONTENT */}
                        <div
                            className="
                min-h-0 flex-1 overflow-y-auto
                overscroll-contain
                [-webkit-overflow-scrolling:touch]
              "
                        >
                            {submitted ? (
                                <div className="px-6 py-12 text-center sm:px-10 sm:py-14">
                                    <CheckCircle2 className="mx-auto h-14 w-14 text-[#0b512f]" />

                                    <h3 className="mt-5 font-serif text-2xl font-semibold text-[#153d29]">
                                        Thank you for contacting us.
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#687269]">
                                        Your inquiry has been received.
                                        We appreciate your interest in
                                        Eben-Ezer House of Hope.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="mt-7 min-h-12 rounded-full bg-[#0b512f] px-8 font-semibold text-white transition hover:bg-[#073d23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b512f]"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="p-5 sm:p-9"
                                >
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        {/* NAME */}
                                        <label className={labelClass}>
                                            Name{" "}
                                            <span className="text-red-600">*</span>
                                            <input
                                                required
                                                name="name"
                                                autoComplete="name"
                                                maxLength={120}
                                                className={inputClass}
                                                placeholder="Your full name"
                                            />
                                        </label>

                                        {/* ORGANIZATION */}
                                        <label className={labelClass}>
                                            Organization
                                            <span className="mt-1 block text-xs font-normal text-[#7b867d]">
                                                Hospital, case management,
                                                community partner, or other
                                            </span>
                                            <input
                                                name="organization"
                                                autoComplete="organization"
                                                maxLength={180}
                                                className={inputClass}
                                                placeholder="Organization name"
                                            />
                                        </label>

                                        {/* PHONE */}
                                        <label className={labelClass}>
                                            Phone{" "}
                                            <span className="text-red-600">*</span>
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

                                        {/* EMAIL */}
                                        <label className={labelClass}>
                                            Email{" "}
                                            <span className="text-red-600">*</span>
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

                                        {/* REASON */}
                                        <label
                                            className={`${labelClass} sm:col-span-2`}
                                        >
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
                                                <option value="Referral">
                                                    Referral
                                                </option>
                                                <option value="Partnership">
                                                    Partnership
                                                </option>
                                                <option value="General Inquiry">
                                                    General Inquiry
                                                </option>
                                            </select>
                                        </label>

                                        {/* MESSAGE */}
                                        <label
                                            className={`${labelClass} sm:col-span-2`}
                                        >
                                            Message{" "}
                                            <span className="text-red-600">*</span>

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

                                    {/* PRIVACY NOTICE */}
                                    <p className="mt-4 text-xs leading-5 text-[#687269]">
                                        Please do not include sensitive
                                        personal or medical information in
                                        this general inquiry form.
                                    </p>

                                    {/* ERROR */}
                                    {error && (
                                        <p
                                            role="alert"
                                            className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                                        >
                                            {error}
                                        </p>
                                    )}

                                    {/* SUBMIT */}
                                    <div className="mt-6 border-t border-[#153d29]/10 pt-6">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="
                        group inline-flex min-h-[56px]
                        w-full items-center justify-center
                        gap-3 rounded-full bg-[#0b512f]
                        px-7 text-sm font-bold text-white
                        shadow-[0_12px_28px_rgba(11,81,47,0.18)]
                        transition hover:bg-[#073d23]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-[#0b512f]
                        sm:w-auto sm:min-w-[220px]
                      "
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
                                            Your message will be handled by
                                            the Eben-Ezer House of Hope team.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.section>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
