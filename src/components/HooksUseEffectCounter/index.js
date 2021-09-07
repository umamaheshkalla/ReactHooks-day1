import {useState, useEffect} from 'react'

function HooksUseEffectCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You Clicked ${count} times`
  })

  return (
    <div>
      <center>
        <button onClick={() => setCount(count + 1)} type="button">
          Clicked-{count}
        </button>
      </center>
    </div>
  )
}

export default HooksUseEffectCounter
