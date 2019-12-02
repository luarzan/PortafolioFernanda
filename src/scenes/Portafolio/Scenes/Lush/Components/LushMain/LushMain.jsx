import React from 'react';
import './LushMain.scss';
import className from 'classnames';

const LushMain = ({animated})=>{
    return(
        <div className={className("LushMain-cards-img",animated)}>
            <p>Lush</p>
        </div>
    )
};

export default LushMain