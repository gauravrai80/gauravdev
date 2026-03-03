import React from 'react';
import './StarBorder.css';

interface StarBorderProps {
    as?: React.ElementType;
    className?: string;
    color?: string;
    speed?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    [key: string]: unknown;
}

const StarBorder: React.FC<StarBorderProps> = ({
    as: Component = 'div',
    className = '',
    color = 'hsl(180, 78%, 55%)',
    speed = '5s',
    children,
    style,
    ...rest
}) => {
    return (
        <Component
            className={`star-border-container ${className}`}
            style={{
                '--star-border-color': color,
                '--star-border-speed': speed,
                ...style,
            } as React.CSSProperties}
            {...rest}
        >
            <div className="star-border-content">
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;
