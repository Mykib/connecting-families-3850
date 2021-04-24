import "./Home.scss";

import RotatingLogo from "../components/RotatingLogo";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <RotatingLogo />
      </div>
    </div>
  );
}

export default Home;
