import React,{useRef,useState,useEffect} from 'react';
import './Luova.scss';
import LuovaMain from './Components/LuovaMain/LuovaMain';
import LuovaSec1 from './Components/LuovaSec1/LuovaSec1';
import LuovaSec2 from './Components/LuovaSec2/LuovaSec2';
import LuovaSec3 from './Components/LuovaSec3/LuovaSec3';
import LuovaSec4 from './Components/LuovaSec4/LuovaSec4';
import LuovaSec5 from './Components/LuovaSec5/LuovaSec5';
import LuovaSec6 from './Components/LuovaSec6/LuovaSec6';
import {Link} from 'react-router-dom';


const Luova = ()=>{
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
    <div className="Luova">
              <Link to={"/"}>
        <div className="ProyectMenu">
            <p>HOME</p>
        </div>
        </Link>
        {animationLoading &&
            <LuovaMain
            animated={animation}
            />
        }
       
            <div ref={horizontalScroll} className="Luova-content">
            {animationEnd &&
            <>
                <LuovaSec1/>
                <LuovaSec2/>
                <LuovaSec3/>
                <LuovaSec4/>
                <LuovaSec5/>
                <LuovaSec6/>
            </>
            }
            </div>
    </div>
    )
};
export default Luova;