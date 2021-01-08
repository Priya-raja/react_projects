import React from "react"
import "./App.css"

  const Design = ({children, size, ...props}) => {
    return (
      <div>
      <div className = {`${size}`} {...props} draggable="true">{children}</div>  
      </div>
    )
  }
function App() {
  return(
    <main>
      <div className="palettes">
      
      <div className="container">
        <h3>Drawing Palette</h3>
        
      </div>
      <div className="container">
      <h3>Design Objects Palette</h3>
       <Design  size = "image" >Image</Design>
       <Design  size = "text">Text</Design>
       <Design  size = "text">Price</Design>
       <Design  size = "text">Source code</Design>
       <Design  size = "text">Expiration date</Design>
       </div>
       </div>
       <div className="name"></div>    
    </main>
  )
}
export default App;