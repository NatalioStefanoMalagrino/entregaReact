import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product, onAdd, quantity }) => {
  return (
    <div className="itemDetail">
      <h1 className="h">{product.title}</h1>
      <img src={product.img} className="imagen" alt="img" />
      <h2 className="h">{product.description}</h2>
      <h2 className="h">{product.price}</h2>
      <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
      <Link to={`/`} className="link1">
        <Button variant="contained" className="button">
          Volver atras
        </Button>
      </Link>
    </div>
  );
};

export default ItemDetail;
