import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./conpnents/Layout";
import Home from "./conpnents/Home";
import RegisterForm from "./conpnents/RegisterForm";
import LoginForm from "./conpnents/LoginForm";
import History from "./conpnents/History";
import ComicDetail from "./conpnents/ComicDetail";
import RePassword from "./conpnents/RePassword";
import BoardAdmin from "./conpnents/BoardAdmin";
import AdminRoute from "./conpnents/AdminRoute";

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
                    <Route element={<AdminRoute/>}>
                        <Route path="admin" element={<BoardAdmin/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
