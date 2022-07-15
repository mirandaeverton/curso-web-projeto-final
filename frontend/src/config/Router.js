import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import AdminPages from "../components/admin/AdminPages";
import ArticlesByCategory from "../components/articles/ArticlesByCategory"
import ArticleById from "../components/articles/ArticleById"

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPages />} />
            <Route path="/categories/:id/articles" element={<ArticlesByCategory />} />
            <Route path="/articles/:id" element={<ArticleById />} />
        </Routes>
    )
} 