import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../inventory';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let i =1; i < PRODUCTS.length +1; i++){
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,[itemId]: prev[itemId] + 1
    }))
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,[itemId]: prev[itemId] - 1
    }))
  }

  const productUnitChanger = (unit, itemId) => {
  setCartItems((prev) => ({...prev,[itemId]: unit}))
  }

  const totalCartValue = () => {
    let totalVal = 0;
    for(const item in cartItems) {
      if(cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalVal += cartItems[item] * itemInfo.price
      }
    } 
    return totalVal
  }

  const contextValue = {cartItems, addToCart, removeFromCart, productUnitChanger, totalCartValue}

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}