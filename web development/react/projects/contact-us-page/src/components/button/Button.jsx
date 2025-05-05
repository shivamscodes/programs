import React from 'react'
import { MdMessage } from 'react-icons/md' ;
import styles from './Button.module.css';

const Button = (props) => {
    const {isOutline, icon, text , ...rest } = props;             //destructuring 

//   return (
//     <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
//         {props.icon}
//       {props.text}
    

return (
    <button 
      {...rest}
    className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
      {text}
    
    </button>
  )
}

export default Button;
