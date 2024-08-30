import "./App.css";
import Sidebar from "./components/Sidebar";
import Mainscreen from "./components/Mainscreen";

function App() {
  return (
    <div className="appContainer">
      <Sidebar />
      <Mainscreen></Mainscreen>
    </div>
  );
}

export default App;
