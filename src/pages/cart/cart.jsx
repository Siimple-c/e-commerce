import React, {useContext} from 'react';
import {PRODUCTS} from '../../inventory';
import {ShopContext} from '../../context/shop-Context';
import {CartItem} from './cart-Item';
import './cart.css'
import {useNavigate} from 'react-router-dom'

export const Cart = () => {
  const {cartItems, totalCartValue} = useContext(ShopContext)
  const totalCartVal = totalCartValue()

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
      <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=> {
          if(cartItems[product.id] !== 0){
            return < CartItem data={product} />
          }
        })}
      </div>
        {totalCartVal > 0 ?
      <div className="checkout">
        <p>Subtotal: #{totalCartVal}</p>
        <button onClick={()=> navigate("/")}>Add more items</button>
        <button>Checkout</button>
        </div>
      : <h2>Empty cart</h2>} 
    </div>
  )
}
