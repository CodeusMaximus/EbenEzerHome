"use client";

import {
    ArrowRight,
    CalendarDays,
} from "lucide-react";

import { useBooking } from "./BookingProvider";

type BookAppointmentButtonProps = {
    className?: string;
    label?: string;
    showIcon?: boolean;
    showArrow?: boolean;
    onOpen?: () => void;
};

export default function BookAppointmentButton({
    className = "",
    label = "Book Appointment",
    showIcon = true,
    showArrow = true,
    onOpen,
}: BookAppointmentButtonProps) {
    const { openBooking } = useBooking();

    const handleClick = () => {
        onOpen?.();
        openBooking();
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`
        group
        inline-flex
        min-h-[52px]
        items-center
        justify-center
        gap-2.5
        rounded-full
        bg-[#ff7426]
        px-6
        py-3.5
        text-[14px]
        font-semibold
        text-white
        shadow-[0_12px_30px_rgba(255,116,38,0.28)]
        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:bg-[#eb641b]
        hover:shadow-[0_16px_36px_rgba(255,116,38,0.35)]

        focus:outline-none
        focus:ring-4
        focus:ring-[#ff7426]/20

        ${className}
      `}
        >
            {showIcon && (
                <CalendarDays className="h-[17px] w-[17px]" />
            )}

            <span>{label}</span>

            {showArrow && (
                <ArrowRight
                    className="
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
                />
            )}
        </button>
    );
}