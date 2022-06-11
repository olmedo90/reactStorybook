import React from 'react'
import { Link } from 'react-router-dom'

const NavsLinks = () => {
  return (
   <nav>
    <Link to="/comentarios" className='btn btn-primary'> Comentarios</Link>
    <Link to="/" className='btn btn-primary'> Inicion</Link>
    <Link to="/gsdjdj" className='btn btn-primary'> sin funcion</Link>
   </nav>
  )
}

export default NavsLinks