import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const onAdd = (cantidad) => {
    const obj = {
      ...product,
      quantity: cantidad,
    };

    addToCart(obj);

    Swal.fire({
      icon: "success",
      title: "Se agrego el producto al carrito",
    });
  };

  const quantity = getQuantityById(product.id);

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);

    getDoc(ref)
      .then((res) => {
        setProduct({
          ...res.data(),
          id: res.id,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <ItemDetail product={product} onAdd={onAdd} quantity={quantity} />;
};

export default ItemDetailContainer;
