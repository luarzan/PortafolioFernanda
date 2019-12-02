import React,{useState,useCallback} from 'react';
import './BloomSec5.scss';
import img1 from '../../assets/Bloom/bloomBolsa.jpg';
import img2 from '../../assets/Bloom/bloomCaja.jpg';
import img3 from '../../assets/Bloom/BloomLogo.jpg';
import img4 from '../../assets/Bloom/bloomTarjetas.jpg';
import className from 'classnames';
import Credits from '../../../../../../Components/Credits/Credits';

const BloomSec5 = ()=>{
    const imgCarousel1 = {backgroundImage:`url(${img1})`}
    const imgCarousel2 = {backgroundImage:`url(${img2})`}
    const imgCarousel3 = {backgroundImage:`url(${img3})`}
    const imgCarousel4 = {backgroundImage:`url(${img4})`}
    
    const [openCredit,setOpenCredit] = useState(false)  
    const openCredits = useCallback(()=>{
        setOpenCredit(true)
    },[]);

    const credits = ["Imágenes","Unplash", "Diseño", "Fernanda Ortiz",
        "2019"
        ]

    return(
        <div className="BloomSec5">
            <div className="BloomSec5-carousel">
                <div className="BloomSec5-carousel-item BloomSec5-carousel-item-1" style={imgCarousel1}/>
                <div className="BloomSec5-carousel-item BloomSec5-carousel-item-2" style={imgCarousel2}/>
                <div className="BloomSec5-carousel-item BloomSec5-carousel-item-3" style={imgCarousel3}/>
            </div>
            <div className="BloomSec5-credits">
                  <div className="BloomSec5-credits-title">
                        <Credits
                            text={credits}
                            onSelect={openCredits}
                            open={openCredit}
                        />  
                  </div>
            </div>
        </div>
    )
}
export default BloomSec5;