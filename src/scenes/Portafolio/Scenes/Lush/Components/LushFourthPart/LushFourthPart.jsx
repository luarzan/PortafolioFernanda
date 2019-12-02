import React,{useState,useCallback} from 'react';
import './LushFourthPart.scss';
import img1 from '../../assets/Lush/andrea1-min.jpg';
import img2 from '../../assets/Lush/andrea2-min.jpg';
import img3 from '../../assets/Lush/andrea3-min.jpg';
import className from 'classnames';
import Credits from '../../../../../../Components/Credits/Credits';

const LushFourthPart = ()=>{
    const imgCarousel1 = {backgroundImage:`url(${img1})`}
    const imgCarousel2 = {backgroundImage:`url(${img2})`}
    const imgCarousel3 = {backgroundImage:`url(${img3})`}
    
    const [openCredit,setOpenCredit] = useState(false)  
    const openCredits = useCallback(()=>{
        setOpenCredit(true)
    },[]);

    const credits = ["Dirección Creativa","Fernanda Ortiz", "Sofía Roque", "Camila Monjarás",
        "2017"
        ]

    return(
        <div className="LushFourthPart">
            <div className="LushFourthPart-carousel">
                <div className="LushFourthPart-carousel-item LushFourthPart-carousel-item-1" style={imgCarousel1}/>
                <div className="LushFourthPart-carousel-item LushFourthPart-carousel-item-2" style={imgCarousel2}/>
                <div className="LushFourthPart-carousel-item LushFourthPart-carousel-item-3" style={imgCarousel3}/>
            </div>
            <div className="LushFourthPart-credits">
                  <div className="LushFourthPart-credits-title">
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
export default LushFourthPart;