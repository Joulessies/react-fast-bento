import React, {
  FC,
  CSSProperties,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BentoItemProps {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  style?: CSSProperties;
  className?: string;
  animate?: boolean;
  transition?: string;
  animationDuration?: string;
  sm?: { colSpan?: number; rowSpan?: number };
  md?: { colSpan?: number; rowSpan?: number };
  lg?: { colSpan?: number; rowSpan?: number };
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  role?: string;
  ariaLabel?: string;
  focusable?: boolean;
  theme?: "light" | "dark" | "minimal";
  lazyLoad?: boolean;
  itemCount?: number;
}

export const BentoItem: FC<BentoItemProps> = ({
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

  const itemStyle: CSSProperties = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
    ...(animate ? { transition, animationDuration } : {}),
    ...(theme === "dark" ? { backgroundColor: "#333", color: "#fff" } : {}),
    ...(theme === "minimal"
      ? { backgroundColor: "#f5f5f5", color: "#333" }
      : {}),
    ...style,
  };

  const responsiveStyle: CSSProperties = {
    ...itemStyle,
    ...(sm && {
      "@media (min-width: 640px)": {
        gridColumn: `span ${sm.colSpan || colSpan}`,
        gridRow: `span ${sm.rowSpan || rowSpan}`,
      },
    }),
    ...(md && {
      "@media (min-width: 768px)": {
        gridColumn: `span ${md.colSpan || colSpan}`,
        gridRow: `span ${md.rowSpan || rowSpan}`,
      },
    }),
    ...(lg && {
      "@media (min-width: 1024px)": {
        gridColumn: `span ${lg.colSpan || colSpan}`,
        gridRow: `span ${lg.rowSpan || rowSpan}`,
      },
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={className}
          style={responsiveStyle}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          role={role}
          aria-label={ariaLabel}
          tabIndex={focusable ? 0 : -1}
        >
          {isLoading ? <div>Loading...</div> : visibleItems}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
