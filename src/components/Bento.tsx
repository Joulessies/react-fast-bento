import {
    useState,
    useId,
    useRef,
    useEffect,
    forwardRef,
    CSSProperties
} from 'react';

export type BentoProps = {
    /**
    * @description styling of the bento for a container.
    * @type CSSProperties
    * @default {}
    **/
    style?: React.CSSProperties;
    /**
    * @description className of the bento for a container.
    * @type string
    * @default ""
    **/
    className?: string;
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
};

const Bentos = (props: BentoProps) => {
    style = {},
    className = "" || '',
    bentoWidth = 300,
    bentoHeight = 300,
    bentoBackground = 'white',
    bentoBorder = {},
    bentoBorderRadius = 0,
    bentoShadow = {},
    bentoPadding = {},
    bentoMargin = {},
    bentoPosition = {},
    bentoTop = {},
    bentoRight = {},
    bentoBottom = {},
    bentoLeft = {},
    container = {},
} {
    // React Hooks
    const [bentoWidth, setBentoWidth] = useState(300);
    const [bentoHeight, setBentoHeight] = useState(300);
    const [bentoBackground, setBentoBackground] = useState('white');
    const [bentoBorder, setBentoBorder] = useState({});
    const [bentoBorderRadius, setBentoBorderRadius] = useState(0);
    const [bentoShadow, setBentoShadow] = useState({});
    const [bentoPadding, setBentoPadding] = useState({});
    const [container, setContainer] = useState({});

    // Calculate the bento width
    useEffect(() => {
        setBentoWidth(bentoWidth);
    }, []);

    // Calculate the bento height
    useEffect(() => {
        setBentoHeight(bentoHeight);
    }, []);

    // The bento background color
    useEffect(() => {
        setBentoBackground(bentoBackground || 'white');
    }, []);

    // The bento border
    useEffect(() => {}
        setBentoBorder(bentoBorder || {});
    } []);
}


