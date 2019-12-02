import React from 'react';
import './SportyFirstSection.scss';
import Sporty4 from '../../assets/Sporty/Sporty4.jpg';


const SportyFirstSection= ()=>{

    const sportyBackground = {backgroundImage:`url(${Sporty4})`}
    return(
        <div className="SportyFirstSection-firstSection">
            <div className="SportyFirstSection-titleWrapper">
                <div className="SportyFirstSection-title">
                    <p className="SportyFirstSection-title-campaign">SHOOTING</p>
                    <p className="SportyFirstSection-title-sporty">SPORTY CHIC</p>
                    <p className="SportyFirstSection-title-text">
                        Editorial de fotografias de ropa deportiva 
                    </p>
                </div>
            </div>
            <div className="SportyFirstSection-firstSection-img" style={sportyBackground}>

            </div>
        </div>
    )
};

export default SportyFirstSection;