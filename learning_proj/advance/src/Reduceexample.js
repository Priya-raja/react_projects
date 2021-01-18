import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';

let initialState = { count: 0, cake: true }

let actions = [
  { type: 'ADD', by: 2 },
  { type: 'MINUS', by: 4 },
  { type: 'ADD', by: 10 },
  { type: 'EAT_CAKE' }
]

function reducer(state, action) {
  switch(action.type) {
    case 'ADD': {
      return { ...state, count: state.count + action.by }
    }
    case 'MINUS': {
      return { ...state, count: state.count - action.by }
    }
    case 'EAT_CAKE': {
      return { ...state, cake: false }
    }
    default: {
      return state
    }
  }
}

console.log(actions.reduce(reducer, initialState))

const Reduceexample = () => {
  const [count, setCount] = useState(0)
  
  const add = () => {
    setCount(count + 1)
  }
  
  const subtract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  
  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <div>{count}</div>
        <button onClick={add}>+</button>
      </div>
    </section>
  )
}
export default Reduceexample;