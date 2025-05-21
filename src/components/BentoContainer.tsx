import React, {
  FC,
  CSSProperties,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { motion } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

interface BentoContainerProps {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  align?: "start" | "center" | "end";
  alignItems?: "start" | "center" | "end";
  spacing?: number;
  justify?: "start" | "center" | "end";
  direction?: "row" | "column";
  style?: CSSProperties;
  width?: string;
  height?: string;
  animate?: boolean;
  transition?: string;
  animationDuration?: string;
  sm?: { colSpan?: number; rowSpan?: number; spacing?: number };
  md?: { colSpan?: number; rowSpan?: number; spacing?: number };
  lg?: { colSpan?: number; rowSpan?: number; spacing?: number };
  theme?: "light" | "dark" | "minimal";
  lazyLoad?: boolean;
  itemCount?: number;
  onDragEnd?: (result: any) => void;
  gridTemplate?: string;
}

export const BentoContainer: FC<BentoContainerProps> = ({
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
  gridTemplate,
}) => {
  const [visibleItems, setVisibleItems] = useState<ReactNode[]>([]);
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

  const containerStyle: CSSProperties = {
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
    ...(animate ? { transition, animationDuration } : {}),
    ...(theme === "dark" ? { backgroundColor: "#333", color: "#fff" } : {}),
    ...(theme === "minimal"
      ? { backgroundColor: "#f5f5f5", color: "#333" }
      : {}),
    ...style,
  };

  const responsiveStyle: CSSProperties = {
    ...containerStyle,
    ...(sm && {
      "@media (min-width: 640px)": {
        gridTemplateColumns:
          gridTemplate || `repeat(${sm.colSpan || colSpan}, 1fr)`,
        gridTemplateRows: `repeat(${sm.rowSpan || rowSpan}, 1fr)`,
        gap: `${sm.spacing || spacing}px`,
      },
    }),
    ...(md && {
      "@media (min-width: 768px)": {
        gridTemplateColumns:
          gridTemplate || `repeat(${md.colSpan || colSpan}, 1fr)`,
        gridTemplateRows: `repeat(${md.rowSpan || rowSpan}, 1fr)`,
        gap: `${md.spacing || spacing}px`,
      },
    }),
    ...(lg && {
      "@media (min-width: 1024px)": {
        gridTemplateColumns:
          gridTemplate || `repeat(${lg.colSpan || colSpan}, 1fr)`,
        gridTemplateRows: `repeat(${lg.rowSpan || rowSpan}, 1fr)`,
        gap: `${lg.spacing || spacing}px`,
      },
    }),
  };

  const handleDragEnd = (result: any) => {
    if (onDragEnd) {
      onDragEnd(result);
    }
  };

  return (
    <ErrorBoundary>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="bento-container">
          {(provided) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={responsiveStyle}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                visibleItems.map((item, index) => (
                  <Draggable
                    key={index}
                    draggableId={`item-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </motion.div>
          )}
        </Droppable>
      </DragDropContext>
    </ErrorBoundary>
  );
};
