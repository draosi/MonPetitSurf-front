import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../logic/UserFunctions";
import "../css/Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const testLogin = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    login(user).then((res) => {
      if (res) {
        navigate("/search");
      } else {
        alert("Invalid password or email, please try again");
      }
    });

    // axios.post()
  };

  return (
    <div className="div">
      <form className="form" noValidate onSubmit={testLogin}>
        <p className="heading">LOGIN</p>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
