import React, {useEffect} from 'react'
import './card_mochasa.css'
import img from '../Assets/img_mochasa.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Mochasa = () => {
    useEffect(()=>{
        Aos.init({duration: 4000})
     }, [])
  

return(
    <div class="tarjeta">
        <div class="contenido">
            <div class="ladoIzq">
                <h2 class="titulo">Molinos Champion S.A. Mochasa</h2>
                <h4 className="destTitle">Guayaquil, Ecuador</h4>
                    <div class="cuerpo">
                    <p>Mochasa is a company with over 50+ years in the Shrimp Feedstock Industry looking to become more sustainable.</p>
                    <a className='btn' href="http://www.molinoschampion.com/">Webpage</a>
                    <a className='btn' href="#">Buy e-NFT</a>
                    </div>
                </div>
                <div class="ladoDer">
                    <img className="image-mochasa" alt="" src={img} />
            </div>
        </div>
    </div>
 );
};


export default Mochasa;