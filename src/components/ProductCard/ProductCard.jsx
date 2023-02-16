import React from 'react'
import "./ProductCard.css"
import {Link} from "react-router-dom";
import { Button } from '@mui/material';


const ProductCard = ({element}) => {
  return (

      <div className="containerCard">
        <h2 className="h2">{element.title}</h2>
        <img src={element.img} alt="" style={{width:"100%",height:"48%"}} />
        <h2 className="h2">{element.price}</h2>

        <Link to={`/Item/${element.id}`} style={{display: "flex", justifyContent: "center", textDecoration: "none"}}>

          <Button variant="contained" style={{textDecoration: "none"}}>
            Ver mas
          </Button>
        
        </Link>

      </div>

  )
}

export default ProductCard