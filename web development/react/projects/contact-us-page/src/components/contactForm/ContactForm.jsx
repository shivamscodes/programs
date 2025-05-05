import React, { useState } from 'react'
import styles from './contact.module.css';
import Button from '../button/Button';
import { MdMessage } from 'react-icons/md' ;
import { FaPhoneAlt} from 'react-icons/fa';
import { HiMail } from "react-icons/hi";

const ContactForm = () => {

  const[name, setname] = useState("shivam");
  const[email, setemail] = useState("shivam@mail.com")
  const[text, settext] = useState("hiii hello")
  
  
  const onSubmit = (event) =>{
    event.preventDefault();

    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
    
    console.log({
      name, email, text,
    });
    

  };

  return (
    <section className={styles.container}>


        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
            </div>

            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>

            <form onSubmit={onSubmit}>

              <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' id='name' autoComplete="name"/>
              </div>

              <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name='email' id='email' autoComplete="email"/>
              </div>

              <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name='text' rows='8' id='text' autoComplete="on"/>
              </div>
             
             <div style={{
              display: "flex",
              justifyContent: "end",
             }}>
             <Button  text="SUBMIT"/>
             </div>
              
             <div> {name + " " + email + " " + text} </div>
            </form>

            </div>
          

        <div className={styles.contact_image}>
          <img src="/images/contact.svg" alt="img" />
        </div>
      
    </section>
  )
}

export default ContactForm;
