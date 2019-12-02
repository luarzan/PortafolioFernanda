import React from 'react';
import './LushThirdPart.scss';
import {ReactComponent as QuoteIcon} from '../../../../../../assets/imagenes/icons/quotes.svg'
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';

const LushThirdPart = ({lushBgImg,andrea2Img,andrea5Img,})=>{
    return(
        <div className="LushThirdPart-thirdSection">
            <div className="LushThirdPart-thirdSection-imgContainer">
                <div className="LushThirdPart-thirdSection-square">
                        <div className="LushThirdPart-thirdSection-square-img1" style={andrea5Img}></div>
                </div>
            </div>
            <div className="LushThirdPart-thirdSection-description">
                <div className="LushThirdPart-thirdSection-title">
                    <p>RACIONAL</p>
                </div>
                <div className="LushThirdPart-thirdSection-quote">
                    <div className="LushThirdPart-thirdSection-quote1">
                        <QuoteIcon/>
                        <p>SOY LO</p>
                    </div>
                    <div className="LushThirdPart-thirdSection-quote2">
                        <p>MEJOR</p>
                    </div>
                    <div className="LushThirdPart-thirdSection-quote3">
                        <p>QUE ME HA</p>
                    </div>
                    <div className="LushThirdPart-thirdSection-quote4">
                        <p>PASADO</p>
                        <QuoteIcon/>
                    </div>
                </div>
                <div className="LushThirdPart-thirdSection-bottom">
                    <p>INSIGHTS: Amor propio,<br/>
                        recuerdos y reflejo
                    </p>
                </div>
            </div>
            <VerticalText
                posY="0"
                posX="0"
                text="FOTOS"
            />
        </div>
    )
};

export default LushThirdPart
