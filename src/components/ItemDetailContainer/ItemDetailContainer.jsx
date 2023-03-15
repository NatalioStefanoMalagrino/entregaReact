import React, { useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const onAdd = (cantidad) => {
    if (cantidad > 0) {
      console.log(`se agregaron al carrito ${cantidad} unidades`);
    } else {
      console.log("no hay nada para agregar al carrito");
    }
  };

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productSelected = products.find((prod) => prod.id === Number(id));

    setProduct(productSelected);
  }, []);

  return <ItemDetail product={product} onAdd={onAdd} />;
};

export default ItemDetailContainer;
