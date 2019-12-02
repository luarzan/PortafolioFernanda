import React,{useRef,useState,useEffect} from 'react';
import './Lush.scss';
import lushPerfume from './assets/Lush/andrea3-min.jpg';
import andrea2 from './assets/Lush/andrea2-min.jpg';
import andrea5 from './assets/Lush/andrea5-min.jpg';
import LushFirstPart from './Components/LushFirstPart/LushFirstPart';
import LushSecondPart from './Components/LushSecondPart/LushSecondPart';
import LushThirdPart from './Components/LushThirdPart/LushThirdPart';
import LushMain from './Components/LushMain/LushMain';
import LushFourthPart from './Components/LushFourthPart/LushFourthPart';
import {Link} from 'react-router-dom';

const Lush = ()=>{
    const lushBgImg = {backgroundImage:`url(${lushPerfume})`}
    const andrea2Img = {backgroundImage:`url(${andrea2})`}
    const andrea5Img = {backgroundImage:`url(${andrea5})`}
    const horizontalScroll = useRef(null);

    window.onscroll=function() {
        var scroll = window.scrollY;
        horizontalScroll.current.style.left = `-${scroll}px`;
    }

    const [animation,setAnimation] = useState('animated bounceIn fast');
    const [animationLoading,setAnimationLoading] = useState(true);
    const [animationEnd,setAnimationEnd] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            setAnimationEnd(true);
            setAnimation('animated fadeOutRightBig delay-1s slow');
        },3000);
    },[animationEnd,animation]);

    return(
    <div className="Lush">
              <Link to={"/"}>
        <div className="ProyectMenu">
            <p>HOME</p>
        </div>
        </Link>
        {animationLoading &&
            <LushMain
            animated={animation}
            />
        }
       
            <div ref={horizontalScroll} className="Lush-content">
            {animationEnd &&
            <>
                <LushFirstPart
                    lushBgImg={lushBgImg}
                />
                <LushSecondPart/>
                <LushThirdPart
                    lushBgImg={lushBgImg}
                    andrea2Img={andrea2Img}
                    andrea5Img={andrea5Img}
                />
                <LushFourthPart/>
                </>
            }
            </div>
    </div>
    )
};
export default Lush;