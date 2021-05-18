import "./Home.scss";

import RotatingLogo from "../components/RotatingLogo";
import SignUpButton from "../components/SignUpButton";

function Home() {
  return (
    <div className="home">
      <div className="home-header" />
      <div className="home-content">
        <RotatingLogo />
        <br />
        Coming soon...
        <div className="sign-up-button" >
          <SignUpButton />
        </div>
        <div className="call-text">or call 02 8036 6121</div>
      </div>
    </div>
  );
}

export default Home;
