import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange, rowsPerPage }) => {

    // Hàm tính toán các số trang cần hiển thị
    const generatePageNumbers = () => {
        const pageNumbers = [];

        // Hiển thị trang đầu tiên nếu trang hiện tại lớn hơn rowsPerPage + 1
        if (currentPage > rowsPerPage + 1) {
            pageNumbers.push(1);
            pageNumbers.push('...');
        }

        // Hiển thị các trang xung quanh trang hiện tại
        for (let i = Math.max(currentPage - rowsPerPage, 1); i <= Math.min(currentPage + rowsPerPage, totalPages); i++) {
            pageNumbers.push(i);
        }

        // Hiển thị trang cuối cùng nếu trang hiện tại nhỏ hơn tổng số trang trừ rowsPerPage
        if (currentPage < totalPages - rowsPerPage - 1) {
            pageNumbers.push('...');
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {/* Nút Previous */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
                        <i className="bi bi-chevron-left"></i> {/* Mũi tên trái */}
                    </button>
                </li>

                {/* Các số trang được tính toán */}
                {generatePageNumbers().map((page, index) => (
                    page === '...' ? (
                        <li key={index} className="page-item disabled">
                            <span className="page-link">...</span>
                        </li>
                    ) : (
                        <li key={index} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => onPageChange(page)}>
                                {page}
                            </button>
                        </li>
                    )
                ))}

                {/* Nút Next */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
                        <i className="bi bi-chevron-right"></i> {/* Mũi tên phải */}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
