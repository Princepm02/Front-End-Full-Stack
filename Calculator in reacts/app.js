App.js
import './App.css';
import { useState } from "react";
function App() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);
    return (
        <>
            <h1>Calculator</h1>
            <input type='number' value={firstNumber} onChange={(e) =>
                setFirstNumber(parseInt(e.target.value))} />
            <input type='number' value={secondNumber} onChange={(e) =>
                setSecondNumber(parseInt(e.target.value))} />
            <button onClick={() => setResult(firstNumber +
                secondNumber)}>Add</button>
            <button onClick={() => setResult(firstNumber -
                secondNumber)}>Subtract</button>
            <button onClick={() => setResult(firstNumber *
                secondNumber)}>Multiply</button>
            <button onClick={() => setResult(firstNumber /
                secondNumber)}>Divide</button>
            <h2>Result: {result}</h2>
        </>
    );
}
export default App;
