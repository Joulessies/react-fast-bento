import {
  __toESM,
  require_jsx_runtime
} from "./chunk-ZOBA7WIN.js";

// src/components/BentoItem.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var BentoItem = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  style,
  className
}) => {
  const itemStyle = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className, style: itemStyle, children });
};

export {
  BentoItem
};
