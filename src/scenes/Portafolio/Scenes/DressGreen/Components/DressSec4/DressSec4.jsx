import React,{useState,useCallback} from 'react';
import './DressSec4.scss';
import phone1 from '../../assets/dressGreen/phone.png';
import phone2 from '../../assets/dressGreen/phone.png';
import phone3 from '../../assets/dressGreen/phone.png';

import lock1 from '../../assets/dressGreen/lock1.jpg';
import lock2 from '../../assets/dressGreen/lock2.jpg';
import lock3 from '../../assets/dressGreen/lock3.jpg';
import lock4 from '../../assets/dressGreen/lock4.jpg';
import lock5 from '../../assets/dressGreen/lock5.jpg';
import lock6 from '../../assets/dressGreen/lock6.jpg';
import lock7 from '../../assets/dressGreen/lock7.jpg';
import lock8 from '../../assets/dressGreen/lock8.jpg';
import lock9 from '../../assets/dressGreen/lock9.jpg';

import product1 from '../../assets/dressGreen/product1.jpg';
import product2 from '../../assets/dressGreen/product2.jpg';
import product3 from '../../assets/dressGreen/product3.jpg';

import Credits from '../../../../../../Components/Credits/Credits';

const DressSec4 = ()=>{

    const lock1Img = {backgroundImage:`url(${lock1})`}
    const lock2Img = {backgroundImage:`url(${lock2})`}
    const lock3Img = {backgroundImage:`url(${lock3})`}
    const lock4Img = {backgroundImage:`url(${lock4})`}
    const lock5Img = {backgroundImage:`url(${lock5})`}
    const lock6Img = {backgroundImage:`url(${lock6})`}
    const lock7Img = {backgroundImage:`url(${lock7})`}
    const lock8Img = {backgroundImage:`url(${lock8})`}
    const lock9Img = {backgroundImage:`url(${lock9})`}

    const product1Img = {backgroundImage:`url(${product1})`}
    const product2Img = {backgroundImage:`url(${product2})`}
    const product3Img = {backgroundImage:`url(${product3})`}

    const [openCredit,setOpenCredit] = useState(false)  
    const openCredits = useCallback(()=>{
        setOpenCredit(true)
    },[]);

    const credits = ["Imágenes","Unplash", "Diseño", "Fernanda Ortiz",
        "2019"
        ]

    return(
     
        <div className="DressSec4-fourthSection">
            <div className="DressSec4-fourthSection-phoneWrapper">
                <div  className="DressSec4-fourthSection-phone1">
                    <div className="DressSec4-fourthSection-phone-carousel">
                        <div className="DressSec4-fourthSection-phone-carousel-item" style={lock9Img}/>
                        <div className="DressSec4-fourthSection-phone-carousel-item" style={lock4Img}/>
                        <div className="DressSec4-fourthSection-phone-carousel-item" style={lock1Img}/>
                    </div>
                    <img src={phone1}/>
                </div>
                <div className="DressSec4-fourthSection-phone2">
                    <div className="DressSec4-fourthSection-phone-carousel">
                        <div className="DressSec4-fourthSection-phone-carousel-item" style={lock2Img}/>
                        <div className="DressSec4-fourthSection-phone-carousel-item" style={lock8Img}/>
                        <div className="DressSec4-fourthSection-phone-carousel-item" style={product2Img}/>
                    </div>
                    <img src={phone2}/>
                </div>
                <div className="DressSec4-fourthSection-phone3">
                    <div className="DressSec4-fourthSection-phone-carousel">
                        <div className="DressSec4-fourthSection-phone-carousel-item" style={lock3Img}/>
                        <div className="DressSec4-fourthSection-phone-carousel-item" style={lock7Img}/>
                        <div className="DressSec4-fourthSection-phone-carousel-item" style={lock5Img}/>
                    </div>
                    <img src={phone3}/>
                </div>
            </div>
            <div className="DressSec4-fourthSection-credits">
                        <Credits
                            text={credits}
                            onSelect={openCredits}
                            open={openCredit}
                        /> 
            </div>
        </div>
    )
};

export default DressSec4
