import React from 'react';
import './BarricaSec3.scss';
import img1 from '../../assets/Barrica/logoMinBarrica.png';
import img2 from '../../assets/Barrica/conceptoBarrica.png';
import img3 from '../../assets/Barrica/logoMaderaBarrica.jpg';

const BarricaSec3 = ()=>{

    const barricaImg1 = {backgroundImage:`url(${img1})`}
    const barricaImg2 = {backgroundImage:`url(${img2})`}
    const barricaImg3 = {backgroundImage:`url(${img3})`}

    return(
     
        <div className="BarricaSec3-thirdSection">
            <div className="BarricaSec3-left">
                <div className="BarricaSec3-left-img1" style={barricaImg1}>
                </div>
                <div className="BarricaSec3-left-img2"style={barricaImg2}>
                </div>
            </div>
            <div className="BarricaSec3-right">
                <div className="BarricaSec3-right-img1" style={barricaImg3}>
                </div>
            </div>
        </div>
    )
};

export default BarricaSec3
