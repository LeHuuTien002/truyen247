import {Link} from "react-router-dom";

const ComicDetail = () => {
    return (
        <div className="container bg-dark p-5">
            <span> <Link to="/" className="text-decoration-none">Trang chủ </Link>
                <i className="bi bi-chevron-double-right"></i>
                <span className="text-warning"> Chi tiết truyện</span>
            </span>
            <h5 className="text-warning text-center mt-3">Trảm Linh Thiếu Nữ: Tất Cả Khế Ước Của Ta Đều Là Thượng Cổ
                Thần Binh</h5>
            <div className="text-center mt-3">
                <span>[Cập nhật lúc: 2024-10-12 20:38:05]</span>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 mt-3">
                    <img className="col-12 card"
                         src="https://ddntcthcd.com/nettruyen/thumb/ket-thuc-toi-muon-thay-doi-no.jpg"/>
                </div>
                <div className="col-0 col-sm-0 col-md-0 col-lg-4 mt-3">
                    <span className="d-block"><i class="bi bi-person-fill"></i> Tác giả: </span>
                    <span className="d-block mt-3"><i class="bi bi-wifi"></i> Tình trạng: </span>
                    <span className="d-block mt-3"><i class="bi bi-tags-fill"></i> Thể loại: </span>
                    <button type="button" className="btn btn-outline-warning d-block mt-3">Đọc từ đầu</button>
                    <button type="button" className="btn btn-outline-warning d-block mt-3">Đọc mới nhất</button>
                </div>
                <div className="col-0 col-sm-0 col-md-0 col-lg-5 mt-3">
                    <p className="text-warning">Nội dung truyện Trảm Linh Thiếu Nữ: Tất Cả Khế Ước Của Ta Đều Là Thượng
                        Cổ Thần Binh trên Truyen247</p>
                    <button type="button" className="btn btn-outline-warning" data-bs-toggle="collapse"
                            data-bs-target="#demo"> Đọc thêm
                    </button>
                    <p id="demo" className="collapse mt-3">
                        Chào mừng bạn đến với NetTruyen – không gian đọc truyện tranh online hoàn hảo dành cho tất cả
                        các fan truyện tranh! Tại đây, bạn sẽ được trải nghiệm một giao diện mượt mà, dễ sử dụng, giúp
                        việc đọc truyện trở nên thoải mái và liền mạch hơn bao giờ hết. Chúng tôi cung cấp đa dạng các
                        thể loại từ truyện tranh đam mỹ, truyện tranh cổ đại, ngôn tình, hành động, phiêu lưu, kinh dị,
                        đến lãng mạn, hài hước, xuyên không phù hợp với mọi sở thích của độc giả. Với việc cập nhật
                        nhanh chóng các chương mới và chất lượng hình ảnh sắc nét, NetTruyenViet cam kết mang đến cho
                        bạn trải nghiệm đọc truyện tuyệt vời nhất!
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
                        <td>Chapter 1</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 1</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 1</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 1</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 1</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 1</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 1</td>
                        <td>18 ngày trước</td>
                    </tr>
                    <tr>
                        <td>Chapter 1</td>
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
                                     src="https://ddntcthcd.com/nettruyen/thumb/ket-thuc-toi-muon-thay-doi-no.jpg"/>
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
                                     src="https://ddntcthcd.com/nettruyen/thumb/ket-thuc-toi-muon-thay-doi-no.jpg"/>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComicDetail;