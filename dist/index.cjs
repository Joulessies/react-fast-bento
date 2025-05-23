"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  BentoContainer: () => BentoContainer,
  BentoItem: () => BentoItem
});
module.exports = __toCommonJS(index_exports);

// src/components/BentoContainer.tsx
var import_react = __toESM(require("react"), 1);
var import_framer_motion = require("framer-motion");
var import_jsx_runtime = require("react/jsx-runtime");
var ErrorBoundary = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Something went wrong. Please try again later." });
    }
    return this.props.children;
  }
};
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
  style,
  animate = false,
  transition = "all 0.3s ease",
  animationDuration = "0.3s",
  sm,
  md,
  lg,
  theme = "light",
  lazyLoad = false,
  itemCount,
  gridTemplate
}) => {
  const [visibleItems, setVisibleItems] = (0, import_react.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (lazyLoad && itemCount) {
      setIsLoading(true);
      const loadItems = () => {
        const items = import_react.default.Children.toArray(children).slice(0, itemCount);
        setVisibleItems(items);
        setIsLoading(false);
      };
      loadItems();
    } else {
      setVisibleItems(import_react.default.Children.toArray(children));
    }
  }, [children, lazyLoad, itemCount]);
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: gridTemplate || `repeat(${colSpan}, 1fr)`,
    gridTemplateRows: `repeat(${rowSpan}, 1fr)`,
    alignContent: align,
    alignItems,
    justifyContent: justify,
    gap: `${spacing}px`,
    flexDirection: direction,
    width,
    height,
    ...animate ? { transition, animationDuration } : {},
    ...theme === "dark" ? { backgroundColor: "#333", color: "#fff" } : {},
    ...theme === "minimal" ? { backgroundColor: "#f5f5f5", color: "#333" } : {},
    ...style
  };
  const responsiveStyle = {
    ...containerStyle,
    ...sm && {
      "@media (min-width: 640px)": {
        gridTemplateColumns: gridTemplate || `repeat(${sm.colSpan || colSpan}, 1fr)`,
        gridTemplateRows: `repeat(${sm.rowSpan || rowSpan}, 1fr)`,
        gap: `${sm.spacing || spacing}px`
      }
    },
    ...md && {
      "@media (min-width: 768px)": {
        gridTemplateColumns: gridTemplate || `repeat(${md.colSpan || colSpan}, 1fr)`,
        gridTemplateRows: `repeat(${md.rowSpan || rowSpan}, 1fr)`,
        gap: `${md.spacing || spacing}px`
      }
    },
    ...lg && {
      "@media (min-width: 1024px)": {
        gridTemplateColumns: gridTemplate || `repeat(${lg.colSpan || colSpan}, 1fr)`,
        gridTemplateRows: `repeat(${lg.rowSpan || rowSpan}, 1fr)`,
        gap: `${lg.spacing || spacing}px`
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_framer_motion.motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      style: responsiveStyle,
      children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Loading..." }) : visibleItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: item }, index))
    }
  ) });
};

// src/components/BentoItem.tsx
var import_react2 = __toESM(require("react"), 1);
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime2 = require("react/jsx-runtime");
var BentoItem = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  style,
  className,
  animate = false,
  transition = "all 0.3s ease",
  animationDuration = "0.3s",
  sm,
  md,
  lg,
  onClick,
  onMouseEnter,
  onMouseLeave,
  role,
  ariaLabel,
  focusable = true,
  theme = "light",
  lazyLoad = false,
  itemCount
}) => {
  const [visibleItems, setVisibleItems] = (0, import_react2.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (lazyLoad && itemCount) {
      setIsLoading(true);
      const loadItems = () => {
        const items = import_react2.default.Children.toArray(children).slice(0, itemCount);
        setVisibleItems(items);
        setIsLoading(false);
      };
      loadItems();
    } else {
      setVisibleItems(import_react2.default.Children.toArray(children));
    }
  }, [children, lazyLoad, itemCount]);
  const itemStyle = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
    ...animate ? { transition, animationDuration } : {},
    ...theme === "dark" ? { backgroundColor: "#333", color: "#fff" } : {},
    ...theme === "minimal" ? { backgroundColor: "#f5f5f5", color: "#333" } : {},
    ...style
  };
  const responsiveStyle = {
    ...itemStyle,
    ...sm && {
      "@media (min-width: 640px)": {
        gridColumn: `span ${sm.colSpan || colSpan}`,
        gridRow: `span ${sm.rowSpan || rowSpan}`
      }
    },
    ...md && {
      "@media (min-width: 768px)": {
        gridColumn: `span ${md.colSpan || colSpan}`,
        gridRow: `span ${md.rowSpan || rowSpan}`
      }
    },
    ...lg && {
      "@media (min-width: 1024px)": {
        gridColumn: `span ${lg.colSpan || colSpan}`,
        gridRow: `span ${lg.rowSpan || rowSpan}`
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_framer_motion2.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_framer_motion2.motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          className,
          style: responsiveStyle,
          onClick,
          onMouseEnter,
          onMouseLeave,
          role,
          "aria-label": ariaLabel,
          tabIndex: focusable ? 0 : -1,
          children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: "Loading..." }) : visibleItems
        }
      )
    }
  ) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BentoContainer,
  BentoItem
});
