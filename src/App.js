import logo from './logo.svg';
import './App.css';
import SegmentedBarLoader from "./components/bars/segmented-bar-loader/SegmentedBarLoader";
import DottedSpinner from "./components/spinners/dotted-spinner/DottedSpinner";

function App() {
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
         <SegmentedBarLoader/>
          <DottedSpinner/>
      </header>
    </div>
  );
}

export default App;
