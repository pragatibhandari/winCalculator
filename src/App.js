import React, { useState } from 'react'
import './style.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [total, setTotal] = useState(num1 + num2)
  const [chance, setChance] = useState()

  function calculate() {
    setTotal(num1 + num2)
    const change = num1 / total

    return <div>{setChance(change * 100)}</div>
  }

  return (
    <div className="App">
      <h1>Chance Calculator</h1>
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
            <strong>No.of Votes: </strong>50
          </p>
          <p>
            <strong>Lead by: </strong> +50
          </p>
          <p>
            <strong>Win Chances: </strong> 50%
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
            <strong>No.of Votes: </strong>50
          </p>
          <p>
            <strong>Lead by: </strong> +50
          </p>
          <p>
            <strong>Win Chances: </strong> 50%
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
