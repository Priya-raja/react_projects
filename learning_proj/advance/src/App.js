import React from 'react'


const Badge = ({children, color, ...props}) => {
    return <span className = {`badge ${color}`} {...props}>{children}</span>
}
    
function App () {

    return (
        <section>

         <h1>Check out these badges</h1>

      <Badge color="green" onClick ={() =>{
          console.log("I am clicked")
      }}>Success</Badge> This is operational. <br />
      <Badge color="red">Removed</Badge> This is critical. <br />
      <Badge color="yellow">Warning</Badge> This is a warning. <br />
      <Badge color="blue">Beta</Badge> This is in progress. <br />

        </section>
    )
}
export default App

