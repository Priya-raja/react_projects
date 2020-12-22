import React, { useState } from "react";

export default function Count() {

    const [count, setCount]  = useState(0);


    return(

        <div>
            {count}
            <button onClick= { () =>setCount(prevState => prevState - 1)}>-</button>
            <button onClick={()=>setCount(prevState => prevState + 1)}>+</button>
        </div>
    )
}