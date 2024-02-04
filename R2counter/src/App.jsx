import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const Increment = () =>{
    setCounter(++counter);
    console.log(counter);
    
  }

  const Decrement = () =>{
    setCounter(--counter);
   console.log((counter));
  }

  return (
    <>


      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>


      <h1> Made by ❤️ Bhavesh Singh</h1>
      <button id="decrement" onClick={Decrement}> Decrement  </button>
      <button id="increment" onClick={Increment}> Increment  </button>
      <br />
      <button>Value = {counter}</button>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


    </>
  )
}

export default App
