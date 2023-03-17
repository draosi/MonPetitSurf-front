import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MpsContext } from "../context/MpsContext";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SurfMap from "../components/SurfMap";
import "../css/SearchPage.css";
import RecommendedSpot from "../components/RecommendedSpot";

const SearchPage = () => {
  const { value5, value7 } = useContext(MpsContext);
  const [spots, setSpots] = value5;
  const [query, setQuery] = value7;

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const thisSpot = spots.filter((element) => element.spot_name === query);
  console.log(thisSpot);

  return (
    <div className="search-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="search">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "70%",
            width: "60%",
            margin: "0% 2.5%",
          }}
        >
          <div className="search-bar">
            <div style={{ width: "100%", marginRight: "2.5%" }}>
              <Box style={{ margin: "25px 0px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Spots</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={query}
                    label="Query"
                    onChange={handleChange}
                  >
                    {spots.map((el, index) => {
                      return (
                        <MenuItem value={el.spot_name} key={index}>
                          {el.spot_name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </div>
            {thisSpot && (
              <Link to={`/spots/${thisSpot[0]._id}`}>
                <button className="details-button">Details</button>
              </Link>
            )}
          </div>
          <div style={{height: '70%'}}>
            <SurfMap />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "70%",
            width: "30%",
            margin: "0% 2.5%",
            padding: "3% 0%",
          }}
        >
          <RecommendedSpot />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
