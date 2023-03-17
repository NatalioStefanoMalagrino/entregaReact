import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div className="cartWidget">
      <span>{getTotalItems()}</span>
      <Link to="/cart">
        <FiShoppingCart className="carrito" />
      </Link>
    </div>
  );
};

export default CartWidget;
