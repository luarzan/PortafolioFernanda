import React,{useState,useCallback} from 'react';
import './Credits.scss';

const Credits = ({onSelect,open,text})=>{


    return(
        <div className="Credits">
                {open &&
                <ul className="Credits-list animated fadeInDown">
                     
                    {text.map((text,i)=>{
                        return(
                            <>
                            <li className="Credits-list-item">{text}</li>
                            </>
                            )
                        })
                    }                   
                </ul>
                }
                <div onClick={onSelect} className="Credits-title">
                <p>CRÉDITOS</p>
                </div>
        </div>
    )
};
export default Credits;