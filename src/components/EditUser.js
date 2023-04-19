import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "../css/EditUser.css";

const EditUser = () => {
  const { userId } = useParams();
  let navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
  });

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);
  // console.log(decoded)
  const getMyUser = () => {
    axios
      .get(`http://localhost:8000/api/users/${decoded.user._id}`)
      .then((res) =>
        setUser({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          username: res.data.username,
        })
      );
  };

  useEffect(() => {
    getMyUser();
  }, []);

  const editMyUser = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/users/${userId}`, user)
      .then((res) => console.log(res));
    navigate(`/user/${userId}`);
  };

  return (
    <div className="div-edit">
      <form className="form-edit" noValidate onSubmit={editMyUser}>
        <p className="heading-edit">EDIT YOUR INFOS</p>
        <input
          className="input-edit"
          type="text"
          name="first_name"
          onChange={(e) =>
            e.target.value && setUser({ ...user, first_name: e.target.value })
          }
          placeholder="First name"
        />
        <input
          className="input-edit"
          type="text"
          name="last_name"
          onChange={(e) =>
            e.target.value && setUser({ ...user, last_name: e.target.value })
          }
          placeholder="Last name"
        />
        <input
          className="input-edit"
          type="text"
          name="username"
          onChange={(e) =>
            e.target.value && setUser({ ...user, username: e.target.value })
          }
          placeholder="Username"
        />
        <button className="btn-edit">Submit</button>
      </form>
    </div>
  );
};

export default EditUser;
