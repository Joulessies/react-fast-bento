import React from 'react';

const Bento = ({ columns = 4, spacing = 10, children, style, className = "", }) => {
    return (React.createElement("div", { className: `grid ${className}`, style: Object.assign({ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: `${spacing}px` }, style) }, children));
};

export { Bento };
//# sourceMappingURL=index.mjs.map
