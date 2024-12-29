import React from 'react';

interface BentoGridProps {
  columns: number;
  gap: number;
  children: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  columns,
  gap,
  children,
}) => {
  return <div className="bentogrid">{children}</div>;
};
