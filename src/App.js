import "./App.css";
import Countdown from "react-countdown";

function App() {
  return (
    <div className="App">
      <Countdown date={new Date(2024, 5, 20, 17)} />
    </div>
  );
}

export default App;
