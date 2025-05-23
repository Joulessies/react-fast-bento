---
title: Advanced Usage
sidebar_position: 5
---

# Advanced Usage

## 📱 Responsive Grids

React Fast Bento layouts adapt to different screen sizes. Use CSS media queries or responsive props for more control.

## 🔄 Dynamic Content

Render grid items dynamically from arrays or API data:

```jsx
{
  items.map((item) => <BentoGridItem key={item.id} title={item.title} />);
}
```

## ⚡️ Performance Tips

- Use `React.memo` for grid items if they are complex.
- Avoid unnecessary re-renders by memoizing data.
- Only render visible items for very large grids (virtualization).
