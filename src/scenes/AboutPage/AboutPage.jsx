import React,{useEffect,useState} from 'react';
import './AboutPage.scss';
import TopBar from '../../Components/TopBar/TopBar';
import Logo from '../../assets/imagenes/logo.png';
import className from 'classnames';

const AboutPage = ()=>{

    const [animation,setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, []);

    return(
        <div className="AboutPage">
                <TopBar
                    main
                />
                <div className="AboutPage-infoWrapper">
                    <div className={className("AboutPage-left",animation?"fadeIn":'')}>
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className={className("AboutPage-right",animation?"fadeIn":'')}>
                        <p>
                        Mi nombre es Fernanda Ortiz. Estudio Mercadotecnia y Publicidad en Moda en la Universidad Jannette Klein y actualmente vivo en la Ciudad de México.

                            Me encantan los perros y soy gran aficionada de la moda, la belleza el diseño,
                            Branding y
                            Styling


                            Los programas de diseño que ocupo para desarrollar mis proyectos son:

                            Adobe Illustrator,
                            Adobe Photoshop,
                            Adobe Indesign y 
                            Sketch 

                        </p><br/><br/>
                        <p>
                            Email:<br/>
                            fernandaortizlop@gmail.com<br/><br/>
                            Behance:<br/>
                            https://www.behance.net/fernandaor6657
                        </p>
                    </div>
                </div>
        </div>
    )
};
export default AboutPage;