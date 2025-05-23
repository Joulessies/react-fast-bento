---
title: Customization
sidebar_position: 4
---

# Customization

React Fast Bento is designed to be flexible and customizable.

## 🎨 Styling

You can override default styles using CSS or styled-components:

```css
.bento-grid-item {
  background: #fffbe6;
  border-radius: 16px;
}
```

## 🌈 Theming

Integrate with your design system by passing custom class names or using CSS variables.

## 🧩 Custom Layouts

Change the number of columns, gaps, or item spans to create unique layouts:

```jsx
<BentoGrid columns={6} gap="0.5rem">
  {/* ...items */}
</BentoGrid>
```
