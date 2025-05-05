import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { CiSearch } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import {collection, getDocs} from 'firebase/firestore';
import { db } from './config/firebase';
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import ContactCard from './components/ContactCard';
import Model from './components/Model';
import AddandUpdate from './components/AddandUpdate';


function App() {
 
  const [contacts, setcontacts] = useState([]);
  const [isOpen, setopen] = useState(false);

  const onOpen = () =>{
    setopen(true);
  };
  const onClose = () =>{
    setopen(false);
  };



  useEffect(() => {
    const getcontacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
            
          };
        });

        console.log("Fetched contacts:", contactLists);
        setcontacts(contactLists);
        
      } catch (error) {
  console.log(error); 
}
    }
      getcontacts();
    
  },[]);





  return (
   
<>
<div className='mx-auto max-w-[370px] px-4'>
    <Navbar/>


<div className='flex gap-2'>

<div className='flex relative items-center flex-grow '>
    <CiSearch className='text-4xl absolute ml-1 text-white'/>
      <input type="text" name="search" id="search" className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white" />
    </div>
    
   
    <FaPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer'/>
   

</div> 

 
    <div className='mt-4 flex flex-col gap-3' >
      {contacts.map((contact) => (
       <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
   </div>
<AddandUpdate onClose={onClose} isOpen={isOpen}/>
</>
  )
};

export default App
