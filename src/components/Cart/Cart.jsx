import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  console.log(cart);

  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Carrito eliminado", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Carrito no eliminado", "", "info");
      }
    });
  };

  // if (cart.length < 1) {
  //   return (
  //     <img
  //       src="https://res.cloudinary.com/dw4yk4pk2/image/upload/v1678894341/undraw_web_search_re_efla_cx9cah.svg"
  //       alt=""
  //     />
  //   );
  // }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      {cart.length < 1 ? (
        <img
          src="https://res.cloudinary.com/dw4yk4pk2/image/upload/v1678894341/undraw_web_search_re_efla_cx9cah.svg"
          alt=""
        />
      ) : (
        <div>
          {cart.map((item) => {
            return (
              <div
                key={item.id}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "4px solid black",
                    alignItems: "center",
                    width: "1000px",
                    padding: "20px",
                    margin: "50px",
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{ width: "70px", height: "70px" }}
                  />
                  <h3>precio: {item.price}</h3>
                  <h3>cantidad: {item.quantity}</h3>
                  <Button
                    onClick={() => deleteProductById(item.id)}
                    variant="contained"
                    style={{ textDecoration: "none" }}
                  >
                    Quitar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "4px solid black",
          alignItems: "center",
          width: "1000px",
          padding: "20px",
          margin: "50px",
        }}
      >
        <h3>Precio final: ${getTotalPrice()}</h3>
        <Button
          Button
          onClick={() => clearCartAlert()}
          variant="contained"
          style={{ textDecoration: "none" }}
        >
          Vaciar carrito
        </Button>
        <Button Button variant="contained" style={{ textDecoration: "none" }}>
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default Cart;
