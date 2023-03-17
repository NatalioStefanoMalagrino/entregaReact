import React from "react";
import { Link } from "react-router-dom";
import "./FinishBuy.css";

const FinishBuy = ({ orderId }) => {
  return (
    <div className="FinishBuy">
      <h1>El id de tu compra es: {orderId}</h1>
      <Link className="link" to="/">
        Seguir comprando
      </Link>
    </div>
  );
};

export default FinishBuy;
