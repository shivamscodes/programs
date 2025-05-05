import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { addToCart } from '../redux/slices/CardSlice';
import { useDispatch } from 'react-redux';

const FoodCard = ({ id, name, price, desc, img, rating, handelToast }) => {
 const dispatch = useDispatch();

  return (
    <div className
    ='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
        <img className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'
         src={img} alt="img" />
                                                           
    <div className='text-sm flex justify-between'>
      <h2>{name}</h2>
    <span className='text-green-500'>₹{price}</span>
    </div>
    <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
    <div className='flex justify-between'>
        <span className='flex justify-between items-center'>
            <AiFillStar className='mr-1 text-yellow-400'/> {rating}
        </span>
        <button onClick={()=>{
          dispatch(addToCart({id, name, price, rating,img, qty : 1}));
          handelToast(name);
        }}
         className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm '>Add to Cart</button>
        </div>
    
    
    </div>
    
  )
}

export default FoodCard