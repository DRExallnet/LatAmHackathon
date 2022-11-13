import { React } from "react";
import "./tech.css";
import img1 from '../Assets/slide_r/chainlink.png';
import img2 from '../Assets/slide_r/kusama.png';
import img4 from '../Assets/slide_r/moonbase.png';
import img3 from '../Assets/slide_r/raspberry pi.png';
import img5 from '../Assets/slide_r/robonomics.png';
import img6 from '../Assets/slide_r/drex.png';
import img7 from '../Assets/slide_r/polkadot_latam_badge.png';


//w 302 x h 168

const Tech_Slider = () => (
  <section>
  <div id="infinite" class="highway-slider">
    <div className="container highway-barrier">
      <ul class="highway-lane">
        <li className="highway-car"><span><img src={img1} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img2} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img3} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img4} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img5} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img6} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img7} className="imgpng" alt="img/png"></img></span></li>
        \
        <li className="highway-car"><span><img src={img1} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img2} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img3} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img4} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img5} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img6} className="imgpng" alt="img/png"></img></span></li>
        <li className="highway-car"><span><img src={img7} className="imgpng" alt="img/png"></img></span></li>
      </ul>
    </div>
  </div>
</section>
)

export default Tech_Slider;
