"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

export type Language = "en" | "es" | "ht";

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    locale: string;
};

const LanguageContext = createContext<
    LanguageContextType | undefined
>(undefined);

export function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [language, setLanguageState] =
        useState<Language>("en");

    useEffect(() => {
        const saved =
            localStorage.getItem(
                "solid-rock-language"
            );

        if (
            saved === "en" ||
            saved === "es" ||
            saved === "ht"
        ) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (
        newLanguage: Language
    ) => {
        setLanguageState(newLanguage);

        localStorage.setItem(
            "solid-rock-language",
            newLanguage
        );

        document.documentElement.lang =
            newLanguage;
    };

    useEffect(() => {
        document.documentElement.lang =
            language;
    }, [language]);

    const locale =
        language === "es"
            ? "es-US"
            : language === "ht"
                ? "fr-HT"
                : "en-US";

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            locale,
        }),
        [language]
    );

    return (
        <LanguageContext.Provider
            value={value}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context =
        useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider"
        );
    }

    return context;
}