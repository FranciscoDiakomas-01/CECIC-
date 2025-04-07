import React, { useEffect } from 'react';
import './Alert.css';

interface AlertProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`alert alert-${type}`}>
            <p>{message}</p>
        </div>
    );
};

export default Alert; 