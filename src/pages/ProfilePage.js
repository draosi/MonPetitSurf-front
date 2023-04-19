import "../css/ProfilePage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const initialValue = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    role: "",
    level: "",
  };

  const [myUser, setMyUser] = useState(initialValue);

  const getMyUser = () => {
    const token = localStorage.usertoken;
    const decoded = token && jwt_decode(token);

    axios
      .get(`http://localhost:8000/api/users/${decoded.user._id}`)
      .then((res) => setMyUser(res.data));
  };

  useEffect(() => {
    getMyUser();
  }, []);

  console.log(myUser);

  return (
    <div>
      <NavBar />
      <div className="profile-page">
        <div className="basic-info">
          <div className="user-basic-info">
            <div className="user-basic-info-line">
              <p>First name :</p>
              <p>{myUser.first_name}</p>
            </div>
            <div className="user-basic-info-line">
              <p>Last name :</p>
              <p>{myUser.last_name}</p>
            </div>
            <div className="user-basic-info-line">
              <p>Username :</p>
              <p>{myUser.username}</p>
            </div>
          </div>
          <div className="user-basic-info-button">
            <Link to={`/user/edit-info/${myUser._id}`}>
              <button className="button-edit">Edit</button>
            </Link>
          </div>
        </div>
        <div className="level">
          <div className="edit-level">
            <p>Level :</p>
            <p>{myUser.level}</p>
          </div>
          <div className="edit-level-button">
            <Link to={`/user/edit-level/${myUser._id}`}>
              <button className="button-edit-level">Edit</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
