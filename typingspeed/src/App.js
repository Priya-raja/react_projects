import React, { useState, useEffect } from 'react'

function App () {
  //Set the default value in textarea
  const [text, setText] = useState("")

  //set the time remaining to count
  const [timeRemaining, setTimeRemaining] = useState("5")

  function handleChange(e) {

    const {value} = e.target
    setText(value)
  }

  function calculateWordcount(text) {
     const wordArr = text.split(' ');
     
     return wordArr.filter(word => word!== 0).length

  }
  useEffect(() => {
    if(timeRemaining > 0) {
        setTimeout(() => {
            setTimeRemaining(time => time - 1)
        }, 1000)
    }
}, [timeRemaining])


  return(
    <div>
      <h1>How fast do you type?</h1>
      <textarea
      onChange= {handleChange}
      value= {text} />
      <h2> Time :{timeRemaining} </h2>
      <button onClick = { () => console.log(calculateWordcount(text))}>Start</button>
      <h2>Words</h2>
      
    </div>
  )
}

export default App;
