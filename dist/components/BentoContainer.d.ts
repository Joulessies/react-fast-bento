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
}
declare const BentoContainer: FC<BentoContainerProps>;

export { BentoContainer };
