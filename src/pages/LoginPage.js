import Footer from "../components/Footer";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import '../css/LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="login">
        <Login />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
