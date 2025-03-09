
import { expect, test } from 'vitest';
import { BentoItem } from './BentoItem';

test('BentoItem renders', () => {
    expect(<BentoItem>Test content</BentoItem>).toMatchInlineSnapshot(`
      <BentoItem>
        Test content
      </BentoItem>
    `);
});
