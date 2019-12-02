import React,{useRef,useState,useEffect} from 'react';
import './Barrica.scss';
import BarricaMain from './Components/BarricaMain/BarricaMain';
import BarricaSec1 from './Components/BarricaSec1/BarricaSec1';
import BarricaSec2 from './Components/BarricaSec2/BarricaSec2';
import BarricaSec3 from './Components/BarricaSec3/BarricaSec3';
import BarricaSec4 from './Components/BarricaSec4/BarricaSec4';
import BarricaSec5 from './Components/BarricaSec5/BarricaSec5';
import BarricaSec6 from './Components/BarricaSec6/BarricaSec6';
import {Link} from 'react-router-dom';

const Barrica = ()=>{
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
    <div className="Barrica">
              <Link to={"/"}>
        <div className="ProyectMenu">
            <p>HOME</p>
        </div>
        </Link>
        {animationLoading &&
            <BarricaMain
            animated={animation}
            />
        }
       
            <div ref={horizontalScroll} className="Barrica-content">
            {animationEnd &&
            <>
                <BarricaSec1/>
                <BarricaSec2/>
                <BarricaSec3/>
                <BarricaSec4/>
                <BarricaSec5/>
                <BarricaSec6/>
            </>
            }
            </div>
    </div>
    )
};
export default Barrica;