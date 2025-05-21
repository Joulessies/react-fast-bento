// src/components/BentoContainer.tsx
import React, {
  useState,
  useEffect
} from "react";
import { motion } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { jsx, jsxs } from "react/jsx-runtime";
var ErrorBoundary = class extends React.Component {
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
      return /* @__PURE__ */ jsx("div", { children: "Something went wrong. Please try again later." });
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
  onDragEnd,
  gridTemplate
}) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (lazyLoad && itemCount) {
      setIsLoading(true);
      const loadItems = () => {
        const items = React.Children.toArray(children).slice(0, itemCount);
        setVisibleItems(items);
        setIsLoading(false);
      };
      loadItems();
    } else {
      setVisibleItems(React.Children.toArray(children));
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
  const handleDragEnd = (result) => {
    if (onDragEnd) {
      onDragEnd(result);
    }
  };
  return /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(DragDropContext, { onDragEnd: handleDragEnd, children: /* @__PURE__ */ jsx(Droppable, { droppableId: "bento-container", children: (provided) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      style: responsiveStyle,
      ref: provided.innerRef,
      ...provided.droppableProps,
      children: [
        isLoading ? /* @__PURE__ */ jsx("div", { children: "Loading..." }) : visibleItems.map((item, index) => /* @__PURE__ */ jsx(
          Draggable,
          {
            draggableId: `item-${index}`,
            index,
            children: (provided2) => /* @__PURE__ */ jsx(
              "div",
              {
                ref: provided2.innerRef,
                ...provided2.draggableProps,
                ...provided2.dragHandleProps,
                children: item
              }
            )
          },
          index
        )),
        provided.placeholder
      ]
    }
  ) }) }) });
};

// src/components/BentoItem.tsx
import React2, {
  useState as useState2,
  useEffect as useEffect2
} from "react";
import { Draggable as Draggable2 } from "react-beautiful-dnd";
import { jsx as jsx2 } from "react/jsx-runtime";
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
  itemCount,
  draggableId,
  index
}) => {
  const [visibleItems, setVisibleItems] = useState2([]);
  const [isLoading, setIsLoading] = useState2(false);
  useEffect2(() => {
    if (lazyLoad && itemCount) {
      setIsLoading(true);
      const loadItems = () => {
        const items = React2.Children.toArray(children).slice(0, itemCount);
        setVisibleItems(items);
        setIsLoading(false);
      };
      loadItems();
    } else {
      setVisibleItems(React2.Children.toArray(children));
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
  return /* @__PURE__ */ jsx2(Draggable2, { draggableId, index, children: (provided) => /* @__PURE__ */ jsx2(
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
      ref: provided.innerRef,
      ...provided.draggableProps,
      ...provided.dragHandleProps,
      children: isLoading ? /* @__PURE__ */ jsx2("div", { children: "Loading..." }) : visibleItems
    }
  ) });
};
export {
  BentoContainer,
  BentoItem
};
