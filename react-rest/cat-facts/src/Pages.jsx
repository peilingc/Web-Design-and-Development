import { fetchCats } from './services';
import { useState, useEffect } from 'react';
import CatFacts from './CatFacts';
import './Pages.css';

function Pages({size}) {
    const [facts, setFacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [start, setStart] = useState(0);
    const [message, setMessage] = useState('');
    let tempSize = size;
    let disablePrevious = !start;
    let end = start+tempSize;
    let disableNext = !(end < 72);
    
    useEffect( () => {
        setIsLoading(true);
        fetchCats()
        .then( (facts) => {
            setFacts(facts);
            setIsLoading(false);
        })
        .catch( err => {
            setMessage(err);
        })
    },[]);

    const doPrevious = () => {
        let newStart;
        if ((start - tempSize) < 0 ){
            newStart = 0;
        }
        else ( newStart = start - tempSize);
        setStart(newStart);
    }

    const doNext = () => {
        setStart(start+tempSize);
    }

    return (
        <div className="pages">
            { isLoading ? <div>Loading...<div className="loader"></div></div>: null }
            <CatFacts facts={facts} start={start} tempSize={tempSize}/>
            <div>
                <button className="previous" disabled={disablePrevious} onClick={doPrevious}>Previous &lt;</button>
                <button className="next" disabled={disableNext} onClick={doNext}>Next &gt;</button>
            </div>
            <div className="error-message">{message}</div>
        </div>
    );
};

export default Pages;
