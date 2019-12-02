import React from 'react';
import './BloomSec3.scss';

import img1 from '../../assets/Bloom/bloomLogoBlack.png';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';
const BloomSec3 = ()=>{

    const bloomImg1 = {backgroundImage:`url(${img1})`}
    return(
     
        <div className="BloomSec3-thirdSection">
              <VerticalText
              customPosition
                text="LOGO"
            />
              <div className="BloomSec3-thirdSection-img" style={bloomImg1}/>
              <VerticalText
              text="PACKAGING"
              />
        </div>
    )
};

export default BloomSec3
