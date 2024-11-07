import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./conpnents/Layout";
import Home from "./conpnents/Home";
import RegisterForm from "./conpnents/RegisterForm";
import LoginForm from "./conpnents/LoginForm";
import History from "./conpnents/History";
import ComicDetail from "./conpnents/ComicDetail";
import RePassword from "./conpnents/RePassword";
import Genre from "./conpnents/adminPage/Genre";
import AdminRoute from "./conpnents/adminPage/AdminRoute";
import LayoutAdmin from "./conpnents/LayoutAdmin";
import Comic from "./conpnents/adminPage/Comic";

function App() {
    return (
        <div className="bg-secondary">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="register" element={<RegisterForm/>}/>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="history" element={<History/>}/>
                    <Route path="comicdetail" element={<ComicDetail/>}/>
                    <Route path="repassword" element={<RePassword/>}/>
                </Route>
                <Route path="/" element={<LayoutAdmin/>}>
                    <Route element={<AdminRoute/>}>
                        <Route path="admin" element={<Genre/>}/>
                        <Route path="comic" element={<Comic/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
