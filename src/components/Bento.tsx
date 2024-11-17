import { useState, useId, useRef, useEffect, CSSProperties, FC } from 'react';
import useBentoDimensions from './hooks/useBentoDimensions';

export type BentoProps = {
  Bento?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  borderRadius?: number;
  position?: CSSProperties;
  gridstyle?: CSSProperties;
};

const Bento: FC<BentoProps> = ({
  Bento = '',
  style = {},
  width = 300,
  height = 300,
  borderRadius = 0,
  position = {},
}) => {
  const bentoRef = useRef<HTMLDivElement>(null);
  const [bentoId] = useState(`bento-${useId()}`);
  const { bentoWidth, bentoHeight } = useBentoDimensions(
    bentoRef,
    width,
    height
  );

  useEffect(() => {
    if (bentoRef.current) {
      bentoRef.current.style.width = `${bentoWidth}px`;
      bentoRef.current.style.height = `${bentoHeight}px`;
    }
  }, [bentoWidth, bentoHeight]);

  return (
    <div
      ref={bentoRef}
      id={bentoId}
      style={{
        ...style,
        width: bentoWidth,
        height: bentoHeight,
        borderRadius: `${borderRadius}px`,
        ...position,
      }}
    >
      {Bento}
    </div>
  );
};

export default Bento;
