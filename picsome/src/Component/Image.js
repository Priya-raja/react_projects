//Applications main logic goes here
import React, {useState} from "react"

function Image({className, img}) {
    const [hovered, setHovered] = useState()
    console.log(hovered)
    return (
        <div
             className={`${className} image-container`}
             onMouseEnter= {() => setHovered(true) }
             onMouseLeave ={() => setHovered(false)}
            >
            <img src={img.url} className="image-grid" alt="random iamges"/>

        </div>
    )


}
export default Image