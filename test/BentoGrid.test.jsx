import { render } from "@testing-library/react";
import { BentoGrid } from "../src/index.js";

describe("BentoGrid", () => {
  test("renders with default columns and gap", () => {
    const { container } = render(
      <BentoGrid data-testid="grid">content</BentoGrid>
    );
    const el = container.querySelector("[data-testid='grid']");
    expect(el).toBeInTheDocument();
    expect(el.style.display).toBe("grid");
    expect(el.style.gap).toBe("8px");
  });

  test("applies custom columns and gaps", () => {
    const { getByTestId } = render(
      <BentoGrid data-testid="grid" columns={6} gap={12} />
    );
    const el = getByTestId("grid");
    expect(el.style.gap).toBe("12px");
    expect(el.style.gridTemplateColumns).toContain("repeat(6");
  });
});
