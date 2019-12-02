import React from 'react';
import './BarricaSec1.scss';
import BarricaLogo from '../../assets/Barrica/restaurante-logo.jpeg';


const BarricaSec1 = ()=>{

    const BarricaLogoImg = {backgroundImage:`url(${BarricaLogo})`}

    return(
        <div className="BarricaSec1-firstSection">
            <div className="BarricaSec1-titleWrapper">
                <div className="BarricaSec1-title">
                    <p className="BarricaSec1-title-campaign">BRANDING</p>
                    <p className="BarricaSec1-title-barrica">BARRICA</p>
                    <p className="BarricaSec1-title-text">
                        Barrica es un ounto de reunion, de gastronomia y un buen ambiente.
                    </p><br/>
                    <p className="BarricaSec1-title-text">
                        Se enfoca en ofrecer lo mejor de la comida mexicana e internacional, 
                        y cuando el sol se pone, el lugar toma vida creando un ambiente recreativo con 
                        la mejor mixología y música.
                    </p><br/>
                    <p className="BarricaSec1-title-text">
                        Construimos la identidad que se alinea con el estilo clásico, agradable y comodo 
                        de lugar.
                    </p>
                </div>
            </div>
            <div className="BarricaSec1-firstSection-img" style={BarricaLogoImg}>

            </div>
        </div>
    )
}

export default BarricaSec1

