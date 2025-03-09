import React, { FC, CSSProperties, ReactNode } from "react";

interface BentoItemProps {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  style?: CSSProperties;
  className?: string;
}

export const BentoItem: FC<BentoItemProps> = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  style,
  className,
}) => {
  const itemStyle: CSSProperties = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
    ...style,
  };

  return (
    <div className={className} style={itemStyle}>
      {children}
    </div>
  );
};
