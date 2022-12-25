import React, {useState, useEffect, useRef} from "react"


function useWordGame(){
    const [text, setText] = useState("")
    const [words, setWords] = useState(0)
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [start, setStart] = useState(false)
    const textRef = useRef(null)


    useEffect(() => {
    if (timeRemaining > 0 && start) {
        setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000)
    }
    if(timeRemaining === 0) {
        setStart(false)
        wordCount()
    }
    }, [timeRemaining, start])



    function handleText(e) {
    const {value} = e.target
    setText(value)

    }

    function wordCount() {
    const value = document.getElementById("inputText").value
    const words = value.trim().split(" ")
    setWords(words.filter(word => word !== "").length)
    }

    function gameStart() {
    if (!start) {
        setStart(true)
        setWords(0)
        setTimeRemaining(10)
        setText("")
        textRef.current.disabled = false
        textRef.current.focus()
        }
    }
    return {text, words, timeRemaining, start, textRef, handleText, gameStart}
}

export default useWordGame

