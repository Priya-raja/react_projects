//Applications main logic goes here
import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"


function Image({className, img}) {
    const [hovered, setHovered] = useState()
    const {toggleFavorite} = useContext(Context)
   
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div
             className={`${className} image-container`}
             onMouseEnter= {() => setHovered(true) }
             onMouseLeave ={() => setHovered(false)}
            >
            <img src={img.url} className="image-grid" alt="random iamges"/>
            {heartIcon()}
            {cartIcon}

        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image