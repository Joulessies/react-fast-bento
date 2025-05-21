# 🍱 React Fast Bento

A lightweight React package for building responsive bento grids and layouts with ease. Perfect for creating modern, dynamic dashboards and content layouts.

## Features

- 🎨 Responsive grid layouts
- 🖱️ Drag and drop functionality
- 🎭 Smooth animations with Framer Motion
- ♿ Accessibility support
- 🎯 TypeScript support
- 🎨 Customizable themes
- 📱 Mobile-friendly design

## Installation

```bash
npm install react-fast-bento
# or
yarn add react-fast-bento
```

## Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0",
  "framer-motion": "^10.0.0",
  "react-beautiful-dnd": "^13.0.0"
}
```

## Quick Start

```tsx
import { BentoContainer, BentoItem } from "react-fast-bento";

function MyBentoGrid() {
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

## Components

### BentoContainer

The main container component that manages the grid layout.

#### Props

| Prop           | Type                         | Description                         | Default |
| -------------- | ---------------------------- | ----------------------------------- | ------- |
| `children`     | ReactNode                    | Grid items                          | -       |
| `gap`          | number                       | Gap between grid items (in pixels)  | 16      |
| `padding`      | number                       | Padding around the grid (in pixels) | 16      |
| `maxWidth`     | number                       | Maximum width of the container      | 1200    |
| `theme`        | 'light' \| 'dark'            | Theme of the grid                   | 'light' |
| `onDragEnd`    | (result: DropResult) => void | Callback when drag ends             | -       |
| `gridTemplate` | string                       | Custom CSS grid template            | -       |

### BentoItem

Individual grid item component.

#### Props

| Prop           | Type       | Description               | Default |
| -------------- | ---------- | ------------------------- | ------- |
| `children`     | ReactNode  | Item content              | -       |
| `colSpan`      | number     | Number of columns to span | 1       |
| `rowSpan`      | number     | Number of rows to span    | 1       |
| `draggableId`  | string     | ID for drag and drop      | -       |
| `index`        | number     | Index for drag and drop   | -       |
| `onClick`      | () => void | Click handler             | -       |
| `onMouseEnter` | () => void | Mouse enter handler       | -       |
| `onMouseLeave` | () => void | Mouse leave handler       | -       |

## Examples

### Basic Grid

```tsx
<BentoContainer>
  <BentoItem colSpan={2} rowSpan={2}>
    <div>Featured Content</div>
  </BentoItem>
  <BentoItem colSpan={1} rowSpan={1}>
    <div>Small Item 1</div>
  </BentoItem>
  <BentoItem colSpan={1} rowSpan={1}>
    <div>Small Item 2</div>
  </BentoItem>
</BentoContainer>
```

### With Drag and Drop

```tsx
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function MyDraggableGrid() {
  const handleDragEnd = (result: DropResult) => {
    // Handle drag end
  };

  return (
    <BentoContainer onDragEnd={handleDragEnd}>
      <BentoItem draggableId="item1" index={0} colSpan={2}>
        <div>Draggable Item 1</div>
      </BentoItem>
      <BentoItem draggableId="item2" index={1} colSpan={1}>
        <div>Draggable Item 2</div>
      </BentoItem>
    </BentoContainer>
  );
}
```

### Custom Theme

```tsx
<BentoContainer theme="dark" gap={24} padding={24}>
  <BentoItem colSpan={2}>
    <div>Dark Theme Item</div>
  </BentoItem>
</BentoContainer>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC © [Your Name]
