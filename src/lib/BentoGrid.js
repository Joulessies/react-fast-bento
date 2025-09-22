import React from "react";

const toCssSize = (value) => {
  if (value == null) return undefined;
  if (typeof value === "number") return `${value}px`;
  return String(value);
};

const breakpointMedia = {
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
};

const buildResponsiveStyle = (base, responsive) => {
  if (!responsive) return base;
  const style = { ...base };
  for (const [bp, rules] of Object.entries(responsive)) {
    const mq = breakpointMedia[bp];
    if (!mq) continue;
    style[mq] = { ...(style[mq] || {}), ...rules };
  }
  return style;
};

/**
 * BentoGrid
 * Props:
 * - columns: number | string (CSS) — default 4
 * - gap: number | string (CSS) — default 8
 * - minRowHeight: number | string (CSS) — controls implicit row height
 * - responsive: { sm?|md?|lg?|xl?: { columns?, gap?, minRowHeight? } }
 * - style, className, as
 */
export const BentoGrid = React.forwardRef(function BentoGrid(props, ref) {
  const {
    as: Component = "div",
    columns = 4,
    gap = 8,
    minRowHeight,
    responsive,
    style,
    className,
    children,
    ...rest
  } = props;

  const baseStyle = {
    display: "grid",
    gridTemplateColumns:
      typeof columns === "number"
        ? `repeat(${columns}, minmax(0, 1fr))`
        : String(columns),
    gap: toCssSize(gap),
    ...(minRowHeight ? { gridAutoRows: toCssSize(minRowHeight) } : {}),
  };

  const responsiveStyle = responsive
    ? buildResponsiveStyle(baseStyle, {
        sm: responsive.sm && {
          ...(responsive.sm.columns != null && {
            gridTemplateColumns:
              typeof responsive.sm.columns === "number"
                ? `repeat(${responsive.sm.columns}, minmax(0, 1fr))`
                : String(responsive.sm.columns),
          }),
          ...(responsive.sm.gap != null && {
            gap: toCssSize(responsive.sm.gap),
          }),
          ...(responsive.sm.minRowHeight != null && {
            gridAutoRows: toCssSize(responsive.sm.minRowHeight),
          }),
        },
        md: responsive.md && {
          ...(responsive.md.columns != null && {
            gridTemplateColumns:
              typeof responsive.md.columns === "number"
                ? `repeat(${responsive.md.columns}, minmax(0, 1fr))`
                : String(responsive.md.columns),
          }),
          ...(responsive.md.gap != null && {
            gap: toCssSize(responsive.md.gap),
          }),
          ...(responsive.md.minRowHeight != null && {
            gridAutoRows: toCssSize(responsive.md.minRowHeight),
          }),
        },
        lg: responsive.lg && {
          ...(responsive.lg.columns != null && {
            gridTemplateColumns:
              typeof responsive.lg.columns === "number"
                ? `repeat(${responsive.lg.columns}, minmax(0, 1fr))`
                : String(responsive.lg.columns),
          }),
          ...(responsive.lg.gap != null && {
            gap: toCssSize(responsive.lg.gap),
          }),
          ...(responsive.lg.minRowHeight != null && {
            gridAutoRows: toCssSize(responsive.lg.minRowHeight),
          }),
        },
        xl: responsive.xl && {
          ...(responsive.xl.columns != null && {
            gridTemplateColumns:
              typeof responsive.xl.columns === "number"
                ? `repeat(${responsive.xl.columns}, minmax(0, 1fr))`
                : String(responsive.xl.columns),
          }),
          ...(responsive.xl.gap != null && {
            gap: toCssSize(responsive.xl.gap),
          }),
          ...(responsive.xl.minRowHeight != null && {
            gridAutoRows: toCssSize(responsive.xl.minRowHeight),
          }),
        },
      })
    : baseStyle;

  return (
    <Component
      ref={ref}
      className={className}
      style={{ ...responsiveStyle, ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
});
