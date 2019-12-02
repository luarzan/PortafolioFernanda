import React from 'react';
import './TopBar.scss';
import {Link} from "react-router-dom";
import className from "classnames";

const TopBar = ({main,about,projects})=>{
    return(
    <div className={className("TopBar", (projects)?"light":"")}>
        <Link to={projects?"/":"/projects"}>
        <p className="TopBar-proyectos">{projects?'Main':'Projects'}</p>
        </Link>
        <Link to= {main ? "/":about || projects ?"/about":"/"}>
        <p className="TopBar-about">{main ? 'Main':about?'About':projects?'About':''}</p>
        </Link>
    </div>
    )
};

export default TopBar;