import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button} from '@mui/material';

const Cart = () => {

  const {cart, clearCart, deleteProductById, getTotalPrice} = useContext(CartContext)

  console.log(cart)

  return (
    <div>
      <h1 style={{display: "flex", justifyContent: "center"}}>Carrito de compras</h1>
      {
        cart.map(item =>{
          return <div key={item.id} style={{display: "flex", justifyContent: "space-evenly"}}>
            <div style={{display: "flex", justifyContent: "space-between", border: "4px solid black", alignItems: "center", width: "50%", padding: "20px"}}>
              <img src={item.img} alt="" style={{width: "70px", height: "70px"}}/>
              <h3>precio: {item.price}</h3>
              <h3>cantidad: {item.quantity}</h3>
              <Button onClick={()=>deleteProductById(item.id)} variant="contained" style={{textDecoration: "none", height: "30%"}}>Quitar</Button>
            </div>
            <div style={{border: "4px solid black"}}>
              <h1 style={{display: "flex", justifyContent: "center"}}>Precio final: ${getTotalPrice()}</h1>
              <Button Button onClick={clearCart} variant="contained" style={{textDecoration: "none", margin:"40px"}}>Vaciar carrito</Button>
              <Button Button variant="contained" style={{textDecoration: "none", margin:"40px"}}>Comprar</Button>
            </div>
          </div>
        })
      }

    </div>
  )
}

export default Cart