import React, {useState} from 'react';

const TableWithPagination = ({dstheloai}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5; // Số hàng mỗi trang

    // Tính toán số trang và hàng hiển thị
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = dstheloai.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(dstheloai.length / rowsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <table className="table table-dark table-hover table-bordered overflow-y: hidden">
                <thead className="text-center">
                <tr>
                    <th>Tên Thể Loại</th>
                    <th>Mô Tả</th>
                    <th>Ngày Tạo</th>
                    <th>Ngày Cập Nhật</th>
                    <th>Hành Động</th>
                </tr>
                </thead>
                <tbody>
                {currentRows.map((theloai, index) => (
                    <tr key={index}>
                        <td>{theloai.tenTheLoai}</td>
                        <td>{theloai.mota}</td>
                        <td>{theloai.ngaytao}</td>
                        <td>{theloai.ngaycapnhat}</td>
                        <td>
                            <div className="d-flex">
                                <button className="btn btn-outline-success me-2">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button className="btn btn-outline-danger">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Điều hướng phân trang */}
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => handleClick(currentPage - 1)}>
                            Previous
                        </button>
                    </li>

                    {Array.from({length: totalPages}, (_, i) => (
                        <li
                            key={i}
                            className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => handleClick(i + 1)}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handleClick(currentPage + 1)}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TableWithPagination;
