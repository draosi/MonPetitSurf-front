import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../logic/UserFunctions";
import '../css/Login.css'

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
        navigate("/home");
      } else {
        alert("Invalid password or email, please try again");
      }
    });
  };

  return (
    <div className="div">
      <form className="form">
        <p className="heading">LOGIN</p>
        <input className="input" type="text" placeholder="Email"></input>
        <input className="input" type="text" placeholder="Password"></input>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
