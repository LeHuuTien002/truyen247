import React, {useEffect, useState} from "react";
import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

import TableWithPagination from "./TableWithPagination";

import Alert from "../Alert";
import {createGenre, fetchGenre} from "../../services/genreService";

const Genre = () => {
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [genreList, setGenreList] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
        setErrorMessage('');
    }
    const onChangeDescription = (e) => {
        const description = e.target.value;
        setDescription(description);
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
        const loadGenre = async () => {
            try {
                const data = await fetchGenre(token); // Gọi hàm fetchTheLoai từ file service
                setGenreList(data);
                setLoading(false);
            } catch (error) {
                setErrorMessage(error.message);
                setLoading(false);
            }
        };

        loadGenre();
    }, [token]); // Chạy lại khi token thay đổi

    const handleSubmit = async (e) => {
        setErrorMessage('');
        e.preventDefault();
        try {
            const {success: successMessage, updatedList} = await createGenre(name, description, token);
            setGenreList(updatedList);
            setSuccessMessage(successMessage);
            setName("");
            setDescription("");
        } catch (error) {
            setErrorMessage(error.message);
        }
    }
    return (
        <div className="container bg-dark p-5">
            <h2 className="text-warning text-center">Tạo thể loại truyện</h2>
            <form onSubmit={handleSubmit} className="container">
                {successMessage && (
                    <Alert
                        message={successMessage}
                        type="success"
                        onClose={() => setSuccessMessage('')}
                    />
                )}
                {errorMessage && (
                    <Alert
                        message={errorMessage}
                        type="danger"
                        onClose={() => setErrorMessage('')}
                    />
                )}
                <div className="mb-3 mt-3">
                    <label htmlFor="storyGenreName">Tên thể loại:</label>
                    <input
                        type="text"
                        className="form-control mb-1"
                        id="storyGenreName"
                        placeholder="Nhập tên thể loại truyện"
                        name="storyGenreName"
                        value={name}
                        required
                        onChange={onChangeName}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Mô tả: </label>
                    <textarea
                        required
                        className="form-control"
                        id="description"
                        value={description}
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
                    genreList={genreList}
                    setGenreList={setGenreList}/> {/* Truyền dữ liệu vào component */}
            </div>
        </div>
    );
};

export default Genre;