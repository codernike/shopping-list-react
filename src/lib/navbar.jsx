import React from 'react'
import './navbar.css'
export default function navbar() {
  return (
   <>
   <div className='navbar'>
    <div class='container-navbar '>
      <a href='/'> <img id='navbarimg' src='https://play-lh.googleusercontent.com/jbHYnlXZ8lQJ42BrJ6vGwY--UYHYy4LzqACxi1FWmMPQ0cw3rAWHgQIl6AuhQR0UpVo' alt='logo'/>
      BMI Calculator  </a>
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
