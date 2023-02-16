import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", backgroundColor: "black", color: "white" }}>
      <Link to="/">
      <img src="https://res.cloudinary.com/dw4yk4pk2/image/upload/v1676572641/logo1_rcp2wd.png" alt="logo" style={{ width: "18%", heigth: "18%", marginLeft: "70px"}} />
      </Link>
      <h1 style={{color: "rgb(219, 198, 10)"}}>VALENTINE BURGERS</h1>
      <ul style={{ display: "flex", listStyle: "none", textDecoration: "none" }}>
        <Link to="/category/hamburguesas" style={{textDecoration: "none"}}>   
          <li style={{ padding: "15px" }}>
            <span style={{color: "white", fontWeight: "bold"}} title="Hamburguesas">HAMBURGUESAS</span>
          </li>
        </Link>
        <Link to="/category/acompañamientos" style={{textDecoration: "none"}}>        
          <li style={{ padding: "15px" }}>
            <span style={{color: "white", fontWeight: "bold"}} title="Acompañamientos">ACOMPAÑAMIENTOS</span>
          </li>
        </Link>
        <Link to="/category/bebidas" style={{textDecoration: "none"}}>
          <li style={{ padding: "15px" }}>
            <span style={{color: "white", fontWeight: "bold"}} title="Bebidas">BEBIDAS</span>
          </li>     
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;