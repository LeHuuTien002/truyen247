import React, {useEffect, useState} from 'react';
import {deleteTheLoai, updateTheLoai} from "../../services/theLoaiService";
import Alert from "../Alert";
import SearchBar from "../SearchBar";

const TableWithPagination = ({dstheloai, setDsTheloai}) => {
    const [filteredData, setFilteredData] = useState(dstheloai);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5; // Số hàng mỗi trang

    // Tính toán số trang và hàng hiển thị
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    useEffect(() => {
        setFilteredData(dstheloai); // Khởi tạo filteredData với toàn bộ dữ liệu ban đầu
    }, [dstheloai]);

    const totalPages = Math.ceil(dstheloai.length / rowsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const [tenTheLoai, setTenTheLoai] = useState("");
    const [mota, setMota] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [selectedTheLoai, setSelectedTheLoai] = useState(null);
    const [id, setId] = useState(null);
    const token = localStorage.getItem("token");


    // Xử lý tìm kiếm
    const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            setFilteredData(dstheloai); // Nếu không có từ khóa, hiển thị toàn bộ dữ liệu
        } else {
            const filtered = dstheloai.filter((item) =>
                item.tenTheLoai && item.tenTheLoai.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered); // Cập nhật dữ liệu đã lọc
        }
        setCurrentPage(1); // Reset về trang đầu tiên sau khi tìm kiếm
    };


    // Hàm gọi khi nhấn vào nút chỉnh sửa để hiển thị dữ liệu trong modal
    const handleEditClick = (theloai) => {
        setSelectedTheLoai(theloai); // Lưu thể loại hiện tại vào state
        setTenTheLoai(theloai.tenTheLoai); // Gán giá trị của tenTheLoai từ theloai được chọn
        setId(theloai.id);
        setMota(theloai.mota); // Gán giá trị của mô tả từ theloai được chọn
    }
    // Hàm cập nhật giá trị của ô input tên thể loại
    const onChangeTenTheLoai = (e) => {
        setTenTheLoai(e.target.value);
    };

    // Hàm cập nhật giá trị của ô textarea mô tả
    const onChangeMota = (e) => {
        setMota(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess('');
        setErrorMessage('');
        try {
            const {success: successMessage, updatedList} = await updateTheLoai(id, tenTheLoai, mota, token);
            setDsTheloai(updatedList); // Cập nhật danh sách thể loại với dữ liệu mới
            setSuccess(successMessage);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        setSuccess('');
        setErrorMessage('');
        try {
            const {success: successMessage, updatedList} = await deleteTheLoai(id, token);
            setDsTheloai(updatedList); // Cập nhật danh sách thể loại với dữ liệu mới
            // Thiết lập thông báo thành công
            setSuccess(successMessage);
            console.log(successMessage)
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch}/>
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
                {currentRows.length > 0 ? (currentRows.map((theloai, index) => (
                        <tr key={index}>
                            <td>{theloai.tenTheLoai}</td>
                            <td>{theloai.mota}</td>
                            <td>{theloai.ngaytao}</td>
                            <td>{theloai.ngaycapnhat}</td>

                            <td>
                                <div className="d-flex">
                                    {/*Update*/}
                                    <button type="button" className="btn btn-outline-success me-2"
                                            onClick={() => handleEditClick(theloai)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop1">
                                        <i className="bi bi-pencil-square"></i>
                                    </button>

                                    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static"
                                         data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                                         aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="staticBackdropLabel">Cập nhật thể loại
                                                        truyện</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <form onSubmit={handleSubmit}>
                                                        {/* Thông báo thành công */}
                                                        <Alert
                                                            message={success}
                                                            type="success"
                                                            onClose={() => setSuccess('')}
                                                        />
                                                        <div className="mb-3 mt-3">
                                                            <label htmlFor="storyGenreName">Tên thể loại:</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="storyGenreName"
                                                                placeholder="Nhập tên thể loại truyện"
                                                                name="storyGenreName"
                                                                value={tenTheLoai} // Hiển thị giá trị từ state
                                                                onChange={onChangeTenTheLoai} // Cập nhật state khi thay đổi input
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="description" className="form-label">Mô
                                                                tả: </label>
                                                            <textarea
                                                                required
                                                                className="form-control"
                                                                id="description"
                                                                name="description"
                                                                value={mota} // Hiển thị giá trị từ state
                                                                onChange={onChangeMota} // Cập nhật state khi thay đổi textarea
                                                                rows="10">
                                                        </textarea>
                                                        </div>
                                                        <button type="submit"
                                                                className="btn btn-outline-warning form-control mb-3"><span>Cập nhật</span>
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Delete*/}
                                    <button type="button"
                                            onClick={() => handleEditClick(theloai)}
                                            className="btn btn-outline-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop">
                                        <i className="bi bi-trash"></i>
                                    </button>

                                    <Alert message={success} type="success" onClose={() => setSuccess('')}/>
                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                         data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                                         aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="staticBackdropLabel">Thông báo</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    Bạn có muốn xóa thể loại truyện này không?
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-outline-warning"
                                                            data-bs-dismiss="modal">No
                                                    </button>
                                                    <button onClick={handleDelete} type="button" data-bs-dismiss="modal"
                                                            className="btn btn-outline-danger">Yes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )))
                    : (<tr>
                        <td colSpan="5" className="text-center">Không tìm thấy kết quả</td>
                    </tr>)}
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
