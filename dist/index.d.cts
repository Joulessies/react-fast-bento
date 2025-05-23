import { FC, ReactNode, CSSProperties } from 'react';

interface BentoContainerProps {
    children: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    align?: "start" | "center" | "end";
    alignItems?: "start" | "center" | "end";
    spacing?: number;
    justify?: "start" | "center" | "end";
    direction?: "row" | "column";
    style?: CSSProperties;
    width?: string;
    height?: string;
    animate?: boolean;
    transition?: string;
    animationDuration?: string;
    sm?: {
        colSpan?: number;
        rowSpan?: number;
        spacing?: number;
    };
    md?: {
        colSpan?: number;
        rowSpan?: number;
        spacing?: number;
    };
    lg?: {
        colSpan?: number;
        rowSpan?: number;
        spacing?: number;
    };
    theme?: "light" | "dark" | "minimal";
    lazyLoad?: boolean;
    itemCount?: number;
    gridTemplate?: string;
}
declare const BentoContainer: FC<BentoContainerProps>;

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
}
declare const BentoItem: FC<BentoItemProps>;

export { BentoContainer, BentoItem };
