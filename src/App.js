import React, { useState } from 'react'
import './style.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [total, setTotal] = useState(num1 + num2)
  const [chance, setChance] = useState()
  const [leadby, setLeadby] = useState(0)

  const leadbyy = num1 - num2

  function calculate() {
    const change = (num1 / total).toFixed(3)
    setTotal(num1 + num2)
    return <div>{setChance(change * 100)}</div>
  }

  return (
    <div className="App">
      <h1>Chance Calculator</h1>
      <p>no of votes for balen: {num1}</p>
      <p>no of votes for Keshav: {num2}</p>
      <div className="numberInputs">
        <input
          type="number"
          placeholder={0}
          onChange={(e) => setNum1(+e.target.value)}
        />
        <input
          type="number"
          placeholder={0}
          onChange={(e) => setNum2(+e.target.value)}
        />
      </div>
      <button onClick={calculate}>Calculate</button>
      <h2> {chance} </h2>
      <div>
        <div>
          <img
            src="https://tiktokersbiography.com/wp-content/uploads/2022/04/Balen-Shah-bio.jpg"
            alt="Balen"
            width="300px"
            height="200px"
          />
          <h1>Balendra Shah</h1>
          <p>
            <strong>No.of Votes: </strong>
            {num1}
          </p>
          <p>
            <strong>Lead by: </strong> {num1 - num2}
          </p>
          <p>
            <strong>Win Chances: </strong> {chance}%
          </p>
        </div>
        <div>
          <img
            src="https://assets-cdn.kathmandupost.com/uploads/source/news/2022/politics/2-1651629836.jpg"
            alt="Keshab"
            width="300px"
            height="200px"
          />
          <h1>Keshav Sthapit </h1>
          <p>
            <strong>No.of Votes: </strong>
            {num2}
          </p>
          <p>
            <strong>Lead by: </strong> {num2 - num1}
          </p>
          <p>
            <strong>Win Chances: </strong> {100 - chance}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
