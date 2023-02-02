import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer.js/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer usuario="Cliente" />
    </div>
  );
}

export default App;
