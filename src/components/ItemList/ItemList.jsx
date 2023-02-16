import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const ItemList = ({items}) => {

  return (
    <div style={{width: "100%", display: "grid", gridTemplateColumns: "10% 10% 10%", gridTemplateRows: "80% 80% 80%", justifyContent: "space-evenly",alingItems: "center", height: "60vh", color: "white"}}>
        {items.map((element)=> {
          return <ProductCard element={element} key={element.id}/>
         })}
    </div>
  );
};

export default ItemList