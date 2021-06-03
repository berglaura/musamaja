import React from 'react'
import '../styles/firstpage.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'

export const Firstpage = () => {

    return (

        <div className='container'>
            <div className='typewriter'>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        cursor: null
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Tervetuloa Musamajaan!<br/>")
                            .typeString("🎵🎵🎵🎵🎵")
                            .pauseFor(2000)
                            .start();
                    }}
                />
            </div>
            <div className='buttons'>
                <Link to="/pianokoulu"><button>Pianotunteja</button></Link>
                <button>Musiikkiohjelmaa</button>
            </div>
            <div className="imgDiv">
                <img src={`${process.env.PUBLIC_URL}/koskettimet.jpg`} alt="koskettimisto"/>
            </div>
        </div>

    )
}

export default Firstpage
