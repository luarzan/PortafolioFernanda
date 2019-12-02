import React from 'react';
import './DressMain.scss';
import className from 'classnames';

const DressMain = ({animated})=>{
    return(
        <div className={className("DressMain-cards-img",animated)}>
            <p>Dress Green</p>
        </div>
    )
};

export default DressMain