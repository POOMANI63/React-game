import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Result';

const secretNum = Math.floor(Math.random() * 10) + 1;

function App() {
  const [terms, setTerm] = useState("");

  const handle = (e) => {
    setTerm(e.target.value); 
  };

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess the number between 1 to 10</label>
      </div>
      <input 
        id="term"
        type="text"
        name="input"
        onChange={handle}
      />
      <Result secretNum={secretNum} term={terms} />
    </div>
  );
}

export default App;
