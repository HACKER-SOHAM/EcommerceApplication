import { createContext, useEffect } from "react";
import { useState } from "react";
import { products } from "../assets/assets/frontend_assets/assets.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

console.log('ShopContext - Products imported:', products);
console.log('ShopContext - Products length:', products?.length);

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
  const currency='$';
  const delivery_fee=10;
  const [search,setSearch]=useState('');
  const [showSearch,setShowSearch]=useState(false);
  const [cartItems,setCartItems]=useState({});
  const navigate=useNavigate();

  const addToCart=async(itemId,size)=>{
    if(!size){
      toast.error('Please select a size');
      return;
    }
    let cartData=structuredClone(cartItems);
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size]++;
      }
      else{
        cartData[itemId][size]=1;
      }

  }
  else{
    cartData[itemId]={};
    cartData[itemId][size]=1;
  }
  setCartItems(cartData);
 
}
const getCartCount=()=>{
  let totalCount=0;
  for(const item in cartItems){
    for( const size in cartItems[item]){
      try{
        if(cartItems[item][size]>0){
          totalCount+=cartItems[item][size];
        }
      }
      catch(error){
        console.log(error);
      }
    }
  }
    return totalCount;
}
const updateQuantity=async(itemId,size,quantity)=>{
  let cartData=structuredClone(cartItems);
  cartData[itemId][size]=quantity;
  setCartItems(cartData);
}
const getCartAmount= ()=>{
let totalAmount=0;
for(const items in cartItems){
  let itemInfo=products.find((product)=>product._id===items);
  for(const item in cartItems[items]){
    try{
      if(cartItems[items][item]>0){
        totalAmount+=cartItems[items][item]*itemInfo.price;
      }
    }
    catch(error){
      console.log(error);
    }
  }
}
return totalAmount;
}

  const value={
    currency,
    delivery_fee,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  }
  
  console.log('ShopContext - Value being provided:', value);
  
  return(
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;