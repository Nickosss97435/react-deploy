import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HZH <code>Mondistri.re</code> en construction.
        </p>
        <a
          className="App-link"
          href="http://mondistri.re"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitez notre site actuel
        </a>
      </header>
    </div>
  );
}

export default App;
