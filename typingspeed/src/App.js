import React, { useState, useEffect, useRef } from 'react'

function App() {
  const STARTING_TIME = 5;
  //Set the default value in textarea
  const [text, setText] = useState("")

  //set the time remaining to count
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)

  //settime running
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  //Count the number of words
  const [wordCount, setWordCount] = useState(0)

  const textBoxRef = useRef(null)
  function handleChange(e) {
    const { value } = e.target
    setText(value)
  }

  function calculateWordcount(text) {
    const wordArr = text.split(' ');
    return wordArr.filter(word => word !== 0).length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    textBoxRef.current.disabled = false //as we have set thetextbox disabled
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordcount(text))
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea
        ref= {textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning} />

      <h2> Time: {timeRemaining} </h2>

      <button
        onClick={startGame}
        disabled={isTimeRunning} >
        Start</button>

      <h2>Words: {wordCount}</h2>
    </div>
  )
}

export default App;
