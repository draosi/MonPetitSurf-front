import { useContext, useState } from "react";
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

  return (
    <div className="search-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="search">
        <div>
          <div>
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
                  {spots.map((el) => {
                    return (
                      <MenuItem value={el.spot_name}>{el.spot_name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <SurfMap />
          </div>
        </div>
        <div></div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
