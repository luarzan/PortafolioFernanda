import React,{useEffect,useState} from 'react';
import './MainPage.scss';
import Logo from '../../assets/imagenes/logo.png';
import TopBar from '../../Components/TopBar/TopBar';
import className from 'classnames';

const MainPage = ()=>{

    const [animation,setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, []);

    return(
        <div className="MainPage">
            <TopBar
                about
            />
            <div className={className("MainPage-logo",animation?'fadeIn':'')}>
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="MainPage-bottomBar">
                <span className="scroll-line"/>
                <div className="MainPage-bottomBar-scroll">
                    <p className="MainPage-bottomBar">Scroll</p>
                </div>
            </div>
        </div>
    )
};
export default MainPage;