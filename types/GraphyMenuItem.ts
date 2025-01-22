import * as React from "react";

export interface GraphyMenuItem {
    label: string;
    labelEn: string;
    icon: React.ReactNode;
    key: string;
    href: string;
    categoryDepth1: string;
}