import React from 'react';
import './SportyMain.scss';

import className from 'classnames';

const SportyMain = ({animated})=>{
    return(
        <div className={className("SportyMain-cards-img",animated)}>
            <p>Sporty Chic</p>
        </div>
    )
};

export default SportyMain