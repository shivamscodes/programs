import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  
  return (
   <nav className={`${styles.navigation} container`}>
     <div className='logo'>
      <img src="/images/logo.png" alt="img" />
      </div>
   
     <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
     </ul>
   </nav>
  )
}

export default Navigation;
