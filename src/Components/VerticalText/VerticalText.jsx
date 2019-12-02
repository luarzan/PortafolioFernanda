import React,{useLayoutEffect,useState} from 'react';
import './VerticalText.scss';
import classNames from 'classnames';

const VerticalText =({text,customPosition})=>{

    const [animationInfiniteRollUpHandler, setAnimationInfiniteRollUpHandler] = useState({transform:`translate3d(${0}px,${0}px,${0}px`});
    const [counter,setCounter] = useState(0);

            useLayoutEffect(()=>{
                setTimeout(()=>{
                    setCounter(counter > -1800?counter - 1:0);
                    setAnimationInfiniteRollUpHandler({transform:`rotate(180deg) translate3d(${0}px,${counter}px,${0}px`});
                },20)
           
            },[counter])
           
            
    return(
        <div className={classNames("VerticalText",customPosition?"customPosition":'')} style={animationInfiniteRollUpHandler}>
            <div className="VerticalText-firstGroup">
                <div className="VerticalText-firstGroup-word">
                    <span className="VerticalText-firstGroup-text">{text}</span>
                </div>
                <div className="VerticalText-firstGroup-word">
                    <span className="VerticalText-firstGroup-text">{text}</span>
                </div>
            </div>
            <div className="VerticalText-secondGroup">
                <div className="VerticalText-secondGroup-word">
                    <span className="VerticalText-secondGroup-text">{text}</span>
                </div>
                <div className="VerticalText-secondGroup-word">
                    <span className="VerticalText-secondGroup-text">{text}</span>
                </div>
            </div>
        </div>
    )
};

export default VerticalText;