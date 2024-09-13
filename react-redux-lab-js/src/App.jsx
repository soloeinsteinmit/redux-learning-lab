import "./App.css";
import CakeView from "./components/CakeView";
import CounterView from "./components/CounterView";
import IcecreamView from "./components/IcecreamView";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <CounterView />
      <CakeView />
      <IcecreamView />
    </div>
  );
}

export default App;
