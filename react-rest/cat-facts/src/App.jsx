import { useState } from 'react';
import Pages from './Pages';
import './App.css';

function App() {
  const [showFacts, setShowFacts] = useState(false);
  const [size, setSize] = useState(5);

  const changeSize = (e) => {
    setSize(Number(e.target.value));
  };

  return (
    <div className="app">
      <label htmlFor="show">Facts per page:</label>
      <div className="select">
      <select name="show" onChange={changeSize}>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
      </div>
      { showFacts ? 
        <Pages size={size}/> : 
        <div className="initial-content">
          0 Facts Loaded
          <button className="load" onClick={ () => setShowFacts(true)}>Load Facts</button>
        </div>
      }
    </div>
  );
}

export default App;
