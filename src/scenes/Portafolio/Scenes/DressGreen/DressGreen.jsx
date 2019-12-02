import React,{useRef,useState,useEffect} from 'react';
import './DressGreen.scss';
import DressMain from './Components/DressMain/DressMain';
import DressSec1 from './Components/DressSec1/DressSec1';
import DressSec2 from './Components/DressSec2/DressSec2';
import DressSec3 from './Components/DressSec3/DressSec3';
import DressSec4 from './Components/DressSec4/DressSec4';
import {Link} from 'react-router-dom';


const DressGreen = ()=>{
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
    <div className="DressGreen">
        <Link to={"/"}>
        <div className="ProyectMenu">
            <p>HOME</p>
        </div>
        </Link>
        {animationLoading &&
            <DressMain
            animated={animation}
            />
        }
       
            <div ref={horizontalScroll} className="DressGreen-content">
            {animationEnd &&
            <>
                <DressSec1/>
                <DressSec2/>
                <DressSec3/>
                <DressSec4/>
            </>
            }
            </div>
    </div>
    )
};
export default DressGreen;