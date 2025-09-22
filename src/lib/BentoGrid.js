import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useBreakpoint } from "./useBreakpoint.js";

const toCssSize = (value) => {
  if (value == null) return undefined;
  if (typeof value === "number") return `${value}px`;
  return String(value);
};

const resolveAutoRows = (value) => {
  if (value == null) return undefined;
  if (typeof value === "number") return `${value}px`;
  const presets = { sm: "80px", md: "120px", lg: "160px" };
  return presets[value] || String(value);
};

const pickResponsive = (base, responsive, active) => {
  if (!responsive || !active) return base;
  const src = responsive[active];
  if (!src) return base;
  return {
    ...base,
    ...(src.columns != null && {
      gridTemplateColumns:
        typeof src.columns === "number"
          ? `repeat(${src.columns}, minmax(0, 1fr))`
          : String(src.columns),
    }),
    ...(src.gap != null && { gap: toCssSize(src.gap) }),
    ...(src.columnGap != null && { columnGap: toCssSize(src.columnGap) }),
    ...(src.rowGap != null && { rowGap: toCssSize(src.rowGap) }),
    ...(src.rows != null && {
      gridTemplateRows:
        typeof src.rows === "number"
          ? `repeat(${src.rows}, minmax(0, 1fr))`
          : String(src.rows),
    }),
    ...(src.areas != null && {
      gridTemplateAreas: Array.isArray(src.areas)
        ? src.areas.map((r) => `'${r}'`).join(" ")
        : String(src.areas),
    }),
    ...(src.minRowHeight != null && {
      gridAutoRows: toCssSize(src.minRowHeight),
    }),
    ...(src.autoRows != null && {
      gridAutoRows: resolveAutoRows(src.autoRows),
    }),
    ...(src.placeItems != null && { placeItems: String(src.placeItems) }),
    ...(src.placeContent != null && { placeContent: String(src.placeContent) }),
    ...(src.justifyItems != null && { justifyItems: String(src.justifyItems) }),
    ...(src.alignItems != null && { alignItems: String(src.alignItems) }),
  };
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
    as: _as = "div",
    columns = 4,
    gap = 8,
    columnGap,
    rowGap,
    minRowHeight,
    autoRows,
    rows,
    areas,
    placeItems,
    placeContent,
    justifyItems,
    alignItems,
    responsive,
    style,
    className,
    children,
    ...rest
  } = props;

  const baseStyle = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns:
        typeof columns === "number"
          ? `repeat(${columns}, minmax(0, 1fr))`
          : String(columns),
      ...(gap != null ? { gap: toCssSize(gap) } : {}),
      ...(columnGap != null ? { columnGap: toCssSize(columnGap) } : {}),
      ...(rowGap != null ? { rowGap: toCssSize(rowGap) } : {}),
      ...(rows != null && {
        gridTemplateRows:
          typeof rows === "number"
            ? `repeat(${rows}, minmax(0, 1fr))`
            : String(rows),
      }),
      ...(areas != null && {
        gridTemplateAreas: Array.isArray(areas)
          ? areas.map((r) => `'${r}'`).join(" ")
          : String(areas),
      }),
      ...(minRowHeight ? { gridAutoRows: toCssSize(minRowHeight) } : {}),
      ...(autoRows != null ? { gridAutoRows: resolveAutoRows(autoRows) } : {}),
      ...(placeItems != null ? { placeItems: String(placeItems) } : {}),
      ...(placeContent != null ? { placeContent: String(placeContent) } : {}),
      ...(justifyItems != null ? { justifyItems: String(justifyItems) } : {}),
      ...(alignItems != null ? { alignItems: String(alignItems) } : {}),
    }),
    [
      columns,
      gap,
      columnGap,
      rowGap,
      rows,
      areas,
      minRowHeight,
      autoRows,
      placeItems,
      placeContent,
      justifyItems,
      alignItems,
    ]
  );

  const active = useBreakpoint();
  const computedStyle = useMemo(
    () => pickResponsive(baseStyle, responsive, active),
    [baseStyle, responsive, active]
  );

  const Component = _as;
  return (
    <Component
      ref={ref}
      className={className}
      role={rest.role}
      style={{ ...computedStyle, ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
});

BentoGrid.propTypes = {
  as: PropTypes.any,
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columnGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rowGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minRowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  autoRows: PropTypes.oneOfType([
    PropTypes.oneOf(["sm", "md", "lg"]),
    PropTypes.number,
    PropTypes.string,
  ]),
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  areas: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  placeItems: PropTypes.string,
  placeContent: PropTypes.string,
  justifyItems: PropTypes.string,
  alignItems: PropTypes.string,
  responsive: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};
