import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);
  const yse = "11";
  return (
    <div className="App">
      <img className="Background" src="/assets/background.svg" />
      <div>
        <img src="/assets/crumb.svg" />
        <h2>CRUMB</h2>
        <p>Get started with your NFT journey. NOW!</p>
      </div>
    </div>
  );
}

export default App;
