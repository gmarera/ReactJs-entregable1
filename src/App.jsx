import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar logo="../public/gm.svg" />
      <ItemListContainer mensaje="greeting" />
    </div>
  );
}

export default App;
