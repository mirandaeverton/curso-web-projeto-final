import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import AdminPages from "../components/admin/AdminPages";
import ArticlesByCategory from "../components/articles/ArticlesByCategory";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPages />} />
            <Route path="/categories/:id/articles" element={<ArticlesByCategory />} />
        </Routes>
    )
} 