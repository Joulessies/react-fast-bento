---
title: API Reference
sidebar_position: 3
---

# API Reference

## `<BentoGrid />`

A container component for your bento layout.

**Props:**

- `children`: ReactNode — The grid items to display.
- `columns` (optional): number — Number of columns in the grid. Default: 4.
- `gap` (optional): string — Gap between grid items. Default: '1rem'.

**Example:**

```jsx
<BentoGrid columns={3} gap="2rem">
  {/* ...items */}
</BentoGrid>
```

---

## `<BentoGridItem />`

A single item (tile/card) in the bento grid.

**Props:**

- `title`: string — The title of the item.
- `description` (optional): string — Description text.
- `span` (optional): number — How many columns this item should span. Default: 1.
- `children` (optional): ReactNode — Custom content inside the item.

**Example:**

```jsx
<BentoGridItem title="Profile" description="User info" span={2}>
  <img src="/avatar.png" alt="Avatar" />
</BentoGridItem>
```
