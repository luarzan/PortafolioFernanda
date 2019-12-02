import React from 'react';
import './SportySecondSection.scss';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';
import Sporty5  from '../../assets/Sporty/Sporty5.jpg';
import Sporty3 from '../../assets/Sporty/Sporty3.jpg';


const SportySecondSection = ()=>{

    const SportyImg5 = {backgroundImage:(`url(${Sporty5})`)};
    const SportyImg3 = {backgroundImage:(`url(${Sporty3})`)};

    return(
        <div className="SportySecondSection-secondSection">
                <VerticalText
                customPosition
                text="FOTOS"
                />
            <div className="SportySecondSection-imgContainer">
                <div className="SportySecondSection-img1" style={SportyImg5}/>
                <div className="SportySecondSection-img2" style={SportyImg3}/>
            </div>
        </div>
    )
};

export default SportySecondSection