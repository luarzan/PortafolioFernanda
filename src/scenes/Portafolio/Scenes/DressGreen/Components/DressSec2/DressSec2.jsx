import React from 'react';
import './DressSec2.scss';

import img1 from '../../assets/dressGreen/dressLogo.png';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';
const DressSec2 = ()=>{

    const dressImg1 = {backgroundImage:`url(${img1})`}
    return(
     
        <div className="DressSec2-secondSection">
             <VerticalText
                customPosition
                text="LOGO"
              />
              <div className="DressSec2-secondSection-img" style={dressImg1}/>
        </div>
    )
};

export default DressSec2
