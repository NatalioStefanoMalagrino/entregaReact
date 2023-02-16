import { FiShoppingCart } from "react-icons/fi";
import {Link} from "react-router-dom"

const CartWidget = () => {
  return (
    <div style={{ display: "flex", paddingRight: "4%", width: "2%", height: "2%", justifyContent: "center", alignItems: "center" }}>
      <Link to="/cart">
      <FiShoppingCart style={{color: "white"}} />
      </Link>
    </div>
  );
};

export default CartWidget;
