import "./Home.scss";

import ContactDialog from "../components/ContactDialog";
import RotatingLogo from "../components/RotatingLogo";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <RotatingLogo />
        <br />
        Coming soon...
      </div>
    </div>
  );
}

export default Home;
