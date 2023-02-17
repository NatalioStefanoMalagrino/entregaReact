import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material';

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)

    const sumar = ()=>{
        if(contador < stock){
            setContador( contador + 1 )
        }
    }

    const restar = ()=>{
        setContador( contador - 1 )
    }

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <Button onClick={restar} disabled={contador===0} variant="contained" style={{textDecoration: "none", margin: "20px"}}>Restar</Button>
        <h1>{contador}</h1>
        <Button onClick={sumar} disabled={contador===stock} variant="contained" style={{textDecoration: "none", margin: "20px"}}>Sumar</Button>
        <Button onClick={ ()=> onAdd(contador)} disabled={contador===0} variant="contained" style={{textDecoration: "none", margin: "20px"}}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount