import React, { useState } from 'react';
import './Calculator.css';

function App() {
  const [calculation, setCalculation] = useState('');

  const handleButtonClick = (value) => {
    setCalculation((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setCalculation(eval(calculation).toString());
    } catch (error) {
      setCalculation('Error');
    }
  };
  const clearCalculation = () => {
    setCalculation('');
  };

  return (
      <div className="App">
        <div className="calculator">
          <div className="result">{calculation}</div>
          <div className="buttons">
            <button onClick={clearCalculation} className="button-div all-clear">C</button>
            <button onClick={() => handleButtonClick('/')} className="button-operator">÷</button>
            <button onClick={() => handleButtonClick('*')} className="button-operator">×</button>
            <button onClick={() => handleButtonClick('-')} className="button-operator">－</button>
            
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
            <button onClick={() => handleButtonClick('+')} className="button-operator">＋</button>
            
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
            <button onClick={calculateResult} className="button-equal">＝</button>
            
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
            
            <button onClick={() => handleButtonClick('0')} className="button-zero">0</button>
          </div>
        </div>
      </div>
    );
  }
  
export default App;