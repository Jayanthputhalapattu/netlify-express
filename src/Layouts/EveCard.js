import React from "react"
import { Card, CardBody, CardImg } from "reactstrap"


const EveCard = ({details, imgUrl, title}) =>{
    return(
        <Card style={{height:450,width:350}} className="Cardq">
            <CardImg style={{height:300,border:"none"}} src={imgUrl}>
                
            </CardImg>
            <CardBody>
                  <h2>{title}</h2>
                  <p>{details}</p>
            </CardBody>
            
        </Card>
    )
}

export default EveCard