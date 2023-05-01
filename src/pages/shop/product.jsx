import React, { useContext } from 'react'
import {ShopContext} from "../../context/shop-Context"

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);

  const productUnits = cartItems[id]
  return (
    <div className="product">
      <img src={productImage}/>
      <div className="description">
        <p><b>{productName}</b></p>
        <p>#{price}</p>
      </div>
      <button className="addToCartBtn" onClick={()=> addToCart(id)}>Add to cart {productUnits > 0 && <>({productUnits})</>}</button>
    </div>
  )
}