import React from "react"
import "./App.css"

  const Design = ({children, size, ...props}) => {
    return (
      <div className = {`${size}`} {...props}>{children}</div>  
    )
  }
function App() {
  return(
    <main>
      <div className="container"></div>
      <div className="container">
        
       <Design size = "image">Image</Design>
       <Design size = "text">Text</Design>
       <Design size = "text">Price</Design>
       <Design size = "text">Source code</Design>
       <Design size = "text">Expiration date</Design>
       
       </div>
    
    </main>
    

  )
}
export default App;