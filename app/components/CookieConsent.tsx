
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Check,
    ChevronRight,
    Cookie,
    LockKeyhole,
    Settings2,
    ShieldCheck,
    X,
} from "lucide-react";

type ConsentPreferences = {
    essential: true;
    analytics: boolean;
    marketing: boolean;
};

const STORAGE_KEY = "ebenezer-cookie-consent";
const CONSENT_VERSION = 1;

const defaultPreferences: ConsentPreferences = {
    essential: true,
    analytics: false,
    marketing: false,
};

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);
    const [customize, setCustomize] = useState(false);
    const [preferences, setPreferences] =
        useState<ConsentPreferences>(defaultPreferences);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);

            if (stored) {
                const parsed = JSON.parse(stored);

                if (
                    parsed.version === CONSENT_VERSION &&
                    typeof parsed.preferences?.analytics === "boolean" &&
                    typeof parsed.preferences?.marketing === "boolean"
                ) {
                    setPreferences({
                        essential: true,
                        analytics: parsed.preferences.analytics,
                        marketing: parsed.preferences.marketing,
                    });
                    return;
                }
            }
        } catch {
            // Invalid or inaccessible storage: request consent again.
        }

        setVisible(true);
    }, []);

    const saveConsent = (next: ConsentPreferences) => {
        const saved = {
            version: CONSENT_VERSION,
            preferences: next,
            updatedAt: new Date().toISOString(),
        };

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
        } catch {
            // Consent still applies to this page session.
        }

        setPreferences(next);
        setVisible(false);
        setCustomize(false);

        window.dispatchEvent(
            new CustomEvent("ebenezer:consent-updated", {
                detail: next,
            })
        );
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 35 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="fixed inset-x-4 bottom-4 z-[9999] mx-auto max-w-[940px] sm:bottom-7"
                    role="dialog"
                    aria-modal="false"
                    aria-labelledby="cookie-consent-title"
                >
                    <div className="relative overflow-hidden rounded-[26px] border border-[#dce5d6] bg-[#fffdf8] shadow-[0_25px_90px_rgba(8,44,27,0.24)]">
                        {/* Gold accent */}
                        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0b512f] via-[#c5a461] to-[#0b512f]" />

                        <div className="p-6 sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8f0e3] text-[#0b512f]">
                                    <Cookie className="h-6 w-6" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a68b50]">
                                                Your Privacy Matters
                                            </p>

                                            <h2
                                                id="cookie-consent-title"
                                                className="mt-2 font-serif text-[24px] font-semibold text-[#103d29] sm:text-[28px]"
                                            >
                                                A Better Experience, Your Choice.
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="mt-3 max-w-[700px] text-[13px] leading-7 text-[#647166] sm:text-[14px]">
                                        We use essential storage to help our
                                        website function and, with your
                                        permission, optional cookies to
                                        understand website usage and improve
                                        your experience. You can accept,
                                        decline optional cookies, or customize
                                        your preferences.
                                    </p>
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                {customize && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-6 space-y-3 border-t border-[#e4e9df] pt-6">
                                            <PreferenceRow
                                                title="Essential Cookies"
                                                description="Required for basic functionality and remembering your privacy choices."
                                                checked
                                                disabled
                                            />

                                            <PreferenceRow
                                                title="Analytics Cookies"
                                                description="Help us understand how visitors use the website."
                                                checked={preferences.analytics}
                                                onChange={(checked) =>
                                                    setPreferences((prev) => ({
                                                        ...prev,
                                                        analytics: checked,
                                                    }))
                                                }
                                            />

                                            <PreferenceRow
                                                title="Marketing Cookies"
                                                description="Used for advertising measurement or personalized marketing, if these tools are enabled."
                                                checked={preferences.marketing}
                                                onChange={(checked) =>
                                                    setPreferences((prev) => ({
                                                        ...prev,
                                                        marketing: checked,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-7 flex flex-col gap-3 border-t border-[#e7ece3] pt-6 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="button"
                                    onClick={() => setCustomize(!customize)}
                                    aria-expanded={customize}
                                    className="inline-flex h-[45px] items-center justify-center gap-2 rounded-full px-4 text-[12px] font-bold text-[#0b512f] transition hover:bg-[#edf3e8]"
                                >
                                    <Settings2 className="h-4 w-4" />
                                    {customize
                                        ? "Hide Preferences"
                                        : "Customize Preferences"}
                                    <ChevronRight
                                        className={`h-4 w-4 transition-transform ${customize ? "rotate-90" : ""
                                            }`}
                                    />
                                </button>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            saveConsent({
                                                essential: true,
                                                analytics: false,
                                                marketing: false,
                                            })
                                        }
                                        className="h-[48px] rounded-full border border-[#cbdac8] bg-white px-6 text-[12px] font-bold text-[#315840] transition hover:bg-[#f1f6ee]"
                                    >
                                        Essential Only
                                    </button>

                                    {customize ? (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                saveConsent(preferences)
                                            }
                                            className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#0b512f] px-7 text-[12px] font-bold text-white transition hover:bg-[#073d23]"
                                        >
                                            <Check className="h-4 w-4" />
                                            Save My Choices
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                saveConsent({
                                                    essential: true,
                                                    analytics: true,
                                                    marketing: true,
                                                })
                                            }
                                            className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#0b512f] px-7 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(11,81,47,0.18)] transition hover:bg-[#073d23]"
                                        >
                                            Accept All
                                            <Check className="h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="mt-5 flex items-center gap-2 text-[11px] text-[#859187]">
                                <LockKeyhole className="h-3.5 w-3.5 text-[#a68b50]" />
                                Your choices are saved on this device.
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function PreferenceRow({
    title,
    description,
    checked,
    disabled = false,
    onChange,
}: {
    title: string;
    description: string;
    checked: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}) {
    return (
        <div className="flex items-center justify-between gap-5 rounded-2xl bg-[#f4f7f0] p-4">
            <div>
                <p className="text-[13px] font-bold text-[#173d29]">
                    {title}
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#738076]">
                    {description}
                </p>
            </div>

            <button
                type="button"
                role="switch"
                aria-checked={checked}
                aria-label={title}
                disabled={disabled}
                onClick={() => onChange?.(!checked)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${checked ? "bg-[#0b512f]" : "bg-[#c6d1c4]"
                    } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
            >
                <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${checked ? "left-6" : "left-1"
                        }`}
                />
            </button>
        </div>
    );
}
