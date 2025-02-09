"use strict";

import React from "react";

export const Bento = ({
  columns = 4,
  spacing = 10,
  children,
  style,
  className = "",
}) => {
  return React.createElement(
    "div",
    {
      className: `grid ${className}`,
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${spacing}px`,
        ...style,
      },
    },
    children,
  );
};

//# sourceMappingURL=index.js.map
