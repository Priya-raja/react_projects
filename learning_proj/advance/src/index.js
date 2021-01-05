import React from 'react';
import ReactDOM from 'react-dom';

// const reactElement = <div className="fish">Heellllooooo</div>

const Button = ({ children, onClick }) => {
    return <button onClick={onClick}> {children}</button>
}

const domElement = document.getElementById('root')

ReactDOM.render(
    <div>
      <Button onClick = {() => {
    console.log("I was clicked")
}}>
        + Add
      </Button>
      <Button>
        Subtract -
      </Button>
      <Button children="MULTIPLY *****" />
    </div>, domElement)
    
   