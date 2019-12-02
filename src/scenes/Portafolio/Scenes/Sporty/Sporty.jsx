import  React,{useRef,useState,useEffect} from 'react';
import './Sporty.scss';
import SportyMain from './Components/SportyMain/SportyMain';
import className from 'classnames';
import SportyFirstSection from './Components/SportyFirstSection/SportyFirstSection';
import SportySecondSection from './Components/SportySecondSection/SportySecondSection';
import SportyThirdSection from './Components/SportyThirdSection/SportyThirdSection';
import SportyCredits from './Components/SportyThirdSection/SportyCredits/SportyCredits';
import {Link} from 'react-router-dom';

const Sporty = ()=>{
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
    <div className="Sporty">
              <Link to={"/"}>
        <div className="ProyectMenu">
            <p>HOME</p>
        </div>
        </Link>
        {animationLoading &&
            <SportyMain
            animated={animation}
            />
        }
       
            <div ref={horizontalScroll} className="Sporty-content">
            {animationEnd &&
            <>
                <SportyFirstSection/>
                <SportySecondSection/>
                <SportyThirdSection/>
                <SportyCredits/>
            </>
            }
            </div>
    </div>
    )
};
export default Sporty;