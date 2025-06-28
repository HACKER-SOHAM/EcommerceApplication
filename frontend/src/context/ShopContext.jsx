import { createContext } from "react";
import { useState } from "react";
import { products } from "../assets/assets/frontend_assets/assets";

console.log('ShopContext - Products imported:', products);
console.log('ShopContext - Products length:', products?.length);

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
  const currency='$';
  const delivery_fee=10;

  const value={
    currency,
    delivery_fee,
    products,
  }
  
  console.log('ShopContext - Value being provided:', value);
  
  return(
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;