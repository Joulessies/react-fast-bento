# react-fast-bento

Lightweight React components for fast bento grid layouts.

## Install

```bash
npm i react-fast-bento
```

## Usage

```jsx
import { BentoGrid, BentoBox } from "react-fast-bento";

export default function Example() {
  return (
    <BentoGrid
      columns={6}
      gap={12}
      minRowHeight={120}
      responsive={{ md: { columns: 8 }, lg: { columns: 12 } }}
    >
      <BentoBox colSpan={3} rowSpan={2}>
        A
      </BentoBox>
      <BentoBox colSpan={2}>B</BentoBox>
      <BentoBox colSpan={1}>C</BentoBox>
    </BentoGrid>
  );
}
```

## API

- `BentoGrid`

  - **columns**: number|string (default 4)
  - **gap**: number|string (default 8)
  - **minRowHeight**: number|string (sets `grid-auto-rows`)
  - **responsive**: `{ sm?|md?|lg?|xl?: { columns?, gap?, minRowHeight? } }`
  - **as**: element/tag to render (default `div`)

- `BentoBox`
  - **colSpan**: number|string (maps to `grid-column`)
  - **rowSpan**: number|string (maps to `grid-row`)
  - **as**: element/tag to render (default `div`)

## Notes

- No runtime CSS dependency; uses inline styles. Bring your own visual styling.
- Works with React 17+.
