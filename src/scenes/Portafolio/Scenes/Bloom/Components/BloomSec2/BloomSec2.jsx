import React from 'react';
import './BloomSec2.scss';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';

const BloomSec2 = ()=>{
    return(
     
        <div className="BloomSec2-secondSection">
            <VerticalText
                customPosition
                text="PALETA DE COLOR"
            />
            <div className="BloomSec2-pantone">
                <div className="BloomSec2-gridItem">
                    <div className="BloomSec2-pantone-item BloomSec2-pantone-item-creame"/>
                    <p>2226 U</p>
                </div>
                <div className="BloomSec2-gridItem">
                    <div className="BloomSec2-pantone-item BloomSec2-pantone-item-red"/>
                    <p>200056 TPM</p>
                </div>
                <div className="BloomSec2-gridItem">
                    <div className="BloomSec2-pantone-item BloomSec2-pantone-item-white"/>
                    <p>9500 U</p>
                </div>
                <div className="BloomSec2-gridItem">
                    <div className="BloomSec2-pantone-item BloomSec2-pantone-item-black"/>
                    <p>17-1656 TCX </p>
                </div>
                <div className="BloomSec2-gridItem">
                    <div className="BloomSec2-pantone-item BloomSec2-pantone-item-green"/>
                    <p>12-1310 TCX</p>
                </div>
                <div className="BloomSec2-gridItem">
                    <div className="BloomSec2-pantone-item BloomSec2-pantone-item-brown"/>
                    <p>12-1107 TCX</p>
                </div>
            </div>
          
        </div>
    )
};

export default BloomSec2
