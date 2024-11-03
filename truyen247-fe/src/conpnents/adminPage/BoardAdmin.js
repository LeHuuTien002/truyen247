import React, {useEffect, useState} from "react";
import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";
import {Link} from "react-router-dom";

import TableWithPagination from "./TableWithPagination";

import Alert from "../Alert";
import {createTheLoai, fetchTheLoai} from "../../services/theLoaiService";

const BoardAdmin = () => {
    const [content, setContent] = useState("");
    const [tenTheLoai, setTenTheLoai] = useState("");
    const [mota, setMota] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [dstheloai, setDsTheloai] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    const onChangeStoryGenreName = (e) => {
        const storyGenreName = e.target.value;
        setTenTheLoai(storyGenreName);
        setErrorMessage('');
    }
    const onChangeDescription = (e) => {
        const description = e.target.value;
        setMota(description);
    }

    useEffect(() => {
        UserService.getAdminBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                setContent(_content);
                if (error.response && error.response.status === 401) {
                    EventBus.dispatch("logout");
                }
            }
        );
    }, []);
    useEffect(() => {
        setErrorMessage('');
        const loadTheLoai = async () => {
            try {
                const data = await fetchTheLoai(token); // Gọi hàm fetchTheLoai từ file service
                setDsTheloai(data);
                setLoading(false);
            } catch (error) {
                setErrorMessage(error.message);
                setLoading(false);
            }
        };

        loadTheLoai();
    }, [token]); // Chạy lại khi token thay đổi

    const handleSubmit = async (e) => {
        setErrorMessage('');
        e.preventDefault();
        try {
            const {success: successMessage, updatedList} = await createTheLoai(tenTheLoai, mota, token);
            setDsTheloai(updatedList);
            setSuccess(successMessage);
            setTenTheLoai("");
            setMota("");
        } catch (error) {
            setErrorMessage(error.message);
        }
    }
    return (
        <div className="container">
            <div className="container bg-dark p-5">
                <span> <Link to="/" className="text-decoration-none">Trang chủ </Link>
                    <i className="bi bi-chevron-double-right"></i>
                    <span className="text-warning">Tạo thể loại truyện</span>
                </span>
                <h2 className="text-warning text-center">Tạo thể loại truyện</h2>
                <form onSubmit={handleSubmit} className="container">
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
                            className="form-control mb-1"
                            id="storyGenreName"
                            placeholder="Nhập tên thể loại truyện"
                            name="storyGenreName"
                            value={tenTheLoai}
                            required
                            onChange={onChangeStoryGenreName}
                        />
                        {/* Thông báo thành công */}
                        <Alert
                            message={errorMessage}
                            type="danger"
                            onClose={() => setErrorMessage('')}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Mô tả: </label>
                        <textarea
                            required
                            className="form-control"
                            id="description"
                            value={mota}
                            name="description"
                            onChange={onChangeDescription}
                            rows="5">
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-warning form-control mb-3">
                        <span>Thêm</span>
                    </button>
                </form>
                <div className="container mt-3">
                    <h3>Danh sách thể loại truyện</h3>
                    <TableWithPagination
                        dstheloai={dstheloai}
                        setDsTheloai={setDsTheloai}/> {/* Truyền dữ liệu vào component */}
                </div>
            </div>
        </div>
    );
};

export default BoardAdmin;