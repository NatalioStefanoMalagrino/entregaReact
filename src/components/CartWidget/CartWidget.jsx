import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
  return (
    <div style={{ display: "flex", paddingRight: "4%", width: "2%", height: "2%", justifyContent: "center", alignItems: "center" }}>
      <p>2</p>
      <FiShoppingCart />
    </div>
  );
};

export default CartWidget;
