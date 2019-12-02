import React from 'react';
import './BloomSec1.scss';
import BloomCircles from '../../assets/Bloom/bloomCircles.png';
import BloomFace from '../../assets/Bloom/bloomFace.jpg';


const BloomSec1 = ()=>{

    const BloomCirclesImg = {backgroundImage:`url(${BloomCircles})`}
    const BloomFaceImg = {backgroundImage:`url(${BloomFace})`}

    return(
        <div className="BloomSec1-firstSection">
            <div className="BloomSec1-firstSection-imgMain" style={BloomFaceImg}/>
            <div className="BloomSec1-titleWrapper">
                <div className="BloomSec1-title">
                    <p className="BloomSec1-title-campaign">BRANDING</p>
                    <p className="BloomSec1-title-bloom">BLOOM</p>
                    <p className="BloomSec1-title-text">
                        Bloom es una marca de skin care para todo tipo de piel, texturas y problemáticas 
                    </p><br/>
                    <p className="BloomSec1-title-text">
                        La marca esta comprometida a usar sólo ingredientes que son hipoalergénicos
                        y dermatológicamente probados
                    </p><br/>
                </div>
            </div>
            <div className="BloomSec1-firstSection-img" style={BloomCirclesImg}>

            </div>
        </div>
    )
}

export default BloomSec1

