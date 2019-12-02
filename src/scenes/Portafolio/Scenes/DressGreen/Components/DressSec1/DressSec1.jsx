import React from 'react';
import './DressSec1.scss';
import dressCover from '../../assets/dressGreen/dressCover.jpg';


const DressSec1 = ()=>{

    const dressCoverImg = {backgroundImage:`url(${dressCover})`}

    return(
        <div className="DressSec1-firstSection">
            <div className="DressSec1-titleWrapper">
                <div className="DressSec1-title">
                    <p className="DressSec1-title-campaign">UX & UI</p>
                    <p className="DressSec1-title-dress">DRESS GREEN</p>
                    <p className="DressSec1-title-text">
                        Dress Green funciona como un escáner que te permite obtener información sobre
                        la prenda que elijas, por medio de la etiqueta
                    </p><br/>
                    <p className="DressSec1-title-text">
                        Al término del escaneo, la app te dirá todo lo que neceistas saber 
                        sobre tu prenda, materiales quien o quienes la fabricaron, cuanto
                        tardo en elaborarse y lo más importante, el impacto ambiental que tuvo 
                        su proceso y el que tendrá posteriormente
                    </p>
                </div>
            </div>
            <div className="DressSec1-firstSection-img" style={dressCoverImg}>

            </div>
        </div>
    )
}

export default DressSec1

