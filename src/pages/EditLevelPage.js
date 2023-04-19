import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EditLevel from "../components/EditLevel";
import '../css/EditLevelPage.css'

const EditLevelPage = () => {
  return (
    <div className="edit-level-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="edit-level-component">
        <EditLevel />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default EditLevelPage;
