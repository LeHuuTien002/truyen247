import React, {useEffect, useState} from 'react';
import {deleteGenre, updateGenre} from "../../services/genreService";
import Alert from "../Alert";
import SearchBar from "../SearchBar";

const TableWithPagination = ({genreList, setGenreList}) => {
    const [filteredData, setFilteredData] = useState(genreList);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5; // Số hàng mỗi trang

    // Tính toán số trang và hàng hiển thị
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    useEffect(() => {
        setFilteredData(genreList); // Khởi tạo filteredData với toàn bộ dữ liệu ban đầu
    }, [genreList]);

    const totalPages = Math.ceil(genreList.length / rowsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [id, setId] = useState(null);
    const token = localStorage.getItem("token");


    // Xử lý tìm kiếm
    const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            setFilteredData(genreList); // Nếu không có từ khóa, hiển thị toàn bộ dữ liệu
        } else {
            const filtered = genreList.filter((item) =>
                item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered); // Cập nhật dữ liệu đã lọc
        }
        setCurrentPage(1); // Reset về trang đầu tiên sau khi tìm kiếm
    };


    // Hàm gọi khi nhấn vào nút chỉnh sửa để hiển thị dữ liệu trong modal
    const handleEditClick = (genre) => {
        setSelectedGenre(genre); // Lưu thể loại hiện tại vào state
        setName(genre.name); // Gán giá trị của tenTheLoai từ theloai được chọn
        setId(genre.id);
        setDescription(genre.description); // Gán giá trị của mô tả từ theloai được chọn
    }
    // Hàm cập nhật giá trị của ô input tên thể loại
    const onChangeName = (e) => {
        setName(e.target.value);
    };

    // Hàm cập nhật giá trị của ô textarea mô tả
    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess('');
        setErrorMessage('');
        try {
            const {success: successMessage, updatedList} = await updateGenre(id, name, description, token);
            setGenreList(updatedList); // Cập nhật danh sách thể loại với dữ liệu mới
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
            const {success: successMessage, updatedList} = await deleteGenre(id, token);
            setGenreList(updatedList); // Cập nhật danh sách thể loại với dữ liệu mới
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
                {currentRows.length > 0 ? (currentRows.map((genre, index) => (
                        <tr key={index}>
                            <td>{genre.name}</td>
                            <td>{genre.description}</td>
                            <td>{genre.createAt}</td>
                            <td>{genre.updateAt}</td>

                            <td>
                                <div className="d-flex">
                                    {/*Update*/}
                                    <button type="button" className="btn btn-outline-success me-2"
                                            onClick={() => handleEditClick(genre)}
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
                                                                value={name} // Hiển thị giá trị từ state
                                                                onChange={onChangeName} // Cập nhật state khi thay đổi input
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
                                                                value={description} // Hiển thị giá trị từ state
                                                                onChange={onChangeDescription} // Cập nhật state khi thay đổi textarea
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
                                            onClick={() => handleEditClick(genre)}
                                            className="btn btn-outline-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop">
                                        <i className="bi bi-trash"></i>
                                    </button>

                                    <Alert message={success} type="danger" onClose={() => setSuccess('')}/>
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
