import "./Home.scss";

import AccountButton from "../components/AccountButton";
import RotatingLogo from "../components/RotatingLogo";
import SignInButton from "../components/SignInButton";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <AccountButton />
        <SignInButton />
        <RotatingLogo />
        <p>
          <code>Coming Soon!</code>
        </p>
      </header>
    </div>
  );
}

export default Home;
