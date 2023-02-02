import React from "react";

const ItemListContainer = (props) => {

    console.log(props.usuario)

  return (
    <h2 style={{ display: "flex", justifyContent: "center", backgroundColor: "black", color: "white"}}>Hola {props.usuario}</h2>
  );
};

export default ItemListContainer;
