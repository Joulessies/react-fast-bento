import React, { FC, CSSProperties, ReactNode } from "react";

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

export const BentoContainer: FC<BentoContainerProps> = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  direction = "row",
  align = "start",
  alignItems = "start",
  justify = "start",
  spacing = 0,
  height,
  width,
  style,
}) => {
  const containerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${colSpan}, 1fr)`,
    gridTemplateRows: `repeat(${rowSpan}, 1fr)`,
    alignContent: align,
    alignItems,
    justifyContent: justify,
    gap: `${spacing}px`,
    flexDirection: direction,
    width,
    height,
    ...style,
  };

  return <div style={containerStyle}>{children}</div>;
};
