import './App.scss';
import SignInButton from './components/SignInButton';
import RotatingLogo from './components/RotatingLogo';
import AccountButton from './components/AccountButton';
import SignUpDialog from './components/SignUpDialog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

export default App;
