import React from 'react'
import '../styles/pianokoulu.css'
import Popup from './Popup'
import { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Pianokoulu = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [button2Popup, setButton2Popup] = useState(false)

  return (
    <>
      <Navbar />
      <div className='pianokoulu'>
        <div className="notes">
          <i className='fas fa-music'></i>
          <i className='fas fa-music'></i>
          <i className='fas fa-music'></i>
          <i className='fas fa-music'></i>
          <i className='fas fa-music'></i>
          <i className='fas fa-music'></i>
          <i className='fas fa-music'></i>
          <i className='fas fa-music'></i>
          <i className='fas fa-music'></i>
          <i className='fas fa-music'></i>
        </div>
        <p>
          Tervetuloa Musamajan iloisille pianotunneille. Opetus järjestetään
          lähiopetuksena Viikissä opettajan työhuoneella tai etäyhteydellä,
          toiveesi mukaan.
        </p>
        <p>
          Voit olla vasta-alkaja tai jatkaa aiempaa harrastusta. Musamajan
          pianotunnit sopivat kaikille, ikään tai tasoon katsomatta.
          Soitettavaan ohjelmistoon pääset itse vaikuttamaan.
        </p>

        <figure className='img2'>
          <img src="laura1.jpg" alt='piano-ope Lauran kuva' />
        </figure>
        <p>
          Piano-opena Musamajassa toimin minä, Laura Berg, Helsingin
          Konservatoriosta ja Metropolia ammattikorkeakoulusta valmistunut
          musiikkipedagogi. Olen opettanut pianonsoittoa vuodesta 1993 ja
          kokemusta erilaisista oppijoista on kertynyt runsaasti. Tunneillani on
          hauska ja mukaansatempaava ilmapiiri ja otan aina huomioon oppilaan
          tavoitteet ja toiveet esimerkiksi soitettavien kappaleiden suhteen.
        </p>
        <div className='buttonDiv bd1'>
          <button onClick={() => setButtonPopup(true)}>Hinnasto</button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className='hinnasto'>
              <h3>Pianotuntien hinnat</h3>
              <p>
                Tunnin kesto on 30 tai 45 min. Tunnit maksetaan kuukausittain
                neljän tunnin jaksoissa.
              </p>
              <p>4 x 30 min. 120 e</p>
              <p>4 x 45 min. 180 e</p>
              <p>Hinnat sisältävät alv. 24%</p>
              <p>
                Kuukausierään sisältyy neljä tuntia, poikkeuksena lukukauden
                viimeinen erä, jonka pituus riippuu tuntien
                aloittamisajankohdasta. Tuntien lopettamisesta tulee ilmoittaa
                viimeistään viikkoa ennen viimeiseksi aiottua tuntia, jolloin
                tulevaa kuukausimaksua ei tarvitse suorittaa. Jo maksettuja
                rahoja ei voida palauttaa.
              </p>
              <p>
                Tunnit ovat joka viikko samaan aikaan. Oppilaan poissaolosta ei
                järjestetä korvaavia tunteja eikä rahallista hyvitystä. Jos
                opettaja joutuu perumaan tunnin, korvataan tunti oppilaalle
                erikseen sovittavana ajankohtana.
              </p>
            </div>
          </Popup>
          <button onClick={() => setButton2Popup(true)}>Lukukausi</button>
          <Popup trigger={button2Popup} setTrigger={setButton2Popup}>
            <div className='lukukausi'>
              <h3>Lukukausi</h3>
              <p>
                Tunnit pidetään kerran viikossa koulujen työaikoina,
                loma-aikojen tunnit sovitaan erikseen. Kesätunteja on tarjolla
                kesäkuussa sekä elokuussa ennen koulujen alkamista.
              </p>
              <p>
                Tuntien ajankohdasta voi sopia sähköpostitse
                pianokoulu@musamaja.fi
              </p>
            </div>
          </Popup>
        </div>
        <div className='buttonDiv bd2'>
          <p>Etsitkö elävää musiikkia juhliin?</p>
          <Link to="/musiikkiohjelma"><button>Musiikkiohjelmaa</button></Link>
        </div>
      </div>
    </>
  )
}

export default Pianokoulu
