import React from "react";
/*import Tweet from "./Tweet"; 
import Joke from "./Joke"; */
import products from "./Products";
import Productschool from "./Productschool";

function App() {

    const productComponent = products.map(item => <Productschool key={item.id} products={item} />)

    return (

        < div >
            {productComponent}

        </div>


    );
    

    /*return (
        <div>
            <Joke punchline="Hey I'm good" />
            <Joke question="where is Paris?" punchline="Its is in France"/>
            <Joke question="Whats good about switz?" punchline="It's falg is a plus"/>
            <Joke question="How old are u?" punchline="I'm 30"/>
        
</div>

    ); */

    /*const [users, setUsers] = useState([
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
    );*/
}
    

export default App;