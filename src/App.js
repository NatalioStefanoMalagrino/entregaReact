import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer.js/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./context/CartContext";

function App() {
  return (

    <BrowserRouter>

      <CartContextProvider>

        <Navbar />

        <Routes>

          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />

        </Routes>

      </CartContextProvider>

    </BrowserRouter>

  );
}

export default App;
