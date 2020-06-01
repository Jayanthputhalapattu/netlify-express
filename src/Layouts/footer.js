import React from "react"
import SocialMedia from "./SocialMedia"
import {Container,Col} from "reactstrap"
const Footer = () =>{
   return(
    <Container fluid tag="footer" className="text-center bg-info text-white fixed-bottom p-2">
        <SocialMedia />
        <Col>
        
        </Col>
   </Container>
   )
}
export default Footer