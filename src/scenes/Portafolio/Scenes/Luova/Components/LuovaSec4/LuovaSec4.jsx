import React from 'react';
import './LuovaSec4.scss';
import img1 from '../../assets/Luova/luovaTitle.png';
import img2 from '../../assets/Luova/luovaTitleBlack.png';
import img3 from '../../assets/Luova/luovaImg4.jpg';


const LuovaSec4 = ()=>{
    const luovaImg1 = {backgroundImage:`url(${img1})`}
    const luovaImg2 = {backgroundImage:`url(${img2})`}
    const luovaImg3 = {backgroundImage:`url(${img3})`}
    return(
     
        <div className="LuovaSec4-fourthSection">
            <div className="LuovaSec4-fourthSection">
                <div  className="LuovaSec4-fourthSection-imgContainer">
                    <div  className="LuovaSec4-fourthSection-titleContainer">
                        <div className="LuovaSec4-fourthSection-img1" style={luovaImg1}></div>
                        <div className="LuovaSec4-fourthSection-img2" style={luovaImg2}></div>
                    </div>
                    <div className="LuovaSec4-fourthSection-img3" style={luovaImg3}></div>
                </div>
            </div>
        </div>
    )
};

export default LuovaSec4
