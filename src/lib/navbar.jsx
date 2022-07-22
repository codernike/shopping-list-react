import React from 'react'
import './navbar.css'
export default function navbar() {
  return (
   <>
   <div className='navbar'>
    <div class='container-navbar '>
      <a href='/'> <img id='navbarimg' src='https://i.pinimg.com/originals/2b/13/10/2b1310948f9b14fce138b9f242ae439a.png' alt='logo'/>
      shopping  </a>
        <ul>
            <li className='li-nav'><a href='/' >Home</a></li>
            <li className='li-nav'><a href='/'>Contact Us</a></li>
            <li className='li-nav'><a href='/'>Form</a></li>
            <li className='li-nav'><a href='/'>Login</a></li>
        </ul>
    </div>
   </div>
   </>
  )
}
