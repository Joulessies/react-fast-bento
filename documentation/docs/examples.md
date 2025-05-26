---
sidebar_position: 3
hide_table_of_contents: true
---

# Examples

Here are some practical examples of how to use React Fast Bento in your projects.

## Basic Grid Layout

```jsx
import { BentoContainer, BentoItem } from "react-fast-bento";

function BasicGrid() {
  return (
    <BentoContainer>
      <BentoItem colSpan={2} rowSpan={2}>
        <div>Large Item</div>
      </BentoItem>
      <BentoItem colSpan={1} rowSpan={1}>
        <div>Small Item</div>
      </BentoItem>
    </BentoContainer>
  );
}
```

## Responsive Dashboard

```jsx
import { BentoContainer, BentoItem } from "react-fast-bento";

function Dashboard() {
  return (
    <BentoContainer style={{ maxWidth: 1200, margin: "0 auto" }} gap={24}>
      <BentoItem colSpan={2} rowSpan={1}>
        <div>Statistics</div>
      </BentoItem>
      <BentoItem colSpan={1} rowSpan={2}>
        <div>Sidebar</div>
      </BentoItem>
      <BentoItem colSpan={1} rowSpan={1}>
        <div>Recent Activity</div>
      </BentoItem>
    </BentoContainer>
  );
}
```

## Custom Theming

```jsx
import { BentoContainer, BentoItem } from "react-fast-bento";

function ThemedGrid() {
  return (
    <BentoContainer theme="dark" gap={32} padding={32}>
      <BentoItem colSpan={2}>
        <div>Dark Theme Item</div>
      </BentoItem>
      <BentoItem colSpan={1}>
        <div>Light Theme Item</div>
      </BentoItem>
    </BentoContainer>
  );
}
```

---

Feel free to mix and match these examples or adapt them to your own use case. For more advanced usage, see the API Reference or Customization sections.
