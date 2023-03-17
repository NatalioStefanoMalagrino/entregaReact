import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dw4yk4pk2/image/upload/v1676572641/logo1_rcp2wd.png"
          alt="logo"
          className="img"
        />
      </Link>
      <h1>VALENTINE BURGERS</h1>
      <ul className="ul">
        <Link to="/category/1" className="links">
          <li className="li">
            <span className="span">HAMBURGUESAS</span>
          </li>
        </Link>
        <Link to="/category/2" className="links">
          <li className="li">
            <span className="span">ACOMPAÑAMIENTOS</span>
          </li>
        </Link>
        <Link to="/category/3" className="links">
          <li className="li">
            <span className="span">BEBIDAS</span>
          </li>
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
