import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { test, expect } from "vitest";
import { Bento } from "../src";

test("renders Bento grid", () => {
  const { container, debug } = render(<Bento>Test</Bento>);
  debug();
  expect(container.firstChild).not.toBeNull();
  expect(container.firstChild).toHaveClass("grid");
});
