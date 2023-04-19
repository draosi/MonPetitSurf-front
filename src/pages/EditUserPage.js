import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EditUser from "../components/EditUser";
import "../css/EditUserPage.css"

const EditUserPage = () => {
  return (
    <div className="edit-user-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="edit-user">
        <EditUser />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default EditUserPage;
