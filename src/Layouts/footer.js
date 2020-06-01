import React from "react"
import SocialMedia from "./SocialMedia"
import {Container,Col} from "reactstrap"
const Footer = () =>{
   return(
    <Container fluid tag="footer" className=" bg-info text-white  p-1">
        <SocialMedia />
        <Col>
        
        </Col>
   </Container>
   )
}
export default Footer