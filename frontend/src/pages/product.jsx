import React from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
import RelatedProducts from '../components/RelatedProducts'
const Product = () => {
const {productId}=useParams();
const {products,currency,addToCart}=useContext(ShopContext);  
const [productData,setProductData]=useState(false);
const [image,setImage]=useState('');
const [size,setSize]=useState('');
const [related,setRelated]=useState([]);


const fetchProductData=async()=>{
  products.map((item)=>{
    if(item._id===productId){
      setProductData(item);
      setImage(item.image[0]);
      return null;
    }
  })
}
useEffect(()=>{
  fetchProductData();
},[productId,products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*productData*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'> 
        {/*product images*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }            
           </div>
           <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto' />
           </div>
           </div>
           {/*---------product details---------*/}
           <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${size===item ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                  ))
                }
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Cash on Delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
            </div>
      </div>
      {/* description */}
      <div className='mt-20'>
        <div className='flex'>
          <p className='border px-5 py-3 text-sm'>Description</p>
          <p className=' border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati suscipit delectus molestias rem officia, nemo beatae doloribus facere nostrum, similique est. Optio sed recusandae minus illum unde. Veniam, veritatis consequatur?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, hic laudantium vero animi veritatis neque assumenda est excepturi amet deleniti. Labore, ut! Nemo quo doloremque velit tempora aliquam! Nemo, reprehenderit.</p>

        </div>
      </div>
      {/*diaplay related products*/}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      
    </div>
  ):<div className='opacity-0'></div>
}

export default Product