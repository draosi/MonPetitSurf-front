import "../css/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [level, setLevel] = useState("");
  const [data, setData] = useState("");

  let navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();

    const requestBody = {
      first_name,
      last_name,
      username,
      email,
      password,
    };

    axios
      .post("http://localhost:8000/auth/register", requestBody)
      .then((response) => {
        setData(response.data);
        navigate("/login");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="div">
      <form className="form" onSubmit={createUser}>
        <p className="heading">REGISTER</p>
        <input
          className="input"
          type="text"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
          placeholder="First Name"
        />
        <input
          className="input"
          type="text"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          placeholder="Last Name"
        />
        <input
          className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
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

export default Register;
