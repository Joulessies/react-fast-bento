import React from "react";

const toCssSize = (value) => {
  if (value == null) return undefined;
  if (typeof value === "number") return `${value}px`;
  return String(value);
};

/**
 * BentoBox
 * Props:
 * - colSpan: number | string — e.g. 2 or '2 / span 2'
 * - rowSpan: number | string — e.g. 2 or '2 / span 2'
 * - as, style, className
 */
export const BentoBox = React.forwardRef(function BentoBox(props, ref) {
  const {
    as: Component = "div",
    colSpan,
    rowSpan,
    style,
    className,
    children,
    ...rest
  } = props;

  const computedStyle = {
    ...(colSpan != null && {
      gridColumn:
        typeof colSpan === "number"
          ? `span ${colSpan} / span ${colSpan}`
          : String(colSpan),
    }),
    ...(rowSpan != null && {
      gridRow:
        typeof rowSpan === "number"
          ? `span ${rowSpan} / span ${rowSpan}`
          : String(rowSpan),
    }),
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={{ ...computedStyle, ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
});
