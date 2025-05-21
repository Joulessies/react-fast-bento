import { expect, test } from "vitest";
import { BentoItem } from "./BentoItem";

test("BentoItem renders", () => {
  expect(
    <BentoItem draggableId="test-id" index={0}>
      Test content
    </BentoItem>,
  ).toMatchInlineSnapshot(`
      <BentoItem>
        Test content
      </BentoItem>
    `);
});
