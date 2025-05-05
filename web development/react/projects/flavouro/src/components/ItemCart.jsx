import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart ,incrementQty ,decrementQty} from '../redux/slices/CardSlice';
  import toast from "react-hot-toast"



const ItemCart = ({id,name,qty,price, img}) => {
const dispatch = useDispatch();


  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
        <MdDelete onClick={()=>{ 
          dispatch(removeFromCart({id, img, name, price, qty} ));
          toast(`${name} Removed!!`);
        }} 

        className='absolute right-7 text-gray-600 cursor-pointer'/>
        
        <img
        className='w-[50px] h-[50px] '
        src={img} alt="img" />
    
    <div className='leading-5'>
        <h2 className='font-bold text-gray-800'>{name}</h2>
        <div className='flex justify-between '>
        <span className="text-green-500 font-bold">₹{price}</span>
        <div className='flex justify-center items-center gap-2 absolute right-7'>
            <AiOutlinePlus onClick={()=> qty >= 1 ?  dispatch(incrementQty({id})) : (qty = 0)}
             className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-liner cursor-pointer'/>
            <span >{qty}</span>
            <AiOutlineMinus onClick={()=> qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0) }
             className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-liner cursor-pointer'/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ItemCart