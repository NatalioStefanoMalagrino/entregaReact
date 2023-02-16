import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import {products} from '../../productsMock'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    let id = 2

    useEffect(()=>{

        let productSelected = products.find(prod => prod.id === id)

        setProduct(productSelected)

    }, [])

    console.log(product)

  return (
    <div style={{paddingBottom: "100px"}}>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
    </div>
  )
}

export default ItemDetailContainer