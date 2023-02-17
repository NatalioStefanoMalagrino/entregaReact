import React, { useEffect, useState } from 'react'

import { products } from '../../productsMock'
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material';

const ItemDetailContainer = () => {
  
  const onAdd = (cantidad)=>{

    if(cantidad > 0) {
      console.log(`se agregaron al carrito ${cantidad} unidades`)
    }else{
      console.log("no hay nada para agregar al carrito")
    }
  }

  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect(()=>{

    let productSelected = products.find( prod => prod.id === Number(id))

      setProduct( productSelected )

    }, [])

    return (
    <div style={{display: "grid", gridTemplateColumns: "50%", gridTemplateRows: "20%",justifyContent: "center",alingItems: "center"}}>
        <h1 style={{display:"flex", justifyContent:"center"}}>{product.title}</h1>
        <img src={product.img} style={{width:"100%",height:"100%"}}/>
        <h2 style={{display:"flex", justifyContent:"center"}}>{product.description}</h2>
        <h2 style={{display:"flex", justifyContent:"center"}}>{product.price}</h2>
        <ItemCount onAdd={onAdd} stock={product.stock} initial={0}/>
        <Link to={`/category/${product.id}`} style={{display: "flex", justifyContent: "center", textDecoration: "none"}}>

          <Button variant="contained" style={{textDecoration: "none", marginTop:"40px"}}>
            Volver atras
          </Button>
        
        </Link>
    </div>
  )
}

export default ItemDetailContainer