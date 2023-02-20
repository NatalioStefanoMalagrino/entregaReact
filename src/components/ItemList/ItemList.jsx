import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const ItemList = ({items}) => {

  return (
    <div style={{width: "100%", display: "flex", flexWrap:"wrap", justifyContent: "center", alingItems: "center", height: "60vh", color: "white"}}>
        {items.map((element)=> {
          return <ProductCard element={element} key={element.id}/>
         })}
    </div>
  );
};

export default ItemList