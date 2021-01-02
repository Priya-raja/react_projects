import React, {useContext} from "react"
import Image from "../Component/Image"
import {getClass} from "../utils"
import {Context} from "../Context"
import "../App.css"

function Photos() {
 const {allPhotos} = useContext(Context)
 const imageElements = allPhotos.map((item,i) => (
     <Image key={item.id} img={item} className={getClass(i)} />
 ))

    return(
        <div>
            <main className="photos">
                {imageElements}
            </main>
            
        </div>
      
        
    )
}

export default Photos;