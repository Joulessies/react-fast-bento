import React, { ReactNode, CSSProperties } from "react";

interface BentoProps {
  columns?: number;
  spacing?: number;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Bento: React.FC<BentoProps> = ({
  columns = 4,
  spacing = 10,
  children,
  style,
  className = "",
}) => {
  return (
    <div
      className={`grid gap-${spacing} ${className}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, ...style }}
    >
      {children}
    </div>
  );
};

export default Bento;
