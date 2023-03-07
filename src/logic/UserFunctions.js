import axios from "axios";

export const register = (abc) => {
  return axios.post("http://localhost:8000/auth/register", {
    first_name: abc.first_name,
    last_name: abc.last_name,
    username: abc.username,
    email: abc.email,
    password: abc.password,
    level: abc.level
  })
  .then(res => console.log('Registered'))
  .catch(err => console.log(err))
};

export const login = (user) => {
  return axios
    .post("http://localhost:8000/auth", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      console.log(res.headers.get("auth-token"));
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch((err) => console.error(err));
};
