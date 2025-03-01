import { useState } from 'react';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(14.00);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [people, setPeople] = useState(1);

  // Calculate tip amount, total bill, and amount per person
  const tipAmount = billAmount * tipPercentage / 100;
  const totalBill = Number(billAmount) + Number(tipAmount);
  const amountPerPerson = totalBill / people;

  // Preset tip percentages
  const presetTips = [10, 15, 18, 20, 25];

  // Functions to handle increment and decrement of tip percentage
  const incrementTip = () => setTipPercentage(prev => prev + 1);
  const decrementTip = () => setTipPercentage(prev => Math.max(0, prev - 1));

  // Functions to handle increment and decrement of number of people
  const incrementPeople = () => setPeople(prev => prev + 1);
  const decrementPeople = () => setPeople(prev => Math.max(1, prev - 1));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Tip Calculator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Bill</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="number"
                  className="w-full py-2 pl-8 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={billAmount}
                  onChange={(e) => setBillAmount(Number(e.target.value) || 0)}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tip</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {presetTips.map(tip => (
                  <button
                    key={tip}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      tipPercentage === tip 
                        ? 'bg-blue-100 text-blue-800 border border-blue-300' 
                        : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200'
                    }`}
                    onClick={() => setTipPercentage(tip)}
                  >
                    {tip}%
                  </button>
                ))}
                <button
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    !presetTips.includes(tipPercentage)
                      ? 'bg-blue-100 text-blue-800 border border-blue-300' 
                      : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200'
                  }`}
                  onClick={() => {}}
                >
                  Custom
                </button>
              </div>
              <div className="relative flex items-center">
                <button
                  className="px-3 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded-l-md hover:bg-gray-200"
                  onClick={decrementTip}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-full py-2 px-3 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={tipPercentage}
                  onChange={(e) => setTipPercentage(Number(e.target.value) || 0)}
                />
                <button
                  className="px-3 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded-r-md hover:bg-gray-200"
                  onClick={incrementTip}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
              <div className="relative flex items-center">
                <button
                  className="px-3 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded-l-md hover:bg-gray-200"
                  onClick={decrementPeople}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  className="w-full py-2 px-3 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={people}
                  onChange={(e) => setPeople(Math.max(1, Number(e.target.value) || 1))}
                />
                <button
                  className="px-3 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded-r-md hover:bg-gray-200"
                  onClick={incrementPeople}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex items-center">
            <div className="bg-gray-50 p-6 rounded-md w-full h-full flex flex-col justify-center">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 text-lg">Tip amount</span>
                <span className="text-2xl font-medium">${tipAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 text-lg">Total bill</span>
                <span className="text-2xl font-medium">${totalBill.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <span className="text-gray-600 text-lg">Amount per person</span>
                <span className="text-2xl font-medium">${amountPerPerson.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;