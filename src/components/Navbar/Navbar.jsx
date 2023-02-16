import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", width: "100%", paddingLeft: "2%", justifyContent: "space-between", alignItems: "center", backgroundColor: "black", color: "white" }}>
      <Link to="/">
      <img src="logo1.png" alt="logo" style={{ width: "18%", heigth: "18%" }} />
      </Link>
      <h1 style={{color: "rgb(219, 198, 10)"}}>VALENTINE BURGERS</h1>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <Link to="/category/hamburguesas">
          <li style={{ padding: "15px" }}>
            <span style={{textDecoration: "none", color: "white", fontWeight: "bold"}} title="Hamburguesas">HAMBURGUESAS</span>
          </li>
        </Link>
        <Link to="/category/acompañamientos">        
          <li style={{ padding: "15px" }}>
            <span style={{textDecoration: "none", color: "white", fontWeight: "bold"}} title="Acompañamientos">ACOMPAÑAMIENTOS</span>
          </li>
        </Link>
        <Link to="/category/bebidas">
          <li style={{ padding: "15px" }}>
            <span style={{textDecoration: "none", color: "white", fontWeight: "bold"}} title="Bebidas">BEBIDAS</span>
          </li>     
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;