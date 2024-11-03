// components/Alert.js
import React, {useEffect} from 'react';

const Alert = ({message, type = 'success', duration = 2000, onClose}) => {
    useEffect(() => {
        // Tự động ẩn thông báo sau thời gian `duration`
        const timer = setTimeout(() => {
            if (onClose) onClose(); // Gọi hàm onClose để ẩn thông báo
        }, duration);

        return () => clearTimeout(timer); // Xóa timer khi component unmount
    }, [message, duration, onClose]);

    if (!message) return null; // Nếu không có thông báo, không hiển thị gì cả

    return (
        <p className={`alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`}
           style={{zIndex: 9999}} role="alert">
            {message}
        </p>
    );
};

export default Alert;
