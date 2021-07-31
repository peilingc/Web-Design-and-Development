import { Children } from 'react';
import './CatFacts.css';

function CatFacts( {facts, start, tempSize} ) {
    let indexEnd;
    
    //slice returns a copy of an array selected from start to end (end not included) 
    const formattedFacts = facts.slice(start, start+tempSize).map( (fact, index) => (<li key={fact} index={index}>{fact}</li>));
    const count = Children.count(formattedFacts);
    indexEnd = start+count;

    return (
        <div className="cat-facts">
            {indexEnd? <div>Showing Facts {start+1} - {indexEnd}</div> : null}
            <ul>
                { formattedFacts }
            </ul>
        </div>
    );
    
}

export default CatFacts;