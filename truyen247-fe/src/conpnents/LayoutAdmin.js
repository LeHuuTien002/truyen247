import {Link, Outlet, useLocation} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearMessage} from "../actions/message";
import {logout} from "../actions/auth";
import EventBus from "../common/EventBus";
import AuthVerify from "../common/AuthVerify";

const LayoutAdmin = () => {
    // State để điều khiển hiển thị bảng Admin trong navbar
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    // Lấy thông tin người dùng hiện tại từ Redux store
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // Lấy vị trí đường dẫn hiện tại
    let location = useLocation();

    // useEffect để xóa thông báo khi thay đổi đường dẫn sang login hoặc register
    useEffect(() => {
        if (["/login", "/register"].includes(location.pathname)) {
            dispatch(clearMessage());
        }
    }, [dispatch, location]);

    // Hàm đăng xuất được ghi nhớ (memoized) để tránh render lại không cần thiết
    const logOut = useCallback(() => {
        dispatch(logout());// xóa thông báo khi thay đổi vị trí
    }, [dispatch])

    // useEffect để xử lý vai trò của người dùng và sự kiện logout từ EventBus
    useEffect(() => {
        if (currentUser) {
            // Thiết lập hiển thị bảng Moderator và Admin dựa trên vai trò của người dùng
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        } else {
            // Đặt lại hiển thị nếu không có người dùng đăng nhập
            setShowAdminBoard(false);
        }

        // Đăng ký sự kiện logout với EventBus, gọi logOut nếu sự kiện logout được kích hoạt
        EventBus.on("logout", () => {
            logOut();
        })
        return () => {
            EventBus.remove("logout");
        }
    }, [currentUser, logOut]);
    return (
        <>
            <div>
                {<AuthVerify logOut={logOut}/>}
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container">
                        {showAdminBoard && (
                            <Link className="navbar-brand" to="/admin">
                                <h1 className="text-warning">ADMIN BOARD</h1>
                            </Link>
                        )}
                        <div className="d-flex justify-content-end collapse navbar-collapse">
                            <div className="d-none d-sm-block d-md-block d-lg-block">
                                <span className="dropdown dropdown-menu-end text-end">
                                    <a className="text-decoration-none dropdown-toggle text-white" href="#"
                                       role="button"
                                       data-bs-toggle="dropdown"><i className="bi bi-person-fill"></i> Tài khoản</a>
                                    <ul className="dropdown-menu" style={{zIndex: 9999}}>
                                        {currentUser ? (
                                            <>
                                                <li>
                                                    <Link className="dropdown-item" href="#" to="/profile">
                                                        <i className="bi bi-person-fill"></i> Trang cá nhân
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={logOut}>
                                                        <i className="bi bi-box-arrow-right"></i> Thoát
                                                    </a>
                                                </li>
                                            </>

                                        ) : (
                                            <>
                                                <li>
                                                    <Link to="/login" className="dropdown-item" href="#">
                                                        <i className="bi bi-person-fill"></i> Đăng nhập
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/register" className="dropdown-item" href="#">
                                                        <i className="bi bi-person-plus-fill"></i> Đăng ký
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="bg-danger sticky-top">
                <nav className="container navbar navbar-expand-sm navbar-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <div className="d-block d-sm-none d-md-none d-lg-none">
                                    <form className="d-flex ">
                                        <input className="form-control me-2" type="text" placeholder="Tìm truyện..."/>
                                        <button className="btn btn-outline-warning" type="button">Search</button>
                                    </form>
                                </div>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#" to='/admin'>QUẢN LÝ THỂ LOẠI TRUYỆN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/comic" className="nav-link" href="#">QUẢN LÝ TRUYỆN</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown">THỂ LOẠI</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="d-flex justify-content-space-between">
                                                <a className="dropdown-item" href="#">Historical</a>
                                                <a className="dropdown-item" href="#">Shoujo</a>
                                                <a className="dropdown-item" href="#">TruyenQQ</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-space-between">
                                                <a className="dropdown-item" href="#">Historical</a>
                                                <a className="dropdown-item" href="#">Shoujo</a>
                                                <a className="dropdown-item" href="#">TruyenQQ</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-space-between">
                                                <a className="dropdown-item" href="#">Historical</a>
                                                <a className="dropdown-item" href="#">Shoujo</a>
                                                <a className="dropdown-item" href="#">TruyenQQ</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <div className="d-block d-sm-none d-md-none d-lg-none">
                                    <div className="nav-item dropdown dropdown-menu-end">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                           data-bs-toggle="dropdown"><i className="bi bi-person-fill"></i> Tài khoản</a>
                                        <ul className="dropdown-menu" style={{zIndex: 9999}}>
                                            <li>
                                                <Link to="/login" className="dropdown-item" href="#">
                                                    <i className="bi bi-person-fill"></i> Đăng nhập
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/register" className="dropdown-item" href="#">
                                                    <i className="bi bi-person-plus-fill"></i> Đăng ký
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet/>
            <div className="container-fluid bg-dark d-flex justify-content-center pt-4 pb-3">
                <div className="row container">
                    <div className="col-sm-3">
                        <h5 className="text-warning">Truyen247</h5>
                        <div>
                            <span className="text-warning">Giới thiệu</span> |
                            <span className="text-warning"> Liên hệ</span>
                        </div>
                        <div>
                            <span className="text-warning">Điều Khoản</span> |
                            <span className="text-warning"> Chính Sách Bảo Mật</span>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <h5>Liên hệ</h5>
                        <span className="d-block"> Email: <a className="text-warning">truyen247@gmail.com</a></span>
                        <span className="d-block"> Telegram: <a className="text-warning">@truyen247</a></span>
                        <span className="d-block"> Copyright © 2024 Truyen247</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutAdmin;