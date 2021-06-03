import React from 'react'
import Navbar from './Navbar'
import '../styles/contact.css'
import Typewriter from 'typewriter-effect'

const Contact = () => {
  return (
    <div className='contact'>
      <Navbar />
      <div className='typewriter'>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            cursor: null
          }}
          onInit={typewriter => {
            typewriter
              .typeString('Ota yhteyttä!')
              .pauseFor(2000)
              .start()
          }}
        />
      </div>
      <div className='info'>
        <h1>Musamaja</h1>
        <p>Y-tunnus 2490754-7</p>
        <h3>
          <b>Käyntiosoite:</b>
        </h3>
        <p>
          Tilanhoitajankaari 3 C <br />
          00790 Helsinki
        </p>
        <h3>
          <b>Puhelin:</b>
        </h3>
        <p>+358 50 5432 888</p>
        <h3>
          <b>Sähköposti:</b>
        </h3>
        <p>
          pianokoulu@musamaja.fi <br />
          musiikkiohjelma@musamaja.fi
        </p>
      </div>
      <div className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.8509523984017!2d25.02862701645569!3d60.232841745292646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469208efb22f03a3%3A0x43087c03d33119c!2sTilanhoitajankaari%203%2C%2000790%20Helsinki!5e0!3m2!1sfi!2sfi!4v1622543022585!5m2!1sfi!2sfi'
          aria-hidden='false'
          tabIndex='0'
          title='kartta'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
