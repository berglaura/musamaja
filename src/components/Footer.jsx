import React, { useState, useEffect } from 'react'
import '../styles/footer.css'

const Footer = () => {
    const [smallFooter, setSmallFooter] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0)

    const trackScreenWidth = () => {
        const width = window.innerWidth
        setScreenWidth(width)
        if (width < 812) {
            setSmallFooter(true)
        } else {
            setSmallFooter(false)
        }
    }

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    if (!smallFooter) {
        return (
            <div className="footer">
            <div className="contactDiv">
                <p>Musamaja <br/>
                Y-tunnus 2490754-7 <br/>
                Tilanhoitajankaari 3 C <br/>
                +35850 581 9275</p>
            </div>
            <div className="contactDiv">
                <p>Pianotunnit: <br/>pianokoulu@musamaja.fi</p>
            </div>
            <div className="contactDiv">
                <p>Musiikkiohjelma: <br/>musiikkiohjelma@musamaja.fi</p>
            </div>
        </div>
        )
    } else {
        return (
            <div className="footer">
                <div className="contactDiv">
                <p>Musamaja <br/>
                    Y-tunnus 2490754-7 <br/>
                    Tilanhoitajankaari 3 C</p>
                </div>
                <div className="contactDiv2">
                <p>+358 50 5432 888 <br/>
                    musiikkiohjelma@musamaja.fi <br/>
                    pianokoulu@musamaja.fi</p>
                </div>           
            </div>
        )
    }
}

export default Footer
