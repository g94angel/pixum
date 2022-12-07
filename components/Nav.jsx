import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/contact" >Contact</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default Nav