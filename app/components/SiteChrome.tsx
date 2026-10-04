"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function SiteChrome({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isDashboard = pathname.startsWith("/Dashboard");

    // Dashboard gets the entire screen
    if (isDashboard) {
        return <main>{children}</main>;
    }

    // Normal website gets Navbar + Footer
    return (
        <>
            <Navbar />

            <main>{children}</main>

            <Footer />
        </>
    );
}