import { useState } from 'react';
import './App.css';

function App() {
// Calculate billAmount, tipPercentage, people
const [billAmount, setBillAmount] = useState(14.00);
const [tipPercentage, setTipPercentage] = useState(15);
const [people, setPeople] = useState(1);

// Caclulate tip amount, total bill, and amount per person
const tipAmount = billAmount * (tipPercentage / 100);
const totalBill = Number(billAmount) + Number(tipAmount);
const amountPerPerson = totalBill / people;

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <div className="input-group">
        <label htmlFor="bill">Bill Amount</label>
      <input
        id="tip"
        placeholder='Bill Amount'
        type='number'
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
    />
  </div>
      <div className="input-group">
        <label htmlFor="tip">Tip Percentage</label>
      <input 
        id="tip"
        placeholder='Tip Percentage'
        type='number'
        value={tipPercentage}
        onChange={(e) => setTipPercentage(Number(e.target.value))}
    />
  </div>
      <div className="input-group">
        <label htmlFor="people">Number of People</label>
      <input 
        id="people"
        placeholder='Number of People'
        type='number'
        min="1"
        value={people}
        onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))}
    />
  </div>

      <div className="results">
        {/* Use .toFixed(2) to round to two decimal places */}
        <p>Bill Amount: ${billAmount.toFixed(2)}</p>
        <p>Tip Amount: ${tipAmount.toFixed(2)} ({tipPercentage}%)</p>
        <p>Total Bill: ${totalBill.toFixed(2)}</p>
        <p>Split (per person): ${amountPerPerson.toFixed(2)}</p>
      </div>

      </div>
  );
}

export default App;
