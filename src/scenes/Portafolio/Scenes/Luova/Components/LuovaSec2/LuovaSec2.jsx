import React from 'react';
import './LuovaSec2.scss';
import img1 from '../../assets/Luova/luovaImg1.jpg'
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';

const LuovaSec2 = ()=>{
    const imgLuova1 = {backgroundImage:`url(${img1})`}
    return(
        <div className="LuovaSec2-secondSection">
            <div className="LuovaSec2-secondSection-img" style={imgLuova1}/>
        </div>
    )
}

export default LuovaSec2;

