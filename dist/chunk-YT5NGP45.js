import {
  __toESM,
  require_jsx_runtime
} from "./chunk-ZOBA7WIN.js";

// src/components/BentoContainer.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var BentoContainer = ({
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
  style
}) => {
  const containerStyle = {
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
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: containerStyle, children });
};

export {
  BentoContainer
};
