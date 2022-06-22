import React, { FC, SVGProps } from 'react';

interface IconClockProps extends SVGProps<SVGSVGElement>{

};

const IconClock: FC<IconClockProps> = ({ ...props }) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"/></svg>
    );
};

export default IconClock;
