import { useState } from "react";
import { useEffect } from "react";
import {products} from "../../productsMock"
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {

  const {categoryName} = useParams()
  console.log("asi llega a categoryName: ",categoryName)

  const [items, setItems] = useState([])

  useEffect( ()=>{

    const productsFiltered = products.filter ( (product)=> product.category === categoryName )

    const task = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve( categoryName ? productsFiltered : products )
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
  }, [categoryName])

  return (
    <>
      <ItemList items={items}/>
    </>
  );
};

export default ItemListContainer;
