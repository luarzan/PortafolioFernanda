import React,{useRef,useState,useEffect} from 'react';
import './Bloom.scss';
import BloomMain from './Components/BloomMain/BloomMain';
import BloomSec1 from './Components/BloomSec1/BloomSec1';
import BloomSec2 from './Components/BloomSec2/BloomSec2';
import BloomSec3 from './Components/BloomSec3/BloomSec3';
import BloomSec4 from './Components/BloomSec4/BloomSec4';
import BloomSec5 from './Components/BloomSec5/BloomSec5';
import {Link} from 'react-router-dom';

const Bloom = ()=>{
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
    <div className="Bloom">
              <Link to={"/"}>
        <div className="ProyectMenu">
            <p>HOME</p>
        </div>
        </Link>
        {animationLoading &&
            <BloomMain
            animated={animation}
            />
        }
       
            <div ref={horizontalScroll} className="Bloom-content">
            {animationEnd &&
            <>
                <BloomSec1/>
                <BloomSec2/>
                <BloomSec3/>
                <BloomSec4/>
                <BloomSec5/>
            </>
            }
            </div>
    </div>
    )
};
export default Bloom;