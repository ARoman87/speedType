import React, {useState, useEffect, useRef} from "react"
import './App.css'
import useWordGame from "./hooks/useWordGame"

function App() {
  const {text, words, timeRemaining, start, textRef, handleText, gameStart} = useWordGame()
  
  return (
    <div className="main">
      <h1>How fast can you type?</h1>
      <textarea 
        value={text} 
        name="inputText" 
        onChange={handleText}
        id="inputText"
        disabled={!start}
        ref={textRef}
      />

      <h4>Time Remaining: {timeRemaining}</h4>
      <button 
        onClick={gameStart}
        disabled={start}
        >
          Start Game
        </button>
      <h2>Word Count: {words}</h2>
    </div>
  )
}

export default App
