import {useState} from 'react'

function HooksCounter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <center>
        <h1>{count}</h1>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </center>
    </div>
  )
}

export default HooksCounter
