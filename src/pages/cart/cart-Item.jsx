import React, {useContext} from 'react';
import { ShopContext } from '../../context/shop-Context';

export const CartItem = (props) => {
  const {id, productImage, productName, price} = props.data;
  const {cartItems, addToCart, removeFromCart, productUnitChanger} = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <p>{productName}</p>
        </p>
        <p>#{price}</p>
        <div>
          <button onClick={()=> removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => productUnitChanger(Number(e.target.value), id)}/>
          <button onClick={()=> addToCart(id)}>+</button>
        </div>
      </div>
    </div>
)
}
