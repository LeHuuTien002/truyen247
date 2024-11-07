import React, {useState} from "react";
import {createComic} from "../../services/comicService";
import Alert from "../Alert";

const Comic = () => {
    const token = localStorage.getItem("token");

    const [name, setName] = useState("");
    const [otherName, setOtherName] = useState("");
    const [status, setStatus] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [activate, setActivate] = useState(false);
    const [file, setFile] = useState(null); // File hình ảnh bìa
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        setErrorMessage('');
        setErrorMessage('');
        e.preventDefault();
        try {
            const {
                success: successMessage,
                updatedList
            } = await createComic(name, otherName, status, content, author, activate, file, token);
            // setGenreList(updatedList);
            setSuccessMessage(successMessage);
            setName("");
            setOtherName("");
            setStatus("");
            setContent("");
            setAuthor("");
            setFile(null);
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="container bg-dark p-5">
            <h2 className="text-warning text-center">TẠO TRUYỆN TRANH MỚI</h2>
            <Alert
                message={successMessage}
                type="success"
                onClose={() => setSuccessMessage('')}
            />
            <form onSubmit={handleSubmit} className="container">
                <div className="mb-3">
                    <label htmlFor="comicName" className="form-label">Tên truyện: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control"
                           id="comicName" placeholder="Nhập tên truyện mới"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="otherComicName" className="form-label">Tên khác: </label>
                    <input type="text" value={otherName} onChange={(e) => setOtherName(e.target.value)}
                           className="form-control" id="otherComicName" placeholder="Nhập truyện có tên khác"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="authorName" className="form-label">Tác giả: </label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
                           className="form-control" id="authorName" placeholder="Nhập tên tác giả"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Tình trang: </label>
                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)}
                           className="form-control" id="status" placeholder="Nhập tình trạng truyện"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Nội dung: </label>
                    <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)}
                              id="content" rows="5"></textarea>
                </div>
                <div className="mb-3 input-group">
                    <label htmlFor="coverPhoto" className="input-group-text">Tải lên ảnh bìa: </label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} required className="form-control"
                           id="coverPhoto"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Công khai: </label>
                    <div className="form-check">
                        <input onChange={() => setActivate(true)} className="form-check-input" type="radio"
                               name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Có
                        </label>
                    </div>
                    <div className="form-check">
                        <input onChange={() => setActivate(false)} className="form-check-input" type="radio"
                               name="flexRadioDefault" id="flexRadioDefault2" checked={!activate}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Không
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-warning form-control">Tạo truyện mới</button>
            </form>
        </div>
    )
}
export default Comic;
