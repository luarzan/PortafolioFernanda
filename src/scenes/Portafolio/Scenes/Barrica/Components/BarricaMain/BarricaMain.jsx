import React from 'react';
import './BarricaMain.scss';
import className from 'classnames';

const BarricaMain = ({animated})=>{
    return(
        <div className={className("BarricaMain-cards-img",animated)}>
            <p>Barrica</p>
        </div>
    )
};

export default BarricaMain