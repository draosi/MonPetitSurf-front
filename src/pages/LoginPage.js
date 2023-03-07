import Footer from "../components/Footer";
import Login from "../components/Login";
import NavBar from "../components/NavBar";

const LoginPage = () => {
  return (
    <div style={{height: '100vh'}}>
      <div style={{height: '6vh'}}>
        <NavBar />
      </div>
      <div style={{height: '88vh', marginTop: '22vh', marginBottom: '22vh', height: '44vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Login />
      </div>
      <div style={{height: '6vh', backgroundColor: 'rgb(89, 135, 163)'}}>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
