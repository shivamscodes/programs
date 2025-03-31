import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm()

  function onSubmit(data){
    console.log("submitting the form", data);
  }

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
    <label >first Name:  </label>
    <input  
    className={errors.firstname ? 'input-error' : ""}
    {...register('firstname', 
     { 
      required: true, 
      minLength: {value:3 , message:'min len is 3'},
      maxLength:8 
      })} />
      {errors.firstname && <p className='error-msg' >{errors.firstname.message}</p>}
    </div><br/>

    <div>
    <label >middle Name: </label>
    <input  {...register('middlename')} />
    </div><br/>

    <div>
    <label>last Name: </label>
    <input  {...register('lastname')} />
    </div><br/>

    <input type='submit' disabled={isSubmitting}></input>
   </form>
  )
}

export default App
