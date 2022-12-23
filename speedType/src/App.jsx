import React, {useState} from "react"
import './App.css'

function App() {
  const [text, setText] = useState("")

  function handleText(e) {
    const {value} = e.target
    setText(value)

  }

  console.log(text)
  return (
    <div className="main">
      <h1>How fast can you type?</h1>
      <textarea 
        value={text} 
        name="inputText" 
        onChange={handleText}
      />

      <h4>Time Remaining: 0</h4>
      <button>Start Game</button>
      <h2>Word Count: </h2>
    </div>
  )
}

export default App
