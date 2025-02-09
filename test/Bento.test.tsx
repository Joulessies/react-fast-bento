import { render } from "@testing-library/react";
import React from "react";
import { test, expect } from "vitest";
import { Bento } from "../src";

test("renders Bento grid", () => {
  const { container } = render(<Bento>Test</Bento>);
  expect(container.firstChild).toHaveClass("grid");
});
