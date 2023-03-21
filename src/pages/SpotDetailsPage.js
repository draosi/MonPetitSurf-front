import SurfMap from "../components/SurfMap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SpotInfos from "../components/SpotInfos";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Meteo from '../components/Meteo'
import "../css/SpotDetailsPage.css"
import { useContext } from "react";
import { MpsContext } from "../context/MpsContext";

const SpotdetailsPage = () => {
  const {value5, value7, value10} = useContext(MpsContext)
  const [spots, setSpots] = value5
  const [query, setQuery] = value7
  // const [favoriteSpots, setFavoriteSpots] = value10

  // console.log(value5)

  // const spotToAdd = spots.filter((el) => el.spot_name === query)
  // console.log(spotToAdd)

  // const addToFavorites = (event) => {
  //   event.preventDefault()
  //   favoriteSpots.push(spotToAdd)
  // }

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
        <div className="graphique">
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
