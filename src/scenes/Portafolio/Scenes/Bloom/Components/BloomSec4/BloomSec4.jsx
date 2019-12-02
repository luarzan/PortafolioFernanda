import React from 'react';
import './BloomSec4.scss';

import img1 from '../../assets/Bloom/bloomImg1.jpg';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';
const BloomSec4 = ()=>{

    const bloomImg1 = {backgroundImage:`url(${img1})`}
    return(
     
        <div className="BloomSec4-fourthSection">
              <div className="BloomSec4-fourthSection-img" style={bloomImg1}/>
              <VerticalText
              text="STATIONARY"
              />
        </div>
    )
};

export default BloomSec4
