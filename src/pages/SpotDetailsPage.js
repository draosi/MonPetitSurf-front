import SurfMap from "../components/SurfMap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SpotInfos from "../components/SpotInfos";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Meteo from '../components/Meteo'
import "../css/SpotDetailsPage.css"

const SpotdetailsPage = () => {
  return (
    <div className="spot-details">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="details">
        <div className="map-favorite">
          <div className="map">
            <SurfMap />
          </div>
          <div className="meteo">
            <Meteo />
          </div>
          <div className="icon">
            <FavoriteBorderIcon fontSize="large" color="primary" />
          </div>
        </div>
        <div>
          <SpotInfos />
        </div>
        <div></div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SpotdetailsPage;
