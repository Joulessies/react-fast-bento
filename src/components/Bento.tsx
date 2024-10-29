import {
    useState,
    useId,
    useRef,
    useEffect,
    CSSProperties,
    useCallback,
    FC
} from 'react';
import useBentoDimensions from './hooks/useBentoDimensions';

export type BentoProps = {
    /**
    @description Bento Prop
    @type string
    @default ''
     **/
    Bento?: string;
    /**
    * @description styling of the bento for a container.
    * @type CSSProperties
    * @default {}
    **/
    style?: React.CSSProperties;
    /**
    * @description width of the bento for a container.
    * @type number
    * @default 300
    **/
    width?: number;
    /**
    * @description height of the bento for a container.
    * @type number
    * @default 300
     **/
    height?: number;
    /**
    @description border radius of the bento for a container.
    @type number
    @default 0
     **/
    borderRadius?: number;
    /** 
    @description bento grid position for a container.
    @type CSSProperties
    @default {}
     **/
    position?: CSSProperties;
    /**
     @description bento grid style
     @type CSSProperties
     @default 0
    **/
    gridstyle?: CSSProperties;
}

const Bentos: FC<BentoProps> = ({
    const {
        Bento = '',
        style = {},
        width = 300,
        height = 300,
        borderRadius = 0,
        position = {}
    },
} => {
    const bentoRef = useRef<HTMLDivElement>(null);
    const [bentoId] = useState(`bento-${useId()}`);
    const { bentoWidth, bentoHeight } = useBentoDimensions(bentoRef, width, height);

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
}




