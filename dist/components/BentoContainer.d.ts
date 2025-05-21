import { FC, CSSProperties, ReactNode } from "react";
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
    onDragEnd?: (result: any) => void;
    gridTemplate?: string;
}
export declare const BentoContainer: FC<BentoContainerProps>;
export {};
//# sourceMappingURL=BentoContainer.d.ts.map