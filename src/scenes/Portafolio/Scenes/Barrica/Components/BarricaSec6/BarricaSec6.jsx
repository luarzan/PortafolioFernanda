import React,{useState,useCallback} from 'react';
import './BarricaSec6.scss';
import VerticalText from '../../../../../../Components/VerticalText/VerticalText';
import img1 from '../../assets/Barrica/BarricaInsta1.png';
import img2 from '../../assets/Barrica/BarricaInsta2.png';
import Credits from '../../../../../../Components/Credits/Credits';

const BarricaSec6 = ()=>{

    const barricaImg1 = {backgroundImage:`url(${img1})`}
    const barricaImg2 = {backgroundImage:`url(${img2})`}

    const [openCredit,setOpenCredit] = useState(false)  
    const openCredits = useCallback(()=>{
        setOpenCredit(true)
    },[]);

    const credits = ["Imágenes: Unsplash","Diseño: Fernanda Ortiz","2018"]

    return(
        <div className="BarricaSec6-sixthSection">
            <div className="BarricaSec6-sixthSection-imgContainer">
                <div className="BarricaSec6-sixthSection-imgContainer-left">
                    <div className="BarricaSec6-sixthSection-img" style={barricaImg1}/>
                </div>
                <div className="BarricaSec6-sixthSection-imgContainer-right">
                    <div className="BarricaSec6-sixthSection-img" style={barricaImg2}/>
                    <div className="BarricaSec6-sixthSection-credits">
                    <Credits
                        text={credits}
                        onSelect={openCredits}
                        open={openCredit}
                    />  
                    </div>  
                </div>
            </div>
            <VerticalText
                customPosition
                text="Redes Sociales"
            />
        </div>
    )
};

export default BarricaSec6
