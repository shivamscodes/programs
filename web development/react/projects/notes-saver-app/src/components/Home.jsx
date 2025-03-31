import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addtopaste, updatetopaste } from '../redux/pasteslice';

const Home = () => {
    const [title,setitle] = useState('');
    const [value,setvalue] = useState('');
    const [searchparam,setsearchparam] = useSearchParams();
    const pasteId= searchparam.get("pasteId");
    const dispatch = useDispatch();
   const allPastes = useSelector((state)=> state.paste?.pastes);

  
   useEffect(()=>{
    if(pasteId){
      const paste = allPastes.find((p) => p._id === pasteId);
      
      setitle(paste.title);
      setvalue(paste.content);
    
  }    
  },[pasteId])



    function createPaste() {
        const paste = {
          title: title,
          content: value,
          _id: pasteId ||
               Date.now().toString(36),
               createdAt:new Date().toISOString(),
        }

        if(pasteId){
          //update
          dispatch(updatetopaste(paste));
        }
        else{
          //create
          dispatch(addtopaste(paste));
        }

        //after create or update 
        setitle('');
        setvalue('');
        setsearchparam({});
    }

   
  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
      <input className='p-1 border rounded-2xl mt-2 w-[66%] pl-3' 
      type="text" 
      placeholder='enter title here' 
      value={title} 
      onChange={(e) => setitle(e.target.value)}
      />

      <button className='p-2 border rounded-2xl mt-2' onClick={createPaste}>
        {
        pasteId ? "update my paste" : "create my paste"
        }
      </button>
    </div>

    <div className='mt-8'>
        <textarea className=' border rounded-2xl mt-4 min-w-[500px] p-4'
        value={value} placeholder='enter content here'
        onChange={(e) => setvalue(e.target.value)} 
        rows={20}></textarea>
    </div>


    </div>
  )
}

export default Home
