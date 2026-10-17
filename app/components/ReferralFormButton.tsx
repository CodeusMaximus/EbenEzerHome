
"use client";

import { ArrowRight } from "lucide-react";
import { useReferralForm } from "../components/referralformprovider";

type ReferralFormButtonProps = {
    label?: string;
    className?: string;
    showArrow?: boolean;
};

export default function ReferralFormButton({
    label = "Apply for Housing",
    className = "",
    showArrow = true,
}: ReferralFormButtonProps) {
    const { openReferralForm } = useReferralForm();

    return (
        <button
            type="button"
            onClick={openReferralForm}
            className={`
                group inline-flex h-[46px] shrink-0 items-center
                justify-center gap-2 rounded-full
                bg-[#0b512f] px-5
                text-base font-bold text-white
                shadow-[0_14px_35px_rgba(11,81,47,0.24)]
                transition-all duration-300
                hover:-translate-y-1 hover:bg-[#073d23]
                focus-visible:outline-none
                focus-visible:ring-4 focus-visible:ring-[#b8954f]/40
                ${className}
            `}
        >
            <span>{label}</span>

            {showArrow && (
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            )}
        </button>
    );
}
