import React, {useState, useEffect, useRef} from "react"
import './App.css'
import useWordGame from "./hooks/useWordGame"

function App() {
  const {text, words, timeRemaining, start, textRef, handleText, gameStart} = useWordGame()
  
  return (
    <div className="main">
      <h1 className="title">How fast can you type?</h1>
      <p>(Type whatever you would like. Pick a song, a poem, or a quote. Test your skills.)</p>
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
        <div className="wordCountContainer">
        <h2>Word Count:</h2>
        <span className="wordCount">{words}</span>
        </div>
      
    </div>
  )
}

export default App
