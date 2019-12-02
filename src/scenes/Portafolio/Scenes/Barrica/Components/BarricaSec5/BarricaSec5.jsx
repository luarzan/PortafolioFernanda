import React from 'react';
import './BarricaSec5.scss';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';
import img1 from '../../assets/Barrica/BarricaTarjeta.jpg';
const BarricaSec5 = ()=>{

    const barricaImg1 = {backgroundImage:`url(${img1})`}

    return(
        <div className="BarricaSec5-fifthSection">
            <div className="BarricaSec5-fifthSection-img" style={barricaImg1}/>
        </div>
    )
};

export default BarricaSec5;
