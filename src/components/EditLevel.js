import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "../css/EditLevel.css";

const EditLevel = () => {
  const { userId } = useParams();
  let navigate = useNavigate();

  const [lvl, setLvl] = useState({
    level: "",
  });

  console.log(lvl);

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);

  const getUserLevel = () => {
    axios
      .get(`http://localhost:8000/api/users/${decoded.user._id}`)
      .then((res) => {
        console.log(res);
        setLvl({ level: res.data.level });
      });
  };

  useEffect(() => {
    getUserLevel();
  }, []);

  const handleClickOne = () => {
    setLvl(1);
  };

  const handleClickTwo = () => {
    setLvl(2);
  };

  const handleClickThree = () => {
    setLvl(3);
  };

  const handleClickFour = () => {
    setLvl(4);
  };

  const editUserLvl = (data) => {
    // e.preventdefault();
    axios
      .put(`http://localhost:8000/api/users/${userId}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate(`/user/${userId}`);
  };

  return (
    <div className="div-edit-level">
      <p style={{ fontSize: "1.5em", margin: "2.5% 0%" }}>
        How to choose your Level ?
      </p>
      <p className="levels-explained">
        You need to choose your level between four levels. Level one is for
        beginners, level two is for intermediate surfers, level three for
        advance surfers ans level four for experts. Your level was automatically
        set up at one. To change your level, simply click on the suitable level,
        and then submit. Good surf !
      </p>
      <div className="div-level-choosing">
        <div className="div-edit-level-button">
          <div
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <div className="lvl-line">
              <p>1 : waves under 1m </p>
              <button className="edit-lvl-button" onClick={handleClickOne}>
                1
              </button>
            </div>
            <div className="lvl-line">
              <p>2 : waves between 0.8 and 1.5m</p>
              <button className="edit-lvl-button" onClick={handleClickTwo}>
                2
              </button>
            </div>
            <div className="lvl-line">
              <p>3 : waves between 1.2 and 1.8m</p>
              <button className="edit-lvl-button" onClick={handleClickThree}>
                3
              </button>
            </div>
            <div className="lvl-line">
              <p>4 : waves over 1.5m</p>
              <button className="edit-lvl-button" onClick={handleClickFour}>
                4
              </button>
            </div>
          </div>
          <button
            className="submit-level-button"
            onClick={() => editUserLvl({ level: lvl })}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLevel;
