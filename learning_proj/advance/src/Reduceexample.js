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
            
        }
     }
 }
