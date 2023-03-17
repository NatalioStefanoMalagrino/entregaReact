import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { useState } from "react";
import FormCheckout from "../FormCheckout/FormCheckout";
import FinishBuy from "../FinishBuy/FinishBuy";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState("");

  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Carrito eliminado", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Carrito no eliminado", "", "info");
      }
    });
  };

  const total = getTotalPrice();

  if (orderId) {
    return <FinishBuy orderId={orderId} />;
  }

  return (
    <div>
      {!buy ? (
        <div className="cart">
          {cart.length < 1 ? (
            <img
              src="https://res.cloudinary.com/dw4yk4pk2/image/upload/v1678894341/undraw_web_search_re_efla_cx9cah.svg"
              alt=""
            />
          ) : (
            <div>
              {cart.map((item) => {
                return (
                  <div key={item.id} className="map">
                    <div className="cart2">
                      <img src={item.img} alt="" className="img" />
                      <h3>precio: {item.price}</h3>
                      <h3>cantidad: {item.quantity}</h3>
                      <Button
                        onClick={() => deleteProductById(item.id)}
                        variant="contained"
                      >
                        Quitar
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="cart2">
            <h3>Precio final: ${total}</h3>
            <Button onClick={() => clearCartAlert()} variant="contained">
              Vaciar carrito
            </Button>
            <Button onClick={() => setBuy(true)} variant="contained">
              Checkout
            </Button>
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          total={total}
          clearCart={clearCart}
          setOrderId={setOrderId}
        />
      )}
    </div>
  );
};

export default Cart;
