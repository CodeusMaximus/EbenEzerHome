
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://ebenezerhouseofhope.com";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/Dashboard/",
                    "/api/",
                    "/sign-in/",
                    "/sign-up/",
                ],
            },
        ],

        sitemap: `${baseUrl}/sitemap.xml`,

        host: baseUrl,
    };
}
