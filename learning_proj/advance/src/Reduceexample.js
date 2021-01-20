import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

function useCounter() {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'INCREMENT': {
        return { ...state, count: state.count + 1 }
      }
      case 'DECREMENT': {
        return { ...state, count: state.count - 1 }
      }
      default: {
        return state
      }
    }
  }, {
    count: 0
  })
  
  return [state, dispatch]
}

const Reduceexample = () => {
  const [state, dispatch] = useCounter()
  
  let { count } = state
  
  const add = () => {
    dispatch({ type: 'INCREMENT' })
  }
  
  const subtract = () => {
    if (count > 0) {
      dispatch({ type: 'DECREMENT' })
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