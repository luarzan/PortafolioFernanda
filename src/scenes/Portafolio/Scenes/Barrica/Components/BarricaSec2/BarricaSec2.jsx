import React from 'react';
import './BarricaSec2.scss';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';

const BarricaSec2 = ()=>{
    return(
     
        <div className="BarricaSec2-secondSection">
            <VerticalText
                customPosition
                text="PALETA DE COLOR"
            />
            <div className="BarricaSec2-pantone">
                <div className="BarricaSec2-gridItem">
                    <div className="BarricaSec2-pantone-item BarricaSec2-pantone-item-creame"/>
                    <p>P 24-9 C</p>
                </div>
                <div className="BarricaSec2-gridItem">
                    <div className="BarricaSec2-pantone-item BarricaSec2-pantone-item-red"/>
                    <p>2436 C</p>
                </div>
                <div className="BarricaSec2-gridItem">
                    <div className="BarricaSec2-pantone-item BarricaSec2-pantone-item-white"/>
                    <p>P 75-1 U</p>
                </div>
                <div className="BarricaSec2-gridItem">
                    <div className="BarricaSec2-pantone-item BarricaSec2-pantone-item-black"/>
                    <p>419 C</p>
                </div>
                <div className="BarricaSec2-gridItem">
                    <div className="BarricaSec2-pantone-item BarricaSec2-pantone-item-green"/>
                    <p>P 178-11 U</p>
                </div>
                <div className="BarricaSec2-gridItem">
                    <div className="BarricaSec2-pantone-item BarricaSec2-pantone-item-brown"/>
                    <p>2312 CP</p>
                </div>
            </div>
            <VerticalText
                text="LOGO"
            />
        </div>
    )
};

export default BarricaSec2
