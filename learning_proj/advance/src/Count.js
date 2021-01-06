import React, {useState} from 'react'

function Count () {

    const [count, setCount] = useState(0)
    const [someColor, setSomeColor] = useState(10)

    const add = () => {

        setCount(count + 1)
    }

    const subtract = () => {
        if(count > 0) {

        setCount(count - 1)

        }

    }

    return (
       
       <section>
        <h1> Count the number of times clicked</h1>
        <div style= {{color: `hsl(${someColor}, 100%, 50%)`}}> Hi there!</div>
        <div>
            <button onClick = {subtract}>-</button>

            <input type= 'number'
            aria-label= 'count'
            // controlled component
            value = {count} 
            onChange= {(event) => {
               setCount(parseInt(event.target.value)) //if not parsed then it just adds a string of 1
                setSomeColor(count  * 10)
            }}/> 
            <button onClick = {add}>+</button>        
        </div>
        </section>
    )
}
export default Count;