import React,{useState,useCallback} from 'react';
import Credits from '../../../../../../../Components/Credits/Credits';
import './SportyCredits.scss';

const SportyCredits =()=>{

    const [openCredit,setOpenCredit] = useState(false)  
    const openCredits = useCallback(()=>{
        setOpenCredit(true)
    },[]);

    const credits = [
        "Dirección Creativa",
        "Fernanda Ortiz","Camila Monjarás","Sofía Roque", 
        "Fotografía","Fernanda Ortiz","Camila Monjarás",
        "2018"
    ]
    return(
        <div className="SportyCredits">
                <Credits
                    text={credits}
                    onSelect={openCredits}
                    open={openCredit}
                />
        </div>
    )
};

export default SportyCredits;