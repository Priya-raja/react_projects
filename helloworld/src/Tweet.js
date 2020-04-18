import React from 'react';
import "./App.css";

function Tweet({ name, message }) {
    return (
        <div className = "tweet"> 
            <h3>{name}</h3>
            <p>{message} </p>
            <h2> Show number of like </h2> 
            </div>
        );

}

export default Tweet;