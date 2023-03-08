import '../css/Register.css'

const Register = () => {
  return (
    <div className="div">
      <form className="form">
        <p className="heading">LOGIN</p>
        <input className="input" type="text" placeholder="First Name"></input>
        <input className="input" type="text" placeholder="Last Name"></input>
        <input className="input" type="text" placeholder="Username"></input>
        <input className="input" type="text" placeholder="Email"></input>
        <input className="input" type="text" placeholder="Password"></input>
        <input className="input" type="number" min={1} max={4} placeholder="Level"></input>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Register;
