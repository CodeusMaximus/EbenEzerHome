
import { NextResponse } from "next/server";
import { createElement } from "react";
import { Resend } from "resend";

import ReferralNotification from "../../emails/ReferralNotificatication";
import ReferralConfirmation from "../../emails/ReferralConfirmation";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const valid = (value: unknown, max: number): value is string =>
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.length <= max;

const optionalText = (value: unknown, max: number): value is string =>
    value === undefined ||
    (typeof value === "string" && value.length <= max);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            organization = "",
            email,
            phone = "",
            reason,
            message = "",
        } = body ?? {};

        if (
            !valid(name, 150) ||
            !valid(email, 254) ||
            !emailPattern.test(email.trim()) ||
            !optionalText(organization, 200) ||
            !optionalText(phone, 40) ||
            !valid(reason, 100) ||
            !optionalText(message, 5000)
        ) {
            return NextResponse.json(
                { error: "Please check your referral information." },
                { status: 400 }
            );
        }

        const {
            RESEND_API_KEY,
            CONTACT_FROM_EMAIL,
            CONTACT_ADMIN_EMAIL,
        } = process.env;

        if (
            !RESEND_API_KEY ||
            !CONTACT_FROM_EMAIL ||
            !CONTACT_ADMIN_EMAIL
        ) {
            console.error("Referral email configuration missing");

            return NextResponse.json(
                { error: "Email service is unavailable." },
                { status: 503 }
            );
        }

        const resend = new Resend(RESEND_API_KEY);

        const cleanName = name.trim();
        const cleanEmail = email.trim();
        const cleanReason = reason.trim();

        // Send the administrator a notification.
        // Do not include the free-text message in ordinary email.
        const admin = await resend.emails.send({
            from: CONTACT_FROM_EMAIL,
            to: CONTACT_ADMIN_EMAIL,
            replyTo: cleanEmail,
            subject: "New Referral / Inquiry — Eben-Ezer House of Hope",
            react: createElement(ReferralNotification, {
                name: cleanName,
                organization: organization.trim(),
                email: cleanEmail,
                phone: phone.trim(),
                reason: cleanReason,
                message: message.trim(),
            }),
        });

        if (admin.error) {
            console.error(
                "Referral admin notification failed:",
                admin.error.name
            );

            return NextResponse.json(
                { error: "Unable to deliver your referral." },
                { status: 502 }
            );
        }

        // Send the visitor a confirmation.
        const confirmation = await resend.emails.send({
            from: CONTACT_FROM_EMAIL,
            to: cleanEmail,
            subject: "We've Received Your Inquiry — Eben-Ezer House of Hope",
            react: createElement(ReferralConfirmation, {
                name: cleanName,
            }),
        });

        if (confirmation.error) {
            console.error(
                "Referral confirmation failed:",
                confirmation.error.name
            );

            return NextResponse.json({
                success: true,
                confirmationSent: false,
            });
        }

        return NextResponse.json({
            success: true,
            confirmationSent: true,
        });
    } catch (error) {
        console.error(
            "Referral processing failed:",
            error instanceof Error ? error.message : String(error)
        );

        return NextResponse.json(
            { error: "Unable to process referral." },
            { status: 500 }
        );
    }
}
