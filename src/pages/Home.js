import './Home.scss';
import SignInButton from '../components/SignInButton';
import RotatingLogo from '../components/RotatingLogo';
import AccountButton from '../components/AccountButton';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <AccountButton/>
        <SignInButton/>
        <RotatingLogo/>
        <p>
          <code>Coming Soon!</code>
        </p>
      </header>
    </div>
  );
}

export default Home;
