import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-dark container">
            <div className="container">
                <div className="container pt-3">
                    <h3 className="text-warning">Truyen247 đề cử</h3>
                    <div id="demo" className="carousel slide mt-3" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0"
                                    className="active bg-light"></button>
                            <button className="bg-light" type="button" data-bs-target="#demo"
                                    data-bs-slide-to="1"></button>
                            <button className="bg-light" type="button" data-bs-target="#demo"
                                    data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://i.pinimg.com/736x/6a/99/f7/6a99f7ba6ce7273491dd8903a8b600f0.jpg"
                                    alt="Doraemon" className="d-block"
                                    style={{width: "100%"}}/>
                                <div className="carousel-caption text-white">
                                    <h3>Doraemon</h3>
                                    <p>We had such a great time in LA!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.pinimg.com/originals/40/65/ad/4065ad52e0b968c6fb152d4bcbfd3ac9.jpg"
                                    alt="Chicago" className="d-block" style={{width: "100%"}}/>
                                <div className="carousel-caption text-white">
                                    <h3>Conan</h3>
                                    <p>Thank you, Chicago!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.pinimg.com/originals/bf/ea/a7/bfeaa7ed50da2cad0528cc8d3076b051.jpg"
                                    alt="One piece" className="d-block" style={{width: "100%"}}/>
                                <div className="carousel-caption text-white">
                                    <h3>One piece</h3>
                                    <p>We love the Big Apple!</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 mt-3">
                            <h5 className="text-warning">Truyen247 - Truyện tranh online </h5>
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                    <div className="card">
                                        <Link to="/comicdetail" className="text-decoration-none">
                                            <img className="card-img-top"
                                                 src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                                 alt="Card image"
                                                 style={{width: "100%"}}/>
                                        </Link>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <Link to="/comicdetail" className="text-decoration-none">
                                            <img className="card-img-top"
                                                 src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                                 alt="Card image"
                                                 style={{width: "100%"}}/>
                                        </Link>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <Link to="/comicdetail" className="text-decoration-none">
                                            <img className="card-img-top"
                                                 src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                                 alt="Card image"
                                                 style={{width: "100%"}}/>
                                        </Link>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <Link to="/comicdetail" className="text-decoration-none">
                                            <img className="card-img-top"
                                                 src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                                 alt="Card image"
                                                 style={{width: "100%"}}/>
                                        </Link>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mt-3">
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://ddntcthcd.com/nettruyen/thumb/ta-co-mot-son-trai.jpg"
                                             alt="Card image"/>
                                        <div className="card-body">
                                            <span className="card-title"><strong>Ta Có Một Sơn Trại</strong></span>
                                            <span className="d-block">Chapter 1</span>
                                            <span className="d-block">Chapter 2</span>
                                            <span className="d-block">Chapter 3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item"><a className="page-link text-white"
                                                                 href="javascript:void(0);">Previous</a></li>
                                    <li className="page-item active"><a className="page-link text-white"
                                                                        href="javascript:void(0);">1</a></li>
                                    <li className="page-item"><a className="page-link text-white"
                                                                 href="javascript:void(0);">2</a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-white"
                                                                 href="javascript:void(0);">3</a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-white"
                                                                 href="javascript:void(0);">4</a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-white"
                                                                 href="javascript:void(0);">5</a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-white"
                                                                 href="javascript:void(0);">6</a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-white"
                                                                 href="javascript:void(0);">7</a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-white"
                                                                 href="javascript:void(0);">8</a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-white"
                                                                 href="javascript:void(0);">Next</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-0 col-sm-0 col-md-0 col-lg-4 mt-3">
                            <div className="row">
                                <div className="col col-sm col-md col-lg">
                                    <h6 className="text-warning">Lịch sử đọc tại Truyen247</h6>
                                </div>
                                <div className="col col-sm col-md col-lg text-end">
                                    <Link to="/history" className="text-warning text-decoration-none">Xem tất
                                        cả</Link>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-4">
                                    <img className="col-12 card"
                                         src="https://ddntcthcd.com/nettruyen/thumb/ket-thuc-toi-muon-thay-doi-no.jpg"/>
                                </div>
                                <div className="col-9 col-sm-9 col-md-9 col-lg-8">
                                    <h6>Khu vực chủ nghĩa tình yêu</h6>
                                    <span>Đọc tiếp chapter 1 ></span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-4">
                                    <img className="col-12 card"
                                         src="https://ddntcthcd.com/nettruyen/thumb/ket-thuc-toi-muon-thay-doi-no.jpg"/>
                                </div>
                                <div className="col-9 col-sm-9 col-md-9 col-lg-8">
                                    <h6>Khu vực chủ nghĩa tình yêu</h6>
                                    <span>Đọc tiếp chapter 1 ></span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-4">
                                    <img className="col-12 card"
                                         src="https://ddntcthcd.com/nettruyen/thumb/ket-thuc-toi-muon-thay-doi-no.jpg"/>
                                </div>
                                <div className="col-9 col-sm-9 col-md-9 col-lg-8">
                                    <h6>Khu vực chủ nghĩa tình yêu</h6>
                                    <span>Đọc tiếp chapter 1 ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;