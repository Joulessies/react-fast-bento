import {
    useState,
    useId,
    useRef,
    useEffect,
    CSSProperties,
    useCallback,
    FC
} from 'react';

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
};

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

    // React Hooks
    const [bento, setBento] = useState<string>('');
    const [bentoWidth, setBentoWidth] = useState<number>(300);
    const [bentoHeight, setBentoHeight] = useState<number>(300);
    const [bentoBackground, setBentoBackground] = useState<string>('');
    const [bentoBorder, setBentoBorder] = useState<string>('');
    const containerRef = useRef<HTMLDivElement>(null);
    const bentoRef = useRef<HTMLDivElement>(null);

    const calculateWidth = useCallback(() => {
        if (bentoRef.current) {
            const containerRect = bentoRef.current.getBoundingClientRect();
            const bentoRect = bentoRef.current.getBoundingClientRect();
            const bentoWidth = containerRect.width - bentoRect.width;
            setBentoWidth(bentoRef.current.offsetWidth);
        }

        if (bentoRef.current) {
            const containerRect = bentoRef.current.getBoundingClientRect();
            const bentoRect = bentoRef.current.getBoundingClientRect();
            const bentoHeight = containerRect.height - bentoRect.height;
            setBentoHeight(bentoRef.current.offsetHeight);
        }

        if (autoWidth || autoHeight) {
            setBentoWidth('auto');
        }

    }, [autoWidth, containerRef, bentoRef]);

  
}


