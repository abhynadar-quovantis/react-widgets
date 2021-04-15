import logo from './logo.svg';
import './App.css';
import FAQ from './FAQ';
import Help from './Help';

function App({widget}) {
  // console.log('App', widget);
  if (widget === 'FAQ') {
    console.log('App', widget);
    return <FAQ />;
  }
  if (widget === 'HELP') {
    console.log('App', widget);
    return <Help />;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
