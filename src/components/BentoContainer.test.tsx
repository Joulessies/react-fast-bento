import { BentoContainer } from "./BentoContainer";
import { expect, test } from "vitest";
import { render } from "@testing-library/react";

test("BentoContainer renders", () => {
  const { container } = render(<BentoContainer>Test content</BentoContainer>);

  expect(container).toMatchSnapshot();
});
