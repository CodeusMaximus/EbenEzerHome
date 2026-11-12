
import {
    clerkMiddleware,
    createRouteMatcher,
    clerkClient,
} from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

const ADMIN_EMAILS = [
    "poinsettias42@gmail.com",
    "dfsturge@gmail.com",
];

const isProtectedRoute = createRouteMatcher([
    "/Dashboard(.*)",
]);

export default clerkMiddleware(
    async (auth, req) => {
        // Public routes remain accessible
        if (!isProtectedRoute(req)) {
            return;
        }

        // Authenticate Dashboard users
        const { userId } = await auth();

        if (!userId) {
            await auth.protect();
            return;
        }

        const client = await clerkClient();
        const user = await client.users.getUser(userId);

        // Verify administrator email
        const isAuthorized = user.emailAddresses.some(
            (email) =>
                ADMIN_EMAILS.includes(
                    email.emailAddress.toLowerCase()
                )
        );

        // Block unauthorized users
        if (!isAuthorized) {
            return NextResponse.redirect(
                new URL("/", req.url)
            );
        }

        return;
    }
);

// Exclude SEO files from Clerk middleware
export const config = {
    matcher: [
        "/((?!_next|sitemap\\.xml|robots\\.txt|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};
