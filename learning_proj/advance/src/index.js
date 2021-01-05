import React from 'react';
import ReactDOM from 'react-dom';

// const reactElement = <div className="fish">Heellllooooo</div>

const Button = ({ children }) => {
    return <button>{children}</button>
}

const domElement = document.getElementById('root')

ReactDOM.render(
    <div>
      <Button>
        + Add
      </Button>
      <Button>
        Subtract -
      </Button>
      <Button children="MULTIPLY *****" />
    </div>, domElement)
    
   