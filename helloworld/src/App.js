import React, {useState} from "react";
import Tweet from "./Tweet";


function App() {

    const [users, setUsers] = useState([
        { name: 'Arya', message: "Hi there" },
        { name: 'Raja', message: "Hey" },
        { name: 'Priya', message:'Hey beautiful'}
    ]);
    
    return (
        <div className="app">
            {users.map(user => (
                <Tweet name={user.name} message={user.message}/>
                
                ))}  
        </div>               
    );
}
    

export default App;