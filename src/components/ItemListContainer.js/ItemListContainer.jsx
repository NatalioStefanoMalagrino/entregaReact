import { useState } from "react";
import { useEffect } from "react";
import {products} from "../../productsMock"
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = () => {

const [items, setItems] = useState([])

  useEffect( ()=>{
    const task = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(products)
      }, 500);
      //reject("error que diga algo");
    });
  
    task
      .then((res) => {
        setItems( res );
      })
      .catch((error) => {
        console.log("aca se rechazo", error);
      });
  }, [])

  console.log( items )

  return (
    <>
      <ItemList items={items}/>
    </>
  );
};

export default ItemListContainer;
