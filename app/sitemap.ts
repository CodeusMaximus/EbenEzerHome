
import type { MetadataRoute } from "next";

const BASE_URL = "https://ebenezerhouseofhope.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        {
            path: "",
            priority: 1.0,
            changeFrequency: "weekly" as const,
        },
        {
            path: "/admissions",
            priority: 0.9,
            changeFrequency: "monthly" as const,
        },
        {
            path: "/resources",
            priority: 0.8,
            changeFrequency: "monthly" as const,
        },
        {
            path: "/location",
            priority: 0.8,
            changeFrequency: "monthly" as const,
        },
        {
            path: "/blog",
            priority: 0.7,
            changeFrequency: "weekly" as const,
        },
        {
            path: "/privacy",
            priority: 0.3,
            changeFrequency: "yearly" as const,
        },
        {
            path: "/terms",
            priority: 0.3,
            changeFrequency: "yearly" as const,
        },
        {
            path: "/accessibility",
            priority: 0.3,
            changeFrequency: "yearly" as const,
        },
    ];

    return pages.map((page) => ({
        url: `${BASE_URL}${page.path}`,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));
}
