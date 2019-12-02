import React from 'react';
import './LuovaSec3.scss';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';

const LuovaSec3 = ()=>{
    return(
     
        <div className="LuovaSec3-thirdSection">
                 <VerticalText
                 customPosition
                text="PALETA DE COLOR"
            />
            <div className="LuovaSec3-pantone">
                <div className="LuovaSec3-gridItem">
                    <div className="LuovaSec3-pantone-item LuovaSec3-pantone-item-creame"/>
                    <p>Orange 021 C</p>
                </div>
                <div className="LuovaSec3-gridItem">
                    <div className="LuovaSec3-pantone-item LuovaSec3-pantone-item-red"/>
                    <p>20-0200 TPM Gunpowder</p>
                </div>
                <div className="LuovaSec3-gridItem">
                    <div className="LuovaSec3-pantone-item LuovaSec3-pantone-item-white"/>
                    <p>P 75-1 U</p>
                </div>
            </div>
            <VerticalText
                text="LOGO"
            />
        </div>
    )
};

export default LuovaSec3
