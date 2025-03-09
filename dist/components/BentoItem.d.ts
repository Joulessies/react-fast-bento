import { FC, ReactNode, CSSProperties } from 'react';

interface BentoItemProps {
    children: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    style?: CSSProperties;
    className?: string;
}
declare const BentoItem: FC<BentoItemProps>;

export { BentoItem };
