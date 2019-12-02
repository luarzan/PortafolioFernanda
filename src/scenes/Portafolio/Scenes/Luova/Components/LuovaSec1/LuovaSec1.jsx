import React from 'react';
import './LuovaSec1.scss';
import img1 from '../../assets/Luova/luovaMain.jpg'

const LuovaSec1 = ()=>{
    const imgLuova1 = {backgroundImage:`url(${img1})`}
    return(
        <div className="LuovaSec1-firstSection">
            <div className="LuovaSec1-titleWrapper">
                <div className="LuovaSec1-title">
                    <p className="LuovaSec1-title-campaign">BRANDING</p>
                    <p className="LuovaSec1-title-luova">LUOVA</p>
                    <p className="LuovaSec1-title-text">
                        Luova es una marca de ropa y accesorios para la mujer moderna
                    </p>
                </div>
            </div>
            <div className="LuovaSec1-firstSection-img" style={imgLuova1}>

            </div>
        </div>
    )
}

export default LuovaSec1;

