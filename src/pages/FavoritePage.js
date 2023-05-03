import "../css/FavoritesPage.css";
import { useContext } from "react";
import { MpsContext } from "../context/MpsContext";

const FavoritePage = () => {
  const {value10} = useContext(MpsContext)
  const [favoriteSpots, setFavoriteSpots] = value10;
  console.log(favoriteSpots)
  
  return (
    <div>

    </div>
  );
};

export default FavoritePage;
