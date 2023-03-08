import "../css/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Vague from "../images/Vague.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="div-center">
        <div className="vague">
          <img src={Vague} alt="Vague" className="img" />
        </div>
        <div className="div-button">
          <Link to="/login">
            <button className="button">LOGIN</button>
          </Link>
          <Link to="/register">
            <button className="button">REGISTER</button>
          </Link>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
