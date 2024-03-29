import SurfMap from "../components/SurfMap";
import SpotInfos from "../components/SpotInfos";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Meteo from "../components/Meteo";
import AddFavorite from "../components/AddFavorite";
import RemoveFavorite from "../components/RemoveFavorite";
import "../css/SpotDetailsPage.css";
import { useContext, useEffect } from "react";
import { MpsContext } from "../context/MpsContext";

const SpotDetailsPage = () => {
  const { value5, value7, value10 } = useContext(MpsContext);
  const [spots, setSpots] = value5;
  const [query, setQuery] = value7;
  const [favoriteSpots, setFavoriteSpots] = value10;

  const spotToAdd = spots.filter((el) => el.spot_name === query);
  console.log(spotToAdd[0].spot_name);

  useEffect(() => {
    const myFavoriteSpots = JSON.parse(
      localStorage.getItem("mon-petit-surf-favorite-spots")
    );
    setFavoriteSpots(myFavoriteSpots)
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem(
      "mon-petit-surf-favorite-spots",
      JSON.stringify(items)
    );
  };

  const addFavoriteSpot = (spotToAdd) => {
    const newFavoriteArray = [...favoriteSpots, spotToAdd];
    console.log(newFavoriteArray);
    setFavoriteSpots(newFavoriteArray);
    alert("Spot added to your favorites !");
    saveToLocalStorage(newFavoriteArray);
  };

  const removeFavoriteSpot = (spotToAdd) => {
    const newFavoriteArray = favoriteSpots[0].filter(
      (el) => el.spot_name !== spotToAdd[0].spot_name
    );
    setFavoriteSpots(newFavoriteArray);
    alert("Spot removed from your favorite !");
    saveToLocalStorage(newFavoriteArray)
  };

  console.log(favoriteSpots);

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
          {favoriteSpots.length !== 0 ? (
            favoriteSpots[0]
              .filter((e) => e.spot_name == spotToAdd[0].spot_name)
              .map((el) => {
                return (
                  <div
                    className="icon"
                    onClick={() => removeFavoriteSpot(spotToAdd)}
                  >
                    <RemoveFavorite />
                  </div>
                );
              })
          ) : (
            <div className="icon" onClick={() => addFavoriteSpot(spotToAdd)}>
              <AddFavorite />
            </div>
          )}
        </div>
        <div className="graphique">
          <SpotInfos />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SpotDetailsPage;
