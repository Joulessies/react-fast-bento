---
sidebar_position: 2
---

# Getting Started

This guide will help you get started with React Fast Bento in your project.

## Installation

Install React Fast Bento using npm or yarn:

```bash
# Using npm
npm install react-fast-bento

# Using yarn
yarn add react-fast-bento
```

## Basic Usage

Here's a simple example of how to use React Fast Bento:

```jsx
import { BentoGrid, BentoGridItem } from "react-fast-bento";

function MyBentoGrid() {
  return (
    <BentoGrid>
      <BentoGridItem
        title="Welcome"
        description="This is a sample Bento Grid item"
        className="col-span-2 row-span-2"
      >
        <div className="p-4">
          <h2>Welcome to React Fast Bento</h2>
          <p>Create beautiful layouts with ease</p>
        </div>
      </BentoGridItem>

      <BentoGridItem
        title="Features"
        description="Key features of React Fast Bento"
        className="col-span-1 row-span-1"
      >
        <div className="p-4">
          <ul>
            <li>Easy to use</li>
            <li>Responsive</li>
            <li>Customizable</li>
          </ul>
        </div>
      </BentoGridItem>
    </BentoGrid>
  );
}
```

## Key Components

### BentoGrid

The main container component that holds all your Bento Grid items.

```jsx
<BentoGrid
  className="grid grid-cols-3 gap-4"
  // Additional props for customization
>
  {/* BentoGridItems go here */}
</BentoGrid>
```

### BentoGridItem

Individual items within the Bento Grid. Each item can span multiple columns and rows.

```jsx
<BentoGridItem
  title="Item Title"
  description="Item description"
  className="col-span-2 row-span-1"
  // Additional props for customization
>
  {/* Your content goes here */}
</BentoGridItem>
```

## Customization

React Fast Bento is highly customizable. You can:

- Customize the grid layout using CSS Grid classes
- Style individual items using className props
- Override default styles using CSS variables
- Add animations and transitions

## Next Steps

- Check out the [Examples](/docs/examples) section for more usage examples
- Learn about [Advanced Features](/docs/advanced-features)
- Read the [API Reference](/docs/api-reference) for detailed component documentation

## Need Help?

If you need help or have questions:

- Check our [GitHub repository](https://github.com/yourusername/react-fast-bento)
- Open an issue for bugs or feature requests
- Join our community discussions
