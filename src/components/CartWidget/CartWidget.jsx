import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        paddingRight: "4%",
        width: "2%",
        height: "2%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>{getTotalItems()}</span>
      <Link to="/cart">
        <FiShoppingCart style={{ color: "white" }} />
      </Link>
    </div>
  );
};

export default CartWidget;
