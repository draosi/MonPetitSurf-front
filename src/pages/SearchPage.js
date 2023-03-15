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

const SearchPage = () => {
  const { value5, value7 } = useContext(MpsContext);
  const [spots, setSpots] = value5;
  const [query, setQuery] = value7;

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const thisSpot = spots.filter((element) => element.spot_name === query)

  return (
    <div className="search-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="search">
        <div style={{height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div className="search-bar">
            <div style={{ width: "100%", marginRight: '2.5%' }}>
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
                        <MenuItem value={el.spot_name} key={index}>{el.spot_name}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </div>
            { thisSpot && (
            <Link to={`/spots/${thisSpot[0]._id}`}>
              <button className="details-button">Details</button>
            </Link>
            )}
          </div>
          <div>
            <SurfMap />
          </div>
        </div>
        <div style={{height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div className="card shadow">
                <h4>Where to surf today ?</h4>
                <p>Spot #1</p>
                <p>Spot #2</p>
                <p>Spot #3</p>
                <p>Spot #4</p>
                <p>Spot #5</p>
                <p>Spot #6</p>
                <p>Spot #7</p>
                <p>Spot #8</p>
                <p>Spot #9</p>
                <p>Spot #10</p>
                <p>Spot #11</p>
                <p>Spot #12</p>
                <p>Spot #13</p>
            </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
