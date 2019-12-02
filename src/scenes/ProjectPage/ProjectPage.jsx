import React,{useState,useEffect,useRef} from 'react';
import './ProjectPage.scss';
import Lush from '../../assets/imagenes/demo/lushLogo.jpg';
import Sport from '../../assets/imagenes/demo/sportLogo.jpg';
import Barrica from '../../assets/imagenes/demo/barricaLogo.jpg';
import Bloom from '../../assets/imagenes/demo/bloomLogo.jpg';
import Luova from '../../assets/imagenes/demo/luovaLogo.jpg';
import Dress from '../../assets/imagenes/demo/dressLogo.jpg';
import Diego from '../../assets/imagenes/demo/diegoLogo.jpg';
import TopBar from '../../Components/TopBar/TopBar';
import {ReactComponent as RightArrow} from '../../assets/imagenes/icons/rightArrow.svg';
import className from 'classnames';
import {Link} from 'react-router-dom';


const ProjectPage = ()=>{
    const horizontalScroll = useRef(null);
    window.onscroll=function() {
        var scroll = window.scrollY;
        horizontalScroll.current.style.left = `-${scroll}px`;
    }

    const lush = {backgroundImage:`url(${Lush})`}
    const sport = {backgroundImage:`url(${Sport})`}
    const barrica = {backgroundImage:`url(${Barrica})`}
    const bloom = {backgroundImage:`url(${Bloom})`}
    const luova = {backgroundImage:`url(${Luova})`}
    const dress = {backgroundImage:`url(${Dress})`}
    const diego = {backgroundImage:`url(${Diego})`}

    const [animation,setAnimation] = useState('');
    const [animationArrow,setAnimationArrow] = useState(false);

    useEffect(() => {
        setAnimation('animated bounceInRight delay-1s slow');
    }, []);
    useEffect(() => {
        setAnimationArrow(true);
        setTimeout(()=>{
            setAnimationArrow(false)
        },3000);
    }, []);



    return(
        <div className="ProjectPage">
            <TopBar
                projects
            />
            <div className={className("RightArrow",animationArrow?'fadeIn':'')}>
                <RightArrow/>
            </div>
            <div ref={horizontalScroll} className={className("ProjectPage-cards",animation)}>
                <div className="ProjectPage-cardsWrapper">
                    <Link to={"/lush"}>
                        <div className="ProjectPage-cards-img" style={lush}>
                            <p>Lush</p>
                        </div>
                    </Link>
                    <Link to={"/sporty"}>
                    <div className="ProjectPage-cards-img" style={sport}>
                        <p>Sporty<br/>Chic</p>
                    </div>
                    </Link>
                    <Link to={"/barrica"}>
                    <div className="ProjectPage-cards-img" style={barrica}>
                        <p>Barrica</p>
                    </div>
                    </Link>
                    <Link to={"/bloom"}>
                    <div className="ProjectPage-cards-img" style={bloom}>
                        <p>Bloom</p>
                    </div>
                    </Link>
                    <Link to={"/luova"}>
                    <div className="ProjectPage-cards-img" style={luova}>
                        <p>Luova</p>
                    </div>
                    </Link>
                    <Link to={"/dress-green"}>
                    <div className="ProjectPage-cards-img" style={dress}>
                        <p>Dress Green</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default ProjectPage;