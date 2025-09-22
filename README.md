# react-fast-bento

Lightweight React components for fast bento grid layouts.

## Install

```bash
npm i react-fast-bento
```

## Usage

```jsx
import { BentoGrid, BentoBox, useBreakpoint } from "react-fast-bento";

export default function Example() {
  return (
    <BentoGrid
      columns={6}
      gap={12}
      columnGap={16}
      rowGap={12}
      rows={3}
      minRowHeight={120}
      placeItems="stretch"
      responsive={{ md: { columns: 8 }, lg: { columns: 12 } }}
    >
      <BentoBox colSpan={3} rowSpan={2}>
        A
      </BentoBox>
      <BentoBox span={2}>B</BentoBox>
      <BentoBox colSpan={1} placeSelf="center">
        C
      </BentoBox>
    </BentoGrid>
  );
}
```

## API

- `BentoGrid`

  - **columns**: number|string (default 4)
  - **gap**: number|string (default 8)
  - **columnGap / rowGap**: number|string
  - **rows**: number|string → `grid-template-rows`
  - **areas**: string|string[] → `grid-template-areas`
  - **minRowHeight**: number|string (sets `grid-auto-rows`)
  - **autoRows**: number|string|'sm'|'md'|'lg' presets
  - **placeItems / placeContent / justifyItems / alignItems**: string
  - **responsive**: `{ sm?|md?|lg?|xl?: { columns?, gap?, columnGap?, rowGap?, rows?, areas?, minRowHeight?, autoRows?, placeItems?, placeContent?, justifyItems?, alignItems? } }`
  - **as**: element/tag to render (default `div`)

- `BentoBox`

  - **colSpan / rowSpan**: number|string (maps to `grid-column`/`grid-row`)
  - **span**: number|string (shorthand for both axes)
  - **colStart / rowStart**: number|string
  - **placeSelf**: string
  - **asChild**: boolean (pass props/styles/className to child element)
  - **as**: element/tag to render (default `div`)

- `useBreakpoint`
  - Returns the active breakpoint key (`'sm'|'md'|'lg'|'xl'|undefined`).
  - Accepts optional custom queries: `{ sm?: string, md?: string, lg?: string, xl?: string }`.

## Notes

- Responsive behavior is computed via a breakpoint hook; no `@media` in inline styles.
- No runtime CSS dependency; uses inline styles. Bring your own visual styling.
- Works with React 17+.
