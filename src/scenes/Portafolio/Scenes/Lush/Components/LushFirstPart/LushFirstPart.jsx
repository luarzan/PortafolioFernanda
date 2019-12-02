import React from 'react';
import './LushFirstPart.scss';

const LushFirstPart = ({lushBgImg})=>{
    return(
        <div className="LushFirstPart-firstSection">
            <div className="LushFirstPart-titleWrapper">
                <div className="LushFirstPart-title">
                    <p className="LushFirstPart-title-campaign">CAMPAIGN</p>
                    <p className="LushFirstPart-title-lush">LUSH</p>
                    <p className="LushFirstPart-title-text">Sesión de fotos para la campaña del perfume
                        <span>"What would love do?"</span> de la marca inglesa
                        de cosmeticos sustentables Lush Cosmetics.
                    </p>
                </div>
            </div>
            <div className="LushFirstPart-firstSection-img" style={lushBgImg}>

            </div>
        </div>
    )
}

export default LushFirstPart

