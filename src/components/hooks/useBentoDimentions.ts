import { useState, useEffect, useId, useCallback } from 'react';

const useBentoDimensions = () => {
  const [bentoWidth, setBentoWidth] = useState<number>(initialWidth);
  const [bentoHeight, setBentoHeight] = useState<number>(initialHeight);
  const containerRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  const calculateBentoDimensions = useCallback(() => {
    if (bentoRef.current && containerRef.current) {
      const bentoRect = bentoRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      setBentoWidth(bentoRect.width);
      setBentoHeight(bentoRect.height);
    }
  }, []);

  useEffect(() => {
    calculateBentoDimensions();
    window.addEventListener('resize', calculateBentoDimensions);
    return () => {
      window.removeEventListener('resize', calculateBentoDimensions);
    };
  }, [calculateBentoDimensions]);

  return { bentoWidth, bentoHeight, containerRef, bentoRef };
};
