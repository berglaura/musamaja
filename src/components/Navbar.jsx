import React, { useState } from 'react'
import '../styles/navbar.css'

function Navbar () {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className='navbar'>
        <div className='logo'>logo</div>
      <div className='leftSide'>
        <div className='links' id={showLinks ? 'hidden' : ''}>
          <a href='/'>Koti</a>
          <a href='/pianokoulu'>Pianotunteja</a>
          <a href='/musiikkiohjelma'>Musiikkiohjelmaa</a>
          <a href='/contact'>Yhteys</a>
        </div>
        <button className='navbutton' onClick={() => setShowLinks(!showLinks)}>
          <i className='fas fa-bars'></i>
        </button>
      </div>
    </div>
  )
}

export default Navbar
