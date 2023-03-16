import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/ClipLoader";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "products");

    if (id) {
      const q = query(itemCollection, where("category", "==", id));

      getDocs(q)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
          setItems(products);
        })
        .catch((err) => console.log("error:" + err));
    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
          setItems(products);
        })
        .catch((err) => console.log("error:" + err));
    }

    // const productsFiltered = products.filter(
    //   (product) => product.category === id
    // );
    // const task = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(id ? productsFiltered : products);
    //   }, 500);
    //   //reject("error que diga algo");
    // });
    // task
    //   .then((res) => {
    //     setItems(res);
    //   })
    //   .catch((error) => {
    //     console.log("aca se rechazo", error);
    //   });
  }, [id]);
  console.log(items);

  return (
    <div>
      {items.length < 1 ? (
        <RingLoader
          color={"red"}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
