import React, {useState} from 'react'

function Count () {

    const [count, setCount] = useState(0)
    
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
        <div>
            <button onClick = {subtract}>-</button>

            <input type= 'text'
            aria-label= 'count'
            value = {count} />
            <button onClick = {add}>+</button>        
        </div>
        </section>
    )
}
export default Count;