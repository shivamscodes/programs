import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';



const Viewpaste = () => {
       const {id} = useParams();

       const allPastes = useSelector((state)=> state.paste.pastes);

       const paste = allPastes.filter((p) => p._id === id)[0];
      console.log(paste);

// if (!paste) {
//         return (
//             <div className="text-center text-red-500 mt-10">
//                 <h2 className="text-2xl font-bold">404 - Paste Not Found</h2>
//                 <p>The requested paste does not exist.</p>
//             </div>
//         );
//     }

  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
      <input className='p-1 border rounded-2xl mt-2 w-[66%] pl-3' 
      type="text" 
      placeholder='enter title here' 
      value={paste.title} 
      disabled
      onChange={(e) => setitle(e.target.value)}
      />
    </div>

    <div className='mt-8'>
        <textarea className=' border rounded-2xl mt-4 min-w-[500px] p-4'
        value={paste.content} 
        placeholder='enter content here'
        disabled
        onChange={(e) => setvalue(e.target.value)} 
        rows={20}></textarea>
    </div>
    </div>
  )
}

export default Viewpaste
