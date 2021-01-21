import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';

/*

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

*/

const Reducefetch = () => {
  let [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setUser(json)
      })
  }, [])
  
  return (
    <section>
      <h2>Get User Data</h2>
      <div className="user">
        {user && <>
          User ID: {user.id} <br />
          User Title: {user.title}
        </>}
      </div>
    </section>
  )
}
export default Reducefetch;
