"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type BackButtonProps = {
    children?: ReactNode;
    fallback?: string;
};

export function BackButton({ children, fallback = "/" }: BackButtonProps) {
    const router = useRouter();

    function handleBack() {
        router.push(fallback);
    }

    return (
        <button onClick={handleBack} className="back-btn">
            {children || "← 返回"}
        </button>
    );
}
