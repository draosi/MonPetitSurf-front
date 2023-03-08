import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Register from "../components/Register";
import '../css/RegisterPage.css'

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="register">
        <Register />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;
