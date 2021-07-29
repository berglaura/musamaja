import React from 'react'
import Navbar from './Navbar'
import '../styles/musiikkiohjelma.css'
import ImageSlider from './ImageSlider.jsx'
import { SliderData } from './SliderData.jsx'

const Musiikkiohjelma = () => {
    return (
        <div className="musicDiv">
            <Navbar />
            {/* <ImageSlider slides={SliderData}/> */}
            <div className="pictures">
                <img src="duo_fantasos3.jpg" alt="sello-piano-duo"/>
                <img src="bnl.jpg" alt="akustinen bändi"/>
                <img src="bnl2.jpg" alt="akustinen bändi"/>
            </div>
            <div className="gradient-text lesson">
                <h1>Elävällä musiikilla luot ainutlaatuisen ja ikimuistoisen tunnelman juhlaasi</h1>
                <p>Pianisti, trubaduuri, duo, trio, bändi... Musamajan kautta löydät laadukkaat musiikkiesitykset
                     kotisi tai yrityksesi juhliin. Muusikkomme suunnittelevat kanssasi toiveidesi mukaisen 
                     musiikkipaketin huomioiden tilaisuuden luonteen. Olipa kysymyksessä sitten häät, ristiäiset, pikkujoulut tai 
                     asiakastilaisuus, saat taidokkaasti toteutetun, tilaisuuteen sopivan musiikkiohjelman.
                </p>
                <p>Tarjouspyynnöt: musiikkiohjelma@musamaja.fi</p>
            </div>
            <div className="artist">
                <div className="image">
                    <img src="duo_fantasos.jpg" alt="sello-piano-duo Duo Fantasos"/>
                </div>
                <div className="about gradient-text">
                    <h3>Duo Fantasos</h3>
                    <p>Ihastuttava sello-piano-duo, joka taipuu sulavasti tunnelmasta toiseen. Ohjelmistosta löytyy kevyttä klassista,
                         operettia, jazzahtavia rytmejä, ikivihreitä, rakastetuimpia elokuvasävelmiä, poppiakin. 
                         Tunnelmallinen musiikki sopii loistavasti taustalle tai ohjelmanumeroksi yritystilaisuuksiin 
                         ja kodin juhliin.</p>
                </div>
            </div>
            <a href="https://www.youtube.com/watch?v=_1Lnq1Fp6sM&ab_channel=Musamaja" target="_blank"><button>Kuuntele</button></a>
            <div className="artist">
                <div className="image">
                    <img src="Lauralle-3.jpg" alt="akustinen bilebändi Boyz'n'Lara"/>
                </div>
                <div className="about gradient-text">
                    <h3>Boyz'n'Lara</h3>
                    <p>Akustinen bilebändi, jonka kokoonpanossa on laulu, kitara, sello ja cajon-rumpu. 
                        Ohjelmistosta löytyy poppia, rockia ja iskelmää eri vuosikymmeniltä. Boyz'n'Lara tulkitsee suurella sydämellä 
                        niin tunnelmalliset balladit kuin menevämmät rallitkin. Bändi rakentaa aina setit toiveidenne 
                        ja tilaisuuden luonteen mukaan. Kokoonpano on mahdollista tilata triona tai kvartettina. 
                        Boyz'n'Lara on ilostuttanut ja tanssittanut juhlakansaa lähes kymmenen vuoden ajan lukuisissa häissä, 
                        yritystilaisuuksissa ja ravintoloissa.
                    </p>
                </div>
            </div>
            <a href="https://soundcloud.com/laura-berg-1/heart-of-gold-neil-young-cover" target="_blank"><button>Kuuntele</button></a>
            <div className="artist">
                <div className="image">
                    <img src="laraB2.jpg" alt="pianisti Laura Berg"/>
                </div>
                <div className="about gradient-text">
                    <h3>Laura Berg, pianisti (myös laulava tarvittaessa)</h3>
                    <p>Jos suunnittelet juhlaasi pianomusiikkia taustalle tai ohjelmanumeroksi, niin Laura on juuri oikea 
                        henkilö toteuttamaan sen. Klassinen koulutus ja vuosien kokemus viihdepianistina niin yritysten 
                        iltagaaloissa kuin häissä ja cocktailtilaisuuksissa takaa laadukkaan ja ammattitaitoisen esityksen. 
                        Laajasta ja monipuolisesta ohjelmistosta löytyy varmasti sopivat kappaleet juhlaan kuin juhlaan. 
                        Taustamusiikiksi vieraiden saapuessa tai ruokailun aikana sopii mainiosti ihanat elokuvasävelmät, 
                        kevyt jazz sekä ikivihreät ja ohjelmanumeroksi voita valita toiveidesi mukaan kappaleita klassisen musiikin helmistä 
                        aina pop, rock ja heavy covereihin.</p>
                </div>
            </div>
        </div>
    )
}

export default Musiikkiohjelma
