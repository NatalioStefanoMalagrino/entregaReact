import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button} from '@mui/material';

const Cart = () => {

  const {cart, clearCart, deleteProductById, getTotalPrice} = useContext(CartContext)

  console.log(cart)

  return (
    <div>
      <h1>Carrito de compras</h1>

      {
        cart.map(item =>{
          return <div key={item.id} style={{border: "2px solid black"}}>
            <h3>nombre: {item.title}</h3>
            <h3>precio: {item.price}</h3>
            <h3>cantidad: {item.quantity}</h3>
            <Button onClick={()=>deleteProductById(item.id)} variant="contained" style={{textDecoration: "none", marginTop:"40px"}}>Quitar elemento del carrito</Button>
          </div>
        })
      }

      <Button onClick={clearCart} variant="contained" style={{textDecoration: "none", marginTop:"40px"}}>Vaciar carrito</Button>

      <h1>El total del carrito es ${getTotalPrice()}</h1>
    </div>
  )
}

export default Cart