import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsFiltered = products.filter(
      (product) => product.category === id
    );

    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id ? productsFiltered : products);
      }, 3000);
      //reject("error que diga algo");
    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("aca se rechazo", error);
      });
  }, [id]);

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
