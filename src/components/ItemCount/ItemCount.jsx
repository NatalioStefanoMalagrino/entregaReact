import React from 'react'
import { useState } from 'react'

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
    <div>
        <h1>El contador esta en {contador}</h1>
        <button onClick={sumar} disabled={contador===stock}>Sumar</button>
        <button onClick={restar} disabled={contador===0}>Restar</button>
        <button onClick={ ()=> onAdd(contador)} disabled={contador===0}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount