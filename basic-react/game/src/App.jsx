import './App.css';
import Input from './Input';
import logo from './questionMark.png';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Guess Game
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div className="app-body">
        <div className="text-box">
          <span>Please</span>
          <span> guess</span>
          <span> a</span>
          <span> 5-letter</span>
          <span> word</span>
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
