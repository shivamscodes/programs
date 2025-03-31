import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly'>
    <NavLink to="/">
        Home
    </NavLink>

    <NavLink to="/paste">
        paste
    </NavLink>
    </div>
  )
}

export default Navbar
