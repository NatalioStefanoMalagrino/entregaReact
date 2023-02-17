import React, { useEffect, useState } from 'react'

import { products } from '../../productsMock'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{

        let productSelected = products.find( prod => prod.id === Number(id))

        setProduct( productSelected )

    }, [])

  return (
    <div style={{paddingBottom: "100px"}}>
        <h1>{product.title}</h1>
        <img src={product.img} style={{width:"30%",height:"15%"}}/>
        <h2>{product.description}</h2>
        <h2>{product.price}</h2>
    </div>
  )
}

export default ItemDetailContainer