import WavesIcon from "@mui/icons-material/Waves";
import { useContext, useState, useEffect } from "react";
import { MpsContext } from "../context/MpsContext";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "../css/RecommendedSpot.css";
import WaveSize from "../images/wave_size.png";
import { useLocation } from "react-router-dom";

const RecommendedSpot = () => {
  const { value4, value5 } = useContext(MpsContext);
  const [users, setUsers] = value4;
  const [spots, setSpots] = value5;

  const [myUser, setMyUser] = useState("");
  const [mySurf, setMySurf] = useState([]);

  const [userLoading, setUserLoading] = useState(false);
  const [surfLoading, setSurfLoading] = useState(false);
  const [loading, setloading] = useState(false);

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);

  let location = useLocation();

  // Fetch the wave data for each spot - return only waves from the first 24 hours
  const whereToSurf = async () => {
    const responseArray = await Promise.all(
      spots.map(
        async (e) =>
          await axios.get(
            `https://marine-api.open-meteo.com/v1/marine?latitude=${e.latitude}&longitude=${e.longitude}&hourly=wave_height`
          )
      )
    );

    const secondArray = await responseArray.map((element) => {
      return element.data.hourly.wave_height;
    });

    const first24Hours = await secondArray.map((element) => {
      return element.slice(0, 24);
    });
    return first24Hours;
  };

  // Store whereToSurf() data into the state variable mySurf
  const fetchWhereToSurf = async () => {
    try {
      const data = await whereToSurf();
      setMySurf(data);
      setSurfLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  // Function to get the average of an array
  const average = (array) => {
    const oneSpotAverage = array.reduce((acc, curr) => acc + curr);
    return (oneSpotAverage / array.length).toFixed(2);
  };

  // Storing each spot with its surf data for the day - filter the result to get the average wave size
  const lvl = mySurf.map((e, id) => [e, spots[id].spot_name]);
  const level = lvl.map((e) => [average(e[0]), e[1]]);

  // Storing each spot in its appropriate array
  let levelOne = [];
  let levelTwo = [];
  let levelThree = [];
  let levelFour = [];

  level.map((e) => {
    if (e[0] < 1) {
      levelOne.push([e[0], e[1]]);
    }
    if (e[0] < 1.5 && e[0] > 0.8) {
      levelTwo.push([e[0], e[1]]);
    }
    if (e[0] < 1.8 && e[0] > 1.2) {
      levelThree.push([e[0], e[1]]);
    }
    if (e[0] > 1.5) {
      levelFour.push([e[0], e[1]]);
    }
  });

  // Fetch the data from the connected user and get its level
  const fetchMyUser = async () => {
    try {
      const callMyUser = await axios.get(
        `http://localhost:8000/api/users/${decoded.user._id}`
      );
      setMyUser(callMyUser.data);
      setUserLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWhereToSurf();
    fetchMyUser();
    setloading(true);
  }, [location, myUser.level]);

  return (
    <div className="recommended-spot">
      <h4>Where to surf today ?</h4>
      {level ? (
        <div className="spots-card shadow">
          {myUser.level == 1 &&
            (levelOne.length > 0 ? (
              levelOne.map((e) => {
                return (
                  <div className="table">
                    <div className="city">{e[1]}</div>
                    <div className="wave-size">
                      <img
                        src={WaveSize}
                        alt="wave_size"
                        className="image-wave-size"
                      />
                      <p className="image-wave-size">{e[0]} m</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p style={{ textAlign: "center", margin: "10px 0px" }}>
                No spots matching your level today
              </p>
            ))}
          {myUser.level == 2 &&
            (levelTwo.length > 0 ? (
              levelTwo.map((e) => {
                return (
                  <div className="table">
                    <div className="city">{e[1]}</div>
                    <div className="wave-size">
                      <img
                        src={WaveSize}
                        alt="wave_size"
                        className="image-wave-size"
                      />
                      <p className="image-wave-size">{e[0]} m</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p style={{ textAlign: "center", margin: "10px 0px" }}>
                No spots matching your level today
              </p>
            ))}
          {myUser.level == 3 &&
            (levelThree.length > 0 ? (
              levelThree.map((e) => {
                return (
                  <div className="table">
                    <div className="city">{e[1]}</div>
                    <div className="wave-size">
                      <img
                        src={WaveSize}
                        alt="wave_size"
                        className="image-wave-size"
                      />
                      <p className="image-wave-size">{e[0]} m</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p style={{ textAlign: "center", margin: "10px 0px" }}>
                No spots matching your level today
              </p>
            ))}
          {myUser.level == 4 &&
            (levelFour.length > 0 ? (
              levelFour.map((e) => {
                return (
                  <div className="table">
                    <div className="city">{e[1]}</div>
                    <div className="wave-size">
                      <img
                        src={WaveSize}
                        alt="wave_size"
                        className="image-wave-size"
                      />
                      <p className="image-wave-size">{e[0]} m</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p style={{ textAlign: "center", margin: "10px 0px" }}>
                No spots matching your level today
              </p>
            ))}
        </div>
      ) : (
        <div className="spots-card shadow">
          <div class="loader">
            <span>Loading</span>
            <span>Loading</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendedSpot;
