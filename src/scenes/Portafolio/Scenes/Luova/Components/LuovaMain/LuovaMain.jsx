import React from 'react';
import './LuovaMain.scss';
import className from 'classnames';

const LuovaMain = ({animated})=>{
    return(
        <div className={className("Luova-cards-img",animated)}>
            <p>Luova</p>
        </div>
    )
};

export default LuovaMain