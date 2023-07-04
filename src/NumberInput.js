import React, { useState } from "react";
import "./style.css";
const NumberInput = () => {
  const [numbers, setNumbers] = useState([]);
  const [maxTwoNumbers, setMaxTwoNumbers] = useState([]);
  const [sumNum, setSumNum] = useState(0);

  const handleInputChange = (event) => {
    const input = event.target.value;
    const numbersArr = input.split(",").map((num) => parseInt(num.trim()));
    setNumbers(numbersArr);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const sortedNumbers = [...numbers].sort((a, b) => b - a);
    const maxTwoNumbers = sortedNumbers.slice(0, 2);
    const maxSum = maxTwoNumbers.reduce((acc, curr) => acc + curr, 0);
    setMaxTwoNumbers(maxTwoNumbers);
    setSumNum(maxSum);
    // setNumbers([]);
  };
  return (
    <div className="app">
      <div className="leftPanel">
        <h3>Entered numbers are:</h3>
        {numbers.length > 0 ? 
          ( <ul>
            {numbers.map((num)=>(
              <li key={num}>
              {num}
              </li>)
            )}
          </ul>)
          : (
          <p>No numbers yet</p>
        )}
      </div>
      <div className="rightPanel">
        <div className="upper">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="down">
          {maxTwoNumbers.length > 0 ? (
            <p>
              Maximum sum of two numbers:({maxTwoNumbers[0]},{maxTwoNumbers[1]})
              is: {sumNum}
            </p>
          ) : (
            <p>No max numbers yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
