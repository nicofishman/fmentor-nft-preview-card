import React, { FC, SVGProps } from 'react';

interface IconEthereumProps extends SVGProps<SVGSVGElement> {
};

const IconEthereum: FC<IconEthereumProps> = ({ ...props }) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"/></svg>
    );
};

export default IconEthereum;
