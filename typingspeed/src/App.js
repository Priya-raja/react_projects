import React, { useState } from 'react'

function App () {
  const [text, setText] = useState("")

  function handleChange(e) {

    const {value} = e.target
    setText(value)
  }

  function calculateWordcount(text) {
     const wordArr = text.split(' ');
     
     return wordArr.filter(word => word!== 0).length

  }

  return(
    <div>
      <h1>How fast do you type?</h1>
      <textarea
      onChange= {handleChange}
      value= {text} />
      <h2> Time </h2>
      <button onClick = { () => console.log(calculateWordcount(text))}>Start</button>
      <h2>Words</h2>
      
    </div>
  )
}

export default App;
