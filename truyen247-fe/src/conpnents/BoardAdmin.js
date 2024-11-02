import {useEffect, useState} from "react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import {Link, useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";
import axios from "axios";
import TableWithPagination from "./TableWithPagination";

const BoardAdmin = () => {
    const [content, setContent] = useState("");
    const [tenTheLoai, setTenTheLoai] = useState("");
    const [mota, setMota] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [dstheloai, setDsTheloai] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

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
    const onChangeStoryGenreName = (e) => {
        const storyGenreName = e.target.value;
        setTenTheLoai(storyGenreName);
        setErrorMessage('');
    }
    const fetchTheLoai = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/admin/theloais', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setDsTheloai(response.data);
            setLoading(false)
        } catch (error) {
            setErrorMessage('Có lỗi xảy ra khi tải dữ liệu!');
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchTheLoai();
    }, []);
    const onChangeDescription = (e) => {
        const description = e.target.value;
        setMota(description);
    }
    const handleSubmit = async (e) => {
        setErrorMessage('');
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8080/api/admin/theloais',
                {tenTheLoai, mota},
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Định dạng đúng headers với Authorization
                    },
                }
            );
            console.log('Tạo thể loại truyện thành công: ', response);
            setSuccess(response.data.body);
            setTenTheLoai("");
            setMota("");
            // Tải lại trang sau khi thêm thành công
            window.location.reload();
        } catch (error) {
            console.log(error)
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Đã xảy ra lỗi không xác định.');
            }
        }
    }
    return (
        <div className="container">
            <div className="container bg-dark p-5">
                <span> <Link to="/" className="text-decoration-none">Trang chủ </Link>
                    <i className="bi bi-chevron-double-right"></i>
                    <span className="text-warning">Thể loại truyện</span>
                </span>
                <h2 className="text-warning text-center">Thể loại truyện</h2>
                <form onSubmit={handleSubmit} className="container p-4">
                    {success &&
                        <div className="alert alert-success alert-dismissible fade show container col"
                             role="alert">{success}
                            <button type="button" className="btn-close" data-bs-dismiss="alert"
                                    aria-label="Close"></button>
                        </div>
                    }
                    <div className="mb-3 mt-3">
                        <label htmlFor="storyGenreName">Tên thể loại:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="storyGenreName"
                            placeholder="Nhập tên thể loại truyện"
                            name="storyGenreName"
                            value={tenTheLoai}
                            required
                            onChange={onChangeStoryGenreName}
                        />
                        {errorMessage && <p className="container alert alert-danger alert-dismissible fade show mt-3"
                                            role="alert">{errorMessage}</p>}
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
                    <TableWithPagination dstheloai={dstheloai}/> {/* Truyền dữ liệu vào component */}
                </div>
            </div>
        </div>
    );
};

export default BoardAdmin;