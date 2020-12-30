import React from "react"
 import {useParams} from "react-router-dom"
 import serviceData from "./servicesData"


function ServiceDetail(props) {
    const {serviceId} = useParams()
    const thisService = serviceData.find(service => service._id === serviceId)
    return (
        <div>
        <h1>Service Detail Page</h1>
        <p>{thisService.name} - ${thisService.price}</p>
        <p>{thisService.description}</p>
        </div>
    )
  
}
    
export default ServiceDetail;
