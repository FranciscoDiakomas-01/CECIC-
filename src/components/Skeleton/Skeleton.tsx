import React from 'react';
import './Skeleton.css';

interface SkeletonProps {
    type: 'card' | 'text' | 'image' | 'button' | 'badge';
    width?: string;
    height?: string;
    className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ type, width, height, className }) => {
    const baseClasses = 'skeleton';
    const typeClasses = {
        card: 'skeleton-card',
        text: 'skeleton-text',
        image: 'skeleton-image',
        button: 'skeleton-button',
        badge: 'skeleton-badge'
    };

    return (
        <div 
            className={`${baseClasses} ${typeClasses[type]} ${className || ''}`}
            style={{ width, height }}
        />
    );
};

export default Skeleton; 