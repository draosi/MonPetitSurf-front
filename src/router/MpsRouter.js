import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import SpotDetailsPage from "../pages/SpotDetailsPage";
import ProfilePage from "../pages/ProfilePage"
import FavoritePage from "../pages/FavoritePage"
import { Search } from "@mui/icons-material";
import SearchPage from "../pages/SearchPage";

const MpsRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user/:userId" element={<ProfilePage />} />
        <Route path="/spots/:spotId" element={<SpotDetailsPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  );
};

export default MpsRouter;
