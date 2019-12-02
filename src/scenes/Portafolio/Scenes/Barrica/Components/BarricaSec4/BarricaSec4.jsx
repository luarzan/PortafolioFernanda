import React from 'react';
import './BarricaSec4.scss';
import {ReactComponent as QuoteIcon} from '../../../../../../assets/imagenes/icons/quotes.svg'
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';
import img1 from '../../assets/Barrica/BarricaApron.jpg';
import img2 from '../../assets/Barrica/BarricaBolsa.jpg';
import img3 from '../../assets/Barrica/BarricaBolsaPapel.jpg';
import img4 from '../../assets/Barrica/BarricaCaja.jpg';
const BarricaSec4 = ()=>{

    const barricaImg1 = {backgroundImage:`url(${img1})`}
    const barricaImg2 = {backgroundImage:`url(${img2})`}
    const barricaImg3 = {backgroundImage:`url(${img3})`}
    const barricaImg4 = {backgroundImage:`url(${img4})`}

    return(
        <div className="BarricaSec4-fourthSection">
              <VerticalText
                customPosition
                text="PACKAGING"
            />
              <div className="BarricaSec4-carousel">
                <div className="BarricaSec4-carousel-item BarricaSec4-carousel-item-1" style={barricaImg1}/>
                <div className="BarricaSec4-carousel-item BarricaSec4-carousel-item-2" style={barricaImg2}/>
                <div className="BarricaSec4-carousel-item BarricaSec4-carousel-item-3" style={barricaImg3}/>
                <div className="BarricaSec4-carousel-item BarricaSec4-carousel-item-4" style={barricaImg4}/>
            </div>
            <div className="BarricaSec4-fourthSection-description">
                <div className="BarricaSec4-fourthSection-quote">
                    <div className="BarricaSec4-fourthSection-quote1">
                        <QuoteIcon/>
                        <p>UNA BUENA</p>
                    </div>
                    <div className="BarricaSec4-fourthSection-quote2">
                        <p>COMIDA</p>
                    </div>
                    <div className="BarricaSec4-fourthSection-quote3">
                        <p>TERMINA</p>
                    </div>
                    <div className="BarricaSec4-fourthSection-quote3">
                        <p>CON UN BUEN</p>
                    </div>
                    <div className="BarricaSec4-fourthSection-quote4">
                        <p>TRAGO</p>
                        <QuoteIcon/>
                    </div>
                </div>
            </div>
            <VerticalText
                text="STATIONARY"
            />
        </div>
    )
};

export default BarricaSec4
