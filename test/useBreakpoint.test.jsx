import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
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
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
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
