import "./Home.scss";

import RotatingLogo from "../components/RotatingLogo";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <RotatingLogo />
        <p>
          <code>Coming Soon!</code>
        </p>
      </div>
    </div>
  );
}

export default Home;
