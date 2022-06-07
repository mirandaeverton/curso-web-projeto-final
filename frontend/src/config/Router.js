import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import AdminPages from "../components/admin/AdminPages";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPages />} />
        </Routes>
    )
} 