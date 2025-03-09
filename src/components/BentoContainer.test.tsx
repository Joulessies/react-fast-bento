import { BentoContainer } from "./BentoContainer";
import { expect, test } from "vitest";

test("BentoContainer renders", () => {
    expect(<BentoContainer>Test content</BentoContainer>).toMatchInlineSnapshot(`
      <BentoContainer>
        Test content
      </BentoContainer>
    `);
});
