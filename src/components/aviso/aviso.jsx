import React, { useEffect } from 'react';
import './aviso.scss';

const Notification = ({ message, onClose, duration, type }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose(); 
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [message, duration, onClose]);

    if (!message) return null; 

    const styles = {
        success: {
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
        },
        error: {
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
        },
        warning: {
            backgroundColor: '#fff3cd',
            color: '#856404',
            border: '1px solid #ffeeba',
        },
        info: {
            backgroundColor: '#d1ecf1',
            color: '#0c5460',
            border: '1px solid #bee5eb',
        },
    };

    const currentStyle = styles[type] || styles.info; 

    return (
        <div className="notification" style={currentStyle}>
            <p>{message}</p>
            <button onClick={onClose}>Fechar</button>
        </div>
    );
};

export default Notification;
