import { render } from "@testing-library/react";
import { BentoGrid, BentoBox } from "../src/index.js";

describe("BentoBox", () => {
  test("applies colSpan and rowSpan styles", () => {
    const { getByTestId } = render(
      <BentoGrid>
        <BentoBox data-testid="box" colSpan={2} rowSpan={3} />
      </BentoGrid>
    );
    const el = getByTestId("box");
    expect(el.style.gridColumn).toContain("span 2");
    expect(el.style.gridRow).toContain("span 3");
  });

  test("asChild clones child and merges className and style", () => {
    const { getByTestId } = render(
      <BentoGrid>
        <BentoBox asChild className="outer" style={{ color: "red" }} span={2}>
          <button data-testid="btn" className="inner" style={{ padding: 4 }} />
        </BentoBox>
      </BentoGrid>
    );
    const el = getByTestId("btn");
    expect(el.className).toMatch(/outer/);
    expect(el.className).toMatch(/inner/);
    expect(el.style.color).toBe("red");
    expect(el.style.gridColumn).toContain("span 2");
    expect(el.style.gridRow).toContain("span 2");
  });
});
