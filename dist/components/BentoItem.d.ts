import { FC, CSSProperties, ReactNode } from "react";
interface BentoItemProps {
    children: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    style?: CSSProperties;
    className?: string;
    animate?: boolean;
    transition?: string;
    animationDuration?: string;
    sm?: {
        colSpan?: number;
        rowSpan?: number;
    };
    md?: {
        colSpan?: number;
        rowSpan?: number;
    };
    lg?: {
        colSpan?: number;
        rowSpan?: number;
    };
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    role?: string;
    ariaLabel?: string;
    focusable?: boolean;
    theme?: "light" | "dark" | "minimal";
    lazyLoad?: boolean;
    itemCount?: number;
    draggableId: string;
    index: number;
}
export declare const BentoItem: FC<BentoItemProps>;
export {};
//# sourceMappingURL=BentoItem.d.ts.map