import { useState } from "react";
import {
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, total, clearCart, setOrderId }) => {
  const [userInfo, setUserInfo] = useState({ email: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));

    cart.map((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });

    clearCart();

    console.log(order);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="placeholder"
          placeholder="Ingrese su email"
          name="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="placeholder"
          placeholder="Ingrese su numero telefonico"
          name="phone"
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />
        <button variant="contained">Comprar</button>
      </form>
    </div>
  );
};

export default FormCheckout;
