import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFrompaste } from '../redux/pasteslice';
import toast from 'react-hot-toast';
 
const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm,setsearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handelDelete(pasteId){
    dispatch(removeFrompaste(pasteId));
  }

  return (
    <div>
      <input
      className='p-2 rounded-2xl min-w-[600px] mt-5'
      type="search"
      placeholder='search here'
      value={searchTerm}
      onChange={(e)=> setsearchTerm(e.target.value)}
      ></input>

      <div className='flex flex-col gap-5'>
        {
          filteredData.length >0 &&
          filteredData.map(
            (paste)=>{
              return (
                <div className='border' key={paste?.id}>
                  <div>
                  {paste.title}
                  </div>
                  <div>
                  {paste.content}
                  </div>
                  <div className='flex flex-row gap-4 place-content-evenly'>
                    <button>
                    <a href={`/?pasteId=${paste?._id}`}>
                    Edit
                    </a>
                    </button>
                    <button>
                    <a href={`/pastes/${paste?._id}`}>
                    view
                    </a>
                    </button>
                    <button onClick={() => handelDelete(paste?._id)}>
                      Delete
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("copied to clipboard");
                    }}>
                       copy 
                    </button>
                    <button>
                      share
                    </button>
                  </div>

                  <div>
                    {paste.createdAt}
                  </div>

                  
                </div>
              )
            })
        }

      </div>
    </div>
  )
}

export default Paste
