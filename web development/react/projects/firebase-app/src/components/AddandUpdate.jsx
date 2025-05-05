import React from 'react'
import Model from './Model'
import { Formik, Form, Field } from 'formik';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const AddandUpdate = ({isOpen, onClose}) => {

  const addcontact = async (contact) =>{
    try {
      const contactRef = collection(db , "contacts");
      await addDoc(contactRef , contact);
      
    } catch (error) {
     console.log(error);
     
    }
  }




  return (
    <div>
         <Model isOpen={isOpen} onClose={onClose}> 
          <Formik 
           initialValues={{
            name: "",
            email: "",
           }}
           onSubmit={(values) =>{
            console.log(values);
            addcontact({values})
           }}

           >
        <Form className='flex flex-col gap-4'>
         <div className="flex flex-col gap-1">
         <label htmlFor="name">Name</label>
         <Field name="name"  className="h-10 border" id='name' type='text'  autoComplete='name'/>
         </div>
         
         <div className="flex flex-col gap-1">
         <label htmlFor="email">Email</label>
         <Field name="email" className="h-10 border" id='email' autoComplete='email'/>
         </div>

        <button className='border bg-orange-400 px-3 py-1.5 self-end'>add contact</button>

        </Form>
      </Formik>
     
      </Model>
   </div> 
      
  )
}

export default AddandUpdate
