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
        <Link to="/category/1" style={{textDecoration: "none"}}>   
          <li style={{ padding: "15px" }}>
            <span style={{color: "white", fontWeight: "bold"}}>HAMBURGUESAS</span>
          </li>
        </Link>
        <Link to="/category/2" style={{textDecoration: "none"}}>        
          <li style={{ padding: "15px" }}>
            <span style={{color: "white", fontWeight: "bold"}}>ACOMPAÑAMIENTOS</span>
          </li>
        </Link>
        <Link to="/category/3" style={{textDecoration: "none"}}>
          <li style={{ padding: "15px" }}>
            <span style={{color: "white", fontWeight: "bold"}}>BEBIDAS</span>
          </li>     
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;