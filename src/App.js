import "./App.css";
import emax from "./xd.png";
import Countdown from "react-countdown";

function App() {
  return (
    <div className="app">
      <img src={emax} className="app__emax" alt="emax" />
      <h1 className="app__counter">
        <Countdown date={new Date(2024, 5, 20, 17)} />
      </h1>
    </div>
  );
}

export default App;
