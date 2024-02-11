import './App.css';
import SegmentedBarLoader from "./components/bars/segmented-bar-loader/SegmentedBarLoader";
import DottedSpinner from "./components/spinners/dotted-spinner/DottedSpinner";
import HalfSpinner from "./components/spinners/half-spinner/HalfSpinner";

function App() {
    return (
        <div className="App">
            <SegmentedBarLoader/>
            <DottedSpinner/>
            <HalfSpinner/>
        </div>
    );
}

export default App;
