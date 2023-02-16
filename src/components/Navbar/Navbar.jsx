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
        <li style={{ padding: "15px" }}>
            <a style={{textDecoration: "none", color: "white", fontWeight: "bold"}} href="./index.html">HAMBURGUESAS</a>
        </li>
        <li style={{ padding: "15px" }}>
            <a style={{textDecoration: "none", color: "white", fontWeight: "bold"}} href="./index.html">ACOMPAÑAMIENTOS</a>
        </li>
        <li style={{ padding: "15px" }}>
            <a style={{textDecoration: "none", color: "white", fontWeight: "bold"}} href="./index.html">BEBIDAS</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;