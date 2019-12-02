import React,{useState,useCallback} from 'react';
import './LuovaSec6.scss';
import img1 from '../../assets/Luova/luovaBolsa.jpg';
import img2 from '../../assets/Luova/luovaEtiqueta.jpg';
import img3 from '../../assets/Luova/luovaPlayera.jpg';
import img4 from '../../assets/Luova/luovaTarjeta.jpg';
import img5 from '../../assets/Luova/luovaTarjeta2.jpg';
import img6 from '../../assets/Luova/luovaGif.gif';
import className from 'classnames';
import Credits from '../../../../../../Components/Credits/Credits';

const LuovaSec6 = ()=>{
    const imgCarousel1 = {backgroundImage:`url(${img1})`}
    const imgCarousel2 = {backgroundImage:`url(${img2})`}
    const imgCarousel3 = {backgroundImage:`url(${img3})`}
    const imgCarousel4 = {backgroundImage:`url(${img4})`}
    const imgCarousel5 = {backgroundImage:`url(${img5})`}
    const imgCarousel6 = {backgroundImage:`url(${img6})`}
    
    const [openCredit,setOpenCredit] = useState(false)  
    const openCredits = useCallback(()=>{
        setOpenCredit(true)
    },[]);

    
    const credits = ["Imágenes cortesía","Unsplash", "Diseño", "Fernanda Ortiz",
        "2019"
        ]

    return(
        <div className="LuovaSec6">
            <div className="LuovaSec6-carousel">
                <div className="LuovaSec6-carousel-item LuovaSec6-carousel-item-1" style={imgCarousel1}/>
                <div className="LuovaSec6-carousel-item LuovaSec6-carousel-item-2" style={imgCarousel2}/>
                <div className="LuovaSec6-carousel-item LuovaSec6-carousel-item-3" style={imgCarousel3}/>
                <div className="LuovaSec6-carousel-item LuovaSec6-carousel-item-3" style={imgCarousel4}/>
                <div className="LuovaSec6-carousel-item LuovaSec6-carousel-item-3" style={imgCarousel5}/>
            </div>
            <div className="LuovaSec6-credits">
                  <div className="LuovaSec6-credits-title">
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
export default LuovaSec6;