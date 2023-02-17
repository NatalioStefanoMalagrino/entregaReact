import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer.js/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (

    <BrowserRouter>

    <Navbar/>

    <Routes>

    <Route path="/" element={ <ItemListContainer/>}/>

    <Route path="/category/:id" element={ <ItemListContainer/>}/>

    <Route path="/item/:id" element={ <ItemDetailContainer/>}/>

    <Route path="/cart" element={ <Cart/>}/>

    <Route path="*" element={ <h1>404 Not Found</h1>}/>

    </Routes>

    </BrowserRouter>

  );
}

export default App;
