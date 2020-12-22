import React, { useEffect, useState } from "react";

export default function Count() {

    const [count, setCount]  = useState(0);
    // const [color, setColor]  = useState(null);

    useEffect(() => {
        document.title = `You clicked ${count} times`});
    


    return(
        
        <div>

            <p> u clicked {count}</p>
            <button onClick= { () =>setCount(prevState => prevState - 1)}>-</button>
            <button onClick={()=>setCount(prevState => prevState + 1)}>+</button>
        </div>
    )
}