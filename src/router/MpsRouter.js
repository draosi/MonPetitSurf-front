import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import SpotDetails from "../pages/SpotDetails";
import ProfilePage from "../pages/ProfilePage"
import FavoritePage from "../pages/FavoritePage"

const MpsRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/user/:userId" element={<ProfilePage />} />
        <Route path="/spots/:spotId" element={<SpotDetails />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  );
};

export default MpsRouter;
