import React from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './components/Todo';
import Tododata from './components/Tododata';

function App() {

    const todocomponent = Tododata.map(item => <Todo key={item.id} item={item} />)
    
        return (
        <div>
            
                {todocomponent}


            


        </div>
    );

}

export default App;
