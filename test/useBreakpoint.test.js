import { renderHook } from "@testing-library/react";
import { jest } from '@jest/globals';
import { useBreakpoint } from "../src/index.js";

describe("useBreakpoint", () => {
  beforeAll(() => {
    // Simple matchMedia mock
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query) => {
        const mql = {
          matches: false,
          media: query,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        };
        return mql;
      },
    });
  });

  test("returns undefined by default", () => {
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBeUndefined();
  });
});
