import { useEffect, useMemo, useState } from "react";

const queries = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
};

export function useBreakpoint(customQueries) {
  const mq = customQueries || queries;
  const order = useMemo(() => ["xl", "lg", "md", "sm"], []);

  const getActive = () => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return undefined;
    }
    for (const key of order) {
      const q = mq[key];
      if (!q) continue;
      if (window.matchMedia(q).matches) return key;
    }
    return undefined;
  };

  const [active, setActive] = useState(getActive);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    )
      return;
    const mqls = Object.entries(mq)
      .filter(([, q]) => Boolean(q))
      .map(([, q]) => window.matchMedia(q));

    const onChange = () => setActive(getActive());
    mqls.forEach((mql) => mql.addEventListener?.("change", onChange));
    // Fallback for older browsers
    mqls.forEach((mql) => mql.addListener?.(onChange));

    // Initial sync in case
    onChange();

    return () => {
      mqls.forEach((mql) => mql.removeEventListener?.("change", onChange));
      mqls.forEach((mql) => mql.removeListener?.(onChange));
    };
  }, [mq]);

  return active; // one of 'sm' | 'md' | 'lg' | 'xl' | undefined
}
