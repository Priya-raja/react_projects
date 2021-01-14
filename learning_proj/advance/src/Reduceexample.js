import React, {useState, useReducer} from 'react'


let array = ['1','2','3','4']
 let add = (x,y) => x + y

 let sum = array.reduce(add, 0)

 console.log(sum)

 const Reduceexample = () => {
     const [count, setCount] = useState(0)
     const add =() => {
         setCount(count + 1)
     }
     const subtract = () => {

        if (count > 0) {
            setCount(count - 1)
        }
     }
     return (
         <section>
             <h2>Counter: The most novel example I could come up with </h2>
             <div className="counter">
                 <button onClick={subtract}> - </button>
                 <div> {count}</div>
                 <button onClick= {add}> + </button>
                 
             </div>
         </section>
     )
 }
 export default Reduceexample
