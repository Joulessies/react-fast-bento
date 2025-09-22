import React from "react";
import PropTypes from "prop-types";

/**
 * BentoBox
 * Props:
 * - colSpan: number | string — e.g. 2 or '2 / span 2'
 * - rowSpan: number | string — e.g. 2 or '2 / span 2'
 * - as, style, className
 */
export const BentoBox = React.forwardRef(function BentoBox(props, ref) {
  const {
    as: _as = "div",
    asChild = false,
    colSpan,
    rowSpan,
    span,
    colStart,
    rowStart,
    placeSelf,
    style,
    className,
    children,
    ...rest
  } = props;

  const computedStyle = {
    ...(span != null && {
      gridColumn:
        typeof span === "number" ? `span ${span} / span ${span}` : String(span),
      gridRow:
        typeof span === "number" ? `span ${span} / span ${span}` : String(span),
    }),
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
    ...(colStart != null && { gridColumnStart: String(colStart) }),
    ...(rowStart != null && { gridRowStart: String(rowStart) }),
    ...(placeSelf != null && { placeSelf: String(placeSelf) }),
  };

  const Component = _as;
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      className: [children.props.className, className]
        .filter(Boolean)
        .join(" "),
      style: { ...computedStyle, ...children.props.style, ...style },
      ...rest,
    });
  }

  const El = Component;
  return React.createElement(
    El,
    { ref, className, style: { ...computedStyle, ...style }, ...rest },
    children
  );
});

BentoBox.propTypes = {
  as: PropTypes.any,
  asChild: PropTypes.bool,
  colSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rowSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  colStart: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rowStart: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeSelf: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};
