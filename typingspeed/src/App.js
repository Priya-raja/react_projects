import React, { useState } from 'react'

function App () {
  const [text, setText] = useState("")

  function handleChange(e) {

    const {value} = e.target
    setText(value)
  }

  console.log(text)

  return(
    <div>
      <h1>How fast do you type?</h1>
      <textarea
      onChange= {handleChange}
      value= {text} />
      <h2> Time </h2>
      <button>Start</button>
      <h2>Words</h2>
      
    </div>
  )
}

export default App;
