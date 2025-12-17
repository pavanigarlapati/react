import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    if (num1 === "" || num2 === "") return;

    const a = Number(num1);
    const b = Number(num2);
    let result;

    if (operation === "add") {
      result = a + b;
    } else if (operation === "subtract") {
      result = a - b;
    } else if (operation === "multiply") {
      result = a * b;
    }

    // Append result (do NOT replace old ones)
    setResults([...results, result]);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <button onClick={handleCalculate}>Perform Action</button>

      <div>
        <h4>Results:</h4>
        {results.map((res, index) => (
          <p key={index}>{res}</p>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
