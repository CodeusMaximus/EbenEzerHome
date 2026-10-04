import {
    clerkMiddleware,
    createRouteMatcher,
    clerkClient,
} from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

const ADMIN_EMAILS = [
    " ",
    "dfsturge@gmail.com",
];

const isProtectedRoute = createRouteMatcher([
    "/Dashboard(.*)",
]);

export default clerkMiddleware(
    async (auth, req) => {
        // Leave all non-dashboard routes alone
        if (!isProtectedRoute(req)) {
            return;
        }

        // Get current Clerk authentication
        const { userId } = await auth();

        // Not signed in → require Clerk authentication
        if (!userId) {
            await auth.protect();
            return;
        }

        // Get the signed-in Clerk user
        const client = await clerkClient();

        const user = await client.users.getUser(userId);

        // Allow either authorized email address
        const isAuthorized = user.emailAddresses.some(
            (email) =>
                ADMIN_EMAILS.includes(
                    email.emailAddress.toLowerCase()
                )
        );

        // Signed in, but not authorized
        if (!isAuthorized) {
            return NextResponse.redirect(
                new URL("/", req.url)
            );
        }

        // Authorized → continue to Dashboard
        return;
    }
);

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};