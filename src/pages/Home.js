import "./Home.scss";

import ContactDialog from "../components/ContactDialog";
import RotatingLogo from "../components/RotatingLogo";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <ContactDialog title="Contact Us"/>
        <RotatingLogo />
      </div>
    </div>
  );
}

export default Home;
