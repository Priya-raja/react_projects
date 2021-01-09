import React from "react"


function DragElements ({children, size, ...props }) {
  const dragover = e => {
    e.preventDefault ();
    e.stopPropagation ();
   }

   const dragstart = (e) => {
    // Add the target element's id to the data transfer object
    const target = e.target;
    e.dataTransfer.setData('palette_id', target.id)
    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
   }



    return (
      <div>
      <div 
       id = {props.id}
       className = {`${size}`} {...props}
       draggable="true"
       onDragStart = {dragstart}
       onDragOver = {dragover}
      >{children}
      
      </div>  
      </div>
    )
  }
  //on droppable
  
      /* <div className="palettes">
      <div className="container droppable"
        onDragOver= {dragover_handler}
        onDrop= {drop_handler}
      >
       
        <h3>Drawing Palette</h3>
        
      </div>
      <div className="container"
       
      >
      
       <Design  size = "image" onDragStart ={dragstart_handler}>Image</Design>
       <Design  size = "text">Text</Design>
       <Design  size = "text">Price</Design>
       <Design  size = "text">Source code</Design>
       <Design  size = "text">Expiration date</Design>
       </div>
       </div>
       <div className="name"></div> */
       

    
export default DragElements