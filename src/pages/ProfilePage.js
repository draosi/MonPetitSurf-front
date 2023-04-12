import "../css/ProfilePage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <div>
      <NavBar />
      <div className="profile-page">
        <div className="basic-info">
          <div className="user-basic-info">
            <h4>First name</h4>
            <h4>Last name</h4>
            <h4>Username</h4>
          </div>
          <div className="user-basic-info-button">
            <button>Edit</button>
          </div>
        </div>
        <div className="level">
          <div className="edit-level">
            <h4>Level</h4>
            <button>Edit</button>
          </div>
          <div className="edit-level-how">
            <h4>How</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
