import {useState} from 'react'

function HooksArray() {
  const [items, setItems] = useState([])

  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ])
  }

  return (
    <div>
      <center>
        <button onClick={addItems} type="button">
          AddItems
        </button>
        <ul>
          {items.map(eachItem => (
            <li key={eachItem.id}>{eachItem.value}</li>
          ))}
        </ul>
      </center>
    </div>
  )
}

export default HooksArray
