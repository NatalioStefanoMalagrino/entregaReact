import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const onAdd = (cantidad) => {
    const obj = {
      ...product,
      quantity: cantidad,
    };

    addToCart(obj);
  };

  const quantity = getQuantityById(product.id);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50%",
        gridTemplateRows: "20%",
        justifyContent: "center",
        alingItems: "center",
      }}
    >
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        {product.title}
      </h1>
      <img src={product.img} style={{ width: "100%", height: "100%" }} />
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {product.description}
      </h2>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {product.price}
      </h2>
      <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
      <Link
        to={`/`}
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          style={{ textDecoration: "none", marginTop: "40px" }}
        >
          Volver atras
        </Button>
      </Link>
    </div>
  );
};

export default ItemDetail;
