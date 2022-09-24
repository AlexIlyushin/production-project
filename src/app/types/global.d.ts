declare module '*.module.css';
declare module '*.module.scss';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' { // особая декларация чтоб пропсы были видны в импортируемом компоненте
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare const __IS_DEV__:boolean;
