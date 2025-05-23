import { expect, test } from "vitest";
import { BentoItem } from "./BentoItem";
import { render } from "@testing-library/react";

test("BentoItem renders", () => {
  const { container } = render(<BentoItem>Test content</BentoItem>);

  expect(container).toMatchSnapshot();
});
