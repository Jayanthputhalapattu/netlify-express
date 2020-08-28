import React from "react"
import SocialMedia from "./SocialMedia"
import {Container} from "reactstrap"
const Footer = () =>{
   return(
    <Container fluid  className="foot " style={{background:"#192A56",color:"white"}}>
        <SocialMedia />
   </Container>
   )
}
export default Footer