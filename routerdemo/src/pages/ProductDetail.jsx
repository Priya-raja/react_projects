import React from 'react'
import {useParams} from 'react-router-dom';

function ProductDetail() {
    const params = useParams();
    console.log(params.productId);
    return (
        <div>
           <h1>This is a Product Detail</h1>
           <p>{params.productId}</p>
            
        </div>
    )
}

export default ProductDetail
