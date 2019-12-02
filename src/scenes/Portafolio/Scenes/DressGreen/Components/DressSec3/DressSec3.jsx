import React from 'react';
import './DressSec3.scss';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';

const DressSec3 = ()=>{
    return(
     
        <div className="DressSec3-thirdSection">
               <VerticalText
               customPosition
                text="PALETA DE COLORES"
              />
            <div className="DressSec3-pantone">
                <div className="DressSec3-gridItem">
                    <div className="DressSec3-pantone-item DressSec3-pantone-item-creame"/>
                    <p>7547 XGC</p>
                </div>
                <div className="DressSec3-gridItem">
                    <div className="DressSec3-pantone-item DressSec3-pantone-item-red"/>
                    <p>P 122-15 U</p>
                </div>
                <div className="DressSec3-gridItem">
                    <div className="DressSec3-pantone-item DressSec3-pantone-item-white"/>
                    <p>4DD994</p>
                </div>
                <div className="DressSec3-gridItem">
                    <div className="DressSec3-pantone-item DressSec3-pantone-item-black"/>
                    <p>A2EED1</p>
                </div>
                <div className="DressSec3-gridItem">
                    <div className="DressSec3-pantone-item DressSec3-pantone-item-green"/>
                    <p>E04561</p>
                </div>
                <div className="DressSec3-gridItem">
                    <div className="DressSec3-pantone-item DressSec3-pantone-item-brown"/>
                    <p>P 75-1 U</p>
                </div>
            </div>  
            <VerticalText
                text="PANTALLAS"
            />
        </div>
    )
};

export default DressSec3
