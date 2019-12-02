import React from 'react';
import './LuovaSec5.scss';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';
import img1 from '../../assets/Luova/luovaImg5.jpg';
const LuovaSec5 = ()=>{

    const luovaImg1 = {backgroundImage:`url(${img1})`}

    return(
        <div className="LuovaSec5-fifthSection">
            <VerticalText
            customPosition
            text="PACKAGING"
            />
            <div className="LuovaSec5-fifthSection-img" style={luovaImg1}/>
            <VerticalText
            text="STATIONARY"
            />
        </div>
    )
};

export default LuovaSec5;
