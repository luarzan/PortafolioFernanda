import React from 'react';
import './BloomMain.scss';
import className from 'classnames';

const BloomMain = ({animated})=>{
    return(
        <div className={className("Bloom-cards-img",animated)}>
            <p>Bloom</p>
        </div>
    )
};

export default BloomMain