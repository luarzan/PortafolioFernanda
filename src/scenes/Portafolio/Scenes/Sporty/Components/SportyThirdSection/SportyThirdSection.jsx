import React from 'react';
import './SportyThirdSection.scss';
import Sporty1  from '../../assets/Sporty/Sporty1.jpg';
import Sporty2 from '../../assets/Sporty/Sporty2.jpg';


const SportyThirdSection = ()=>{

    const SportyImg1 = {backgroundImage:(`url(${Sporty1})`)};
    const SportyImg2 = {backgroundImage:(`url(${Sporty2})`)};

    return(
        <div className="SportyThirdSection-thirdSection">
            <div className="SportyThirdSection-imgContainer">
                <div className="SportyThirdSection-img1" style={SportyImg1}/>
                <div className="SportyThirdSection-img2" style={SportyImg2}/>
            </div>
        </div>
    )
};

export default SportyThirdSection