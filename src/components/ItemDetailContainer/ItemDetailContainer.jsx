import React, { useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

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

  return <ItemDetail product={product} onAdd={onAdd} />;
};

export default ItemDetailContainer;
