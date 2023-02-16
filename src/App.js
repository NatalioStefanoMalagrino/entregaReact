import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer.js/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"

import {BrowserRouter, Routes, Route} from "react-router-dom"

const onAdd = (cantidad)=>{
  console.log(`se agregaron al carrito ${cantidad} unidades`)
}

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <ItemCount stock={10} initial={0} onAdd={onAdd}/>
    //   <ItemListContainer/>
    //   <FetchingData/>
    //   <ItemDetailContainer/>
    // </div>

    <BrowserRouter>

    <Navbar/>

    <Routes>

    <Route path="/" element={ <ItemListContainer/>}/>

    <Route path="/itemDetail" element={ <ItemDetailContainer/>}/>

    <Route path="/cart" element={ <Cart/>}/>

    <Route path="*" element={ <h1>404 Not Found</h1>}/>

    </Routes>

    </BrowserRouter>

  );
}

export default App;
