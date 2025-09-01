import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn trang lên đầu mỗi khi location thay đổi
    }, [location]);

    return null; // Component này không cần render gì
};

export default ScrollToTop;
