import {Link} from "react-router-dom";

const History = () => {
    return (
        <div className="container bg-dark p-5">
            <span> <Link to="/" className="text-decoration-none">Trang chủ </Link>
                <i className="bi bi-chevron-double-right"></i>
                <span className="text-warning"> Lịch sử</span>
            </span>
            <h2 className="text-warning text-center">Lịch sử đọc truyện</h2>
            <div className="row mt-3">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                    <div className="card">
                        <Link to="/comicdetail" className="text-decoration-none">
                            <img className="card-img-top"
                                 src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/thumb_640x960_1-d123b3c838d6-1702442749558-0b3FJ3jT.jpg?v=0&maxW=420&format=webp"
                                 alt="Card image"
                                 style={{width: "100%"}}/>
                        </Link>
                        <div className="card-body">
                            <span className="card-title"><strong>Doraemon</strong></span>
                            <span className="d-block">Chapter 3</span>
                            <span className="d-block text-warning">Đọc tiếp >></span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                    <div className="card">
                        <Link to="/comicdetail" className="text-decoration-none">
                            <img className="card-img-top"
                                 src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/640x960-c270acfe693e-1710298245456-JmEm93uZ.jpg?v=0&maxW=260&format=webp"
                                 alt="Card image"
                                 style={{width: "100%"}}/>
                        </Link>
                        <div className="card-body">
                            <span className="card-title"><strong>Bệ Hạ Kiếp Này ...</strong></span>
                            <span className="d-block">Chapter 1</span>
                            <span className="d-block text-warning">Đọc tiếp >></span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                    <div className="card">
                        <Link to="/comicdetail" className="text-decoration-none">
                            <img className="card-img-top"
                                 src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/ch__ng_m_i___thumb_d_c_cms__1_-bcb8d3a01f78-1695899520884-L5m48cvN.png?v=0&maxW=260&format=webp"
                                 alt="Card image"
                                 style={{width: "100%"}}/>
                        </Link>
                        <div className="card-body">
                            <span className="card-title"><strong>Nam Đình Cốc Vi</strong></span>
                            <span className="d-block">Chapter 2</span>
                            <span className="d-block text-warning">Đọc tiếp >></span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                    <div className="card">
                        <Link to="/comicdetail" className="text-decoration-none">
                            <img className="card-img-top"
                                 src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/kvp1-f48b6e39f706-1685529517775-cR8F9qIh.png?v=0&maxW=260&format=webp"
                                 alt="Card image"
                                 style={{width: "100%"}}/>
                        </Link>
                        <div className="card-body">
                            <span className="card-title"><strong>Kiếp Văn Phòng</strong></span>
                            <span className="d-block">Chapter 3</span>
                            <span className="d-block text-warning">Đọc tiếp >></span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                    <div className="card">
                        <Link to="/comicdetail" className="text-decoration-none">
                            <img className="card-img-top"
                                 src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/kl2023_thumb_640x960-895011167d6f-1695898862520-iTyuBAMD.jpg?v=0&maxW=420&format=webp"
                                 alt="Card image"
                                 style={{width: "100%"}}/>
                        </Link>
                        <div className="card-body">
                            <span className="card-title"><strong>Anh Trai Tôi Là Khủng Long</strong></span>
                            <span className="d-block">Chapter 3</span>
                            <span className="d-block text-warning">Đọc tiếp >></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History;