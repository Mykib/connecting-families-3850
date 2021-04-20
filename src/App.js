import './App.css';
import AccountButton from './components/AccountButton';
import RotatingLogo from './components/RotatingLogo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AccountButton/>
        <RotatingLogo/>
        <p>
          <code>Coming Soon!</code>
        </p>
      </header>
    </div>
  );
}

export default App;
