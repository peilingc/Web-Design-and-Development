import { useState } from 'react';
import judgeGuess from './judgeGuess';
import './input.css';

const Input = () => {
    
    const [ tempWord, setTempWord ] = useState(''); 
    const [ message, setMessage] = useState('');
    const updateText = (e) => setTempWord(e.target.value);
    
    const doGuess = () => {
        const result = judgeGuess(tempWord);
        setMessage(result);
        setTempWord('');
    };
    
    return (
      <div className="app-input">
        Let me guess: <input onChange={updateText} value={tempWord}/>
        <button onClick={doGuess}>Go!</button>
        <div className="message">{message}</div>
      </div>
    );

};
  
export default Input;