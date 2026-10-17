
"use client";

import {
    createContext,
    useCallback,
    useContext,
    useState,
    type ReactNode,
} from "react";
import ReferralFormModal from "./ReferralFormModal";

type ReferralContextValue = {
    openReferralForm: () => void;
    closeReferralForm: () => void;
};

const ReferralContext = createContext<ReferralContextValue | null>(null);

export function useReferralForm() {
    const context = useContext(ReferralContext);

    if (!context) {
        throw new Error(
            "useReferralForm must be used within ReferralFormProvider."
        );
    }

    return context;
}

export default function ReferralFormProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const openReferralForm = useCallback(() => setIsOpen(true), []);
    const closeReferralForm = useCallback(() => setIsOpen(false), []);

    return (
        <ReferralContext.Provider
            value={{ openReferralForm, closeReferralForm }}
        >
            {children}

            <ReferralFormModal
                open={isOpen}
                onClose={closeReferralForm}
            />
        </ReferralContext.Provider>
    );
}
