import {Link} from "react-router-dom";

const ComicDetail = () => {
    return (
        <div className="container bg-dark p-5">
            <span> <Link to="/" className="text-decoration-none">Trang chủ </Link>
                <i className="bi bi-chevron-double-right"></i>
                <span className="text-warning"> Chi tiết truyện</span>
            </span>
            <h5 className="text-warning text-center mt-3">Doraemon</h5>
            <div className="text-center mt-3">
                <span>[Cập nhật lúc: 2024-10-12 20:38:05]</span>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 mt-3">
                    <img className="col-12 card"
                         src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/thumb_640x960_1-d123b3c838d6-1702442749558-0b3FJ3jT.jpg?v=0&maxW=420&format=webp"/>
                </div>
                <div className="col-0 col-sm-0 col-md-0 col-lg-4 mt-3">
                    <span className="d-block"><i class="bi bi-person-fill"></i>Tác giả: <span className="text-warning">Fujiko F. Fujio</span></span>
                    <span className="d-block mt-3"><i class="bi bi-wifi"></i> Tình trạng: <span
                        className="text-warning">Đang tiến hành</span></span>
                    <span className="d-block mt-3"><i class="bi bi-tags-fill"></i> Thể loại: <span
                        className="text-warning">Hài Hước, Học Đường, Sci-fi</span></span>
                    <button type="button" className="btn btn-outline-warning d-block mt-3">Đọc từ đầu</button>
                    <button type="button" className="btn btn-outline-warning d-block mt-3">Đọc mới nhất</button>
                </div>
                <div className="col-0 col-sm-0 col-md-0 col-lg-5 mt-3">
                    <p className="text-warning">Mô tả: </p>
                    <button type="button" className="btn btn-outline-warning" data-bs-toggle="collapse"
                            data-bs-target="#demo"> Đọc thêm
                    </button>
                    <p id="demo" className="collapse mt-3">
                        Doraemon - chú mèo máy đến từ thế kỷ 22 - đã dùng cỗ máy thời gian trở về thế kỷ 20 để làm bạn
                        với Nobita, một cậu bé hậu đậu, vụng về nhưng giàu lòng nhân hậu, luôn gặp xui xẻo và bị bạn bè
                        bắt nạt. Nhờ chiếc túi bốn chiều trước bụng chứa đủ loại bảo bối thần kỳ, Doraemon đã cứu nguy
                        cho Nobita mỗi khi cậu bạn này gặp phải rắc rối tạo nên những tình huống dở khóc dở cười.
                    </p>
                </div>
            </div>
            <div className="mt-3 text-warning">
                <h5><i className="bi bi-list-ol"></i> DANH SÁCH CHƯƠNG</h5>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Số chương</th>
                        <th>Cập nhật</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Chapter 1</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 2</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 3</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 4</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 5</td>
                        <td>18 ngày trước</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-3">
                <form>
                    <div className="mb-3 mt-3">
                        <label htmlFor="comment">Comments:</label>
                        <textarea className="form-control" rows="3" id="comment" name="text"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-warning">Submit</button>
                </form>
            </div>
            <div>
                <div className="mt-3">
                    <button type="button" className="btn btn-outline-warning" data-bs-toggle="collapse"
                            data-bs-target="#demo"><i class="bi bi-chat-dots-fill"></i> Xem các bình luận
                    </button>
                    <div id="demo" className="collapse">
                        <div className="row mt-3">
                            <div className="col-3 col-sm-3 col-md-3 col-lg-1">
                                <img className="col-10 card"
                                     src="https://ih1.redbubble.net/image.4560210080.3383/st,small,507x507-pad,600x600,f8f8f8.jpg"/>
                            </div>
                            <div className="col-9 col-sm-9 col-md-9 col-lg-11">
                                <div>
                                    <label htmlFor="comment">CuLi Truyen247</label>
                                    <textarea className="form-control" readOnly rows="3" id="comment" name="text">
                                Truyện này hay quá trời :))
                            </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3 col-sm-3 col-md-3 col-lg-1">
                                <img className="col-10 card"
                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxU0ByBjU1rbBo5xxXHnXpMKtNI8afm0faw&s"/>
                            </div>
                            <div className="col-9 col-sm-9 col-md-9 col-lg-11">
                                <div>
                                    <label htmlFor="comment">CuLi Truyen247</label>
                                    <textarea className="form-control" readOnly rows="3" id="comment" name="text">
                                Bao giờ ra chapter mới vậy :(
                            </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComicDetail;