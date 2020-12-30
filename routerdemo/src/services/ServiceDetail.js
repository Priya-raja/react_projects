import React from "react"
 import {useParams, useHistory} from "react-router-dom"
 import serviceData from "./servicesData"


function ServiceDetail(props) {
    const {serviceId} = useParams()
    const history = useHistory()
    const thisService = serviceData.find(service => service._id === serviceId)

    function handleClick() {
        console.log("Submitting...")
        setTimeout(() => {
            history.push("/services")
        }, 2000)
        history.go(-1)
    }
    return (
        <div>
        <h1>Service Detail Page</h1>
        <p>{thisService.name} - ${thisService.price}</p>
        <p>{thisService.description}</p>
        <button onClick={handleClick}>Go back to all services</button>
        </div>
    )
  
}
    
export default ServiceDetail;
