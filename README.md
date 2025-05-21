# React Fast Bento

A lightweight and flexible React component library for creating beautiful bento grid layouts.

## Installation

```bash
npm install react-fast-bento
```

## Usage

### Basic Example

```jsx
import React from "react";
import { BentoContainer, BentoItem } from "react-fast-bento";

const App = () => {
  return (
    <BentoContainer colSpan={3} rowSpan={2} spacing={10}>
      <BentoItem colSpan={1} rowSpan={1}>
        Item 1
      </BentoItem>
      <BentoItem colSpan={2} rowSpan={1}>
        Item 2
      </BentoItem>
      <BentoItem colSpan={1} rowSpan={1}>
        Item 3
      </BentoItem>
      <BentoItem colSpan={2} rowSpan={1}>
        Item 4
      </BentoItem>
    </BentoContainer>
  );
};

export default App;
```

### Custom Grid Template

You can define a custom grid template using the `gridTemplate` prop.

```jsx
<BentoContainer gridTemplate="1fr 2fr 1fr" spacing={10}>
  <BentoItem colSpan={1} rowSpan={1}>
    Item 1
  </BentoItem>
  <BentoItem colSpan={2} rowSpan={1}>
    Item 2
  </BentoItem>
  <BentoItem colSpan={1} rowSpan={1}>
    Item 3
  </BentoItem>
</BentoContainer>
```

### Drag and Drop

Enable drag and drop functionality using the `onDragEnd` prop.

```jsx
const handleDragEnd = (result) => {
  // Handle drag end logic here
};

<BentoContainer onDragEnd={handleDragEnd} spacing={10}>
  <BentoItem draggableId="item-1" index={0}>
    Item 1
  </BentoItem>
  <BentoItem draggableId="item-2" index={1}>
    Item 2
  </BentoItem>
  <BentoItem draggableId="item-3" index={2}>
    Item 3
  </BentoItem>
</BentoContainer>;
```

### Responsive Design

Use the `sm`, `md`, and `lg` props to define responsive layouts.

```jsx
<BentoContainer
  colSpan={1}
  rowSpan={1}
  sm={{ colSpan: 2, rowSpan: 1, spacing: 5 }}
  md={{ colSpan: 3, rowSpan: 1, spacing: 10 }}
  lg={{ colSpan: 4, rowSpan: 1, spacing: 15 }}
  spacing={0}
>
  <BentoItem>Item 1</BentoItem>
  <BentoItem>Item 2</BentoItem>
  <BentoItem>Item 3</BentoItem>
  <BentoItem>Item 4</BentoItem>
</BentoContainer>
```

### Error Handling

The components are wrapped with error boundaries to gracefully handle runtime errors.

```jsx
<BentoContainer>
  <BentoItem>Item 1</BentoItem>
  <BentoItem>Item 2</BentoItem>
  <BentoItem>Item 3</BentoItem>
</BentoContainer>
```

## Props

### BentoContainer

| Prop              | Type                                                     | Default         | Description                                           |
| ----------------- | -------------------------------------------------------- | --------------- | ----------------------------------------------------- |
| children          | ReactNode                                                | -               | Child components to be rendered inside the container. |
| colSpan           | number                                                   | 1               | Number of columns in the grid.                        |
| rowSpan           | number                                                   | 1               | Number of rows in the grid.                           |
| align             | "start" \| "center" \| "end"                             | "start"         | Alignment of the grid items.                          |
| alignItems        | "start" \| "center" \| "end"                             | "start"         | Alignment of the grid items along the cross axis.     |
| spacing           | number                                                   | 0               | Spacing between grid items.                           |
| justify           | "start" \| "center" \| "end"                             | "start"         | Justification of the grid items.                      |
| direction         | "row" \| "column"                                        | "row"           | Direction of the grid items.                          |
| style             | CSSProperties                                            | -               | Custom styles for the container.                      |
| width             | string                                                   | -               | Width of the container.                               |
| height            | string                                                   | -               | Height of the container.                              |
| animate           | boolean                                                  | false           | Whether to animate the container.                     |
| transition        | string                                                   | "all 0.3s ease" | Transition for the container.                         |
| animationDuration | string                                                   | "0.3s"          | Duration of the animation.                            |
| sm                | { colSpan?: number; rowSpan?: number; spacing?: number } | -               | Responsive styles for small screens.                  |
| md                | { colSpan?: number; rowSpan?: number; spacing?: number } | -               | Responsive styles for medium screens.                 |
| lg                | { colSpan?: number; rowSpan?: number; spacing?: number } | -               | Responsive styles for large screens.                  |
| theme             | "light" \| "dark" \| "minimal"                           | "light"         | Theme of the container.                               |
| lazyLoad          | boolean                                                  | false           | Whether to lazy load the items.                       |
| itemCount         | number                                                   | -               | Number of items to load.                              |
| onDragEnd         | (result: any) => void                                    | -               | Callback function for drag end event.                 |
| gridTemplate      | string                                                   | -               | Custom grid template for the container.               |

### BentoItem

| Prop        | Type          | Default | Description                                      |
| ----------- | ------------- | ------- | ------------------------------------------------ |
| children    | ReactNode     | -       | Child components to be rendered inside the item. |
| colSpan     | number        | 1       | Number of columns the item spans.                |
| rowSpan     | number        | 1       | Number of rows the item spans.                   |
| style       | CSSProperties | -       | Custom styles for the item.                      |
| draggableId | string        | -       | ID for the draggable item.                       |
| index       | number        | -       | Index of the item in the list.                   |

## License

MIT
